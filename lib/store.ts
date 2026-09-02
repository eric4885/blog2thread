import { getCloudflareContext } from "@opennextjs/cloudflare";

type KvLike = {
  get(key: string): Promise<string | null>;
  put(key: string, value: string): Promise<void>;
};

export type SavedThread = {
  id: string;
  text: string;
  mode: "thread" | "tweet" | "topic";
  createdAt: string;
  preview: string;
};

export type RecentItem = {
  id: string;
  preview: string;
  createdAt: string;
  mode: SavedThread["mode"];
};

const RECENT_KEY = "recent:threads";
const RECENT_LIMIT = 24;

/** In-memory fallback for local `next dev` or missing KV binding. */
const memory = {
  threads: new Map<string, SavedThread>(),
  recent: [] as RecentItem[],
  emails: new Set<string>()
};

async function getKv(): Promise<KvLike | null> {
  try {
    const { env } = await getCloudflareContext({ async: true });
    const kv = (env as { BLOG2THREAD_DATA?: KvLike }).BLOG2THREAD_DATA;
    return kv ?? null;
  } catch {
    return null;
  }
}

function makeId(): string {
  const bytes = crypto.getRandomValues(new Uint8Array(8));
  return Array.from(bytes, (b) => b.toString(16).padStart(2, "0")).join("");
}

function previewFromText(text: string): string {
  const first = text.split(/\n+/).map((l) => l.trim()).find(Boolean) || text;
  return first.slice(0, 120);
}

export async function saveThread(input: {
  text: string;
  mode: SavedThread["mode"];
}): Promise<SavedThread> {
  const text = input.text.trim();
  if (!text) throw new Error("Empty thread");

  const record: SavedThread = {
    id: makeId(),
    text,
    mode: input.mode,
    createdAt: new Date().toISOString(),
    preview: previewFromText(text)
  };

  const kv = await getKv();
  if (kv) {
    await kv.put(`thread:${record.id}`, JSON.stringify(record));
    const recentRaw = await kv.get(RECENT_KEY);
    const recent: RecentItem[] = recentRaw ? JSON.parse(recentRaw) : [];
    const next = [
      {
        id: record.id,
        preview: record.preview,
        createdAt: record.createdAt,
        mode: record.mode
      },
      ...recent.filter((r) => r.id !== record.id)
    ].slice(0, RECENT_LIMIT);
    await kv.put(RECENT_KEY, JSON.stringify(next));
  } else {
    memory.threads.set(record.id, record);
    memory.recent = [
      {
        id: record.id,
        preview: record.preview,
        createdAt: record.createdAt,
        mode: record.mode
      },
      ...memory.recent.filter((r) => r.id !== record.id)
    ].slice(0, RECENT_LIMIT);
  }

  return record;
}

export async function getThread(id: string): Promise<SavedThread | null> {
  if (!/^[a-f0-9]{16}$/i.test(id)) return null;

  const kv = await getKv();
  if (kv) {
    const raw = await kv.get(`thread:${id}`);
    return raw ? (JSON.parse(raw) as SavedThread) : null;
  }
  return memory.threads.get(id) ?? null;
}

export async function listRecentThreads(limit = 12): Promise<RecentItem[]> {
  const kv = await getKv();
  if (kv) {
    const raw = await kv.get(RECENT_KEY);
    const recent: RecentItem[] = raw ? JSON.parse(raw) : [];
    return recent.slice(0, limit);
  }
  return memory.recent.slice(0, limit);
}

export async function saveEmail(email: string): Promise<void> {
  const normalized = email.trim().toLowerCase();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalized)) {
    throw new Error("Invalid email");
  }

  const kv = await getKv();
  if (kv) {
    await kv.put(
      `email:${normalized}`,
      JSON.stringify({ email: normalized, createdAt: new Date().toISOString() })
    );
  } else {
    memory.emails.add(normalized);
  }
}
