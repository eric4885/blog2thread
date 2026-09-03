import Link from "next/link";
import { GuideLayout } from "@/components/guide-layout";
import type { GuideEntry } from "@/lib/guides/types";

const meta = {
  slug: "thread-vs-single-tweet",
  title: "Thread vs Single Tweet: When to Use Each",
  description:
    "Not every blog post needs a thread. A simple decision guide for founders and marketers — with examples of what belongs in one tweet vs ten."
};

export const guide: GuideEntry = {
  ...meta,
  Content: function ThreadVsTweetContent() {
    return (
      <GuideLayout
        guide={meta}
        intro="Threads are not automatically better than single tweets. They cost more attention. Use them when the idea needs sequential proof — not because you published a long blog."
      >
        <h2>Default to one tweet when…</h2>
        <ul>
          <li>One insight stands alone without setup.</li>
          <li>You are teasing a launch, not explaining it.</li>
          <li>The goal is replies and quote-tweets, not a narrative.</li>
          <li>You only have one screenshot or one stat worth sharing.</li>
        </ul>
        <p>
          Try the{" "}
          <Link href="/blog-to-tweet/" className="font-semibold text-brand hover:underline">
            blog-to-tweet
          </Link>{" "}
          flow when you need a single punchy post from a longer source.
        </p>

        <h2>Reach for a thread when…</h2>
        <ul>
          <li>You need 3+ steps to make the claim believable.</li>
          <li>You are telling a before/after story with evidence in the middle.</li>
          <li>You are teaching a framework (step 1, step 2, step 3).</li>
          <li>The blog has one spine, but the tweet version needs room to breathe.</li>
        </ul>

        <h2>Examples from the same blog</h2>
        <p>
          Blog topic: “How we cut churn 18% by fixing onboarding email #3.”
        </p>
        <ul>
          <li>
            <strong>Single tweet:</strong> “We cut churn 18% by rewriting one
            onboarding email. Not the welcome sequence — email #3. Thread on
            what changed ↓” (works if you thread next day)
          </li>
          <li>
            <strong>Thread:</strong> Hook with the result → show the old email →
            show the new structure → explain why #3 mattered more than #1 → CTA
          </li>
        </ul>

        <h2>The “would this work as a screenshot?” test</h2>
        <p>
          If the whole idea fits in a screenshot someone would share without
          context, it might be a single tweet. If someone would ask “but how?”,
          it is probably a thread.
        </p>

        <h2>Pair both from one blog</h2>
        <p>
          Common weekly pattern: thread on Monday (full argument), single tweet
          on Thursday (best standalone line). Same source, different jobs.
        </p>
      </GuideLayout>
    );
  }
};
