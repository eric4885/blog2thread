import Link from "next/link";
import { GuideLayout } from "@/components/guide-layout";
import type { GuideEntry } from "@/lib/guides/types";

const meta = {
  slug: "how-many-tweets-in-a-thread",
  title: "How Many Tweets in a Thread?",
  description:
    "How many tweets in a Twitter/X thread? Default 7–12 for most blogs — plus a length table, real thread breakdowns, and a too-long / too-short checklist.",
  howToSteps: [
    {
      name: "Match tweet count to source depth",
      text: "Short notes 5–7, standard posts 8–12, long guides 12–15 or two spines."
    },
    {
      name: "Apply the delete test",
      text: "If removing a tweet leaves the argument intact, cut it."
    },
    {
      name: "Split when you have two claims",
      text: "Two spines mean two threads — not one bloated thread."
    }
  ]
};

export const guide: GuideEntry = {
  ...meta,
  Content: function ThreadLengthContent() {
    return (
      <GuideLayout
        guide={meta}
        intro="There is no magic number for how many tweets belong in a Twitter thread. There is a point where each extra tweet stops adding proof and starts diluting the spine. Use the ranges below before you post — then cut anything that fails the delete test."
        related={[
          {
            href: "/guides/thread-vs-single-tweet/",
            label: "Thread vs single tweet — when not to thread at all"
          },
          {
            href: "/guides/how-to-make-a-thread-on-twitter/",
            label: "How to make a thread on Twitter (full walkthrough)"
          },
          {
            href: "/guides/twitter-thread-outline-from-blog-post/",
            label: "Outline first if the blog is long"
          }
        ]}
      >
        <h2>Short answer</h2>
        <p>
          For most blog posts, aim for <strong>7–12 tweets</strong>. Under seven
          often means you summarized too shallowly. Over fifteen usually means
          you copied the article instead of arguing one claim. Character limit is
          280 per post — you do not need to fill every slot.
        </p>

        <h2>Length table by source</h2>
        <div className="not-prose overflow-x-auto rounded-xl border border-line">
          <table className="w-full min-w-[32rem] text-left text-sm">
            <thead className="bg-slate-50 text-ink/70">
              <tr>
                <th className="px-3 py-2 font-semibold">Source</th>
                <th className="px-3 py-2 font-semibold">Tweet count</th>
                <th className="px-3 py-2 font-semibold">What fits</th>
              </tr>
            </thead>
            <tbody className="text-ink/80">
              <tr className="border-t border-line">
                <td className="px-3 py-2">Short note (500–800 words)</td>
                <td className="px-3 py-2">5–7</td>
                <td className="px-3 py-2">Hook + 3 beats + CTA</td>
              </tr>
              <tr className="border-t border-line">
                <td className="px-3 py-2">Standard article (1,500–2,500)</td>
                <td className="px-3 py-2">8–12</td>
                <td className="px-3 py-2">Claim, 2–3 proofs, one mistake, close</td>
              </tr>
              <tr className="border-t border-line">
                <td className="px-3 py-2">Long guide (3,000+)</td>
                <td className="px-3 py-2">12–15 or split</td>
                <td className="px-3 py-2">One spine only — or two separate threads</td>
              </tr>
              <tr className="border-t border-line">
                <td className="px-3 py-2">Launch / changelog</td>
                <td className="px-3 py-2">6–9</td>
                <td className="px-3 py-2">What shipped, why it matters, one demo, CTA</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Three real breakdowns</h2>
        <h3>1) Tactical how-to (~1,800-word blog) → 9 tweets</h3>
        <ol>
          <li>Hook with the result (not the H1).</li>
          <li>Spine claim in plain English.</li>
          <li>–5) Three steps that prove it.</li>
          <li>One “mistake we made” beat.</li>
          <li>One concrete example / number.</li>
          <li>CTA + link (or reply with the link).</li>
        </ol>
        <p>
          Rough length: tweets 2–7 stay under ~200 characters so mobile readers
          keep scrolling.
        </p>

        <h3>2) Contrarian take (~1,200 words) → 7 tweets</h3>
        <p>
          Shorter source, sharper spine. Seven tweets: hook, claim, two proofs,
          one objection handled, CTA. Padding to “look substantial” kills the
          punch.
        </p>

        <h3>3) Deep guide (~4,000 words) → two threads of 10</h3>
        <p>
          First thread: “how it works.” Second thread a week later: “what we
          would change.” Same URL, two spines — better than one 22-tweet slog.
          Calendar ideas:{" "}
          <Link
            href="/guides/repurpose-one-blog-post-for-x/"
            className="font-semibold text-brand hover:underline"
          >
            repurpose one blog post for X
          </Link>
          .
        </p>

        <h2>The “every tweet must pass” test</h2>
        <p>
          Read each tweet and ask: if I delete this, does the argument still
          stand? If yes, delete it. Threads bloat when writers keep “nice to
          have” points that do not support the spine.
        </p>

        <h2>Too long / too short checklist</h2>
        <p>
          <strong>Too long — cut when:</strong>
        </p>
        <ul>
          <li>Tweet five could be tweet two (you buried the hook).</li>
          <li>You are explaining background nobody asked for.</li>
          <li>The CTA repeats three times because you ran out of new points.</li>
          <li>Two tweets say the same thing with different adjectives.</li>
        </ul>
        <p>
          <strong>Too short — expand when:</strong>
        </p>
        <ul>
          <li>Tweet one makes a bold claim tweets 2–4 do not support.</li>
          <li>Readers reply “can you expand on X?” on every post.</li>
          <li>You linked the blog because the thread itself did not deliver.</li>
        </ul>

        <h2>When to skip the thread entirely</h2>
        <p>
          If one insight stands alone, post a{" "}
          <Link
            href="/guides/thread-vs-single-tweet/"
            className="font-semibold text-brand hover:underline"
          >
            single tweet
          </Link>{" "}
          instead. Or use{" "}
          <Link
            href="/blog-to-tweet/"
            className="font-semibold text-brand hover:underline"
          >
            blog to tweet
          </Link>{" "}
          for a one-liner from the same source.
        </p>

        <h2>Character count vs tweet count</h2>
        <p>
          X allows 280 characters per post. Shorter tweets (under 200) often
          read faster on mobile. Maxing every slot makes the thread feel dense,
          not smart. White space is part of the format.
        </p>

        <h2>Content-type length examples</h2>
        <p>
          Same “how many tweets” question changes by what you are shipping:
        </p>
        <ul>
          <li>
            <strong>Product changelog:</strong> 6–8 tweets. What shipped, who it
            is for, one screenshot-worthy detail, CTA. Resist the feature dump.
          </li>
          <li>
            <strong>Case study / results post:</strong> 9–11 tweets. Hook with the
            number, show the before state, the change, the after, one caveat, CTA.
          </li>
          <li>
            <strong>Opinion / industry take:</strong> 7–9 tweets. Claim, two
            proofs, one counterargument you handle, close. Opinions die when they
            turn into literature reviews.
          </li>
          <li>
            <strong>Tutorial / how-to:</strong> 8–12 tweets. One step per tweet
            after the hook. If you have fourteen steps, that is two threads or a
            blog with a shorter thread teaser.
          </li>
          <li>
            <strong>Newsletter issue mirror:</strong> 7–10 tweets. Steal the spine
            from the subject line; cut email chrome. See{" "}
            <Link
              href="/guides/blog-to-thread-for-newsletter-writers/"
              className="font-semibold text-brand hover:underline"
            >
              newsletter writers playbook
            </Link>
            .
          </li>
        </ul>

        <h2>AI drafts are usually too long — cut on purpose</h2>
        <p>
          Generators pad. They love symmetrical lists (“Additionally…”, “It is
          also worth noting…”). After you paste a URL into{" "}
          <Link href="/" className="font-semibold text-brand hover:underline">
            Blog2Thread
          </Link>
          , do this before you post:
        </p>
        <ol>
          <li>Count the tweets. If you are over 12 for a standard blog, mark three for deletion.</li>
          <li>Delete any tweet that restates the previous one with softer words.</li>
          <li>Delete SEO openers and “in this thread I will cover…” lines.</li>
          <li>Rewrite tweet one last — once you know which proof is strongest.</li>
          <li>Re-check length: you should land in the table above, not above it.</li>
        </ol>
        <p>
          A concrete target: generate 12, ship 9. The three you cut are usually
          the ones that were killing scroll-through. More on that pass:{" "}
          <Link
            href="/guides/edit-ai-thread-before-you-post/"
            className="font-semibold text-brand hover:underline"
          >
            edit an AI thread before you post
          </Link>
          .
        </p>

        <h2>FAQ: how many tweets in a thread</h2>
        <h3>How many tweets should a Twitter thread have?</h3>
        <p>
          Most educational threads land between 7 and 12. Match the count to how
          many proof points you actually have — not to a round number.
        </p>
        <h3>Is a 20-tweet thread too long?</h3>
        <p>
          Usually yes for a single spine. Split into two threads with different
          promises, or cut until every line earns its place.
        </p>
        <h3>Does AI decide the right length?</h3>
        <p>
          Generators often overshoot. Draft with{" "}
          <Link href="/" className="font-semibold text-brand hover:underline">
            Blog2Thread
          </Link>
          , then delete three tweets on purpose. Editing length is part of the
          job — see{" "}
          <Link
            href="/guides/edit-ai-thread-before-you-post/"
            className="font-semibold text-brand hover:underline"
          >
            edit an AI thread before you post
          </Link>
          .
        </p>
        <h3>How do I outline before counting tweets?</h3>
        <p>
          List spine + proof bullets first:{" "}
          <Link
            href="/guides/twitter-thread-outline-from-blog-post/"
            className="font-semibold text-brand hover:underline"
          >
            Twitter thread outline from a blog post
          </Link>
          . The bullet count becomes your tweet count.
        </p>
        <h3>Why does my AI thread always feel long?</h3>
        <p>
          Models optimize for completeness, not for one spine. Treat the draft as
          raw clay: delete three tweets, then judge length again.
        </p>
        <h3>Should launch threads be shorter than tutorials?</h3>
        <p>
          Usually yes — 6–8 tweets. Launches need clarity and a CTA, not a full
          documentation dump.
        </p>
      </GuideLayout>
    );
  }
};
