import { NextRequest, NextResponse } from "next/server";
import { guardBurst, withAidCookie } from "@/lib/rate-limit";
import { saveEmail } from "@/lib/store";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  try {
    const limited = await guardBurst(req);
    if (!limited.ok) return limited.response;

    let body: { email?: string };
    try {
      body = await req.json();
    } catch {
      return withAidCookie(
        NextResponse.json({ error: "Invalid request." }, { status: 400 }),
        limited.aid,
        limited.aidIsNew
      );
    }

    try {
      await saveEmail(body.email || "");
    } catch {
      return withAidCookie(
        NextResponse.json(
          { error: "Please enter a valid email address." },
          { status: 400 }
        ),
        limited.aid,
        limited.aidIsNew
      );
    }

    return withAidCookie(
      NextResponse.json({ ok: true }),
      limited.aid,
      limited.aidIsNew
    );
  } catch (error) {
    console.error("subscribe failed", error);
    return NextResponse.json(
      { error: "Could not save email. Please try again." },
      { status: 500 }
    );
  }
}
