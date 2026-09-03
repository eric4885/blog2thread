/** Guide URL slugs only — no React, safe for sitemap build. */
export const GUIDE_SLUGS = [
  "how-to-make-a-thread-on-twitter",
  "twitter-thread-hooks-that-work",
  "repurpose-one-blog-post-for-x",
  "how-many-tweets-in-a-thread",
  "thread-vs-single-tweet",
  "edit-ai-thread-before-you-post",
  "build-in-public-thread-playbook",
  "twitter-thread-cta-that-gets-clicks"
] as const;

export type GuideSlug = (typeof GUIDE_SLUGS)[number];
