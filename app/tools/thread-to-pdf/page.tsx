import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ThreadGenerator } from "@/components/thread-generator";
import { SITE_URL } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Twitter Thread to PDF — Save Your Thread as PDF",
  description:
    "Save a thread you generate with Blog2Thread as PDF or Markdown. Generate first, then export — no scraping other people’s X threads.",
  path: "/tools/thread-to-pdf/"
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Twitter Thread to PDF",
  applicationCategory: "WebApplication",
  operatingSystem: "Web",
  description: "Save your generated Twitter/X thread as PDF or Markdown.",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  url: `${SITE_URL}/tools/thread-to-pdf/`
};

export default function ThreadToPdfPage() {
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
            Twitter Thread to PDF — Save Your Thread as PDF
          </h1>
          <p className="mt-4 text-base leading-7 text-ink/70">
            Generate a thread with Blog2Thread first, then export it as PDF or
            Markdown in one click. This is not a scraper for other people’s X
            threads — you create the draft here, then save it for archives,
            clients, and content calendars.
          </p>
        </section>

        <ThreadGenerator
          mode="thread"
          showUrlInput
          compact
          title="Generate, then export"
          subtitle="After generation, use Export PDF or Export Markdown under the preview."
        />

        <section className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-line bg-white/80 p-5">
            <h2 className="text-lg font-semibold text-ink">How It Works</h2>
            <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-6 text-ink/70">
              <li>Paste a blog URL or article text.</li>
              <li>Generate your X thread.</li>
              <li>Click Export PDF or Export Markdown.</li>
            </ol>
          </div>
          <div className="rounded-2xl border border-line bg-white/80 p-5">
            <h2 className="text-lg font-semibold text-ink">Need the full tool?</h2>
            <p className="mt-3 text-sm leading-6 text-ink/70">
              PDF export is built into every generator result. Start from the{" "}
              <Link href="/" className="font-semibold text-brand hover:underline">
                Twitter Thread Generator
              </Link>{" "}
              homepage for the complete workflow.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
