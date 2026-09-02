import { NextResponse } from "next/server";
import { listRecentThreads } from "@/lib/store";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const items = await listRecentThreads(12);
    return NextResponse.json({ items });
  } catch (error) {
    console.error("list recent failed", error);
    return NextResponse.json({ items: [] });
  }
}
