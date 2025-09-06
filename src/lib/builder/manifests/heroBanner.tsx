// src/lib/builder/manifests/heroBanner.tsx
"use client";
import {BlockManifest} from "../types";
import { clsBackground, clsPadding } from "../responsive";
import Image from "next/image";

type HeroProps = {
    title: string;
    subtitle?: string;
    image?: string;
    ctaText?: string;
    ctaHref?: string;
    style?: { margin?: string; padding?: string; background?: string };
};

export const heroBanner: BlockManifest<HeroProps> = {
    type: "heroBanner",
    title: "Hero Banner",
    defaults: {
        title: "Summer Sale",
        subtitle: "Up to 50% off",
        image: "/placeholder-hero.jpg",
        ctaText: "Shop Now",
        ctaHref: "/collections/sale",
        style: {padding: "py-16", background: "bg-white"},
    },
    fields: [
        {name: "title", label: "Title", type: "string", maxLen: 80, group: "content"},
        {name: "subtitle", label: "Subtitle", type: "string", maxLen: 120, group: "content"},
        {name: "image", label: "Image", type: "image", group: "content"},
        {name: "ctaText", label: "CTA Text", type: "string", maxLen: 40, group: "content"},
        {name: "ctaHref", label: "CTA Link", type: "string", group: "content"},
        {name: "style.margin", label: "Margin", type: "string", group: "design"},
        {name: "style.padding", label: "Padding", type: "string", group: "design"},
        {name: "style.background", label: "Background", type: "string", group: "design"},
    ],
    Preview: (p) => (
        <section className={`${clsBackground(p.style?.background ?? undefined)} ${clsPadding(p.style?.padding)}`}>
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 items-center relative">
                <div>
                    <h2 className="text-3xl font-semibold">{p.title}</h2>
                    {p.subtitle && <p className="text-muted-foreground mt-2">{p.subtitle}</p>}
                    {p.ctaText && <a className="inline-block mt-4 underline">{p.ctaText}</a>}
                </div>
                {p.image && (
                    <div className="relative w-full h-48 md:h-64 rounded-lg overflow-hidden ring-1 ring-black/5">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src={p.image}
                            alt=""
                            className="absolute inset-0 w-full h-full object-cover"
                            loading="lazy"
                            referrerPolicy="no-referrer"
                        />
                    </div>
                )}
            </div>
        </section>
    ),
};
