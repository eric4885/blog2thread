import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ThreadGenerator } from "@/components/thread-generator";
import { SITE_URL } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Blog to Tweet Converter — Free",
  description:
    "Blog to tweet: turn any article into one scroll-stopping X post — not a full thread. Free, no login. For multi-tweet threads, use Blog to Twitter Thread instead.",
  path: "/blog-to-tweet/",
  ogTitle: "Blog to Tweet Converter — Free"
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Blog to Tweet Converter",
  applicationCategory: "WebApplication",
  operatingSystem: "Web",
  description:
    "Turn any blog post into a single powerful tweet with AI — not a multi-tweet thread.",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  url: `${SITE_URL}/blog-to-tweet/`
};

export default function BlogToTweetPage() {
  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader />
      <main className="mx-auto w-full max-w-6xl px-4 py-10 md:px-6 md:py-14">
        <section className="mb-8 max-w-3xl">
          <h1 className="font-display text-4xl font-semibold tracking-tight text-ink md:text-5xl">
            Blog to Tweet — One Post, Not a Full Thread
          </h1>
          <p className="mt-4 text-base leading-7 text-ink/70">
            This page is for a <strong>single</strong> X post: newsletter CTAs,
            launch teasers, and one-insight distribution. Paste a blog URL or
            text and get one tweet under 280 characters — free, no login.
          </p>
          <p className="mt-3 text-sm leading-6 text-ink/65">
            Need a multi-tweet narrative instead? Use{" "}
            <Link
              href="/blog-to-twitter-thread/"
              className="font-semibold text-brand hover:underline"
            >
              Blog to Twitter Thread
            </Link>{" "}
            or the homepage{" "}
            <Link href="/" className="font-semibold text-brand hover:underline">
              Twitter Thread Generator
            </Link>
            . Not sure which?{" "}
            <Link
              href="/guides/thread-vs-single-tweet/"
              className="font-semibold text-brand hover:underline"
            >
              Thread vs single tweet
            </Link>
            .
          </p>
        </section>

        <ThreadGenerator
          mode="tweet"
          showUrlInput
          compact
          title="Generate your tweet"
          subtitle="Best for newsletter CTAs, launch posts, and single-insight distribution."
        />

        <section className="mt-12 grid gap-8 md:grid-cols-3">
          {[
            {
              h: "How It Works",
              p: "Paste a blog URL or the article body. AI pulls the sharpest angle and rewrites it as one punchy tweet under 280 characters — not a numbered thread."
            },
            {
              h: "When to use this page",
              p: "One insight, one screenshot, or a teaser. If you need steps and proof in sequence, switch to the thread converter."
            },
            {
              h: "What you edit",
              p: "Rewrite the first line in your voice. Drop hashtag stacks. Keep one idea — if you need three, you wanted a thread."
            }
          ].map((item) => (
            <div key={item.h} className="rounded-2xl border border-line bg-white/80 p-5">
              <h2 className="text-lg font-semibold text-ink">{item.h}</h2>
              <p className="mt-2 text-sm leading-6 text-ink/70">{item.p}</p>
            </div>
          ))}
        </section>

        <section className="mt-12 max-w-3xl space-y-4 text-sm leading-6 text-ink/75">
          <h2 className="text-xl font-semibold text-ink">Example output shape</h2>
          <p>
            From a blog about cutting onboarding tickets, a good single tweet
            looks like:
          </p>
          <blockquote className="rounded-xl border border-line bg-white/90 px-4 py-3 text-ink/80">
            We cut support tickets 40% by rewriting one onboarding email — not the
            whole sequence. Email #3 was the leak. Notes ↓
          </blockquote>
          <p>
            That is one post. A thread would show the old email, the new
            structure, and the measurement window — use{" "}
            <Link
              href="/blog-to-twitter-thread/"
              className="font-semibold text-brand hover:underline"
            >
              Blog to Twitter Thread
            </Link>{" "}
            for that.
          </p>

          <h2 className="pt-4 text-xl font-semibold text-ink">FAQ</h2>
          <h3 className="font-semibold text-ink">
            Can the tweet go over 280 characters?
          </h3>
          <p>
            No — the converter targets a single post under the limit. If the draft
            feels cramped, you probably need a thread, not a longer tweet.
          </p>
          <h3 className="font-semibold text-ink">
            Can I generate multiple versions at once?
          </h3>
          <p>
            Run it again with a tighter paste (just the key paragraph) or change
            the angle by hand. There is no multi-variant batch on this free path.
          </p>
          <h3 className="font-semibold text-ink">
            Is this the same as the homepage thread tool?
          </h3>
          <p>
            No. Homepage / Blog to Twitter Thread = multi-tweet. This page = one
            tweet. See{" "}
            <Link
              href="/guides/thread-vs-single-tweet/"
              className="font-semibold text-brand hover:underline"
            >
              thread vs single tweet
            </Link>
            .
          </p>
        </section>

        <section className="mt-12 rounded-2xl border border-line bg-brand-soft/50 p-6">
          <h2 className="text-xl font-semibold text-ink">
            Want a complete thread instead?
          </h2>
          <p className="mt-2 text-sm leading-6 text-ink/75">
            A single tweet is great for reach. A full thread wins bookmarks and
            profile visits. Try{" "}
            <Link
              href="/blog-to-twitter-thread/"
              className="font-semibold text-brand hover:underline"
            >
              Blog to Twitter Thread
            </Link>{" "}
            or the{" "}
            <Link href="/" className="font-semibold text-brand hover:underline">
              Twitter Thread Generator
            </Link>{" "}
            — same engine, multi-tweet output. Walkthrough:{" "}
            <Link
              href="/guides/how-to-make-a-thread-on-twitter/"
              className="font-semibold text-brand hover:underline"
            >
              how to make a thread on Twitter
            </Link>
            .
          </p>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
