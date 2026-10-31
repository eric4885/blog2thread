import Link from "next/link";
import { GuideLayout } from "@/components/guide-layout";
import type { GuideEntry } from "@/lib/guides/types";

const meta = {
  slug: "repurpose-one-blog-post-for-x",
  title: "Repurpose One Blog Post for X",
  description:
    "A practical calendar: one long-form post → thread, single tweet, quote, and follow-up — without sounding like you posted the same thing four times.",
  howToSteps: [
    {
      name: "Pull three angles from the blog",
      text: "Find a result story, a how-to, and a contrarian line before you open any tool."
    },
    {
      name: "Ship the main thread on Monday",
      text: "Argue the spine claim in 8–11 tweets; link the full post after the value lands."
    },
    {
      name: "Post one standalone tweet mid-week",
      text: "Use the sharpest single insight that works without context."
    },
    {
      name: "Quote or screenshot yourself on Friday",
      text: "Add one new line of context instead of rewriting the whole thread."
    }
  ]
};

export const guide: GuideEntry = {
  ...meta,
  Content: function RepurposeBlogContent() {
    return (
      <GuideLayout
        guide={meta}
        intro="You already wrote the hard part. The blog exists. The mistake is treating distribution as one copy-paste job. Here is a week-long plan that reuses the same source without spamming your timeline — plus a before/after so you can see what “repurpose” actually looks like."
      >
        <h2>Why this workflow exists</h2>
        <p>
          Searchers who want to{" "}
          <strong>repurpose blog content for Twitter / X</strong> usually already
          publish weekly. They do not need another essay on “content recycling.”
          They need a calendar that turns one long post into several assets that
          do not feel identical.
        </p>

        <h2>Start with angles, not formats</h2>
        <p>
          One blog usually contains three usable angles: a result story, a
          tactical how-to, and a contrarian take buried in paragraph six. Pull
          those out before you open any tool. Formats (thread, tweet, quote)
          come second.
        </p>
        <p>
          If you only need the skeleton before drafting tweets, use a{" "}
          <Link
            href="/guides/twitter-thread-outline-from-blog-post/"
            className="font-semibold text-brand hover:underline"
          >
            thread outline from a blog post
          </Link>{" "}
          first, then expand.
        </p>

        <h2>Example: blog paragraph → thread slice</h2>
        <p>
          <strong>Original (from a ~1,800-word post):</strong>
        </p>
        <blockquote>
          “We stopped rewriting every blog by hand. Paste the URL, cut three
          filler tweets, rewrite the hook, and ship the same day. The Monday
          block dropped from about 90 minutes to under 30.”
        </blockquote>
        <p>
          <strong>Thread slice (not a full dump of the article):</strong>
        </p>
        <ol>
          <li>
            Used to: 90 min to turn a blog into a thread. Now: ~12 min draft +
            15 min edit. Same post. Different process ↓
          </li>
          <li>
            The old way failed because we summarized the whole SEO intro.
            Readers bounce when tweet one sounds like a table of contents.
          </li>
          <li>
            New rule: one spine claim per thread. Everything else is support or
            it gets deleted.
          </li>
          <li>
            Tooling only helps after you know the claim. Paste URL → draft →
            human hook. Never publish raw AI.
          </li>
        </ol>
        <p>
          Notice what disappeared: meta descriptions, soft CTAs, and “in this
          article we will cover.” The thread argues; the blog still holds the
          full proof.
        </p>

        <h2>Monday: the main thread</h2>
        <p>
          Ship the spine argument — the single claim the post exists to prove.
          This is your longest asset for the week. Hook with the result or the
          contrarian line, not the title. Patterns:{" "}
          <Link
            href="/guides/twitter-thread-hooks-that-work/"
            className="font-semibold text-brand hover:underline"
          >
            Twitter thread hooks that work
          </Link>
          .
        </p>
        <p>
          If the blog is 1,500+ words, aim for 8–11 tweets. Link the full post
          in the last tweet or a reply, after the thread already delivered value.
        </p>

        <h2>Wednesday: one standalone tweet</h2>
        <p>
          Pull the sharpest single insight — one sentence that makes sense without
          context. This is where{" "}
          <Link
            href="/blog-to-tweet/"
            className="font-semibold text-brand hover:underline"
          >
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

        <h2>Common mistakes</h2>
        <ul>
          <li>
            <strong>Copy-paste the blog title as tweet one</strong> — titles
            describe; hooks create tension.
          </li>
          <li>
            <strong>Post the blog link four days in a row</strong> with different
            emoji — readers notice the spam pattern.
          </li>
          <li>
            <strong>Thread every sentence</strong> — that is a PDF with line
            breaks, not an X thread.
          </li>
          <li>
            <strong>Skip the edit</strong> — auto-post without reading fills the
            feed with filler tweets.
          </li>
        </ul>

        <h2>Time budget (realistic)</h2>
        <ul>
          <li>Monday thread: 25–40 min (draft + edit)</li>
          <li>Wednesday tweet: 5–10 min</li>
          <li>Friday quote: 3 min</li>
        </ul>
        <p>
          Drafting from the blog URL with{" "}
          <Link href="/" className="font-semibold text-brand hover:underline">
            Blog2Thread
          </Link>{" "}
          cuts the Monday block roughly in half. Editing still matters — you are
          choosing what to keep, not publishing raw output. Full publish steps:{" "}
          <Link
            href="/guides/how-to-make-a-thread-on-twitter/"
            className="font-semibold text-brand hover:underline"
          >
            how to make a thread on Twitter
          </Link>
          .
        </p>

        <h2>FAQ</h2>
        <h3>How do I repurpose a blog post for Twitter without sounding robotic?</h3>
        <p>
          Extract one claim, drop the SEO preamble, write a human hook, and keep
          one idea per tweet. AI can draft; you still own tweet one and the cuts.
        </p>
        <h3>How many X posts can one blog support?</h3>
        <p>
          For most writers: one main thread, one standalone tweet, one
          quote/screenshot in the same week — then a second angle two weeks later
          if the post still has unused proof.
        </p>
        <h3>Should newsletter writers use the same calendar?</h3>
        <p>
          Yes, with a twist — issue archives often already have a “spine” in the
          subject line. See{" "}
          <Link
            href="/guides/blog-to-thread-for-newsletter-writers/"
            className="font-semibold text-brand hover:underline"
          >
            blog to thread for newsletter writers
          </Link>
          .
        </p>
      </GuideLayout>
    );
  }
};
