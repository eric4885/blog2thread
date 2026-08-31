import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ThreadGenerator } from "@/components/thread-generator";
import { SITE_URL } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Blog to Twitter Thread Converter — Free AI Tool",
  description:
    "Convert any blog post into a Twitter/X thread with Blog2Thread. Paste your URL or text and get a ready-to-post thread in seconds.",
  path: "/blog-to-twitter-thread/"
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Blog to Twitter Thread Converter",
  applicationCategory: "WebApplication",
  operatingSystem: "Web",
  description: "Convert any blog post into a Twitter/X thread with AI.",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  url: `${SITE_URL}/blog-to-twitter-thread/`
};

export default function BlogToTwitterThreadPage() {
  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader />
      <main className="mx-auto w-full max-w-3xl px-4 py-10 md:px-6 md:py-14">
        <h1 className="font-display text-4xl font-semibold tracking-tight text-ink">
          Blog to Twitter Thread Converter
        </h1>
        <p className="mt-4 text-base leading-7 text-ink/70">
          Blog2Thread is the free blog to Twitter thread converter built for
          creators who write long-form and distribute on X. Paste a blog URL or
          article text, generate a complete thread, then copy or export.
        </p>

        <div className="mt-8">
          <ThreadGenerator
            mode="thread"
            showUrlInput
            compact
            title="Convert your blog now"
          />
        </div>

        <p className="mt-8 text-sm leading-6 text-ink/70">
          For the full feature set, start on the homepage{" "}
          <Link href="/" className="font-semibold text-brand hover:underline">
            Twitter Thread Generator
          </Link>
          . Also try{" "}
          <Link
            href="/blog-to-tweet"
            className="font-semibold text-brand hover:underline"
          >
            Blog to Tweet
          </Link>{" "}
          when you only need one post.
        </p>
      </main>
      <SiteFooter />
    </div>
  );
}
