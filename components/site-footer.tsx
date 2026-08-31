import Link from "next/link";
import { CURRENT_YEAR, SITE_NAME } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-line/80 bg-white/60">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-4 py-8 text-sm text-ink/60 md:flex-row md:items-center md:justify-between md:px-6">
        <p>
          © {CURRENT_YEAR} {SITE_NAME}. The best free Twitter thread generator —
          no sign-up required.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link href="/" className="hover:text-brand">
            Thread Generator
          </Link>
          <Link href="/blog-to-tweet" className="hover:text-brand">
            Blog to Tweet
          </Link>
          <Link href="/ai-thread-generator" className="hover:text-brand">
            AI Thread Generator
          </Link>
          <Link
            href="/guides/how-to-make-a-thread-on-twitter"
            className="hover:text-brand"
          >
            How to Make a Thread
          </Link>
        </div>
      </div>
    </footer>
  );
}
