import { CURRENT_YEAR } from "@/lib/site";

export type GuideMeta = {
  slug: string;
  title: string;
  description: string;
};

export const guideMetas: GuideMeta[] = [
  {
    slug: "how-to-make-a-thread-on-twitter",
    title: `How to Make a Thread on Twitter: Complete Guide (${CURRENT_YEAR})`,
    description:
      "Learn how to create engaging Twitter/X threads that get engagement. Step-by-step guide with tips, examples, and a free AI thread generator."
  },
  {
    slug: "twitter-thread-hooks-that-work",
    title: "Twitter Thread Hooks That Actually Stop the Scroll",
    description:
      "Five hook patterns for X threads — with weak vs strong examples. No templates that sound like every other AI thread."
  },
  {
    slug: "repurpose-one-blog-post-for-x",
    title: "How to Repurpose One Blog Post Into a Week on X",
    description:
      "A practical calendar: one long-form post → thread, single tweet, quote, and follow-up — without sounding like you posted the same thing four times."
  },
  {
    slug: "how-many-tweets-in-a-thread",
    title: "How Many Tweets Should a Thread Be?",
    description:
      "Short answer: fewer than you think. When to stop at 7, when to go to 12, and when to split into two threads."
  },
  {
    slug: "thread-vs-single-tweet",
    title: "Thread vs Single Tweet: When to Use Each",
    description:
      "Not every blog post needs a thread. A simple decision guide for founders and marketers — with examples of what belongs in one tweet vs ten."
  },
  {
    slug: "edit-ai-thread-before-you-post",
    title: "How to Edit an AI Thread So It Does Not Sound Like a Bot",
    description:
      "A five-minute pass for AI-drafted threads: what to delete, what to rewrite, and what to leave alone. Works for Blog2Thread or any generator."
  },
  {
    slug: "build-in-public-thread-playbook",
    title: "Build-in-Public Threads That Do Not Feel Cringe",
    description:
      "What to share after you ship, what to leave out, and how to write founder update threads people actually finish reading."
  },
  {
    slug: "twitter-thread-cta-that-gets-clicks",
    title: "Thread CTAs That Get Clicks (Without Feeling Salesy)",
    description:
      "How to close a Twitter thread for traffic, follows, or replies — with weak vs strong examples for each goal."
  }
];

export function getAllGuideSlugs(): string[] {
  return guideMetas.map((m) => m.slug);
}

export const guideNavItems = guideMetas.map((m) => ({
  href: `/guides/${m.slug}/`,
  label: m.title.replace(/:\s*Complete Guide.*$|\(\d{4}\)/g, "").trim()
}));
