import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { guideMetas } from "@/lib/guides/meta";
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
          sound like a template. Start with the full{" "}
          <Link
            href="/guides/how-to-make-a-thread-on-twitter/"
            className="font-semibold text-brand hover:underline"
          >
            how to make a thread on Twitter
          </Link>{" "}
          playbook if you are new to the format.
        </p>

        {(() => {
          const primary = guideMetas.find(
            (g) => g.slug === "how-to-make-a-thread-on-twitter"
          );
          const rest = guideMetas.filter(
            (g) => g.slug !== "how-to-make-a-thread-on-twitter"
          );
          return (
            <>
              {primary ? (
                <div className="mt-10 rounded-2xl border border-brand/30 bg-brand-soft/40 p-5 md:p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-brand">
                    Start here
                  </p>
                  <Link
                    href={`/guides/${primary.slug}/`}
                    className="mt-2 block transition hover:opacity-90"
                  >
                    <h2 className="text-xl font-semibold text-ink md:text-2xl">
                      {primary.title}
                    </h2>
                    <p className="mt-2 text-sm leading-6 text-ink/70">
                      {primary.description}
                    </p>
                  </Link>
                </div>
              ) : null}
              <ul className="mt-6 space-y-4">
                {rest.map((g) => (
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
            </>
          );
        })()}
      </main>
      <SiteFooter />
    </div>
  );
}
