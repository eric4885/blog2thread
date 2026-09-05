import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "@/lib/site";

const OG_IMAGE = {
  url: "/og-image.png",
  width: 1200,
  height: 630,
  alt: "blog → thread — Twitter Thread Generator"
};

export function pageMetadata({
  title,
  description,
  path,
  ogTitle
}: {
  title: string;
  description: string;
  path: string;
  ogTitle?: string;
}): Metadata {
  const normalized = path.endsWith("/") || path === "/" ? path : `${path}/`;
  const url = normalized === "/" ? `${SITE_URL}/` : `${SITE_URL}${normalized}`;
  const socialTitle = ogTitle || title;

  // Homepage uses absolute title (already includes brand intent). Inner pages
  // get `| Blog2Thread` from the root layout template — keep `title` short
  // so the final SERP string stays near ~60 characters.
  const isHome = normalized === "/";

  return {
    title: isHome ? { absolute: title } : title,
    description,
    alternates: { canonical: normalized },
    openGraph: {
      type: "website",
      url,
      siteName: SITE_NAME,
      title: socialTitle,
      description,
      images: [OG_IMAGE]
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [OG_IMAGE.url]
    }
  };
}

/** Absolute document title (no template suffix). Keep ≤ ~60 chars for SERP. */
export const HOME_TITLE = "Twitter Thread Generator — Blog to X Threads";
export const HOME_DESCRIPTION =
  "Convert any blog post into an engaging Twitter/X thread with AI. Paste your article URL or text, get a ready-to-post thread instantly. No sign-up required.";
