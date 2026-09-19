import Link from "next/link";
import { GuideLayout } from "@/components/guide-layout";
import { ToolFitTable } from "@/components/tool-fit-table";
import { CURRENT_YEAR } from "@/lib/site";
import type { GuideEntry } from "@/lib/guides/types";

const meta = {
  slug: "how-to-make-a-thread-on-twitter",
  title: "How to Make a Thread on Twitter",
  description:
    "How to make, create, write, and post a Twitter/X thread step by step — spine, hook, length, CTA, plus a free AI draft if you already have a blog.",
  howToSteps: [
    {
      name: "Pick one spine idea",
      text: "Decide the single claim your thread exists to prove."
    },
    {
      name: "Write a scroll-stopping first tweet",
      text: "Open with a result, contrast, or curiosity gap."
    },
    {
      name: "Break the argument into one idea per tweet",
      text: "Keep each tweet under 280 characters."
    },
    {
      name: "End with a clear CTA",
      text: "Ask for a follow, reply, or link to the full post."
    },
    {
      name: "Post the thread on X",
      text: "Compose tweet one, use the + / add post control for each next tweet, then publish the whole thread."
    },
    {
      name: "Optional: generate with AI",
      text: "Paste your blog into Blog2Thread to draft faster, then edit the hook."
    }
  ]
};

