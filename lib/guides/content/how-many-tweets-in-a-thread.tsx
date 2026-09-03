import { GuideLayout } from "@/components/guide-layout";
import type { GuideEntry } from "@/lib/guides/types";

const meta = {
  slug: "how-many-tweets-in-a-thread",
  title: "How Many Tweets Should a Thread Be?",
  description:
    "Short answer: fewer than you think. When to stop at 7, when to go to 12, and when to split into two threads."
};

export const guide: GuideEntry = {
  ...meta,
  Content: function ThreadLengthContent() {
    return (
      <GuideLayout
        guide={meta}
        intro="There is no magic number. There is a point where each extra tweet stops adding proof and starts diluting the spine. Here is how I decide length before I post."
      >
        <h2>The default range: 7–12 tweets</h2>
        <p>
          For a typical blog post (1,200–2,500 words), 7–12 tweets is enough to
          state a claim, show two or three pieces of evidence, and land a close.
          If you are under seven, you might be summarizing too shallowly. If you
          are over fifteen, you might be summarizing too literally.
        </p>

        <h2>Match length to source depth</h2>
        <ul>
          <li>
            <strong>Short note</strong> (500–800 words): 5–7 tweets. One hook,
            three beats, one CTA.
          </li>
          <li>
            <strong>Standard article</strong> (1,500–2,500 words): 8–12 tweets.
            Room for an example and one “mistake we made” beat.
          </li>
          <li>
            <strong>Long guide</strong> (3,000+ words): 12–15 tweets max, or
            split into two threads with different spines.
          </li>
        </ul>

        <h2>The “every tweet must pass” test</h2>
        <p>
          Read each tweet and ask: if I delete this, does the argument still
          stand? If yes, delete it. Threads bloat when writers keep “nice to
          have” points that do not support the spine.
        </p>

        <h2>When to split into two threads</h2>
        <p>
          Split when you have two claims, not one claim with too much evidence.
          Example: “How we built feature X” and “What we learned about pricing
          while building X” are two threads. One blog can fund both — just do
          not publish them back-to-back on the same day.
        </p>

        <h2>Character count vs tweet count</h2>
        <p>
          X allows 280 characters per post. Shorter tweets (under 200 characters)
          often read faster on mobile. You do not need to max out every slot.
          White space is part of the format.
        </p>

        <h2>Signs the thread is too long</h2>
        <ul>
          <li>Tweet five could be tweet two — you buried the hook.</li>
          <li>You are explaining background nobody asked for.</li>
          <li>The CTA repeats three times because you ran out of new points.</li>
        </ul>

        <h2>Signs the thread is too short</h2>
        <ul>
          <li>Tweet one makes a bold claim tweets 2–4 do not support.</li>
          <li>Readers reply “can you expand on X?” on every post.</li>
          <li>You linked the blog because the thread itself did not deliver.</li>
        </ul>
      </GuideLayout>
    );
  }
};
