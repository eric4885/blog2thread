import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ThreadGenerator } from "@/components/thread-generator";
import {
  AFFILIATE_LINKS,
  COMPARISON_LINKS,
  getAffiliate
} from "@/lib/affiliates";
import { CURRENT_YEAR, SITE_NAME, SITE_URL } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Best AI Thread Generators 2026",
  description:
    "Honest comparison of the best AI Twitter/X thread generators — free no-login drafts vs schedule, voice, and recycle tools. Pick by stage, not hype.",
  path: "/best-ai-twitter-thread-generator/",
  ogTitle: `Best AI Twitter/X Thread Generators Compared (${CURRENT_YEAR})`
});

const typefully = getAffiliate("Typefully")!;
const hypefury = getAffiliate("Hypefury")!;
const tweetHunter = getAffiliate("Tweet Hunter")!;

const faqItems = [
  {
    q: "What is the best free AI Twitter thread generator?",
    a: "If you want a no-login draft from a blog URL or pasted text, Blog2Thread is built for that. Paid tools win when you need scheduling, voice memory, or multi-account queues."
  },
  {
    q: "Can AI threads sound non-robotic?",
    a: "Yes — if you edit. Generate a draft, rewrite tweet one in your voice, cut filler, and keep one idea per tweet. AI is a first pass, not a publish button."
  },
  {
    q: "What is the ideal Twitter thread length?",
    a: "Most blog-to-thread drafts work at 8–12 tweets. Shorter posts can stay at 5–7; deep essays may need two threads instead of one long one."
  },
  {
    q: "When should I pay for Typefully, Hypefury, or Tweet Hunter?",
    a: "Pay when distribution is the bottleneck: you already draft fast but need queues, evergreen recycle, or a viral research library. Keep a free drafter for first passes."
  }
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a }
  }))
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: `Best AI Twitter/X Thread Generators Compared (${CURRENT_YEAR})`,
  description:
    "Comparison of free and paid AI tools for turning blogs and topics into X threads.",
  author: { "@type": "Organization", name: SITE_NAME },
  url: `${SITE_URL}/best-ai-twitter-thread-generator/`
};

function ExtLink({
  href,
  children,
  sponsored
}: {
  href: string;
  children: ReactNode;
  sponsored?: boolean;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel={
        sponsored
          ? "sponsored noopener noreferrer"
          : "noopener noreferrer"
      }
      className="font-semibold text-brand hover:underline"
    >
      {children}
    </a>
  );
}

