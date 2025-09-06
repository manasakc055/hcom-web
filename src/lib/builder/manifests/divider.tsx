// src/lib/builder/manifests/divider.tsx
"use client";
import { BlockManifest } from "../types";

type Props = { thickness?: number; style?: { margin?: string; padding?: string; background?: string } };

export const divider: BlockManifest<Props> = {
    type: "divider",
    title: "Divider",
    defaults: { thickness: 1, style: { margin: "my-8", padding: "", background: "bg-transparent" } },
    fields: [
        { name: "thickness", label: "Thickness (px)", type: "number", min: 1, max: 8, group: "content" },
        { name: "style.margin", label: "Margin", type: "string", group: "design" },
    ],
    Preview: (p) => (
        <div className={`${p.style?.margin ?? "my-8"}`}>
            <div className="max-w-6xl mx-auto">
                <div className="bg-neutral-200 w-full" style={{ height: `${p.thickness ?? 1}px` }} />
            </div>
        </div>
    ),
};
