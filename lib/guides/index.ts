import type { GuideEntry } from "@/lib/guides/types";
import { guide as buildInPublic } from "./content/build-in-public-thread-playbook";
import { guide as editAi } from "./content/edit-ai-thread-before-you-post";
import { guide as howManyTweets } from "./content/how-many-tweets-in-a-thread";
import { guide as howToMake } from "./content/how-to-make-a-thread-on-twitter";
import { guide as repurpose } from "./content/repurpose-one-blog-post-for-x";
import { guide as hooks } from "./content/twitter-thread-hooks-that-work";
import { guide as cta } from "./content/twitter-thread-cta-that-gets-clicks";
import { guide as threadVsTweet } from "./content/thread-vs-single-tweet";

export const guides: GuideEntry[] = [
  howToMake,
  hooks,
  repurpose,
  howManyTweets,
  threadVsTweet,
  editAi,
  buildInPublic,
  cta
];

export function getGuideBySlug(slug: string): GuideEntry | undefined {
  return guides.find((g) => g.slug === slug);
}

export function getAllGuideSlugs(): string[] {
  return guides.map((g) => g.slug);
}

/** Short labels for nav / footer */
export const guideNavItems = guides.map((g) => ({
  href: `/guides/${g.slug}/`,
  label: g.title.replace(/:\s*Complete Guide.*$|\(\d{4}\)/g, "").trim()
}));
