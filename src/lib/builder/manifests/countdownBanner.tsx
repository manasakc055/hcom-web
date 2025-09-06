// src/lib/builder/manifests/countdownBanner.tsx
"use client";
import { BlockManifest } from "../types";
import { useEffect, useState } from "react";

type Props = {
    title: string;
    endsAtISO: string; // e.g., "2025-12-31T23:59:59Z"
    ctaText?: string;
    ctaHref?: string;
    style?: { margin?: string; padding?: string; background?: string };
};

const fmt = (n: number) => String(n).padStart(2, "0");

export const countdownBanner: BlockManifest<Props> = {
    type: "countdownBanner",
    title: "Countdown Banner",
    defaults: {
        title: "Festival Sale ends in",
        endsAtISO: new Date(Date.now() + 72 * 3600 * 1000).toISOString(),
        ctaText: "Shop Deals",
        ctaHref: "/collections/sale",
        style: { padding: "py-8", background: "bg-neutral-900" },
    },
    fields: [
        { name: "title", label: "Title", type: "string", group: "content" },
        { name: "endsAtISO", label: "End Time (ISO)", type: "string", group: "content" },
        { name: "ctaText", label: "CTA Text", type: "string", group: "content" },
        { name: "ctaHref", label: "CTA Link", type: "string", group: "content" },
        { name: "style.margin", label: "Margin", type: "string", group: "design" },
        { name: "style.padding", label: "Padding", type: "string", group: "design" },
        { name: "style.background", label: "Background", type: "string", group: "design" },
    ],
    Preview: (p) => {
        const [t, setT] = useState({ d: 0, h: 0, m: 0, s: 0 });
        useEffect(() => {
            const end = new Date(p.endsAtISO).getTime();
            const tick = () => {
                const left = Math.max(0, end - Date.now());
                const d = Math.floor(left / (24 * 3600e3));
                const h = Math.floor((left % (24 * 3600e3)) / 3600e3);
                const m = Math.floor((left % 3600e3) / 60e3);
                const s = Math.floor((left % 60e3) / 1e3);
                setT({ d, h, m, s });
            };
            tick();
            const id = setInterval(tick, 1000);
            return () => clearInterval(id);
        }, [p.endsAtISO]);

        const isDark = (p.style?.background ?? "").includes("neutral-900");
        const text = isDark ? "text-white" : "text-neutral-900";
        const sub = isDark ? "text-neutral-300" : "text-neutral-600";

        return (
            <section className={`${p.style?.background ?? ""} ${p.style?.padding ?? ""}`}>
                <div className="max-w-6xl mx-auto text-center">
                    <h3 className={`text-2xl font-semibold ${text}`}>{p.title}</h3>
                    <div className={`mt-3 flex items-center justify-center gap-4 ${text}`}>
                        <Time label="Days" value={t.d} />
                        <Time label="Hours" value={t.h} />
                        <Time label="Minutes" value={t.m} />
                        <Time label="Seconds" value={t.s} />
                    </div>
                    {p.ctaText && <a className={`inline-block mt-4 underline ${sub.replace("text-", "text-")}`}>{p.ctaText}</a>}
                </div>
            </section>
        );
    },
};

function Time({ label, value }: { label: string; value: number }) {
    return (
        <div className="px-3 py-2 rounded border bg-white text-neutral-900">
            <div className="text-xl font-mono">{fmt(value)}</div>
            <div className="text-[11px] text-neutral-500">{label}</div>
        </div>
    );
}
