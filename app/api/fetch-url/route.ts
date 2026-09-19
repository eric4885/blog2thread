import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import { HttpsProxyAgent } from "https-proxy-agent";
import { checkFetchLimit, withAidCookie } from "@/lib/rate-limit";
import { extractArticleText } from "@/lib/extract-article";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  const limited = await checkFetchLimit(req);
  if (!limited.ok) return limited.response;

  let body: { url?: string };
  try {
    body = await req.json();
  } catch {
    return withAidCookie(
      NextResponse.json({ error: "Invalid request." }, { status: 400 }),
      limited.aid,
      limited.aidIsNew
    );
  }

  const url = body.url?.trim();
  if (!url) {
    return withAidCookie(
      NextResponse.json({ error: "Please provide a URL." }, { status: 400 }),
      limited.aid,
      limited.aidIsNew
    );
  }

  let parsed: URL;
  try {
    parsed = new URL(url);
    if (!["http:", "https:"].includes(parsed.protocol)) {
      throw new Error("Invalid protocol");
    }
  } catch {
    return withAidCookie(
      NextResponse.json({ error: "Invalid URL." }, { status: 400 }),
      limited.aid,
      limited.aidIsNew
    );
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
      return withAidCookie(
        NextResponse.json(
          {
            error:
              "Could not extract enough article text (paywall, login wall, or JS-heavy page)."
          },
          { status: 422 }
        ),
        limited.aid,
        limited.aidIsNew
      );
    }

    await limited.commit();
    return withAidCookie(
      NextResponse.json({ text, url: parsed.toString() }),
      limited.aid,
      limited.aidIsNew
    );
  } catch (error) {
    console.error("URL fetch failed", error);
    return withAidCookie(
      NextResponse.json(
        {
          error: "Could not fetch that URL (blocked, private, or unreachable)."
        },
        { status: 502 }
      ),
      limited.aid,
      limited.aidIsNew
    );
  }
}
