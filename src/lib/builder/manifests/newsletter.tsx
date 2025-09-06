// src/lib/builder/manifests/newsletter.tsx
"use client";
import { BlockManifest } from "../types";

type Props = {
    title: string;
    subtitle?: string;
    placeholder?: string;
    buttonText?: string;
    style?: { margin?: string; padding?: string; background?: string };
};

export const newsletter: BlockManifest<Props> = {
    type: "newsletter",
    title: "Newsletter Signup",
    defaults: {
        title: "Join our newsletter",
        subtitle: "Get product drops and special offers.",
        placeholder: "Enter your email",
        buttonText: "Subscribe",
        style: { padding: "py-12", background: "bg-white" },
    },
    fields: [
        { name: "title", label: "Title", type: "string", group: "content" },
        { name: "subtitle", label: "Subtitle", type: "string", group: "content" },
        { name: "placeholder", label: "Placeholder", type: "string", group: "content" },
        { name: "buttonText", label: "Button Text", type: "string", group: "content" },
        { name: "style.margin", label: "Margin", type: "string", group: "design" },
        { name: "style.padding", label: "Padding", type: "string", group: "design" },
        { name: "style.background", label: "Background", type: "string", group: "design" },
    ],
    Preview: (p) => (
        <section className={`${p.style?.background ?? ""} ${p.style?.padding ?? ""}`}>
            <div className="max-w-md mx-auto text-center">
                <h3 className="text-xl font-semibold text-neutral-900">{p.title}</h3>
                {p.subtitle && <p className="mt-2 text-neutral-600">{p.subtitle}</p>}
                <div className="mt-4 flex gap-2">
                    <input className="flex-1 border rounded px-3 py-2 text-sm" placeholder={p.placeholder ?? ""} />
                    <button className="px-4 py-2 text-sm rounded bg-black text-white">{p.buttonText ?? "Subscribe"}</button>
                </div>
            </div>
        </section>
    ),
};
