import Link from "next/link";
import { GuideLayout } from "@/components/guide-layout";
import type { GuideEntry } from "@/lib/guides/types";

export const guide: GuideEntry = {
  slug: "repurpose-one-blog-post-for-x",
  title: "How to Repurpose One Blog Post Into a Week on X",
  description:
    "A practical calendar: one long-form post → thread, single tweet, quote, and follow-up — without sounding like you posted the same thing four times.",
  Content: function RepurposeBlogContent() {
    return (
      <GuideLayout
        guide={guide}
        intro="You already wrote the hard part. The blog exists. The mistake is treating distribution as one copy-paste job. Here is a week-long plan that reuses the same source without spamming your timeline."
      >
        <h2>Start with angles, not formats</h2>
        <p>
          One blog usually contains three usable angles: a result story, a
          tactical how-to, and a contrarian take buried in paragraph six. Pull
          those out before you open any tool. Formats (thread, tweet, quote)
          come second.
        </p>

        <h2>Monday: the main thread</h2>
        <p>
          Ship the spine argument — the single claim the post exists to prove.
          This is your longest asset for the week. Hook with the result or the
          contrarian line, not the title.
        </p>
        <p>
          If the blog is 1,500+ words, aim for 8–11 tweets. Link the full post
          in the last tweet or a reply, after the thread already delivered value.
        </p>

        <h2>Wednesday: one standalone tweet</h2>
        <p>
          Pull the sharpest single insight — one sentence that makes sense without
          context. This is where{" "}
          <Link href="/blog-to-tweet/" className="font-semibold text-brand hover:underline">
            blog-to-tweet
          </Link>{" "}
          helps if you do not want to reread the whole draft.
        </p>
        <p>
          Do not link the blog here unless the tweet is genuinely incomplete
          without it. Let this post earn replies on its own.
        </p>

        <h2>Friday: quote-tweet yourself or add a screenshot</h2>
        <p>
          Quote Monday&apos;s thread with one new line: a number you left out, a
          reader question you got, or “if you only read one tweet, make it #4.”
          Fresh context on old work beats a second full rewrite.
        </p>

        <h2>Optional second thread (two weeks later)</h2>
        <p>
          Same blog, different spine. Example: first thread was “how we did it.”
          Second thread is “what we would do differently.” Same source, different
          promise — that is the bar for reposting without annoying people.
        </p>

        <h2>What not to do</h2>
        <ul>
          <li>Post the blog link four days in a row with different emoji.</li>
          <li>Thread the entire article sentence by sentence.</li>
          <li>Auto-post without reading — readers can smell filler tweets.</li>
        </ul>

        <h2>Time budget (realistic)</h2>
        <ul>
          <li>Monday thread: 25–40 min (draft + edit)</li>
          <li>Wednesday tweet: 5–10 min</li>
          <li>Friday quote: 3 min</li>
        </ul>
        <p>
          Drafting the thread from the blog URL cuts the Monday block roughly in
          half. Editing still matters — you are choosing what to keep, not
          publishing raw output.
        </p>
      </GuideLayout>
    );
  }
};
