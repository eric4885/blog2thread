import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ThreadGenerator } from "@/components/thread-generator";
import { CURRENT_YEAR } from "@/lib/site";
import type { GuideMeta } from "@/lib/guides/types";

type Props = {
  guide: GuideMeta;
  intro: string;
  children: React.ReactNode;
  showGenerator?: boolean;
};

export function GuideLayout({
  guide,
  intro,
  children,
  showGenerator = true
}: Props) {
  const jsonLd = guide.howToSteps?.length
    ? {
        "@context": "https://schema.org",
        "@type": "HowTo",
        name: guide.title,
        description: guide.description,
        step: guide.howToSteps.map((s) => ({
          "@type": "HowToStep",
          name: s.name,
          text: s.text
        }))
      }
    : {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: guide.title,
        description: guide.description
      };

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader />
      <main className="mx-auto w-full max-w-3xl px-4 py-10 md:px-6 md:py-14">
        <article className="prose-guide">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brand">
            {guide.eyebrow || "Guide"} · {CURRENT_YEAR}
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-ink md:text-5xl">
            {guide.title}
          </h1>
          <p className="mt-5 text-base leading-7 text-ink/75">{intro}</p>
          {children}

          {showGenerator ? (
            <div className="my-10 rounded-2xl border border-brand/20 bg-brand-soft/70 p-6">
              <h2 className="!mt-0 text-xl font-semibold text-ink">
                Try it on your own post
              </h2>
              <p className="mt-2 text-sm leading-6 text-ink/75">
                Paste a blog URL or article text into{" "}
                <Link href="/" className="font-semibold text-brand hover:underline">
                  Blog2Thread
                </Link>{" "}
                and get a numbered draft in under a minute. Edit the hook, keep
                what sounds like you, delete the rest.
              </p>
              <div className="mt-5">
                <ThreadGenerator
                  mode="thread"
                  showUrlInput
                  compact
                  title="Generate a draft"
                  subtitle="Free · no sign-up"
                />
              </div>
            </div>
          ) : null}

          <hr className="my-10 border-line" />
          <p className="text-sm text-ink/60">
            More guides:{" "}
            <Link href="/guides/" className="font-semibold text-brand hover:underline">
              all thread playbooks
            </Link>
            {" · "}
            <Link href="/" className="font-semibold text-brand hover:underline">
              Thread Generator
            </Link>
          </p>
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}
