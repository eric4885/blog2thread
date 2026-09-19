import { getCloudflareContext } from "@opennextjs/cloudflare";
import { NextRequest, NextResponse } from "next/server";

type KvLike = {
  get(key: string): Promise<string | null>;
  put(
    key: string,
    value: string,
    options?: { expirationTtl?: number }
  ): Promise<void>;
};

const AID_COOKIE = "b2t_aid";
const DAY_TTL = 86_400;
const BURST_TTL = 120;

/** Per-device hard cap (cookie). */
const GEN_AID_DAILY = 5;
/** Shared NAT pool — higher than aid so offices are not wiped by one user. */
const GEN_IP_DAILY = 25;
const FETCH_AID_DAILY = 10;
const FETCH_IP_DAILY = 30;
/** Burst: max requests per IP in a ~2 minute bucket. */
const BURST_PER_WINDOW = 4;

const memoryCounters = new Map<string, { value: number; expiresAt: number }>();

async function getKv(): Promise<KvLike | null> {
  try {
    const { env } = await getCloudflareContext({ async: true });
    const kv = (env as { BLOG2THREAD_DATA?: KvLike }).BLOG2THREAD_DATA;
    return kv ?? null;
  } catch {
    return null;
  }
}

function utcDate(): string {
  return new Date().toISOString().slice(0, 10);
}

function burstBucket(): string {
  // yyyymmddHHMM — pairs with TTL 120s
  return new Date().toISOString().replace(/[-:T]/g, "").slice(0, 12);
}

function newAid(): string {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }
  const bytes = crypto.getRandomValues(new Uint8Array(16));
  return Array.from(bytes, (b) => b.toString(16).padStart(2, "0")).join("");
}

export function getClientIp(headers: Headers): string {
  const cf = headers.get("cf-connecting-ip");
  if (cf?.trim()) return cf.trim();
  const forwardedFor = headers.get("x-forwarded-for");
  if (forwardedFor) return forwardedFor.split(",")[0]?.trim() || "unknown";
  return headers.get("x-real-ip") || "unknown";
}

function readAid(req: NextRequest): { aid: string; isNew: boolean } {
  const existing = req.cookies.get(AID_COOKIE)?.value?.trim();
  if (existing && /^[a-zA-Z0-9_-]{8,64}$/.test(existing)) {
    return { aid: existing, isNew: false };
  }
  return { aid: newAid(), isNew: true };
}

function attachAidCookie(res: NextResponse, aid: string, isNew: boolean) {
  if (!isNew) return;
  res.cookies.set(AID_COOKIE, aid, {
    path: "/",
    maxAge: 31_536_000,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    httpOnly: true
  });
}

async function kvGet(key: string): Promise<number> {
  const now = Date.now();
  const kv = await getKv();
  if (kv) {
    const raw = await kv.get(key);
    const n = raw ? Number.parseInt(raw, 10) : 0;
    return Number.isFinite(n) && n > 0 ? n : 0;
  }
  const row = memoryCounters.get(key);
  if (!row || row.expiresAt <= now) {
    memoryCounters.delete(key);
    return 0;
  }
  return row.value;
}

async function kvPut(key: string, value: number, ttlSeconds: number) {
  const kv = await getKv();
  if (kv) {
    await kv.put(key, String(value), { expirationTtl: ttlSeconds });
    return;
  }
  memoryCounters.set(key, {
    value,
    expiresAt: Date.now() + ttlSeconds * 1000
  });
}

export type LimitOk = {
  ok: true;
  aid: string;
  aidIsNew: boolean;
  /** Call after successful generate, or rollback on failure. */
  commit: () => Promise<void>;
  rollback: () => Promise<void>;
};

export type LimitBlocked = {
  ok: false;
  aid: string;
  aidIsNew: boolean;
  response: NextResponse;
};

function limitResponse(aid: string, aidIsNew: boolean, retryAfter: number) {
  const res = NextResponse.json(
    {
      error:
        "Free limit reached for today. Try again tomorrow or save your email to get more drafts.",
      code: "DAILY_LIMIT"
    },
    {
      status: 429,
      headers: { "Retry-After": String(retryAfter) }
    }
  );
  attachAidCookie(res, aid, aidIsNew);
  return res;
}

function burstResponse(aid: string, aidIsNew: boolean) {
  const res = NextResponse.json(
    {
      error: "Too many requests. Please wait a minute and try again.",
      code: "BURST_LIMIT"
    },
    { status: 429, headers: { "Retry-After": "60" } }
  );
  attachAidCookie(res, aid, aidIsNew);
  return res;
}