export default function BestAiThreadGeneratorPage() {
  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <SiteHeader />
      <main className="mx-auto w-full max-w-3xl px-4 py-10 md:px-6 md:py-14">
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brand">
          Comparison · {CURRENT_YEAR}
        </p>
        <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-ink md:text-5xl">
          Best AI Twitter/X Thread Generators Compared ({CURRENT_YEAR})
        </h1>
        <p className="mt-5 text-base leading-7 text-ink/75">
          Free, paid, and no-login options for turning blogs into threads. This
          page is for people searching{" "}
          <em>best AI twitter thread generator</em> or{" "}
          <em>BlogTweet alternative</em> — not another how-to. We built{" "}
          <Link href="/" className="font-semibold text-brand hover:underline">
            Blog2Thread
          </Link>{" "}
          ourselves, so we say where we win and where you should use something
          else.
        </p>

        <section className="prose-guide mt-10">
          <h2>TL;DR — Which tool fits your stage</h2>
          <ul>
            <li>
              <strong>Occasional free draft from URL or paste, no account:</strong>{" "}
              <Link href="/" className="font-semibold text-brand hover:underline">
                Blog2Thread
              </Link>
            </li>
            <li>
              <strong>Daily writing with schedule + multi-account:</strong>{" "}
              <ExtLink href={typefully.href} sponsored>
                Typefully
              </ExtLink>
            </li>
            <li>
              <strong>Backlog of evergreen posts to recycle:</strong>{" "}
              <ExtLink href={hypefury.href} sponsored>
                Hypefury
              </ExtLink>
            </li>
          </ul>
          <p>
            Most power users draft free, then move winners into a scheduler.
            Draft and distribution are different jobs.
          </p>

          <h2>Comparison table</h2>
        </section>

        <div className="mt-4 overflow-x-auto rounded-xl border border-line">
          <table className="w-full min-w-[40rem] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-line bg-mist/80">
                <th className="px-3 py-3 font-semibold text-ink">Tool</th>
                <th className="px-3 py-3 font-semibold text-ink">Input</th>
                <th className="px-3 py-3 font-semibold text-ink">Voice</th>
                <th className="px-3 py-3 font-semibold text-ink">Schedule</th>
                <th className="px-3 py-3 font-semibold text-ink">Free tier</th>
                <th className="px-3 py-3 font-semibold text-ink">Our take</th>
              </tr>
            </thead>
            <tbody className="text-ink/75">
              <tr className="border-b border-line">
                <td className="px-3 py-3 font-medium text-ink">Blog2Thread</td>
                <td className="px-3 py-3">URL, paste, topic</td>
                <td className="px-3 py-3">Edit yourself</td>
                <td className="px-3 py-3">No</td>
                <td className="px-3 py-3">Yes · no login</td>
                <td className="px-3 py-3">Best free first draft</td>
              </tr>
              <tr className="border-b border-line">
                <td className="px-3 py-3 font-medium text-ink">Postory</td>
                <td className="px-3 py-3">URL-heavy</td>
                <td className="px-3 py-3">Trained voice</td>
                <td className="px-3 py-3">Queue</td>
                <td className="px-3 py-3">Limited / paid</td>
                <td className="px-3 py-3">When voice + queue matter</td>
              </tr>
              <tr className="border-b border-line">
                <td className="px-3 py-3 font-medium text-ink">Typefully</td>
                <td className="px-3 py-3">Editor-first</td>
                <td className="px-3 py-3">Your writing</td>
                <td className="px-3 py-3">Strong</td>
                <td className="px-3 py-3">Trial / paid</td>
                <td className="px-3 py-3">Best calm schedule UX</td>
              </tr>
              <tr className="border-b border-line">
                <td className="px-3 py-3 font-medium text-ink">Hypefury</td>
                <td className="px-3 py-3">Library + AI</td>
                <td className="px-3 py-3">Templates</td>
                <td className="px-3 py-3">Auto-recycle</td>
                <td className="px-3 py-3">Paid focus</td>
                <td className="px-3 py-3">Evergreen machines</td>
              </tr>
              <tr className="border-b border-line">
                <td className="px-3 py-3 font-medium text-ink">Tweet Hunter</td>
                <td className="px-3 py-3">Ideas + AI</td>
                <td className="px-3 py-3">AI + library</td>
                <td className="px-3 py-3">Yes</td>
                <td className="px-3 py-3">Paid focus</td>
                <td className="px-3 py-3">Research + virality</td>
              </tr>
              <tr className="border-b border-line">
                <td className="px-3 py-3 font-medium text-ink">BlogTweet</td>
                <td className="px-3 py-3">URL → thread</td>
                <td className="px-3 py-3">Minimal edit</td>
                <td className="px-3 py-3">No</td>
                <td className="px-3 py-3">Often free</td>
                <td className="px-3 py-3">Minimal converter</td>
              </tr>
              <tr>
                <td className="px-3 py-3 font-medium text-ink">Tugan</td>
                <td className="px-3 py-3">Content → social</td>
                <td className="px-3 py-3">Multi-format</td>
                <td className="px-3 py-3">Varies</td>
                <td className="px-3 py-3">Freemium</td>
                <td className="px-3 py-3">Broader repurpose</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-2 text-xs text-ink/50">
          Features change — verify pricing on each site before you buy. Some
          links are affiliate ({AFFILIATE_LINKS.map((l) => l.name).join(", ")}
          ).
        </p>

        <section className="prose-guide mt-10">
          <h2>Blog2Thread — free draft from URL or paste, no login</h2>
          <p>
            <Link href="/" className="font-semibold text-brand hover:underline">
              Blog2Thread
            </Link>{" "}
            is our tool: paste a blog, drop a public URL, or start from a topic.
            You get a numbered X thread, Copy / Markdown / PDF, optional share
            links, and &quot;try another angle&quot; without creating an account.
          </p>
          <p>
            <strong>Wins:</strong> no signup wall, URL + paste + topic, shareable{" "}
            <code>/thread/&#123;id&#125;/</code> drafts (noindex), honest free
            path with daily anonymous caps so the API is not farmed.
          </p>
          <p>
            <strong>Gaps:</strong> no native thread schedule, no voice-training
            from your archive, no multi-account queue. When you need those, move
            the draft into{" "}
            <ExtLink href={typefully.href} sponsored>
              Typefully
            </ExtLink>{" "}
            or{" "}
            <ExtLink href={hypefury.href} sponsored>
              Hypefury
            </ExtLink>
            . Also try{" "}
            <Link
              href="/ai-thread-generator/"
              className="font-semibold text-brand hover:underline"
            >
              topic → thread
            </Link>{" "}
            and{" "}
            <Link
              href="/blog-to-tweet/"
              className="font-semibold text-brand hover:underline"
            >
              blog → single tweet
            </Link>
            .
          </p>

          <h2>Postory — URL ingest + voice-trained + queue</h2>
          <p>
            <ExtLink href={COMPARISON_LINKS.postory}>Postory</ExtLink> leans
            into ingesting URLs and shaping output toward a learned voice, with
            queue-style workflows for people who post often. It is closer to a
            &quot;content system&quot; than a one-shot converter.
          </p>
          <p>
            <strong>Watch for:</strong> pricing and login friction if you only
            need a rare draft. If you already have a blog and just need a first
            pass, start free on Blog2Thread, then graduate when voice memory
            pays for itself.
          </p>

          <h2>Typefully — calm editor, schedule, multi-account</h2>
          <p>
            <ExtLink href={typefully.href} sponsored>
              Typefully
            </ExtLink>{" "}
            is the editor many writers prefer for X: clean thread composing,
            scheduling, and multi-account workflows. It is less &quot;paste any
            URL and go&quot; and more &quot;this is where finished threads
            live.&quot;
          </p>
          <p>
            <strong>Best when:</strong> you already know what to say and need
            calm publishing ops. Pair it with a free generator for first drafts
            so you do not pay just to brainstorm structure.{" "}
            <ExtLink href={typefully.href} sponsored>
              Open Typefully →
            </ExtLink>
          </p>

          <h2>Hypefury — recycle evergreen, auto-retweet</h2>
          <p>
            <ExtLink href={hypefury.href} sponsored>
              Hypefury
            </ExtLink>{" "}
            shines when you have a backlog: evergreen tweets, recycle loops,
            previews, and cross-posting patterns. If your problem is &quot;I
            already wrote good posts and they died after 24 hours,&quot; this is
            the category.
          </p>
          <p>
            <strong>Not ideal when:</strong> you have never written the first
            thread. Draft here first, then recycle winners.{" "}
            <ExtLink href={hypefury.href} sponsored>
              Open Hypefury →
            </ExtLink>
          </p>

          <h2>BlogTweet — minimal URL → thread</h2>
          <p>
            <ExtLink href={COMPARISON_LINKS.blogtweet}>BlogTweet</ExtLink>{" "}
            represents the minimal converter class: URL in, thread out, little
            ceremony. Fine for a quick try; weaker if you need paste-without-URL
            (paywalled posts), topic mode, exports, or share links you control.
          </p>
          <p>
            If you searched for a <em>BlogTweet alternative</em> with paste +
            topic + free no-login drafting, that is the gap Blog2Thread aims at.
          </p>

          <h2>Tweet Hunter — viral library + AI</h2>
          <p>
            <ExtLink href={tweetHunter.href} sponsored>
              Tweet Hunter
            </ExtLink>{" "}
            combines AI writing with a research / viral-tweet library mindset —
            useful when you want inspiration from what already performed, not
            only a rewrite of your blog.
          </p>
          <p>
            <strong>Tradeoff:</strong> heavier product for people living in X
            growth ops. Casual bloggers may overpay for features they will not
            open weekly.{" "}
            <ExtLink href={tweetHunter.href} sponsored>
              Open Tweet Hunter →
            </ExtLink>
          </p>

          <h2>Tugan — broader repurposing</h2>
          <p>
            <ExtLink href={COMPARISON_LINKS.tugan}>Tugan</ExtLink> sits in the
            &quot;one asset → many social formats&quot; lane. Worth a look if
            you need LinkedIn / newsletter variants as much as X threads. For
            X-only drafting from a long blog, a focused thread tool is usually
            faster.
          </p>

          <h2>How to pick based on volume</h2>
          <ul>
            <li>
              <strong>A few posts a month:</strong>{" "}
              <Link href="/" className="font-semibold text-brand hover:underline">
                Blog2Thread
              </Link>{" "}
              + manual post to X. Read{" "}
              <Link
                href="/guides/how-to-make-a-thread-on-twitter/"
                className="font-semibold text-brand hover:underline"
              >
                how to make a thread on Twitter
              </Link>{" "}
              so you still edit the hook.
            </li>
            <li>
              <strong>Daily publishing:</strong> Typefully (or similar) as the
              editor of record; generate drafts elsewhere.
            </li>
            <li>
              <strong>Large backlog:</strong> Hypefury / Postory-style recycle
              and queue after you have proven posts.
            </li>
          </ul>

          <h2>FAQ</h2>
          {faqItems.map((item) => (
            <div key={item.q}>
              <h3>{item.q}</h3>
              <p>{item.a}</p>
            </div>
          ))}
        </section>

        <section className="mt-12 rounded-2xl border border-brand/25 bg-brand-soft/50 p-6">
          <h2 className="font-display text-xl font-semibold text-ink">
            Try the free draft first
          </h2>
          <p className="mt-2 text-sm leading-6 text-ink/70">
            Paste a URL or article, get a numbered thread, then decide if you
            need a scheduler. No signup.
          </p>
          <div className="mt-5">
            <ThreadGenerator
              mode="thread"
              showUrlInput
              compact
              title="Generate a free draft"
              subtitle="URL or paste · free · no login"
            />
          </div>
          <p className="mt-4 text-sm text-ink/60">
            Also:{" "}
            <Link
              href="/ai-thread-generator/"
              className="font-semibold text-brand hover:underline"
            >
              AI Thread Generator
            </Link>
            {" · "}
            <Link
              href="/blog-to-tweet/"
              className="font-semibold text-brand hover:underline"
            >
              Blog to Tweet
            </Link>
            {" · "}
            <Link
              href="/guides/"
              className="font-semibold text-brand hover:underline"
            >
              All guides
            </Link>
          </p>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
