"use client";

import { useEffect, useState } from "react";
import { downloadMarkdown, downloadPdf } from "@/lib/export";
import { buildPostToXUrl } from "@/lib/share";

type Props = {
  text: string;
  shareUrl?: string;
  mode?: "thread" | "tweet" | "topic";
  showSave?: boolean;
  onSaved?: (url: string) => void;
};

export function ThreadActions({
  text,
  shareUrl = "",
  mode = "thread",
  showSave = false,
  onSaved
}: Props) {
  const [copied, setCopied] = useState(false);
  const [shareCopied, setShareCopied] = useState(false);
  const [saving, setSaving] = useState(false);
  const [savedUrl, setSavedUrl] = useState(shareUrl);
  const [error, setError] = useState("");

  useEffect(() => {
    if (shareUrl) setSavedUrl(shareUrl);
  }, [shareUrl]);

  async function copyText(value: string, kind: "all" | "link") {
    try {
      await navigator.clipboard.writeText(value);
    } catch {
      const el = document.createElement("textarea");
      el.value = value;
      el.setAttribute("readonly", "");
      el.style.position = "fixed";
      el.style.left = "-9999px";
      document.body.appendChild(el);
      el.select();
      const ok = document.execCommand("copy");
      document.body.removeChild(el);
      if (!ok) {
        setError("Copy failed — select the text and copy manually.");
        return;
      }
    }
    if (kind === "all") {
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } else {
      setShareCopied(true);
      setTimeout(() => setShareCopied(false), 1800);
    }
  }

  async function onSave() {
    setError("");
    setSaving(true);
    try {
      const res = await fetch("/api/threads/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text, mode })
      });
      const data = (await res.json()) as { url?: string; error?: string };
      if (!res.ok || !data.url) {
        throw new Error(data.error || "Could not save thread.");
      }
      setSavedUrl(data.url);
      onSaved?.(data.url);
      await copyText(data.url, "link");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not save thread.");
    } finally {
      setSaving(false);
    }
  }

  const postUrl = buildPostToXUrl(
    text,
    savedUrl || "https://blog2thread.com/"
  );

  return (
    <div>
      <div className="flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={() => copyText(text, "all")}
          className="rounded-lg border border-line bg-mist px-3 py-2 text-sm font-medium text-ink hover:bg-brand-soft"
        >
          {copied ? "Copied" : "Copy all"}
        </button>
        <button
          type="button"
          onClick={() => downloadMarkdown(text)}
          className="rounded-lg border border-line bg-mist px-3 py-2 text-sm font-medium text-ink hover:bg-brand-soft"
        >
          Export Markdown
        </button>
        <button
          type="button"
          onClick={() => downloadPdf(text)}
          className="rounded-lg border border-line bg-mist px-3 py-2 text-sm font-medium text-ink hover:bg-brand-soft"
        >
          Export PDF
        </button>
        {showSave ? (
          <button
            type="button"
            onClick={onSave}
            disabled={saving}
            className="rounded-lg bg-brand px-3 py-2 text-sm font-semibold text-white hover:bg-brand-dark disabled:opacity-60"
          >
            {saving ? "Saving..." : savedUrl ? "Save again" : "Save & share link"}
          </button>
        ) : null}
        <a
          href={postUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg bg-[#1D9BF0] px-3 py-2 text-sm font-semibold text-white hover:bg-[#1a8cd8]"
        >
          Post to X
        </a>
        {savedUrl ? (
          <button
            type="button"
            onClick={() => copyText(savedUrl, "link")}
            className="rounded-lg border border-line bg-white px-3 py-2 text-sm font-medium text-ink hover:bg-mist"
          >
            {shareCopied ? "Link copied" : "Copy share link"}
          </button>
        ) : null}
      </div>
      {savedUrl ? (
        <p className="mt-3 break-all text-xs text-ink/55">
          Share URL:{" "}
          <a href={savedUrl} className="font-medium text-brand hover:underline">
            {savedUrl}
          </a>
        </p>
      ) : null}
      {error ? <p className="mt-3 text-sm text-red-700">{error}</p> : null}
    </div>
  );
}
