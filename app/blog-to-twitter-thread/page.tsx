import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ThreadGenerator } from "@/components/thread-generator";
import { SITE_URL } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Blog to Twitter Thread Converter",
  description:
    "Blog to Twitter thread: convert any article into a multi-tweet X thread (hook + proof + CTA). Free, no login. For a single tweet only, use Blog to Tweet.",
  path: "/blog-to-twitter-thread/"
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Blog to Twitter Thread Converter",
  applicationCategory: "WebApplication",
  operatingSystem: "Web",
  description:
    "Convert any blog post into a multi-tweet Twitter/X thread with AI.",
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
          This page builds a <strong>full X thread</strong> — numbered posts with
          a hook, supporting points, and a close — from a blog URL or pasted
          text. Free, no login. Same engine as the homepage generator.
        </p>
        <p className="mt-3 text-sm leading-6 text-ink/65">
          Only need <strong>one</strong> post? Use{" "}
          <Link
            href="/blog-to-tweet/"
            className="font-semibold text-brand hover:underline"
          >
            Blog to Tweet
          </Link>{" "}
          instead. Decision help:{" "}
          <Link
            href="/guides/thread-vs-single-tweet/"
            className="font-semibold text-brand hover:underline"
          >
            thread vs single tweet
          </Link>
          .
        </p>

        <div className="mt-8">
          <ThreadGenerator
            mode="thread"
            showUrlInput
            compact
            title="Convert your blog into a thread"
            subtitle="Multi-tweet draft — edit the hook before you post."
          />
        </div>

        <section className="mt-10 space-y-4 text-sm leading-6 text-ink/75">
          <h2 className="text-xl font-semibold text-ink">
            What you get on this page
          </h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>A multi-tweet draft (not a single 280-character line).</li>
            <li>Structure aimed at one spine claim — then you cut filler.</li>
            <li>
              Copy / export, then post with X&apos;s Add another post control.
            </li>
          </ul>
          <p>
            Length and posting tips:{" "}
            <Link
              href="/guides/how-many-tweets-in-a-thread/"
              className="font-semibold text-brand hover:underline"
            >
              how many tweets in a thread
            </Link>{" "}
            ·{" "}
            <Link
              href="/guides/how-to-make-a-thread-on-twitter/"
              className="font-semibold text-brand hover:underline"
            >
              how to make a thread on Twitter
            </Link>
            .
          </p>
        </section>

        <p className="mt-8 text-sm leading-6 text-ink/70">
          Prefer the full homepage layout?{" "}
          <Link href="/" className="font-semibold text-brand hover:underline">
            Twitter Thread Generator
          </Link>
          .
        </p>
      </main>
      <SiteFooter />
    </div>
  );
}