/** Light burst guard for subscribe / save-thread (no daily caps). */
export async function guardBurst(
  req: NextRequest
): Promise<LimitOk | LimitBlocked> {
  const ip = getClientIp(req.headers);
  const { aid, isNew: aidIsNew } = readAid(req);
  const burstKey = `burst:ip:${ip}:${burstBucket()}`;
  const burstVal = await kvGet(burstKey);

  if (burstVal >= BURST_PER_WINDOW) {
    return { ok: false, aid, aidIsNew, response: burstResponse(aid, aidIsNew) };
  }

  await kvPut(burstKey, burstVal + 1, BURST_TTL);

  return {
    ok: true,
    aid,
    aidIsNew,
    commit: async () => {},
    rollback: async () => {}
  };
}

/**
 * Reserve generate quota before calling the model.
 * IP pool is looser than cookie hard-cap to reduce NAT false positives.
 */
export async function reserveGenerateLimit(
  req: NextRequest
): Promise<LimitOk | LimitBlocked> {
  const ip = getClientIp(req.headers);
  const { aid, isNew: aidIsNew } = readAid(req);
  const date = utcDate();
  const burstKey = `burst:ip:${ip}:${burstBucket()}`;
  const ipKey = `lim:gen:${date}:ip:${ip}`;
  const aidKey = `lim:gen:${date}:aid:${aid}`;

  const [burstVal, ipVal, aidVal] = await Promise.all([
    kvGet(burstKey),
    kvGet(ipKey),
    kvGet(aidKey)
  ]);

  if (burstVal >= BURST_PER_WINDOW) {
    return { ok: false, aid, aidIsNew, response: burstResponse(aid, aidIsNew) };
  }
  if (ipVal >= GEN_IP_DAILY || aidVal >= GEN_AID_DAILY) {
    return {
      ok: false,
      aid,
      aidIsNew,
      response: limitResponse(aid, aidIsNew, DAY_TTL)
    };
  }

  const nextBurst = burstVal + 1;
  const nextIp = ipVal + 1;
  const nextAid = aidVal + 1;

  await Promise.all([
    kvPut(burstKey, nextBurst, BURST_TTL),
    kvPut(ipKey, nextIp, DAY_TTL),
    kvPut(aidKey, nextAid, DAY_TTL)
  ]);

  return {
    ok: true,
    aid,
    aidIsNew,
    commit: async () => {
      /* already reserved */
    },
    rollback: async () => {
      await Promise.all([
        kvPut(ipKey, ipVal, DAY_TTL),
        kvPut(aidKey, aidVal, DAY_TTL)
      ]);
    }
  };
}

/** Check fetch limits before scrape; call recordFetchSuccess after a good extract. */
export async function checkFetchLimit(
  req: NextRequest
): Promise<LimitOk | LimitBlocked> {
  const ip = getClientIp(req.headers);
  const { aid, isNew: aidIsNew } = readAid(req);
  const date = utcDate();
  const burstKey = `burst:ip:${ip}:${burstBucket()}`;
  const ipKey = `lim:fetch:${date}:ip:${ip}`;
  const aidKey = `lim:fetch:${date}:aid:${aid}`;

  const [burstVal, ipVal, aidVal] = await Promise.all([
    kvGet(burstKey),
    kvGet(ipKey),
    kvGet(aidKey)
  ]);

  if (burstVal >= BURST_PER_WINDOW) {
    return { ok: false, aid, aidIsNew, response: burstResponse(aid, aidIsNew) };
  }
  if (ipVal >= FETCH_IP_DAILY || aidVal >= FETCH_AID_DAILY) {
    return {
      ok: false,
      aid,
      aidIsNew,
      response: limitResponse(aid, aidIsNew, DAY_TTL)
    };
  }

  return {
    ok: true,
    aid,
    aidIsNew,
    commit: async () => {
      await Promise.all([
        kvPut(burstKey, burstVal + 1, BURST_TTL),
        kvPut(ipKey, ipVal + 1, DAY_TTL),
        kvPut(aidKey, aidVal + 1, DAY_TTL)
      ]);
    },
    rollback: async () => {
      /* fetch only increments on success */
    }
  };
}

export function withAidCookie(
  res: NextResponse,
  aid: string,
  aidIsNew: boolean
): NextResponse {
  attachAidCookie(res, aid, aidIsNew);
  return res;
}

/** @deprecated Prefer reserveGenerateLimit — kept for any stray imports. */
export function checkRateLimit(_ip: string): boolean {
  return true;
}
