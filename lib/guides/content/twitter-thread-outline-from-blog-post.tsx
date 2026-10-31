import Link from "next/link";
import { GuideLayout } from "@/components/guide-layout";
import type { GuideEntry } from "@/lib/guides/types";

const meta = {
  slug: "twitter-thread-outline-from-blog-post",
  title: "Twitter Thread Outline From a Blog Post",
  description:
    "A reusable outline template to turn any blog into an X thread: spine, hook, proof tweets, CTA — before you write full lines or paste into a generator.",
  howToSteps: [
    {
      name: "Write the spine in one sentence",
      text: "Finish: This thread exists to prove that ___."
    },
    {
      name: "List 5–9 proof bullets",
      text: "Each bullet becomes one tweet — one idea only."
    },
    {
      name: "Draft three hook options",
      text: "Result, contrast, or curiosity — pick one after the middle is clear."
    },
    {
      name: "Add a CTA that matches the goal",
      text: "Traffic, follows, or replies — one goal per thread."
    },
    {
      name: "Expand or generate, then edit",
      text: "Fill lines by hand or paste the URL into Blog2Thread, then rewrite tweet one."
    }
  ]
};

export const guide: GuideEntry = {
  ...meta,
  Content: function OutlineFromBlogContent() {
    return (
      <GuideLayout
        guide={meta}
        intro="Blank Compose is where good blogs go to die. An outline sits between “I have a post” and “I have a thread”: short enough to finish in ten minutes, strict enough that you do not paste the whole article into X."
      >
        <h2>When you need an outline (and when you do not)</h2>
        <p>
          Use this template when the post is long, the argument is buried, or you
          keep generating AI drafts that wander. Skip it when the blog already
          has a clear claim and you only need a hook rewrite — then jump to{" "}
          <Link
            href="/guides/how-to-make-a-thread-on-twitter/"
            className="font-semibold text-brand hover:underline"
          >
            how to make a thread on Twitter
          </Link>
          .
        </p>

        <h2>The template (copy this)</h2>
        <pre className="overflow-x-auto rounded-xl border border-line bg-slate-50 p-4 text-sm leading-6 text-ink">
{`SPINE: This thread exists to prove that __________.

HOOK OPTIONS:
A) Result:
B) Contrast:
C) Curiosity:

PROOF (one line each → one tweet each):
2.
3.
4.
5.
6.
7.
8. (optional)
9. (optional)

CTA GOAL: traffic / follows / replies
LAST TWEET / REPLY: __________

CUT LIST (ideas that do not prove the spine):
-`}
        </pre>

        <h2>Filled example (from a ~1,500-word blog)</h2>
        <pre className="overflow-x-auto rounded-xl border border-line bg-slate-50 p-4 text-sm leading-6 text-ink">
{`SPINE: One blog can fund a week of X posts if you change angles, not just formats.

HOOK (picked B):
Used to post the blog link once. Now: one thread, one tweet, one quote — same post, zero spam feel.

PROOF:
2. Most “repurposing” fails because it repeats the title four days in a row.
3. Pull three angles first: result, how-to, contrarian.
4. Monday = main thread on the spine only.
5. Wednesday = one standalone insight (no obligatory link).
6. Friday = quote yourself with one new line.
7. Two weeks later = second spine (“what we’d change”), not a rerun.
8. AI draft is fine; publishing raw AI is not.

CTA GOAL: traffic
LAST TWEET: Full calendar + examples → [blog URL]

CUT LIST:
- SEO definition of “engagement”
- Tool roundup that was not in the spine`}
        </pre>
        <p>
          That outline becomes either hand-written tweets or a cleaner prompt /
          paste into{" "}
          <Link href="/" className="font-semibold text-brand hover:underline">
            Blog2Thread
          </Link>
          . The generator still helps with wording; the outline stops it from
          summarizing the wrong sections.
        </p>

        <h2>Step-by-step</h2>
        <ol>
          <li>
            Skim the conclusion and H2s — writers often hide the real claim at
            the end.
          </li>
          <li>Fill SPINE before any hook.</li>
          <li>List proof bullets until each one can stand alone as a screenshot.</li>
          <li>Write three hooks; choose after the proof list exists.</li>
          <li>
            Expand lines, or paste the URL and map the draft onto your outline —
            delete anything that is not on the list.
          </li>
        </ol>

        <h2>Common mistakes</h2>
        <ul>
          <li>
            <strong>Outlining the table of contents</strong> — H2 order ≠ thread
            order. Re-sort for argument.
          </li>
          <li>
            <strong>Ten proof bullets that say the same thing</strong> — merge
            until each tweet earns its spot.
          </li>
          <li>
            <strong>Skipping the cut list</strong> — leftover SEO sections sneak
            back into the draft.
          </li>
        </ul>

        <h2>After the outline</h2>
        <p>
          For hook patterns, use{" "}
          <Link
            href="/guides/twitter-thread-hooks-that-work/"
            className="font-semibold text-brand hover:underline"
          >
            Twitter thread hooks that work
          </Link>
          . For the weekly calendar once the main thread ships, use{" "}
          <Link
            href="/guides/repurpose-one-blog-post-for-x/"
            className="font-semibold text-brand hover:underline"
          >
            repurpose one blog post for X
          </Link>
          .
        </p>

        <h2>FAQ</h2>
        <h3>Can I get a Twitter thread outline from a blog post automatically?</h3>
        <p>
          Tools can draft full threads from a URL; a short human outline still
          improves the result. Use the template above, then generate and align.
        </p>
        <h3>How many tweets should the outline target?</h3>
        <p>
          Most blogs: 7–11 proof lines including hook and CTA. More than 15
          usually means two spines — split into two threads.
        </p>
        <h3>Is this the same as a blog to thread generator?</h3>
        <p>
          No. The outline is the map; the generator fills sentences. You need
          both if the source is long or messy.
        </p>
      </GuideLayout>
    );
  }
};
