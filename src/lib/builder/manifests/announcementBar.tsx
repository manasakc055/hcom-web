// src/lib/builder/manifests/announcementBar.tsx
"use client";
import { BlockManifest } from "../types";

type Props = {
    text: string;
    href?: string;
    align?: "left" | "center" | "right";
    style?: { margin?: string; padding?: string; background?: string };
};

export const announcementBar: BlockManifest<Props> = {
    type: "announcementBar",
    title: "Announcement Bar",
    defaults: {
        text: "Free shipping over ₹999 • New arrivals live!",
        align: "center",
        style: { padding: "py-2", background: "bg-amber-50" },
    },
    fields: [
        { name: "text", label: "Text", type: "string", maxLen: 160, group: "content" },
        { name: "href", label: "Link (optional)", type: "string", group: "content" },
        {
            name: "align",
            label: "Alignment",
            type: "select",
            options: [
                { label: "Left", value: "left" },
                { label: "Center", value: "center" },
                { label: "Right", value: "right" },
            ],
            group: "content",
        },
        { name: "style.margin", label: "Margin", type: "string", group: "design" },
        { name: "style.padding", label: "Padding", type: "string", group: "design" },
        { name: "style.background", label: "Background", type: "string", group: "design" },
    ],
    Preview: (p) => {
        const map: any = { left: "text-left", center: "text-center", right: "text-right" };
        return (
            <div className={`${p.style?.background ?? ""} ${p.style?.padding ?? ""}`}>
                <div className={`max-w-6xl mx-auto ${map[p.align ?? "center"]}`}>
                    {p.href ? (
                        <a className="text-sm text-blue-700 underline">{p.text}</a>
                    ) : (
                        <p className="text-sm text-neutral-900">{p.text}</p>
                    )}
                </div>
            </div>
        );
    },
};
