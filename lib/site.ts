export const SITE_URL = "https://blog2thread.com";
export const SITE_NAME = "Blog2Thread";
export const CURRENT_YEAR = new Date().getFullYear();

/** GA4 measurement ID (public client-side). Override with NEXT_PUBLIC_GA_MEASUREMENT_ID if needed. */
export const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim() || "G-4DYCKC45NE";

export const NAV_LINKS = [
  { href: "/", label: "Thread Generator" },
  { href: "/blog-to-tweet", label: "Blog to Tweet" },
  { href: "/ai-thread-generator", label: "AI Thread Generator" },
  { href: "/guides/how-to-make-a-thread-on-twitter", label: "How to Make a Thread" },
  { href: "/tools/thread-to-pdf", label: "Thread to PDF" }
] as const;
