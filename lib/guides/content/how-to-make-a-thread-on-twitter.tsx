import Link from "next/link";
import { GuideLayout } from "@/components/guide-layout";
import { CURRENT_YEAR } from "@/lib/site";
import type { GuideEntry } from "@/lib/guides/types";

const meta = {
  slug: "how-to-make-a-thread-on-twitter",
  title: `How to Make a Thread on Twitter: Complete Guide (${CURRENT_YEAR})`,
  description:
    "Learn how to create engaging Twitter/X threads that get engagement. Step-by-step guide with tips, examples, and a free AI thread generator.",
  howToSteps: [
    { name: "Pick one spine idea", text: "Decide the single claim your thread exists to prove." },
    { name: "Write a scroll-stopping first tweet", text: "Open with a result, contrast, or curiosity gap." },
    { name: "Break the argument into one idea per tweet", text: "Keep each tweet under 280 characters." },
    { name: "End with a clear CTA", text: "Ask for a follow, reply, or link to the full post." },
    { name: "Optional: generate with AI", text: "Paste your blog into Blog2Thread to draft faster." }
  ]
};

export const guide: GuideEntry = {
  ...meta,
  Content: function HowToMakeAThreadContent() {
    return (
      <GuideLayout
        guide={meta}
        intro="Threads are still one of the highest-leverage formats on X — if you structure them like an argument, not a chopped-up essay. Here is the workflow I would use before posting anything longer than three tweets."
      >
        <h2>What counts as a thread</h2>
        <p>
          A thread is just a string of connected posts from the same account. The
          format matters because X still rewards depth on-platform. You get room
          for a claim, proof, and a close without sending people elsewhere first.
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
          <li>“One blog post can fund a week of distribution if you thread it right.”</li>
          <li>“Most AI threads fail because they summarize instead of argue.”</li>
        </ul>

        <h2>Step 2: Write tweet one like a headline for skeptics</h2>
        <p>
          Titles describe. Hooks create tension. Use a specific result, a
          contrarian line, or a gap the reader needs closed.
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
          threads feel intentional, not accidental.
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
          not a bait-and-switch.
        </p>

        <h2>Step 6: Five-minute edit before you post</h2>
        <ol>
          <li>Rewrite the hook last — once you know the payoff.</li>
          <li>Delete any tweet that does not prove the spine.</li>
          <li>Check line breaks on your phone.</li>
          <li>Swap vague claims for numbers, names, or examples.</li>
        </ol>

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
          <li>Generate, edit the hook, schedule.</li>
          <li>
            Optional: spin a single{" "}
            <Link href="/blog-to-tweet/" className="font-semibold text-brand hover:underline">
              blog-to-tweet
            </Link>{" "}
            teaser the same day.
          </li>
        </ol>
      </GuideLayout>
    );
  }
};
