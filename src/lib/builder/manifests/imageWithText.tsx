// src/lib/builder/manifests/imageWithText.tsx
"use client";
import { BlockManifest } from "../types";

type Props = {
    title: string;
    body?: string;
    image: string;
    imageSide?: "left" | "right";
    ctaText?: string;
    ctaHref?: string;
    style?: { margin?: string; padding?: string; background?: string };
};

export const imageWithText: BlockManifest<Props> = {
    type: "imageWithText",
    title: "Image with Text",
    defaults: {
        title: "Crafted for comfort",
        body: "Breathable, durable, and made to move with you.",
        image:
            "https://images.unsplash.com/photo-1520975922284-9bcd54b57349?q=80&w=1400&auto=format&fit=crop",
        imageSide: "right",
        ctaText: "Explore Collection",
        ctaHref: "/collections/all",
        style: { padding: "py-12", background: "bg-white" },
    },
    fields: [
        { name: "title", label: "Title", type: "string", maxLen: 80, group: "content" },
        { name: "body", label: "Body", type: "textarea", maxLen: 300, group: "content" },
        { name: "image", label: "Image URL", type: "image", group: "content" },
        {
            name: "imageSide",
            label: "Image Side",
            type: "select",
            options: [
                { label: "Left", value: "left" },
                { label: "Right", value: "right" },
            ],
            group: "content",
        },
        { name: "ctaText", label: "CTA Text", type: "string", maxLen: 40, group: "content" },
        { name: "ctaHref", label: "CTA Link", type: "string", group: "content" },
        { name: "style.margin", label: "Margin", type: "string", group: "design" },
        { name: "style.padding", label: "Padding", type: "string", group: "design" },
        { name: "style.background", label: "Background", type: "string", group: "design" },
    ],
    Preview: (p) => {
        const reversed = p.imageSide === "left" ? "md:grid-flow-col-dense" : "";
        return (
            <section className={`${p.style?.background ?? ""} ${p.style?.padding ?? ""}`}>
                <div className={`max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center ${reversed}`}>
                    <div>
                        <h3 className="text-2xl font-semibold text-neutral-900">{p.title}</h3>
                        {p.body && <p className="mt-3 text-neutral-600">{p.body}</p>}
                        {p.ctaText && <a className="inline-block mt-4 underline text-blue-600">{p.ctaText}</a>}
                    </div>
                    <div className="relative w-full h-56 md:h-72 rounded-lg overflow-hidden ring-1 ring-black/5">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={p.image} alt="" className="absolute inset-0 w-full h-full object-cover" />
                    </div>
                </div>
            </section>
        );
    },
};
