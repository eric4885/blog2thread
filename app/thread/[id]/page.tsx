import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { EmailCapture } from "@/components/email-capture";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ThreadActions } from "@/components/thread-actions";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import { getThread } from "@/lib/store";
import { splitThreadLines } from "@/lib/export";

type PageProps = {
  params: Promise<{ id: string }>;
};

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const thread = await getThread(id);
  if (!thread) {
    return { title: "Thread not found", robots: { index: false, follow: false } };
  }

  const title = thread.preview.slice(0, 60) || "Shared thread";
  return {
    title,
    description: `Shared X thread draft from ${SITE_NAME}.`,
    robots: { index: false, follow: false },
    alternates: { canonical: `/thread/${id}/` },
    openGraph: {
      title,
      description: `Shared X thread draft from ${SITE_NAME}.`,
      url: `${SITE_URL}/thread/${id}/`,
      images: ["/og-image.png"]
    }
  };
}

export default async function SharedThreadPage({ params }: PageProps) {
  const { id } = await params;
  const thread = await getThread(id);
  if (!thread) notFound();

  const lines = splitThreadLines(thread.text);
  const shareUrl = `${SITE_URL}/thread/${thread.id}/`;

  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="mx-auto w-full max-w-3xl px-4 py-10 md:px-6 md:py-14">
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brand">
          Shared thread · not indexed
        </p>
        <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
          Ready-to-post X thread
        </h1>
        <p className="mt-3 text-sm leading-6 text-ink/65">
          Generated with {SITE_NAME}. Copy, export, or post to X — then keep
          creating from your next blog.
        </p>

        <div className="mt-6">
          <ThreadActions text={thread.text} shareUrl={shareUrl} mode={thread.mode} />
        </div>

        <div className="mt-6 space-y-3">
          {lines.map((line, index) => (
            <article
              key={`${index}-${line.slice(0, 24)}`}
              className="rounded-xl border border-line bg-white/90 px-4 py-3 text-sm leading-6 text-ink shadow-panel"
            >
              {line}
            </article>
          ))}
        </div>

        <div className="mt-8">
          <EmailCapture
            heading="Get product updates"
            blurb="Drop your email for occasional product updates. No account required."
          />
        </div>

        <section className="mt-10 rounded-2xl border border-line bg-white/80 p-5">
          <h2 className="text-lg font-semibold text-ink">Keep going</h2>
          <ul className="mt-3 space-y-2 text-sm text-ink/70">
            <li>
              <Link href="/" className="font-semibold text-brand hover:underline">
                Twitter Thread Generator
              </Link>{" "}
              — turn another blog into a thread
            </li>
            <li>
              <Link
                href="/blog-to-tweet/"
                className="font-semibold text-brand hover:underline"
              >
                Blog to Tweet
              </Link>{" "}
              — one high-impact post
            </li>
            <li>
              <Link
                href="/tools/thread-to-pdf/"
                className="font-semibold text-brand hover:underline"
              >
                Export to PDF
              </Link>{" "}
              — archive this draft
            </li>
            <li>
              <Link
                href="/guides/how-to-make-a-thread-on-twitter/"
                className="font-semibold text-brand hover:underline"
              >
                How to make a thread on Twitter
              </Link>
            </li>
          </ul>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
