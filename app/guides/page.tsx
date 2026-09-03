import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { guides } from "@/lib/guides";
import { CURRENT_YEAR } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "X Thread Guides & Playbooks",
  description:
    "Practical guides for writing Twitter/X threads — hooks, length, CTAs, repurposing blogs, and editing AI drafts without the generic tone.",
  path: "/guides/"
});

export default function GuidesIndexPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="mx-auto w-full max-w-3xl px-4 py-10 md:px-6 md:py-14">
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brand">
          Guides · {CURRENT_YEAR}
        </p>
        <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-ink md:text-5xl">
          Thread playbooks
        </h1>
        <p className="mt-5 text-base leading-7 text-ink/75">
          Short, practical notes on hooks, length, CTAs, and repurposing — written
          for people who already publish blogs and need distribution that does not
          sound like a template.
        </p>

        <ul className="mt-10 space-y-4">
          {guides.map((g) => (
            <li key={g.slug}>
              <Link
                href={`/guides/${g.slug}/`}
                className="block rounded-2xl border border-line bg-white/90 p-5 transition hover:border-brand/40 hover:bg-brand-soft/30"
              >
                <h2 className="text-lg font-semibold text-ink">{g.title}</h2>
                <p className="mt-2 text-sm leading-6 text-ink/65">
                  {g.description}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </main>
      <SiteFooter />
    </div>
  );
}
