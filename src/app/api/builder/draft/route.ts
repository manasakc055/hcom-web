// src/app/api/builder/draft/route.ts
import { NextRequest, NextResponse } from "next/server";

type Draft = { key: string; payload: any; updatedAt: number };
const MEMORY = new Map<string, Draft>(); // dev-only

export async function GET(req: NextRequest) {
  const key = req.nextUrl.searchParams.get("key") ?? "";
  const draft = MEMORY.get(key);
  return NextResponse.json(draft?.payload ?? null);
}

export async function POST(req: NextRequest) {
  const key = (req.nextUrl.searchParams.get("key") ?? "");
  const payload = await req.json();
  MEMORY.set(key, { key, payload, updatedAt: Date.now() });
  return NextResponse.json({ ok: true, updatedAt: Date.now() });
}
