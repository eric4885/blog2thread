import { GuideLayout } from "@/components/guide-layout";
import type { GuideEntry } from "@/lib/guides/types";

export const guide: GuideEntry = {
  slug: "twitter-thread-cta-that-gets-clicks",
  title: "Thread CTAs That Get Clicks (Without Feeling Salesy)",
  description:
    "How to close a Twitter thread for traffic, follows, or replies — with weak vs strong examples for each goal.",
  Content: function ThreadCtaContent() {
    return (
      <GuideLayout
        guide={guide}
        intro="The last tweet is not an afterthought. It is the receipt for the time people spent reading. Match the CTA to what you actually want — and earn the ask in the tweets before it."
      >
        <h2>Pick one goal per thread</h2>
        <p>
          Traffic, follows, and replies pull in different directions. Mixing all
          three in the final tweet usually means none of them work.
        </p>

        <h2>CTA for traffic (blog, product, waitlist)</h2>
        <p>
          Put the link after value. The thread should stand alone if someone never
          clicks.
        </p>
        <ul>
          <li>
            Weak: “Read the full article here 👇 [link]” (only tweet with substance)
          </li>
          <li>
            Strong: “Full post with templates + the email we used: [link]” (after
            8 tweets of actual breakdown)
          </li>
        </ul>
        <p>
          Reply with the link if you want to keep the main thread clean. Some
          accounts get better click-through that way.
        </p>

        <h2>CTA for follows</h2>
        <ul>
          <li>
            Weak: “Follow for more tips!”
          </li>
          <li>
            Strong: “I thread one shipped feature every Friday — follow if you
            want the messy version, not the press release.”
          </li>
        </ul>
        <p>
          Tell people what they will get next, not that following is good in
          general.
        </p>

        <h2>CTA for replies</h2>
        <ul>
          <li>
            Weak: “What do you think?”
          </li>
          <li>
            Strong: “Are you team ‘thread the whole blog’ or ‘one tweet + link’?
            Genuinely split on this.”
          </li>
        </ul>
        <p>
          Easy questions get answers. Vague questions get likes and silence.
        </p>

        <h2>Where to put the link</h2>
        <ul>
          <li>Last tweet of the thread — classic, works for educational content</li>
          <li>First reply — keeps the thread readable when shared as screenshots</li>
          <li>Bio link — only if the thread names exactly what to click (“link in bio: X”)</li>
        </ul>

        <h2>One mistake that kills clicks</h2>
        <p>
          Hiding the only useful content behind the link. If tweet three says “see
          the blog for the actual framework,” readers feel used. Put the framework
          in the thread. Use the link for depth — templates, code, long examples.
        </p>
      </GuideLayout>
    );
  }
};
