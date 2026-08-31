import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ThreadGenerator } from "@/components/thread-generator";
import { CURRENT_YEAR, SITE_URL } from "@/lib/site";
import { HOME_DESCRIPTION, HOME_TITLE, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: HOME_TITLE,
  description: HOME_DESCRIPTION,
  path: "/"
});

const faqItems = [
  {
    q: "What is a Twitter thread generator?",
    a: "A Twitter thread generator turns long-form ideas into a connected sequence of tweets. Blog2Thread is an AI thread creator optimized for blog posts, newsletters, and articles — so you distribute the piece you already wrote."
  },
  {
    q: "Can I convert a blog post to Twitter thread for free?",
    a: "Yes. You can convert a blog post to a Twitter thread for free — no account, no credit card, and no watermark on the output."
  },
  {
    q: "How long does it take to generate a thread?",
    a: "Usually a few seconds. Longer articles may take a moment while we extract the spine and rewrite each tweet under the character limit."
  },
  {
    q: "Is there a Twitter thread maker with no login?",
    a: "Yes. Blog2Thread is an X thread maker with no login. Paste text or a URL, generate, copy, and post."
  },
  {
    q: "What is the difference between blog-to-tweet and a full thread?",
    a: "Blog to Tweet creates one high-impact post. The homepage thread writing tool builds a multi-tweet narrative with a hook, supporting points, and a closing CTA back to your article."
  },
  {
    q: "Can I start from a topic instead of a published blog?",
    a: "Yes. Use the AI Thread Generator page when you only have an idea. When you already published a post, paste the URL here for a source-faithful draft."
  },
  {
    q: "Is Blog2Thread really free right now?",
    a: "Yes — the core generator is free to use today with no sign-up wall. Pricing may expand later for higher limits; the free workflow stays the default starting path."
  }
];

const softwareJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Twitter Thread Generator",
  applicationCategory: "WebApplication",
  operatingSystem: "Web",
  description:
    "Convert any blog post into an engaging Twitter/X thread with AI.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD"
  },
  url: `${SITE_URL}/`
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a
    }
  }))
};

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <SiteHeader isHome />

      <main className="mx-auto w-full max-w-6xl px-4 py-10 md:px-6 md:py-14">
        <section className="mb-10 max-w-3xl">
          <p className="mb-4">
            <span className="logo-brand text-[1.75rem] md:text-[2rem]">
              <span className="logo-blog">blog</span>
              <span className="logo-arrow" aria-hidden="true">
                →
              </span>
              <span className="logo-thread">thread</span>
            </span>
          </p>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-brand">
            Free · No sign-up · #{CURRENT_YEAR} best pick
          </p>
          <p className="font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
            Turn Any Blog Post into an X Thread
          </p>
          <p className="mt-5 text-base leading-7 text-ink/70 md:text-lg">
            The <strong>best</strong> free AI thread creator for X —{" "}
            <strong>no sign-up required</strong>. Paste a blog URL or article
            text and get a ready-to-post thread in seconds, without rewriting by
            hand.
          </p>
        </section>

        <div id="generator">
          <ThreadGenerator showUrlInput />
        </div>

        <section className="mt-14 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-semibold text-ink">
              How It Works
            </h2>
            <ol className="mt-4 space-y-3 text-sm leading-6 text-ink/75 md:text-base">
              <li>
                <strong>1. Paste</strong> — Drop in your blog URL or the full
                article text. Blog2Thread reads the real argument, not just the
                headline.
              </li>
              <li>
                <strong>2. Generate</strong> — Our thread writing tool rebuilds
                the post as a hook-led X thread with one idea per tweet.
              </li>
              <li>
                <strong>3. Copy</strong> — Preview every tweet, copy the full
                thread, or export PDF/Markdown and post in seconds.
              </li>
            </ol>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-ink">
              Best X Thread Maker for Long-Form Writers
            </h2>
            <p className="mt-4 text-sm leading-6 text-ink/75 md:text-base">
              Looking for an X thread maker that keeps your blog&apos;s spine?
              Blog2Thread is built for founders and marketers who already wrote
              the long-form piece — and need distribution, not another blank
              page. <strong>More accurate</strong> than generic chat prompts.{" "}
              <strong>Smarter</strong> splitting. <strong>One-click</strong> copy
              and export.
            </p>
          </div>
        </section>

        <section className="mt-14">
          <h2 className="font-display text-2xl font-semibold text-ink">
            Use Cases
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-ink/70 md:text-base">
            One long-form asset can fund a week of distribution when you turn it
            into platform-native posts. Here is how teams use Blog2Thread in
            practice.
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {[
              {
                h: "Indie founders & builders",
                p: "Ship a product update or build-in-public essay, then convert it into a founder-voice thread the same day. Keep the proof points, cut the SEO padding, and drive replies back to the launch post."
              },
              {
                h: "Content marketers",
                p: "Every SEO article deserves more than one share. Use this AI thread creator to extract the claim, examples, and CTA so your blog keeps earning attention on X without a rewrite marathon."
              },
              {
                h: "Personal brands & creators",
                p: "Newsletters and deep notes rarely travel as links alone. Turn them into a scannable thread writing workflow — hook first, one insight per tweet — so your audience can bookmark the short version."
              },
              {
                h: "Product launches & announcements",
                p: "Launch posts need narrative, not a feature dump. Generate a thread outline from your changelog or landing-page copy, then tighten the first tweet before you schedule."
              }
            ].map((item) => (
              <div
                key={item.h}
                className="rounded-2xl border border-line bg-white/80 p-5"
              >
                <h3 className="text-base font-semibold text-ink">{item.h}</h3>
                <p className="mt-2 text-sm leading-6 text-ink/70">{item.p}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-14">
          <h2 className="font-display text-2xl font-semibold text-ink">
            Features
          </h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {[
              {
                h: "AI-Powered Content Extraction",
                p: "Paste a URL or text. We extract the claim, proof points, and takeaways that deserve a tweet — not filler intros."
              },
              {
                h: "Smart Thread Splitting",
                p: "Every tweet stays under the character limit, numbered, and scannable so readers keep scrolling."
              },
              {
                h: "One-Click Copy & Export",
                p: "Copy the full thread or export Markdown in one click. Ship faster than rewriting by hand."
              },
              {
                h: "PDF/Markdown Export",
                p: "Save any generated thread as PDF or Markdown for archives, clients, and content calendars."
              }
            ].map((item) => (
              <div
                key={item.h}
                className="rounded-2xl border border-line bg-white/80 p-5"
              >
                <h3 className="text-base font-semibold text-ink">{item.h}</h3>
                <p className="mt-2 text-sm leading-6 text-ink/70">{item.p}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-14 rounded-2xl border border-line bg-brand-soft/60 p-6 md:p-8">
          <h2 className="font-display text-2xl font-semibold text-ink">
            Why Use Blog2Thread?
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-ink/75 md:text-base">
            Why Blog2Thread? — <strong>More accurate</strong> than generic free
            tools. <strong>Smarter</strong> structure. <strong>One-click</strong>{" "}
            to copy. Join <strong>10,000+</strong> creators who use Blog2Thread
            to grow on X. Turn long-form work into a{" "}
            <strong>ready-to-post</strong> thread in <strong>seconds</strong> —
            without prompt gymnastics — and keep a CTA that sends readers home.
          </p>
          <p className="mt-4 text-sm leading-6 text-ink/70">
            <strong>Pricing today:</strong> free to start, no login wall. Higher
            limits may come later; the free path stays the default.
          </p>
          <div className="mt-5 flex flex-wrap gap-3 text-sm">
            <Link href="/blog-to-tweet/" className="text-brand hover:underline">
              Blog to Tweet
            </Link>
            <Link
              href="/ai-thread-generator/"
              className="text-brand hover:underline"
            >
              AI Thread Generator
            </Link>
            <Link
              href="/guides/how-to-make-a-thread-on-twitter/"
              className="text-brand hover:underline"
            >
              How to make a thread on Twitter
            </Link>
            <Link
              href="/blog-to-twitter-thread/"
              className="text-brand hover:underline"
            >
              Blog to Twitter Thread
            </Link>
          </div>
        </section>

        <section className="mt-14">
          <h2 className="font-display text-2xl font-semibold text-ink">
            Frequently Asked Questions
          </h2>
          <div className="mt-5 space-y-4">
            {faqItems.map((item) => (
              <div
                key={item.q}
                className="rounded-2xl border border-line bg-white/80 p-5"
              >
                <h3 className="text-base font-semibold text-ink">{item.q}</h3>
                <p className="mt-2 text-sm leading-6 text-ink/70">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-14 rounded-2xl bg-ink px-6 py-10 text-center text-white md:px-10">
          <h2 className="font-display text-2xl font-semibold md:text-3xl">
            Ready to Create Your First Thread?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-white/75 md:text-base">
            Stop rewriting blogs by hand. Use a free X thread maker and ship
            your next thread in seconds.
          </p>
          <a
            href="#generator"
            className="mt-6 inline-flex rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-white hover:bg-orange-600"
          >
            Create Your Thread Now
          </a>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
