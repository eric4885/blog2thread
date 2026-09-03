import type { GuideEntry } from "@/lib/guides/types";

const loaders: Record<string, () => Promise<{ guide: GuideEntry }>> = {
  "how-to-make-a-thread-on-twitter": () =>
    import("./content/how-to-make-a-thread-on-twitter"),
  "twitter-thread-hooks-that-work": () =>
    import("./content/twitter-thread-hooks-that-work"),
  "repurpose-one-blog-post-for-x": () =>
    import("./content/repurpose-one-blog-post-for-x"),
  "how-many-tweets-in-a-thread": () =>
    import("./content/how-many-tweets-in-a-thread"),
  "thread-vs-single-tweet": () => import("./content/thread-vs-single-tweet"),
  "edit-ai-thread-before-you-post": () =>
    import("./content/edit-ai-thread-before-you-post"),
  "build-in-public-thread-playbook": () =>
    import("./content/build-in-public-thread-playbook"),
  "twitter-thread-cta-that-gets-clicks": () =>
    import("./content/twitter-thread-cta-that-gets-clicks")
};

export async function loadGuide(slug: string): Promise<GuideEntry | undefined> {
  const loader = loaders[slug];
  if (!loader) return undefined;
  const mod = await loader();
  return mod.guide;
}
