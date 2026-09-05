import Link from "next/link";
import { GuideLayout } from "@/components/guide-layout";
import type { GuideEntry } from "@/lib/guides/types";

const meta = {
  slug: "edit-ai-thread-before-you-post",
  title: "Edit an AI Thread Before You Post",
  description:
    "A five-minute pass for AI-drafted threads: what to delete, what to rewrite, and what to leave alone. Works for Blog2Thread or any generator."
};

export const guide: GuideEntry = {
  ...meta,
  Content: function EditAiThreadContent() {
    return (
      <GuideLayout
        guide={meta}
        intro="AI drafts are useful the way rough cuts are useful — not because they are ready, but because you are not staring at a blank box. The edit pass is where your voice shows up. Here is mine."
      >
        <h2>Minute 1: Fix tweet one only</h2>
        <p>
          Generators often open with a generic summary. Rewrite tweet one in your
          voice before you touch anything else. If you would not say it out loud
          to a friend, it does not ship.
        </p>

        <h2>Minute 2: Delete three tweets</h2>
        <p>
          AI loves symmetrical lists. Count the tweets. Remove any that repeat the
          same point with different adjectives. “Additionally,” “Furthermore,”
          “In today&apos;s landscape” — cut the whole tweet if you see those.
        </p>

        <h2>Minute 3: Swap abstractions for specifics</h2>
        <ul>
          <li>“Many founders struggle with…” → name the struggle you actually had</li>
          <li>“This can improve engagement” → “We saw replies 2× on the second post”</li>
          <li>“Leverage your content” → “Turn one blog into a thread + one tweet”</li>
        </ul>

        <h2>Minute 4: Read aloud on your phone</h2>
        <p>
          Paste into the X composer or preview in{" "}
          <Link href="/tools/thread-to-pdf/" className="font-semibold text-brand hover:underline">
            PDF export
          </Link>{" "}
          if you want a clean read-through. Stumble while reading? That sentence
          gets shorter or deleted.
        </p>

        <h2>Minute 5: Check the close</h2>
        <p>
          AI endings often sound like a customer support email: “We hope you
          found this helpful.” Replace with a direct ask — follow, reply, or link
          — tied to what the thread actually proved.
        </p>

        <h2>What I leave alone</h2>
        <ul>
          <li>Numbering and line breaks if they scan well.</li>
          <li>Tweets that already contain a concrete example from the source.</li>
          <li>Structure when the spine is right — do not rewrite for ego.</li>
        </ul>

        <h2>Red flags that mean “regenerate or rewrite from scratch”</h2>
        <ul>
          <li>Every tweet starts the same way (“One key…”, “Another important…”)</li>
          <li>Claims that are not in your source material</li>
          <li>Emoji every line — unless that is actually your brand</li>
        </ul>
      </GuideLayout>
    );
  }
};
