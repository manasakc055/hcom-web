// src/app/api/revalidate/route.ts
import { NextRequest, NextResponse } from "next/server";
import crypto from "node:crypto";

export async function POST(req: NextRequest) {
    const secret = process.env.REVALIDATE_HMAC_SECRET ?? "dev-secret";
    const sig = req.headers.get("x-hmac-signature") ?? "";
    const body = await req.text();
    const expected = crypto.createHmac("sha256", secret).update(body).digest("hex");
    if (!crypto.timingSafeEqual(Buffer.from(sig), Buffer.from(expected))) {
        return new NextResponse("Invalid signature", { status: 401 });
    }
    const { storeId, paths } = JSON.parse(body);
    try {
        for (const p of paths as string[]) {
            // App Router: use revalidateTag or dedicated route segment
            // Here we fallback to on-demand classic path revalidate for demo:
            // @ts-ignore
            await (global as any).revalidatePath?.(p);
        }
        return NextResponse.json({ revalidated: true });
    } catch (e) {
        return NextResponse.json({ revalidated: false, error: String(e) }, { status: 500 });
    }
}
