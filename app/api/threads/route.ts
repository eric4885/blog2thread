import { NextRequest, NextResponse } from "next/server";
import { checkRateLimit, getClientIp } from "@/lib/rate-limit";
import { saveThread } from "@/lib/store";
import { SITE_URL } from "@/lib/site";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  try {
    const ip = getClientIp(req.headers);
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: "Rate limit exceeded. Please wait a minute." },
        { status: 429, headers: { "Retry-After": "60" } }
      );
    }

    let body: { text?: string; mode?: string };
    try {
      body = await req.json();
    } catch {
      return NextResponse.json({ error: "Invalid request." }, { status: 400 });
    }

    const text = body.text?.trim() || "";
    if (text.length < 8) {
      return NextResponse.json(
        { error: "Nothing to save. Generate a thread first." },
        { status: 400 }
      );
    }
    if (text.length > 20_000) {
      return NextResponse.json({ error: "Thread is too long to save." }, { status: 400 });
    }

    const mode =
      body.mode === "tweet" || body.mode === "topic" || body.mode === "thread"
        ? body.mode
        : "thread";

    const record = await saveThread({ text, mode });
    const path = `/thread/${record.id}/`;
    return NextResponse.json({
      id: record.id,
      url: `${SITE_URL}${path}`,
      path
    });
  } catch (error) {
    console.error("save thread failed", error);
    return NextResponse.json(
      { error: "Could not save thread. Please try again." },
      { status: 500 }
    );
  }
}
