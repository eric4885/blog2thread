"use client";

import Link from "next/link";
import { useEffect, useMemo, useState, useTransition } from "react";
import { EmailCapture } from "@/components/email-capture";
import { ThreadActions } from "@/components/thread-actions";
import {
  pushGeneratedDraft,
  readDraft,
  writeDraft
} from "@/lib/draft-storage";
import { splitThreadLines } from "@/lib/export";

export type GeneratorMode = "thread" | "tweet" | "topic";

type ThreadGeneratorProps = {
  mode?: GeneratorMode;
  title?: string;
  subtitle?: string;
  placeholder?: string;
  showUrlInput?: boolean;
  compact?: boolean;
};

export function ThreadGenerator({
  mode = "thread",
  title,
  subtitle,
  placeholder,
  showUrlInput = mode !== "topic",
  compact = false
}: ThreadGeneratorProps) {
  const [inputMode, setInputMode] = useState<"text" | "url">(
    showUrlInput ? "text" : "text"
  );
  const [content, setContent] = useState("");
  const [url, setUrl] = useState("");
  const [thread, setThread] = useState("");
  const [previousThread, setPreviousThread] = useState("");
  const [lastSource, setLastSource] = useState("");
  const [shareUrl, setShareUrl] = useState("");
  const [error, setError] = useState("");
  const [draftHint, setDraftHint] = useState(false);
  const [isPending, startTransition] = useTransition();
  const [status, setStatus] = useState("");

  useEffect(() => {
    const draft = readDraft(mode);
    if (!draft?.current) return;
    setDraftHint(true);
    if (draft.previous) setPreviousThread(draft.previous);
    if (draft.source) setLastSource(draft.source);
  }, [mode]);

  const canGenerate = useMemo(() => {
    if (isPending) return false;
    if (showUrlInput && inputMode === "url") return url.trim().length > 8;
    return content.trim().length > 0;
  }, [content, url, inputMode, showUrlInput, isPending]);

  const canRegenerate = Boolean(lastSource.trim()) && !isPending;

  const defaultPlaceholder =
    mode === "topic"
      ? "e.g. How indie founders should repurpose one blog post into a week of X content"
      : mode === "tweet"
        ? "Paste your blog post or article text here..."
        : "Paste your blog post, newsletter, or long-form article here...";

  async function fetchUrlContent(targetUrl: string) {
    const res = await fetch("/api/fetch-url/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: targetUrl })
    });
    const data = (await res.json()) as { text?: string; error?: string };
    if (!res.ok || !data.text) {
      throw new Error(data.error || "Failed to fetch URL.");
    }
    return data.text;
  }

  function applyGenerated(next: string, source: string) {
    const draft = pushGeneratedDraft(mode, next, source, thread || undefined);
    setPreviousThread(draft.previous || "");
    setLastSource(source);
    setThread(next);
    setShareUrl("");
    setDraftHint(false);
  }

  function runGenerate(source: string) {
    setError("");
    startTransition(async () => {
      try {
        setStatus("Generating...");
        const res = await fetch("/api/generate/", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ content: source, mode })
        });
        const data = (await res.json()) as { thread?: string; error?: string };
        if (!res.ok || !data.thread) {
          throw new Error(data.error || "Generation failed. Please try again.");
        }
        applyGenerated(data.thread, source);
        setStatus("");
      } catch (err) {
        setStatus("");
        setError(
          err instanceof Error ? err.message : "Generation failed. Please try again."
        );
      }
    });
  }

  function onGenerate() {
    if (!canGenerate) return;
    startTransition(async () => {
      try {
        setError("");
        let source = content.trim();
        if (showUrlInput && inputMode === "url") {
          setStatus("Fetching article...");
          source = await fetchUrlContent(url.trim());
          setContent(source);
        }
        setStatus("Generating...");
        const res = await fetch("/api/generate/", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ content: source, mode })
        });
        const data = (await res.json()) as { thread?: string; error?: string };
        if (!res.ok || !data.thread) {
          throw new Error(data.error || "Generation failed. Please try again.");
        }
        applyGenerated(data.thread, source);
        setStatus("");
      } catch (err) {
        setStatus("");
        setError(
          err instanceof Error ? err.message : "Generation failed. Please try again."
        );
      }
    });
  }

  function onRegenerate() {
    if (!canRegenerate) return;
    runGenerate(lastSource.trim());
  }

  function onRestorePrevious() {
    if (!previousThread || previousThread === thread) return;
    const swappedCurrent = thread;
    setThread(previousThread);
    setPreviousThread(swappedCurrent);
    setShareUrl("");
    writeDraft({
      mode,
      current: previousThread,
      previous: swappedCurrent || undefined,
      source: lastSource || undefined,
      updatedAt: new Date().toISOString()
    });
    setDraftHint(false);
  }

  function onRestoreLastDraft() {
    const draft = readDraft(mode);
    if (!draft?.current) return;
    setThread(draft.current);
    setPreviousThread(draft.previous || "");
    setLastSource(draft.source || "");
    setShareUrl("");
    setDraftHint(false);
  }

  const lines = splitThreadLines(thread);

  return (
    <section
      className={`rounded-2xl border border-line bg-white/90 shadow-panel ${
        compact ? "p-5" : "p-6 md:p-8"
      }`}
    >
      {(title || subtitle) && (
        <div className="mb-5">
          {title ? (
            <h2 className="font-display text-xl font-semibold text-ink md:text-2xl">
              {title}
            </h2>
          ) : null}
          {subtitle ? (
            <p className="mt-2 text-sm leading-6 text-ink/65 md:text-base">
              {subtitle}
            </p>
          ) : null}
        </div>
      )}

      {showUrlInput ? (
        <div className="mb-4 flex gap-2 rounded-xl bg-mist p-1">
          <button
            type="button"
            onClick={() => setInputMode("text")}
            className={`flex-1 rounded-lg px-3 py-2 text-sm font-medium transition ${
              inputMode === "text"
                ? "bg-white text-ink shadow-sm"
                : "text-ink/60 hover:text-ink"
            }`}
          >
            Paste text
          </button>
          <button
            type="button"
            onClick={() => setInputMode("url")}
            className={`flex-1 rounded-lg px-3 py-2 text-sm font-medium transition ${
              inputMode === "url"
                ? "bg-white text-ink shadow-sm"
                : "text-ink/60 hover:text-ink"
            }`}
          >
            Paste URL
          </button>
        </div>
      ) : null}

      {showUrlInput && inputMode === "url" ? (
        <input
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="https://yourblog.com/your-best-post"
          aria-label="Blog post URL"
          className="mb-4 w-full rounded-xl border border-line bg-white px-4 py-3 text-sm outline-none ring-brand/30 placeholder:text-ink/35 focus:ring-2"
        />
      ) : (
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={compact ? 7 : 10}
          placeholder={placeholder || defaultPlaceholder}
          aria-label={
            mode === "topic"
              ? "Topic or idea for your thread"
              : "Your blog post text or article"
          }
          className="mb-4 w-full resize-y rounded-xl border border-line bg-white px-4 py-3 text-sm leading-6 outline-none ring-brand/30 placeholder:text-ink/35 focus:ring-2"
        />
      )}

      <div className="flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={onGenerate}
          disabled={!canGenerate}
          className="rounded-xl bg-brand px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-dark disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isPending
            ? status || "Working..."
            : mode === "tweet"
              ? "Generate Tweet"
              : "Generate Thread"}
        </button>
        {draftHint && !thread ? (
          <button
            type="button"
            onClick={onRestoreLastDraft}
            className="rounded-xl border border-line bg-white px-4 py-3 text-sm font-medium text-ink transition hover:bg-mist"
          >
            Restore last draft
          </button>
        ) : null}
        <p className="text-xs text-ink/50">
          Free · No sign-up · Ready to post in seconds
        </p>
      </div>

      {error ? (
        <p className="mt-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </p>
      ) : null}

      {thread ? (
        <div className="mt-6 border-t border-line pt-6">
          <p className="mb-3 text-xs leading-5 text-ink/55">
            AI gives you a fresh take each time — regenerate for another angle.
          </p>

          <div className="mb-4 flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={onRegenerate}
              disabled={!canRegenerate}
              className="rounded-lg border border-line bg-white px-3 py-2 text-sm font-medium text-ink hover:bg-mist disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isPending ? status || "Working..." : "Try another angle"}
            </button>
            {previousThread && previousThread !== thread ? (
              <button
                type="button"
                onClick={onRestorePrevious}
                disabled={isPending}
                className="rounded-lg border border-dashed border-line bg-mist/60 px-3 py-2 text-sm font-medium text-ink/80 hover:bg-mist disabled:opacity-50"
              >
                Restore previous
              </button>
            ) : null}
          </div>

          <ThreadActions
            text={thread}
            shareUrl={shareUrl}
            mode={mode}
            showSave
            onSaved={setShareUrl}
          />

          <div className="mt-5 space-y-3">
            {lines.map((line, index) => (
              <article
                key={`${index}-${line.slice(0, 24)}`}
                className="rounded-xl border border-line bg-mist/70 px-4 py-3 text-sm leading-6 text-ink"
              >
                {line}
              </article>
            ))}
          </div>

          <div className="mt-6">
            <EmailCapture
              compact
              heading="Get product updates"
              blurb="Leave your email for occasional product updates. No account required."
            />
          </div>

          <div className="mt-6 rounded-xl border border-line bg-mist/50 px-4 py-4 text-sm text-ink/70">
            <p className="font-semibold text-ink">Next steps</p>
            <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-2">
              <li>
                <Link href="/guides/how-to-make-a-thread-on-twitter/" className="text-brand hover:underline">
                  Thread guide
                </Link>
              </li>
              <li>
                <Link href="/blog-to-tweet/" className="text-brand hover:underline">
                  Blog to Tweet
                </Link>
              </li>
              <li>
                <Link href="/tools/thread-to-pdf/" className="text-brand hover:underline">
                  Export PDF tips
                </Link>
              </li>
              <li>
                <Link href="/ai-thread-generator/" className="text-brand hover:underline">
                  AI Thread Generator
                </Link>
              </li>
            </ul>
          </div>
        </div>
      ) : null}
    </section>
  );
}