export const guide: GuideEntry = {
  ...meta,
  Content: function HowToMakeAThreadContent() {
    return (
      <GuideLayout
        guide={meta}
        intro="If you searched how to make a thread on Twitter (or how to create, write, or post one on X), this is the full workflow — from spine to publish. Threads still reward depth on-platform when you structure them like an argument, not a chopped-up essay."
      >
        <h2>What counts as a Twitter thread</h2>
        <p>
          A Twitter thread (same idea on X) is a string of connected posts from
          the same account. You get room for a claim, proof, and a close without
          sending people off-app first. That is why &quot;how to write a Twitter
          thread&quot; is less about typing and more about structure.
        </p>

        <h2>Step 1: Find the spine</h2>
        <p>
          Before tweet one, finish this sentence in plain English:{" "}
          <em>This thread exists to prove that ___.</em> That is your spine.
          Everything else is support. If you are converting a blog, skip the SEO
          intro and read the conclusion — writers often hide the real point there.
        </p>
        <h3>Spine examples that work</h3>
        <ul>
          <li>“Scheduling tools do not grow accounts — consistency does.”</li>
          <li>
            “One blog post can fund a week of distribution if you thread it
            right.”
          </li>
          <li>“Most AI threads fail because they summarize instead of argue.”</li>
        </ul>

        <h2>Step 2: Write tweet one like a headline for skeptics</h2>
        <p>
          Titles describe. Hooks create tension. Use a specific result, a
          contrarian line, or a gap the reader needs closed. See more patterns
          in{" "}
          <Link
            href="/guides/twitter-thread-hooks-that-work/"
            className="font-semibold text-brand hover:underline"
          >
            Twitter thread hooks that work
          </Link>
          .
        </p>
        <ul>
          <li>Weak: “How to make a thread on Twitter (tips inside).”</li>
          <li>
            Strong: “I rewrote 40 threads last quarter. The ones that got
            bookmarks shared one structure. Here it is:”
          </li>
        </ul>

        <h2>Step 3: One idea per tweet</h2>
        <p>
          Each supporting point gets its own post. Short lines. No “and also”
          stuffed into the same tweet. Numbering (1/, 2/) helps educational
          threads feel intentional, not accidental. For length ranges, read{" "}
          <Link
            href="/guides/how-many-tweets-in-a-thread/"
            className="font-semibold text-brand hover:underline"
          >
            how many tweets in a thread
          </Link>
          .
        </p>
        <ul>
          <li>Short posts (~500–800 words): 5–7 tweets</li>
          <li>Standard blogs (~1,500–2,500 words): 8–12 tweets</li>
          <li>Deep dives (3,000+ words): 12–15 tweets, or split into two threads</li>
        </ul>

        <h2>Step 4: Make every tweet quotable alone</h2>
        <p>
          People enter mid-thread all the time. Each tweet should still make
          sense if someone only sees that screenshot. Cut “as I said above” unless
          the previous tweet is essential context.
        </p>

        <h2>Step 5: Close with a CTA that matches the goal</h2>
        <ul>
          <li>Traffic: link the full blog in the last tweet or a reply.</li>
          <li>Follows: tell people what they will get if they stay.</li>
          <li>Replies: ask a question that is easy to answer in one sentence.</li>
        </ul>
        <p>
          Deliver value inside the thread. The link should feel like an upgrade,
          not a bait-and-switch. More examples:{" "}
          <Link
            href="/guides/twitter-thread-cta-that-gets-clicks/"
            className="font-semibold text-brand hover:underline"
          >
            thread CTAs that get clicks
          </Link>
          .
        </p>

        <h2>Step 6: How to post a Twitter thread on X</h2>
        <p>
          Writing the copy is only half of &quot;how to create a thread on
          Twitter.&quot; Publishing in the app:
        </p>
        <ol>
          <li>Open Compose and paste or type tweet 1 (your hook).</li>
          <li>
            Use <strong>Add another post</strong> / the + control to attach tweet
            2, 3, and so on in order.
          </li>
          <li>Preview on mobile if you can — line breaks look different there.</li>
          <li>Publish the whole thread in one go (not as separate lone tweets).</li>
        </ol>
        <p>
          Not every idea needs a thread. If one screenshot would carry the whole
          point, use a{" "}
          <Link
            href="/guides/thread-vs-single-tweet/"
            className="font-semibold text-brand hover:underline"
          >
            single tweet instead
          </Link>
          .
        </p>

        <h2>Step 7: Five-minute edit before you post</h2>
        <ol>
          <li>Rewrite the hook last — once you know the payoff.</li>
          <li>Delete any tweet that does not prove the spine.</li>
          <li>Check line breaks on your phone.</li>
          <li>Swap vague claims for numbers, names, or examples.</li>
        </ol>
        <p>
          If the draft came from AI, run this pass:{" "}
          <Link
            href="/guides/edit-ai-thread-before-you-post/"
            className="font-semibold text-brand hover:underline"
          >
            edit an AI thread before you post
          </Link>
          .
        </p>

        <h2>Mistakes I still see everywhere</h2>
        <ul>
          <li>Using the blog title as tweet one.</li>
          <li>Summarizing the whole post instead of arguing one claim.</li>
          <li>Hiding the only useful insight behind a link.</li>
          <li>Posting 20 weak tweets when 9 sharp ones would do.</li>
        </ul>

        <h2>Faster path if you publish weekly</h2>
        <ol>
          <li>Publish the blog.</li>
          <li>
            Paste the URL into{" "}
            <Link href="/" className="font-semibold text-brand hover:underline">
              Blog2Thread
            </Link>
            .
          </li>
          <li>Generate, edit the hook, then post the thread on X as above.</li>
          <li>
            Optional: spin a single{" "}
            <Link
              href="/blog-to-tweet/"
              className="font-semibold text-brand hover:underline"
            >
              blog-to-tweet
            </Link>{" "}
            teaser the same day.
          </li>
        </ol>

        <h2>FAQ: making and posting threads</h2>
        <h3>How do I create a thread on Twitter / X?</h3>
        <p>
          Write (or generate) numbered posts around one spine, then in Compose use
          Add another post for each tweet and publish once. That is how you create
          a thread instead of a pile of unrelated updates.
        </p>
        <h3>How do I write a Twitter thread that people finish?</h3>
        <p>
          Lead with tension in tweet one, one idea per tweet, and a CTA that
          matches your goal. Length matters less than whether every line proves
          the spine.
        </p>
        <h3>Can I turn a blog into a thread?</h3>
        <p>
          Yes — extract the claim, drop the SEO preamble, and rebuild as tweets.
          Or paste the URL into the free generator on this site, then edit before
          you post.
        </p>

        <ToolFitTable />
        <p className="mt-4 text-sm text-ink/65">
          Want the full comparison (free vs schedule vs recycle)? See{" "}
          <Link
            href="/best-ai-twitter-thread-generator/"
            className="font-semibold text-brand hover:underline"
          >
            best AI Twitter thread generators ({CURRENT_YEAR})
          </Link>
          .
        </p>
      </GuideLayout>
    );
  }
};
