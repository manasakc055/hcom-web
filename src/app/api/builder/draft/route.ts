// src/app/api/builder/draft/route.ts
import { NextResponse } from "next/server";

const DRAFTS = new Map<string, any>(); // dev-only

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const storeId = searchParams.get("storeId") || "";
  const path = searchParams.get("path") || "/";
  const key = `${storeId}:${path}`;
  return NextResponse.json(
    DRAFTS.get(key) ?? { version: 1, pageType: "CMS", sections: [] }
  );
}

export async function POST(req: Request) {
  const { storeId, path, layout } = await req.json();
  if (!storeId || !path || !layout) {
    return NextResponse.json({ error: "Bad Request" }, { status: 400 });
  }
  const key = `${storeId}:${path}`;
  DRAFTS.set(key, layout);
  return NextResponse.json({ ok: true });
}
