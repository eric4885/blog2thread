import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ThreadGenerator } from "@/components/thread-generator";
import { SITE_URL } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Blog to Tweet Converter — Turn Articles into Viral Tweets Free",
  description:
    "Turn any blog post into a single powerful tweet with AI. Copy-paste your article URL and get a tweet-ready summary in seconds.",
  path: "/blog-to-tweet/",
  ogTitle: "Blog to Tweet Converter — Turn Articles into Viral Tweets Free"
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Blog to Tweet Converter",
  applicationCategory: "WebApplication",
  operatingSystem: "Web",
  description: "Turn any blog post into a single powerful tweet with AI.",
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
            Blog to Tweet — Turn Your Article into a Single Viral Tweet
          </h1>
          <p className="mt-4 text-base leading-7 text-ink/70">
            The fastest blog to tweet converter online. Paste your article URL
            or text and get one scroll-stopping tweet — free, no login, ready to
            post on X.
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
              p: "Paste a blog URL or the article body. AI pulls the sharpest angle and rewrites it as one punchy tweet under 280 characters."
            },
            {
              h: "Features",
              p: "URL fetch, tone-ready hooks, no hashtag spam, one-click copy, and optional PDF/Markdown export for your content calendar."
            },
            {
              h: "FAQ",
              p: "Need a full thread instead of one tweet? Use our Twitter Thread Generator on the homepage — same engine, multi-tweet output."
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
            Want a complete thread?
          </h2>
          <p className="mt-2 text-sm leading-6 text-ink/75">
            A single tweet is great for reach. A full thread wins bookmarks and
            profile visits. Try our complete{" "}
            <Link href="/" className="font-semibold text-brand hover:underline">
              Twitter Thread Generator
            </Link>{" "}
            — turn any blog post into an X thread in seconds.
          </p>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
