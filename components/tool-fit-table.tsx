import Link from "next/link";
import { AFFILIATE_LINKS } from "@/lib/affiliates";

const typefully = AFFILIATE_LINKS.find((l) => l.name === "Typefully")!;
const hypefury = AFFILIATE_LINKS.find((l) => l.name === "Hypefury")!;
const tweetHunter = AFFILIATE_LINKS.find((l) => l.name === "Tweet Hunter")!;

/** Honest draft-vs-distribution table for guide footers. */
export function ToolFitTable() {
  return (
    <section className="not-prose mt-10">
      <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">
        Which tool fits your stage
      </h2>
      <div className="mt-4 overflow-x-auto rounded-xl border border-line">
        <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-line bg-mist/80">
              <th className="px-4 py-3 font-semibold text-ink">If you want…</th>
              <th className="px-4 py-3 font-semibold text-ink">Use</th>
            </tr>
          </thead>
          <tbody className="text-ink/75">
            <tr className="border-b border-line">
              <td className="px-4 py-3">
                Free draft from any URL or paste, no login
              </td>
              <td className="px-4 py-3 font-semibold text-ink">
                <Link href="/" className="text-brand hover:underline">
                  Blog2Thread
                </Link>{" "}
                (this site)
              </td>
            </tr>
            <tr className="border-b border-line">
              <td className="px-4 py-3">
                Queue threads, auto-post at best time, multiple accounts
              </td>
              <td className="px-4 py-3">
                <a
                  href={typefully.href}
                  target="_blank"
                  rel="sponsored noopener noreferrer"
                  className="font-semibold text-brand hover:underline"
                >
                  Typefully
                </a>
              </td>
            </tr>
            <tr className="border-b border-line">
              <td className="px-4 py-3">
                Recycle evergreen tweets + LinkedIn + carousels
              </td>
              <td className="px-4 py-3">
                <a
                  href={hypefury.href}
                  target="_blank"
                  rel="sponsored noopener noreferrer"
                  className="font-semibold text-brand hover:underline"
                >
                  Hypefury
                </a>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3">
                AI that leans on past threads / viral libraries
              </td>
              <td className="px-4 py-3">
                <a
                  href={tweetHunter.href}
                  target="_blank"
                  rel="sponsored noopener noreferrer"
                  className="font-semibold text-brand hover:underline"
                >
                  Tweet Hunter
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm leading-6 text-ink/65">
        Blog2Thread handles the <em>draft</em>. These tools handle{" "}
        <em>distribution</em>. Most power users run both. Full write-up:{" "}
        <Link
          href="/best-ai-twitter-thread-generator/"
          className="font-semibold text-brand hover:underline"
        >
          best AI Twitter thread generators compared
        </Link>
        .
      </p>
    </section>
  );
}
