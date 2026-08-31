const WINDOW_MS = 60_000;
const MAX_REQUESTS = 12;
const ipRequestLog = new Map<string, number[]>();

export function getClientIp(headers: Headers): string {
  const forwardedFor = headers.get("x-forwarded-for");
  if (forwardedFor) return forwardedFor.split(",")[0]?.trim() || "unknown";
  return headers.get("x-real-ip") || "unknown";
}

export function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const requests = ipRequestLog.get(ip) || [];
  const recent = requests.filter((ts) => now - ts < WINDOW_MS);
  if (recent.length >= MAX_REQUESTS) {
    ipRequestLog.set(ip, recent);
    return false;
  }
  recent.push(now);
  ipRequestLog.set(ip, recent);
  return true;
}
