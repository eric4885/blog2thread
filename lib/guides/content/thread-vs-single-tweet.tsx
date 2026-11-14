import Link from "next/link";
import { GuideLayout } from "@/components/guide-layout";
import type { GuideEntry } from "@/lib/guides/types";

const meta = {
  slug: "thread-vs-single-tweet",
  title: "Thread vs Single Tweet",
  description:
    "Thread vs single tweet: when one X post is enough vs a full thread — decision table and same-blog examples."
};

export const guide: GuideEntry = {
  ...meta,
  Content: function ThreadVsTweetContent() {
    return (
      <GuideLayout
        guide={meta}
        intro="Threads are not automatically better than single tweets. They cost more attention. Use a thread when the idea needs sequential proof — not because you published a long blog. Use one tweet when the idea fits in a screenshot."
        related={[
          {
            href: "/guides/how-many-tweets-in-a-thread/",
            label: "How many tweets in a thread?"
          },
          {
            href: "/blog-to-tweet/",
            label: "Blog to Tweet — one post tool"
          },
          {
            href: "/guides/how-to-make-a-thread-on-twitter/",
            label: "How to make a thread when you need one"
          }
        ]}
      >
        <h2>Decision table</h2>
        <div className="not-prose overflow-x-auto rounded-xl border border-line">
          <table className="w-full min-w-[32rem] text-left text-sm">
            <thead className="bg-slate-50 text-ink/70">
              <tr>
                <th className="px-3 py-2 font-semibold">Situation</th>
                <th className="px-3 py-2 font-semibold">Use</th>
                <th className="px-3 py-2 font-semibold">Why</th>
              </tr>
            </thead>
            <tbody className="text-ink/80">
              <tr className="border-t border-line">
                <td className="px-3 py-2">One insight, no setup needed</td>
                <td className="px-3 py-2">Single tweet</td>
                <td className="px-3 py-2">Attention cost stays low</td>
              </tr>
              <tr className="border-t border-line">
                <td className="px-3 py-2">Teasing a launch / link drop</td>
                <td className="px-3 py-2">Single tweet</td>
                <td className="px-3 py-2">Goal is clicks or replies, not a lesson</td>
              </tr>
              <tr className="border-t border-line">
                <td className="px-3 py-2">One screenshot or one stat</td>
                <td className="px-3 py-2">Single tweet</td>
                <td className="px-3 py-2">The media carries the story</td>
              </tr>
              <tr className="border-t border-line">
                <td className="px-3 py-2">3+ steps to make the claim believable</td>
                <td className="px-3 py-2">Thread</td>
                <td className="px-3 py-2">Readers need sequence</td>
              </tr>
              <tr className="border-t border-line">
                <td className="px-3 py-2">Before → after with evidence in between</td>
                <td className="px-3 py-2">Thread</td>
                <td className="px-3 py-2">Middle tweets are the proof</td>
              </tr>
              <tr className="border-t border-line">
                <td className="px-3 py-2">Teaching a framework (1 / 2 / 3)</td>
                <td className="px-3 py-2">Thread</td>
                <td className="px-3 py-2">One idea per post keeps it scannable</td>
              </tr>
              <tr className="border-t border-line">
                <td className="px-3 py-2">Blog has two different claims</td>
                <td className="px-3 py-2">Two threads (or tweet + thread)</td>
                <td className="px-3 py-2">Do not smash two spines into one</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Default to one tweet when…</h2>
        <ul>
          <li>One insight stands alone without setup.</li>
          <li>You are teasing a launch, not explaining it.</li>
          <li>The goal is replies and quote-tweets, not a narrative.</li>
          <li>You only have one screenshot or one stat worth sharing.</li>
        </ul>
        <p>
          Use{" "}
          <Link
            href="/blog-to-tweet/"
            className="font-semibold text-brand hover:underline"
          >
            Blog to Tweet
          </Link>{" "}
          when you want a single punchy post from a longer source — not a
          multi-tweet draft.
        </p>

        <h2>Reach for a thread when…</h2>
        <ul>
          <li>You need 3+ steps to make the claim believable.</li>
          <li>You are telling a before/after story with evidence in the middle.</li>
          <li>You are teaching a framework (step 1, step 2, step 3).</li>
          <li>
            The blog has one spine, but a single tweet would feel incomplete.
          </li>
        </ul>
        <p>
          Full converter for multi-tweet output:{" "}
          <Link
            href="/blog-to-twitter-thread/"
            className="font-semibold text-brand hover:underline"
          >
            blog to Twitter thread
          </Link>{" "}
          or the homepage{" "}
          <Link href="/" className="font-semibold text-brand hover:underline">
            Twitter Thread Generator
          </Link>
          .
        </p>

        <h2>Same blog, two formats</h2>
        <p>
          Blog topic: “How we cut churn 18% by fixing onboarding email #3.”
        </p>
        <ul>
          <li>
            <strong>Single tweet:</strong> “We cut churn 18% by rewriting one
            onboarding email — not the welcome sequence, email #3. Notes ↓”
            (link or follow-up thread the next day)
          </li>
          <li>
            <strong>Thread:</strong> Hook with the result → old email → new
            structure → why #3 mattered more than #1 → CTA to the full post
          </li>
        </ul>
        <p>
          Weekly pattern that works: thread on Monday (full argument), single
          tweet on Thursday (best standalone line). Same source, different jobs —
          see{" "}
          <Link
            href="/guides/repurpose-one-blog-post-for-x/"
            className="font-semibold text-brand hover:underline"
          >
            repurpose one blog post for X
          </Link>
          .
        </p>

        <h2>The “would this work as a screenshot?” test</h2>
        <p>
          If the whole idea fits in a screenshot someone would share without
          context, it might be a single tweet. If someone would ask “but how?”,
          it is probably a thread. If they would ask “and also what about Y?”,
          you might need a second thread later — not a longer first one.
        </p>

        <h2>Same title, two complete drafts</h2>
        <p>
          Title on the blog: “We cut support tickets 40% by changing one
          onboarding email.”
        </p>
        <p>
          <strong>As a single tweet (ready to post):</strong>
        </p>
        <blockquote>
          We cut support tickets 40% by rewriting one onboarding email — not the
          whole sequence. Email #3 was the leak. Full write-up in the link ↓
        </blockquote>
        <p>
          <strong>As a thread (structure only):</strong>
        </p>
        <ol>
          <li>Hook: 40% fewer tickets after one email change — not a redesign.</li>
          <li>Context: tickets clustered three days after signup.</li>
          <li>Old email: vague “explore the dashboard” with no next step.</li>
          <li>New email: one job, one CTA, one deadline.</li>
          <li>Why #3 mattered more than the welcome email.</li>
          <li>What we measured (tickets / cohort / window).</li>
          <li>What we would not copy blindly.</li>
          <li>CTA: full post + template.</li>
        </ol>
        <p>
          Same source URL. Different jobs: the tweet earns a click or a reply; the
          thread earns a bookmark. If you only have energy for one, pick using the
          decision table above — do not half-thread.
        </p>

        <h2>Common mistakes</h2>
        <ul>
          <li>
            <strong>Threading every blog by default</strong> — burns audience
            attention for ideas that fit in one line.
          </li>
          <li>
            <strong>Single tweet that promises a thread</strong> but never
            delivers the proof.
          </li>
          <li>
            <strong>Using a thread generator when you need one tweet</strong> —
            then posting tweet one only. Pick the right tool.
          </li>
          <li>
            <strong>Posting the single tweet and the full thread the same hour</strong> —
            they cannibalize each other. Space them by a day or more.
          </li>
        </ul>

        <h2>FAQ</h2>
        <h3>Is a Twitter thread always better than a single tweet?</h3>
        <p>
          No. Threads win when sequence adds proof. Single tweets win when the
          idea is already complete.
        </p>
        <h3>Can I post both from one article?</h3>
        <p>
          Yes — thread for the argument, later a standalone line for reach. Do
          not post both the same hour.
        </p>
        <h3>How long should the thread be if I choose that path?</h3>
        <p>
          Usually 7–12 tweets. Details:{" "}
          <Link
            href="/guides/how-many-tweets-in-a-thread/"
            className="font-semibold text-brand hover:underline"
          >
            how many tweets in a thread
          </Link>
          .
        </p>
        <h3>What if my blog is mostly one chart?</h3>
        <p>
          Lead with a single tweet + the chart. Add a thread later only if people
          ask “how did you get that number?”
        </p>
        <h3>Should founders always thread build-in-public updates?</h3>
        <p>
          No. Ship notes often fit one tweet. Save threads for lessons with a
          clear spine — see{" "}
          <Link
            href="/guides/build-in-public-thread-playbook/"
            className="font-semibold text-brand hover:underline"
          >
            build-in-public thread playbook
          </Link>
          .
        </p>
      </GuideLayout>
    );
  }
};
