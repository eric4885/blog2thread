import { GuideLayout } from "@/components/guide-layout";
import type { GuideEntry } from "@/lib/guides/types";

const meta = {
  slug: "twitter-thread-hooks-that-work",
  title: "Twitter Thread Hooks That Actually Stop the Scroll",
  description:
    "Five hook patterns for X threads — with weak vs strong examples. No templates that sound like every other AI thread."
};

export const guide: GuideEntry = {
  ...meta,
  Content: function ThreadHooksContent() {
    return (
      <GuideLayout
        guide={meta}
        intro="Most threads die on tweet one. Not because the ideas are bad — because the opening sounds like a syllabus. These are the patterns I reach for when I need someone to keep reading past the fold."
      >
        <h2>Rule zero: tweet one is not your blog title</h2>
        <p>
          Titles tell people what they are about to read. Hooks tell them what
          they will miss if they scroll past. If tweet one could sit on a
          Medium headline without changing a word, rewrite it.
        </p>

        <h2>Pattern 1: Result first, method second</h2>
        <p>Lead with an outcome, then promise the how.</p>
        <ul>
          <li>Weak: “Tips for writing better threads.”</li>
          <li>
            Strong: “This 9-tweet thread drove more newsletter signups than the
            blog it came from. Breakdown:”
          </li>
        </ul>
        <p>
          Numbers do not have to be huge. Specific beats impressive. “47 signups
          in 48 hours” beats “tons of traffic.”
        </p>

        <h2>Pattern 2: Contrarian, but provable</h2>
        <p>
          Take a stance your audience already half-believes. You are not trying to
          go viral on outrage — you are filtering for the right readers.
        </p>
        <ul>
          <li>Weak: “Threads are important for creators.”</li>
          <li>
            Strong: “You do not need a daily thread. You need one thread per
            piece of work you already shipped.”
          </li>
        </ul>

        <h2>Pattern 3: Curiosity gap with a deadline</h2>
        <p>
          Name the tension, not the topic. What changed? What broke? What did
          you get wrong the first time?
        </p>
        <ul>
          <li>Weak: “My thoughts on repurposing content.”</li>
          <li>
            Strong: “I stopped rewriting blogs by hand in March. Same traffic,
            half the time — but only after I fixed one mistake in tweet two.”
          </li>
        </ul>

        <h2>Pattern 4: Before / after in one line</h2>
        <p>Contrast creates motion. Two clauses, one tweet.</p>
        <ul>
          <li>Weak: “How I improved my X workflow.”</li>
          <li>
            Strong: “Used to: 90 minutes per blog → thread. Now: 12 minutes
            draft, 15 minutes edit, ship same day.”
          </li>
        </ul>

        <h2>Pattern 5: “Most people do X. Here is Y.”</h2>
        <p>
          Call out the default behavior your reader is stuck in. Then pivot.
          Works well for educational threads aimed at marketers and founders.
        </p>
        <ul>
          <li>Weak: “Thread writing best practices.”</li>
          <li>
            Strong: “Most teams post the blog link once and move on. The teams
            that win treat the blog as raw material, not the finished asset.”
          </li>
        </ul>

        <h2>What to cut from tweet one</h2>
        <ul>
          <li>“Thread 🧵” as the only hook — the emoji is not doing the work.</li>
          <li>“In this thread I will cover…” — just start covering it.</li>
          <li>Hashtag stacks. One relevant tag at the end is enough.</li>
          <li>Apologies (“long thread ahead”). If it is long, make it worth it.</li>
        </ul>

        <h2>Write the hook last</h2>
        <p>
          Draft the middle first. Once you know the best proof point, go back and
          rewrite tweet one around that. The hook should promise the payoff you
          actually deliver in tweets 4–7 — not a bigger promise than the thread
          can keep.
        </p>
      </GuideLayout>
    );
  }
};
