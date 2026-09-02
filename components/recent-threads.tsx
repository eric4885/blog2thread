import Link from "next/link";
import { listRecentThreads } from "@/lib/store";

export async function RecentThreads() {
  const items = await listRecentThreads(8);

  return (
    <section className="mt-14">
      <h2 className="font-display text-2xl font-semibold text-ink">
        Recent threads
      </h2>
      <p className="mt-2 max-w-2xl text-sm leading-6 text-ink/65">
        Fresh drafts people saved to share. Public links are{" "}
        <strong>noindex</strong> — built for social sharing, not search spam.
      </p>
      {items.length === 0 ? (
        <p className="mt-5 rounded-2xl border border-dashed border-line bg-white/60 px-5 py-8 text-sm text-ink/55">
          No shared threads yet. Generate one above, then hit{" "}
          <strong>Save &amp; share link</strong>.
        </p>
      ) : (
        <ul className="mt-5 grid gap-3 md:grid-cols-2">
          {items.map((item) => (
            <li key={item.id}>
              <Link
                href={`/thread/${item.id}/`}
                className="block rounded-2xl border border-line bg-white/90 p-4 transition hover:border-brand/40 hover:bg-brand-soft/40"
              >
                <p className="line-clamp-2 text-sm font-medium leading-6 text-ink">
                  {item.preview}
                </p>
                <p className="mt-2 text-xs text-ink/45">
                  {new Date(item.createdAt).toLocaleString()} · {item.mode}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
