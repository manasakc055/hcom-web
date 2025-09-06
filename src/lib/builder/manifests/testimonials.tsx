// src/lib/builder/manifests/testimonials.tsx
"use client";
import { BlockManifest } from "../types";

type T = { quote: string; author?: string };
type Props = {
    title?: string;
    items: { a: T; b: T; c: T };
    style?: { margin?: string; padding?: string; background?: string };
};

export const testimonials: BlockManifest<Props> = {
    type: "testimonials",
    title: "Testimonials",
    defaults: {
        title: "Loved by customers",
        items: {
            a: { quote: "Quality is top-notch. Will buy again!", author: "Aarav" },
            b: { quote: "Sizing was perfect and delivery was quick.", author: "Diya" },
            c: { quote: "Great value for money.", author: "Kabir" },
        },
        style: { padding: "py-12", background: "bg-neutral-50" },
    },
    fields: [
        { name: "title", label: "Section Title", type: "string", group: "content" },
        { name: "items.a.quote", label: "Quote 1", type: "textarea", group: "content" },
        { name: "items.a.author", label: "Author 1", type: "string", group: "content" },
        { name: "items.b.quote", label: "Quote 2", type: "textarea", group: "content" },
        { name: "items.b.author", label: "Author 2", type: "string", group: "content" },
        { name: "items.c.quote", label: "Quote 3", type: "textarea", group: "content" },
        { name: "items.c.author", label: "Author 3", type: "string", group: "content" },
        { name: "style.margin", label: "Margin", type: "string", group: "design" },
        { name: "style.padding", label: "Padding", type: "string", group: "design" },
        { name: "style.background", label: "Background", type: "string", group: "design" },
    ],
    Preview: (p) => (
        <section className={`${p.style?.background ?? ""} ${p.style?.padding ?? ""}`}>
            <div className="max-w-6xl mx-auto">
                {p.title && <h3 className="text-xl font-semibold mb-6 text-neutral-900">{p.title}</h3>}
                <div className="grid md:grid-cols-3 gap-6">
                    {Object.values(p.items).map((q, i) => (
                        <figure key={i} className="rounded-lg border bg-white p-5">
                            <blockquote className="text-sm text-neutral-700">“{q.quote}”</blockquote>
                            {q.author && <figcaption className="mt-3 text-xs text-neutral-500">— {q.author}</figcaption>}
                        </figure>
                    ))}
                </div>
            </div>
        </section>
    ),
};
