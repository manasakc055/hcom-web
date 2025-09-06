// src/lib/builder/manifests/featuresStrip.tsx
"use client";
import { BlockManifest } from "../types";

type Item = { icon?: string; title: string; text?: string };
type Props = {
    items: { one: Item; two: Item; three: Item };
    style?: { margin?: string; padding?: string; background?: string };
};

export const featuresStrip: BlockManifest<Props> = {
    type: "featuresStrip",
    title: "USP / Features Strip",
    defaults: {
        items: {
            one:   { icon: "🚚", title: "Fast Shipping", text: "2–4 day delivery" },
            two:   { icon: "↩️", title: "Easy Returns", text: "7-day hassle-free" },
            three: { icon: "🔒", title: "Secure Payments", text: "All major methods" },
        },
        style: { padding: "py-8", background: "bg-neutral-50" },
    },
    fields: [
        { name: "items.one.icon", label: "Item 1 Icon (emoji)", type: "string", group: "content" },
        { name: "items.one.title", label: "Item 1 Title", type: "string", group: "content" },
        { name: "items.one.text", label: "Item 1 Text", type: "string", group: "content" },

        { name: "items.two.icon", label: "Item 2 Icon (emoji)", type: "string", group: "content" },
        { name: "items.two.title", label: "Item 2 Title", type: "string", group: "content" },
        { name: "items.two.text", label: "Item 2 Text", type: "string", group: "content" },

        { name: "items.three.icon", label: "Item 3 Icon (emoji)", type: "string", group: "content" },
        { name: "items.three.title", label: "Item 3 Title", type: "string", group: "content" },
        { name: "items.three.text", label: "Item 3 Text", type: "string", group: "content" },

        { name: "style.margin", label: "Margin", type: "string", group: "design" },
        { name: "style.padding", label: "Padding", type: "string", group: "design" },
        { name: "style.background", label: "Background", type: "string", group: "design" },
    ],
    Preview: (p) => {
        const list = Object.values(p.items);
        return (
            <section className={`${p.style?.background ?? ""} ${p.style?.padding ?? ""}`}>
                <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
                    {list.map((it, i) => (
                        <div key={i} className="rounded-lg border px-4 py-5 bg-white">
                            <div className="text-2xl">{it.icon}</div>
                            <div className="mt-2 font-medium text-neutral-900">{it.title}</div>
                            {it.text && <div className="text-sm text-neutral-600">{it.text}</div>}
                        </div>
                    ))}
                </div>
            </section>
        );
    },
};
