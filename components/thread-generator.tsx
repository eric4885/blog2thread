"use client";

import { useState, useTransition } from "react";
import { downloadMarkdown, downloadPdf, splitThreadLines } from "@/lib/export";

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
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);
  const [isPending, startTransition] = useTransition();
  const [status, setStatus] = useState("");

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

  function onGenerate() {
    setError("");
    setCopied(false);
    startTransition(async () => {
      try {
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
          throw new Error(data.error || "Generation failed.");
        }
        setThread(data.thread);
        setStatus("");
      } catch (err) {
        setStatus("");
        setError(err instanceof Error ? err.message : "Something went wrong.");
      }
    });
  }

  async function onCopy() {
    if (!thread) return;
    await navigator.clipboard.writeText(thread);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
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
          className="mb-4 w-full rounded-xl border border-line bg-white px-4 py-3 text-sm outline-none ring-brand/30 placeholder:text-ink/35 focus:ring-2"
        />
      ) : (
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={compact ? 7 : 10}
          placeholder={placeholder || defaultPlaceholder}
          className="mb-4 w-full resize-y rounded-xl border border-line bg-white px-4 py-3 text-sm leading-6 outline-none ring-brand/30 placeholder:text-ink/35 focus:ring-2"
        />
      )}

      <div className="flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={onGenerate}
          disabled={isPending}
          className="rounded-xl bg-brand px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-dark disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isPending
            ? status || "Working..."
            : mode === "tweet"
              ? "Generate Tweet"
              : "Generate Thread"}
        </button>
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
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={onCopy}
              className="rounded-lg border border-line bg-mist px-3 py-2 text-sm font-medium text-ink hover:bg-brand-soft"
            >
              {copied ? "Copied" : "Copy all"}
            </button>
            <button
              type="button"
              onClick={() => downloadMarkdown(thread)}
              className="rounded-lg border border-line bg-mist px-3 py-2 text-sm font-medium text-ink hover:bg-brand-soft"
            >
              Export Markdown
            </button>
            <button
              type="button"
              onClick={() => downloadPdf(thread)}
              className="rounded-lg border border-line bg-mist px-3 py-2 text-sm font-medium text-ink hover:bg-brand-soft"
            >
              Export PDF
            </button>
          </div>

          <div className="space-y-3">
            {lines.map((line, index) => (
              <article
                key={`${index}-${line.slice(0, 24)}`}
                className="rounded-xl border border-line bg-mist/70 px-4 py-3 text-sm leading-6 text-ink"
              >
                {line}
              </article>
            ))}
          </div>
        </div>
      ) : null}
    </section>
  );
}
