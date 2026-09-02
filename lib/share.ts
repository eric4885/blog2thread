import { SITE_URL } from "@/lib/site";
import { splitThreadLines } from "@/lib/export";

/** Prefill X intent with first tweet + share link + brand credit (fits ~280). */
export function buildPostToXUrl(threadText: string, shareUrl: string): string {
  const first =
    splitThreadLines(threadText)[0]?.trim() ||
    threadText.trim().slice(0, 180);
  const credit = `via blog2thread.com`;
  let text = `${first}\n\n${shareUrl}\n${credit}`;
  if (text.length > 270) {
    const budget = 270 - shareUrl.length - credit.length - 4;
    const clipped = first.slice(0, Math.max(40, budget)) + "…";
    text = `${clipped}\n\n${shareUrl}\n${credit}`;
  }
  return `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
}

export function threadPublicPath(id: string): string {
  return `/thread/${id}/`;
}

export function threadPublicUrl(id: string): string {
  return `${SITE_URL}${threadPublicPath(id)}`;
}
