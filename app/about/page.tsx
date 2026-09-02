import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "About",
  description:
    "Learn what Blog2Thread is: a free AI tool that turns blog posts into ready-to-post Twitter/X threads.",
  path: "/about/"
});

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="mx-auto w-full max-w-3xl px-4 py-10 md:px-6 md:py-14">
        <h1 className="font-display text-4xl font-semibold tracking-tight text-ink">
          About Blog2Thread
        </h1>
        <div className="prose-guide mt-6 space-y-4">
          <p>
            Blog2Thread is a free AI Twitter/X thread generator for creators who
            already write long-form content. Paste a blog URL or article text,
            get a hook-led thread, then copy or export and post.
          </p>
          <p>
            Our focus is simple: one clear job — turn blogs into threads —
            without forcing you through accounts, bloated suites, or prompt
            gymnastics.
          </p>
          <p>
            Start on the{" "}
            <Link href="/" className="font-semibold text-brand hover:underline">
              Twitter Thread Generator
            </Link>
            , or read{" "}
            <Link
              href="/guides/how-to-make-a-thread-on-twitter/"
              className="font-semibold text-brand hover:underline"
            >
              how to make a thread on Twitter
            </Link>
            .
          </p>
          <p>
            Questions? Email{" "}
            <a
              href="mailto:hello@blog2thread.com"
              className="font-semibold text-brand hover:underline"
            >
              hello@blog2thread.com
            </a>
            .
          </p>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
