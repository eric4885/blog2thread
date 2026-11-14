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
              h: "FAQ",
              p: "Output is always a single post. For hooks and length guidance on full threads, see our playbooks under Guides."
            }
          ].map((item) => (
            <div key={item.h} className="rounded-2xl border border-line bg-white/80 p-5">
              <h2 className="text-lg font-semibold text-ink">{item.h}</h2>
              <p className="mt-2 text-sm leading-6 text-ink/70">{item.p}</p>
            </div>
          ))}
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
