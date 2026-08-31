import Link from "next/link";
import { NAV_LINKS } from "@/lib/site";

type SiteHeaderProps = {
  /** Homepage: logo is H1 with main keyword. Inner pages: Div brand mark. */
  isHome?: boolean;
};

function BrandMark() {
  return (
    <Link href="/" className="logo-brand" aria-label="blog to thread — home">
      <span className="logo-blog">blog</span>
      <span className="logo-arrow" aria-hidden="true">
        →
      </span>
      <span className="logo-thread">thread</span>
    </Link>
  );
}

export function SiteHeader({ isHome = false }: SiteHeaderProps) {
  return (
    <header className="border-b border-line/80 bg-white/70 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-4 md:flex-row md:items-center md:justify-between md:px-6">
        {isHome ? (
          <h1 className="logo logo-home-nav">
            <Link href="/">Twitter Thread Generator</Link>
          </h1>
        ) : (
          <div className="logo">
            <BrandMark />
          </div>
        )}

        <nav className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-ink/70">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition hover:text-[#1D9BF0]"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
