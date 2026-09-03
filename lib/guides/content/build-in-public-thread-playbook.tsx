import { GuideLayout } from "@/components/guide-layout";
import type { GuideEntry } from "@/lib/guides/types";

export const guide: GuideEntry = {
  slug: "build-in-public-thread-playbook",
  title: "Build-in-Public Threads That Do Not Feel Cringe",
  description:
    "What to share after you ship, what to leave out, and how to write founder update threads people actually finish reading.",
  Content: function BuildInPublicContent() {
    return (
      <GuideLayout
        guide={guide}
        intro="Build in public works when you share receipts, not vibes. The threads that perform are specific about what shipped, what broke, and what you would repeat — not hourly motivation quotes."
      >
        <h2>Good thread material</h2>
        <ul>
          <li>What you shipped this week (with a screenshot or metric)</li>
          <li>One decision you reversed and why</li>
          <li>A user quote that changed your roadmap</li>
          <li>Something you tried that failed in a measurable way</li>
        </ul>

        <h2>Skip these — even if other founders post them</h2>
        <ul>
          <li>“Day 47 of building…” with no new information</li>
          <li>Revenue screenshots without context (or with obvious vanity metrics)</li>
          <li>Threads that are just a list of tools you use</li>
          <li>Fake vulnerability (“I was scared to post this”) as the whole hook</li>
        </ul>

        <h2>Structure that reads honest</h2>
        <ol>
          <li>Hook: one concrete outcome or surprise from the week</li>
          <li>Context: what you were trying to do (two tweets max)</li>
          <li>What happened: numbers, screenshots, user reactions</li>
          <li>What you are doing next — and what you are explicitly not doing</li>
          <li>Ask: one question you genuinely want answered</li>
        </ol>

        <h2>Turn your launch blog into the thread</h2>
        <p>
          Founders often write a long launch post, then tweet “we launched!” once.
          The launch post already has the spine — ship date, problem, solution,
          early signal. Thread that instead of rewriting from zero.
        </p>

        <h2>Frequency</h2>
        <p>
          Weekly is enough if each thread has news. If nothing shipped, a single
          tweet beats a thread full of filler. Your timeline is not a diary
          obligation.
        </p>
      </GuideLayout>
    );
  }
};
