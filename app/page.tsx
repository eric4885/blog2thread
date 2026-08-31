import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ThreadGenerator } from "@/components/thread-generator";
import { CURRENT_YEAR, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: `Twitter Thread Generator — Turn Blog Posts into X Threads Free (${CURRENT_YEAR})`,
  description:
    "Convert any blog post into an engaging Twitter/X thread with AI. Paste your article URL or text, get a ready-to-post thread instantly. No sign-up required.",
  alternates: { canonical: "/" }
};

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
  mainEntity: [
    {
      "@type": "Question",
      name: "What is a Twitter thread generator?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A Twitter thread generator turns long-form content into a sequence of connected tweets ready to post on X. Blog2Thread is the best free Twitter thread maker — paste a blog or URL and get a complete thread in seconds."
      }
    },
    {
      "@type": "Question",
      name: "Can I convert a blog post to Twitter thread for free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Blog2Thread lets you convert a blog post to a Twitter thread for free, with no sign-up and no login required."
      }
    },
    {
      "@type": "Question",
      name: "How long does it take to generate a thread?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most threads generate in a few seconds. Paste your article or URL, click generate, then copy or export."
      }
    },
    {
      "@type": "Question",
      name: "Is there a Twitter thread maker with no login?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Blog2Thread is a Twitter thread maker and thread creator that works with no login. Start free and post immediately."
      }
    }
  ]
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
            The <strong>best</strong> Twitter thread generator —{" "}
            <strong>completely free</strong>, <strong>no sign-up required</strong>.
            Convert any blog post into an engaging Twitter/X thread with AI.
            Paste your article URL or text and get a ready-to-post thread
            instantly.
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
                <strong>2. Generate</strong> — AI rebuilds the post as a hook-led
                X thread with one idea per tweet and clean 280-character pacing.
              </li>
              <li>
                <strong>3. Copy</strong> — Preview every tweet, copy the full
                thread, or export PDF/Markdown and post in seconds.
              </li>
            </ol>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-ink">
              Best Twitter Thread Maker &amp; Creator
            </h2>
            <p className="mt-4 text-sm leading-6 text-ink/75 md:text-base">
              Looking for a Twitter thread maker, thread creator, or thread
              writer that actually keeps your blog&apos;s spine? Blog2Thread is
              built for founders and marketers who already wrote the long-form
              piece — and need distribution, not another blank page.{" "}
              <strong>More accurate</strong> than generic chat prompts.{" "}
              <strong>Smarter</strong> thread splitting. <strong>One-click</strong>{" "}
              copy and export.
            </p>
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
            Why Blog2Thread? — <strong>More accurate</strong> than any other
            free tool. <strong>Smarter</strong> thread splitting.{" "}
            <strong>One-click</strong> to copy. Join{" "}
            <strong>10,000+</strong> creators who use Blog2Thread to grow their
            Twitter audience. Turn any blog post into a <strong>viral</strong>{" "}
            thread in <strong>seconds</strong>. Convert a blog post to Twitter
            thread without ChatGPT prompt gymnastics — and keep a CTA that
            sends readers back to your article.
          </p>
          <div className="mt-5 flex flex-wrap gap-3 text-sm">
            <Link href="/blog-to-tweet" className="text-brand hover:underline">
              Blog to Tweet
            </Link>
            <Link
              href="/ai-thread-generator"
              className="text-brand hover:underline"
            >
              AI Thread Generator
            </Link>
            <Link
              href="/guides/how-to-make-a-thread-on-twitter"
              className="text-brand hover:underline"
            >
              How to make a thread on Twitter
            </Link>
            <Link
              href="/blog-to-twitter-thread"
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
            {[
              {
                q: "What is a Twitter thread generator?",
                a: "A Twitter thread generator turns long-form ideas into a connected sequence of tweets. Blog2Thread is an AI Twitter thread generator and thread creator optimized for blog posts, newsletters, and articles."
              },
              {
                q: "Can I convert a blog post to Twitter thread for free?",
                a: "Yes. You can convert a blog post to a Twitter thread for free — no account, no credit card, no watermark on the output."
              },
              {
                q: "How long does it take to generate a thread?",
                a: "Usually a few seconds. Longer articles may take a moment while we extract the spine and rewrite each tweet."
              },
              {
                q: "Is there a Twitter thread maker with no login?",
                a: "Yes. Blog2Thread is a Twitter thread maker with no login. Paste, generate, copy, post."
              }
            ].map((item) => (
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
            Stop rewriting blogs by hand. Use the #1 free Twitter thread
            generator and ship your next thread in seconds.
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
