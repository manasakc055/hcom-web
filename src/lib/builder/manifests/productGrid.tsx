// src/lib/builder/manifests/productGrid.tsx
"use client";
import { BlockManifest } from "../types";
import { clsBackground, clsPadding, clsGridCols } from "../responsive";

type ProductGridProps = {
    title?: string;
    columns?: number;          // for preview only
    style?: { margin?: string; padding?: string; background?: string };
};

export const productGrid: BlockManifest<ProductGridProps> = {
    type: "productGrid",
    title: "Product Grid",
    defaults: { title: "Featured Products", columns: 4, style: { padding: "py-8", background: "bg-white" } },
    fields: [
        { name: "title", label: "Section Title", type: "string", group: "content" },
        { name: "columns", label: "Columns", type: "number", min:2, max:6, group: "content", responsive: true },
        { name: "style.margin", label: "Margin", type: "select", group: "design",
            options: ["none","xs","sm","md","lg","xl"].map(s=>({label:s, value:s})), responsive: true },
        { name: "style.padding", label: "Padding", type: "select", group: "design",
            options: ["none","xs","sm","md","lg","xl"].map(s=>({label:s, value:s})), responsive: true },
        { name: "style.background", label: "Background", type: "select", group: "design",
            options: [{label:"White",value:"white"},{label:"Neutral 50",value:"neutral-50"},{label:"Neutral 100",value:"neutral-100"}],
            responsive: true },
    ],
    Preview: (p) => {
        const items = Array.from({ length: 8 });
        return (
            <section className={`${clsBackground(p.style?.background)} ${clsPadding(p.style?.padding)}`}>
                <div className="max-w-6xl mx-auto">
                    {p.title && <h3 className="text-xl font-semibold mb-4 text-neutral-900">{p.title}</h3>}
                    <div className={`grid gap-4 ${clsGridCols(p.columns)}`}>
                        {items.map((_, i) => (
                            <div key={i} className="border rounded-lg p-3">
                                <div className="h-32 bg-gray-100 rounded mb-2" />
                                <div className="h-3 w-3/4 bg-gray-100 rounded mb-2" />
                                <div className="h-3 w-1/2 bg-gray-100 rounded" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    },
};
