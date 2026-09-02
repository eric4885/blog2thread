"use client";

import { useState } from "react";

type Props = {
  heading?: string;
  blurb?: string;
  compact?: boolean;
};

export function EmailCapture({
  heading = "Get new thread tips",
  blurb = "Occasional notes on X threads and product updates. No spam.",
  compact = false
}: Props) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "err">("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setMessage("");
    try {
      const res = await fetch("/api/subscribe/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email })
      });
      const data = (await res.json()) as { error?: string };
      if (!res.ok) {
        throw new Error(data.error || "Could not subscribe.");
      }
      setStatus("ok");
      setMessage("You’re on the list. Thanks!");
      setEmail("");
    } catch (err) {
      setStatus("err");
      setMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <div
      className={`rounded-2xl border border-line bg-white/90 ${
        compact ? "p-4" : "p-5 md:p-6"
      }`}
    >
      <h3 className="text-base font-semibold text-ink">{heading}</h3>
      <p className="mt-1 text-sm leading-6 text-ink/65">{blurb}</p>
      <form
        onSubmit={onSubmit}
        className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-center"
      >
        <label className="sr-only" htmlFor="email-capture">
          Email address
        </label>
        <input
          id="email-capture"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@company.com"
          className="w-full flex-1 rounded-xl border border-line bg-white px-4 py-2.5 text-sm outline-none ring-brand/30 placeholder:text-ink/35 focus:ring-2"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="rounded-xl bg-ink px-4 py-2.5 text-sm font-semibold text-white hover:bg-ink/90 disabled:opacity-60"
        >
          {status === "loading" ? "Saving..." : "Notify me"}
        </button>
      </form>
      {message ? (
        <p
          className={`mt-2 text-sm ${
            status === "ok" ? "text-brand" : "text-red-700"
          }`}
        >
          {message}
        </p>
      ) : null}
    </div>
  );
}
