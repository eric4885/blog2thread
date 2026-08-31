import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ThreadGenerator } from "@/components/thread-generator";
import { CURRENT_YEAR, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: `AI Thread Generator — Create Twitter/X Threads from Any Topic (${CURRENT_YEAR})`,
  description:
    "Generate engaging Twitter threads from any topic with AI. Just enter your topic, get 5-15 tweets ready to post. Free, no login.",
  alternates: { canonical: "/ai-thread-generator" }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "AI Thread Generator",
  applicationCategory: "WebApplication",
  operatingSystem: "Web",
  description: "Generate engaging Twitter/X threads from any topic with AI.",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  url: `${SITE_URL}/ai-thread-generator`
};

export default function AiThreadGeneratorPage() {
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
            AI Thread Generator — Create Engaging X Threads Instantly
          </h1>
          <p className="mt-4 text-base leading-7 text-ink/70">
            The best AI thread generator for X creators. Enter any topic and get
            5–15 ready-to-post tweets with a strong hook — free, no login,
            built for {CURRENT_YEAR}.
          </p>
        </section>

        <ThreadGenerator
          mode="topic"
          showUrlInput={false}
          compact
          title="Generate from a topic"
          subtitle="Describe the idea in one sentence. We’ll expand it into a full thread."
          placeholder="e.g. 7 mistakes founders make when posting threads that kill reach"
        />

        <section className="mt-12 grid gap-8 md:grid-cols-3">
          {[
            {
              h: "How It Works",
              p: "Type a topic, angle, or outline. The AI thread generator builds a hook, supporting tweets, and a closing CTA."
            },
            {
              h: "Features",
              p: "5–15 tweets, numbered structure, character-safe lines, copy-all, Markdown export, and PDF export."
            },
            {
              h: "FAQ",
              p: "Already have a published blog? Use the homepage Twitter Thread Generator with URL paste for higher accuracy."
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
            Prefer starting from a blog post?
          </h2>
          <p className="mt-2 text-sm leading-6 text-ink/75">
            Topic mode is perfect for ideation. For published articles, our{" "}
            <Link href="/" className="font-semibold text-brand hover:underline">
              Twitter Thread Generator
            </Link>{" "}
            converts the full post into a denser, source-faithful thread.
          </p>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
