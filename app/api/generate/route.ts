import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import { HttpsProxyAgent } from "https-proxy-agent";
import { checkRateLimit, getClientIp } from "@/lib/rate-limit";

export const runtime = "nodejs";

type GenerateMode = "thread" | "tweet" | "topic";

const MODEL = process.env.OPENAI_MODEL || "gpt-4o-mini";

function buildSystemPrompt(mode: GenerateMode): string {
  if (mode === "tweet") {
    return `
You are an expert Twitter/X copywriter.
Goal: Turn the source into ONE viral-ready English tweet.

Hard requirements:
- Output exactly one tweet.
- Keep it under 260 characters (X allows 280; leave headroom for edits).
- Strong hook, concrete payoff, no hashtag spam.
- Translate non-English input naturally into English.
- Output only the tweet text. No quotes, labels, or explanations.
`.trim();
  }

  if (mode === "topic") {
    return `
You are an expert Twitter/X thread writing assistant.
Goal: Create a high-engagement English Twitter/X thread from a topic or brief idea.

Hard requirements:
- Write 5 to 15 tweets.
- Keep each tweet under 260 characters (X allows 280; leave headroom for numbering/emoji).
- Prefix each tweet with numbering like 1/, 2/, 3/...
- Tweet 1 must be a scroll-stopping hook.
- Make middle tweets scannable and specific.
- End with a concise CTA.
- Output only the thread text. One tweet per line. No explanations.
`.trim();
  }

  return `
You are an expert Twitter/X thread writing assistant.
Goal: Convert long-form input (blog post, article, newsletter) into a high-quality English Twitter/X thread.

Hard requirements:
- Write for English Twitter/X readers (translate non-English input naturally).
- Keep total length between 8 and 15 tweets.
- Keep each tweet under 260 characters (X allows 280; leave headroom for numbering/emoji).
- Prefix each tweet with numbering like 1/, 2/, 3/...
- Make tweet 1 a strong hook (question, contrast, or result-first framing).
- Keep middle tweets scannable with short lines and clean structure.
- End with a concise conclusion or CTA (e.g. "If this helped, follow for more.").
- Do not invent facts that are not in the source.

Output format:
- Output only the thread text.
- One tweet per line.
- Do not include explanations, titles, quotes, code blocks, or extra notes.
`.trim();
}

function minInputLength(mode: GenerateMode): number {
  if (mode === "topic") return 8;
  if (mode === "tweet") return 40;
  return 40;
}

export async function POST(req: NextRequest) {
  const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
  // Accept either https://api.apimart.ai or https://api.apimart.ai/v1
  const rawBase =
    process.env.OPENAI_BASE_URL?.replace(/\/+$/, "") || "https://api.apimart.ai";
  const chatCompletionsUrl = rawBase.endsWith("/v1")
    ? `${rawBase}/chat/completions`
    : `${rawBase}/v1/chat/completions`;
  const PROXY_URL = process.env.HTTPS_PROXY || process.env.HTTP_PROXY;

  if (!OPENAI_API_KEY) {
    return NextResponse.json(
      {
        error:
          "Generation is temporarily unavailable. Please try again later."
      },
      { status: 500 }
    );
  }

  const ip = getClientIp(req.headers);
  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { error: "Rate limit exceeded. Please wait a minute before generating again." },
      { status: 429, headers: { "Retry-After": "60" } }
    );
  }

  let body: {
    content?: string;
    mode?: GenerateMode;
  };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const mode: GenerateMode =
    body.mode === "tweet" || body.mode === "topic" ? body.mode : "thread";
  const content = body.content?.trim() || "";

  if (content.length < minInputLength(mode)) {
    return NextResponse.json(
      {
        error:
          mode === "topic"
            ? "Please enter a clearer topic (a short sentence works)."
            : "Please paste a longer input (at least a few paragraphs)."
      },
      { status: 400 }
    );
  }

  const systemPrompt = buildSystemPrompt(mode);
  const userPrompt =
    mode === "topic"
      ? `Create an English Twitter/X thread about this topic:\n\n${content}`
      : mode === "tweet"
        ? `Turn this source into one English tweet:\n\n${content}`
        : `Here is the source content. Generate an English Twitter/X thread:\n\n${content}`;

  try {
    const httpsAgent = PROXY_URL ? new HttpsProxyAgent(PROXY_URL) : undefined;
    const response = await axios.post(
      chatCompletionsUrl,
      {
        model: MODEL,
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userPrompt }
        ],
        temperature: 0.7,
        max_tokens: mode === "tweet" ? 200 : 900,
        stream: false
      },
      {
        timeout: 45_000,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${OPENAI_API_KEY}`
        },
        httpsAgent,
        proxy: false
      }
    );

    const json = response.data;
    // Some gateways may still return SSE text even when stream:false is set.
    let thread =
      typeof json === "string"
        ? ""
        : json?.choices?.[0]?.message?.content?.trim();

    if (!thread && typeof json === "string" && json.includes("data:")) {
      const chunks = json
        .split(/\n/)
        .map((line: string) => line.replace(/^data:\s*/, "").trim())
        .filter((line: string) => line && line !== "[DONE]");
      let assembled = "";
      for (const chunk of chunks) {
        try {
          const parsed = JSON.parse(chunk);
          const delta =
            parsed?.choices?.[0]?.delta?.content ||
            parsed?.choices?.[0]?.message?.content ||
            "";
          assembled += delta;
        } catch {
          // ignore malformed chunk
        }
      }
      thread = assembled.trim();
    }

    if (!thread) {
      return NextResponse.json(
        { error: "Generation failed. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({ thread, mode, usedModel: MODEL });
  } catch (error: unknown) {
    if (axios.isAxiosError(error) && error.response) {
      const status = error.response.status;
      console.error("generation provider error", status, error.response.data);
      return NextResponse.json(
        {
          error:
            status === 401
              ? "Generation failed. Please try again later."
              : status === 429
                ? "Too many requests. Please try again shortly."
                : "Generation failed. Please try again."
        },
        { status: status === 401 ? 502 : status }
      );
    }

    console.error("generation fetch failed", error);
    return NextResponse.json(
      { error: "Generation failed. Please try again." },
      { status: 500 }
    );
  }
}
