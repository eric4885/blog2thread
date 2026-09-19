import { AFFILIATE_LINKS } from "@/lib/affiliates";

type Props = {
  /** Public share id when Save & share already ran */
  threadId?: string;
};

/**
 * Shown only after a thread exists — below tweet cards, never above Copy CTAs.
 */
export function ResultAffiliate({ threadId }: Props) {
  return (
    <aside className="mt-8 rounded-xl border border-line bg-mist/60 p-5 text-sm">
      <p className="font-semibold text-ink">
        Thread ready? Schedule it, auto-post, or train your voice
      </p>
      <p className="mt-2 text-xs leading-5 text-ink/65">
        Blog2Thread is free and no-login for drafts. To queue this thread, post
        at better times, or keep drafts across devices, pair it with a writing
        tool:
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        {AFFILIATE_LINKS.map((link) => (
          <a
            key={link.name}
            href={link.href}
            target="_blank"
            rel={
              link.sponsored
                ? "sponsored noopener noreferrer"
                : "noopener noreferrer"
            }
            className="inline-flex items-center rounded-lg border border-line bg-white px-3 py-1.5 text-xs font-medium text-ink transition hover:border-brand/40 hover:bg-brand-soft"
          >
            {link.name} — {link.blurb}
          </a>
        ))}
      </div>
      {threadId ? (
        <p className="mt-3 text-xs text-ink/50">
          Or bookmark your draft:{" "}
          <code className="text-ink/70">/thread/{threadId}/</code>
        </p>
      ) : null}
    </aside>
  );
}
