import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import { HttpsProxyAgent } from "https-proxy-agent";
import { checkRateLimit, getClientIp } from "@/lib/rate-limit";
import { extractArticleText } from "@/lib/extract-article";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  const ip = getClientIp(req.headers);
  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { error: "Rate limit exceeded. Please wait a minute." },
      { status: 429, headers: { "Retry-After": "60" } }
    );
  }

  let body: { url?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const url = body.url?.trim();
  if (!url) {
    return NextResponse.json({ error: "Please provide a URL." }, { status: 400 });
  }

  let parsed: URL;
  try {
    parsed = new URL(url);
    if (!["http:", "https:"].includes(parsed.protocol)) {
      throw new Error("Invalid protocol");
    }
  } catch {
    return NextResponse.json({ error: "Invalid URL." }, { status: 400 });
  }

  const PROXY_URL = process.env.HTTPS_PROXY || process.env.HTTP_PROXY;

  try {
    const response = await axios.get(parsed.toString(), {
      timeout: 20_000,
      headers: {
        "User-Agent":
          "Mozilla/5.0 (compatible; Blog2ThreadBot/1.0; +https://blog2thread.com)",
        Accept: "text/html,application/xhtml+xml"
      },
      httpsAgent: PROXY_URL ? new HttpsProxyAgent(PROXY_URL) : undefined,
      proxy: false,
      maxContentLength: 2_000_000,
      responseType: "text"
    });

    const text = extractArticleText(String(response.data || ""));
    if (text.length < 80) {
      return NextResponse.json(
        {
          error:
            "Could not extract enough article text from that URL. Paste the content manually instead."
        },
        { status: 422 }
      );
    }

    return NextResponse.json({ text, url: parsed.toString() });
  } catch (error) {
    console.error("URL fetch failed", error);
    return NextResponse.json(
      {
        error:
          "Failed to fetch that URL. The page may be blocked or private — paste the text instead."
      },
      { status: 502 }
    );
  }
}
