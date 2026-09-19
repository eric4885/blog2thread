import { NextRequest, NextResponse } from "next/server";
import { guardBurst, withAidCookie } from "@/lib/rate-limit";
import { saveThread } from "@/lib/store";
import { SITE_URL } from "@/lib/site";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  try {
    const limited = await guardBurst(req);
    if (!limited.ok) return limited.response;

    let body: { text?: string; mode?: string };
    try {
      body = await req.json();
    } catch {
      return withAidCookie(
        NextResponse.json({ error: "Invalid request." }, { status: 400 }),
        limited.aid,
        limited.aidIsNew
      );
    }

    const text = body.text?.trim() || "";
    if (text.length < 8) {
      return withAidCookie(
        NextResponse.json(
          { error: "Nothing to save. Generate a thread first." },
          { status: 400 }
        ),
        limited.aid,
        limited.aidIsNew
      );
    }
    if (text.length > 20_000) {
      return withAidCookie(
        NextResponse.json({ error: "Thread is too long to save." }, { status: 400 }),
        limited.aid,
        limited.aidIsNew
      );
    }

    const mode =
      body.mode === "tweet" || body.mode === "topic" || body.mode === "thread"
        ? body.mode
        : "thread";

    const record = await saveThread({ text, mode });
    const path = `/thread/${record.id}/`;
    return withAidCookie(
      NextResponse.json({
        id: record.id,
        url: `${SITE_URL}${path}`,
        path
      }),
      limited.aid,
      limited.aidIsNew
    );
  } catch (error) {
    console.error("save thread failed", error);
    return NextResponse.json(
      { error: "Could not save thread. Please try again." },
      { status: 500 }
    );
  }
}
