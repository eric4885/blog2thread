import Link from "next/link";
import { CURRENT_YEAR, SITE_NAME, SITE_URL } from "@/lib/site";

const productLinks = [
  { href: "/", label: "Twitter Thread Generator" },
  { href: "/blog-to-tweet/", label: "Blog to Tweet" },
  { href: "/ai-thread-generator/", label: "AI Thread Generator" },
  { href: "/blog-to-twitter-thread/", label: "Blog to Twitter Thread" },
  { href: "/tools/thread-to-pdf/", label: "Thread to PDF" }
] as const;

const resourceLinks = [
  {
    href: "/guides/how-to-make-a-thread-on-twitter/",
    label: "How to Make a Thread on Twitter"
  },
  { href: "/about/", label: "About" }
] as const;

const legalLinks = [
  { href: "/privacy/", label: "Privacy Policy" },
  { href: "/terms/", label: "Terms of Service" },
  { href: "mailto:hello@blog2thread.com", label: "Contact" }
] as const;

export function SiteFooter() {
  return (
    <footer className="border-t border-line/80 bg-white/70">
      <div className="mx-auto w-full max-w-6xl px-4 py-12 md:px-6">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link href="/" className="logo-brand text-lg">
              <span className="logo-blog">blog</span>
              <span className="logo-arrow" aria-hidden="true">
                →
              </span>
              <span className="logo-thread">thread</span>
            </Link>
            <p className="mt-4 text-sm leading-6 text-ink/65">
              {SITE_NAME} turns long-form blogs into ready-to-post X threads —
              free, no sign-up, built for creators who already did the writing.
            </p>
            <p className="mt-3 text-xs text-ink/45">{SITE_URL.replace("https://", "")}</p>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-ink">
              Product
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-ink/65">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-brand">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-ink">
              Resources
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-ink/65">
              {resourceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-brand">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-ink">
              Legal
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-ink/65">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-brand">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-line/80 pt-6 text-xs text-ink/50 md:flex-row md:items-center md:justify-between">
          <p>
            © {CURRENT_YEAR} {SITE_NAME}. All rights reserved.
          </p>
          <p>Free AI Twitter/X thread generator — no login required.</p>
        </div>
      </div>
    </footer>
  );
}
