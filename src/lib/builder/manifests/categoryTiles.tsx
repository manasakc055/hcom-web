// src/lib/builder/manifests/categoryTiles.tsx
"use client";
import { BlockManifest } from "../types";

type Tile = { title: string; image: string; href?: string };
type Props = {
    title?: string;
    columns?: number; // 3 or 2
    tiles: {
        a: Tile; b: Tile; c: Tile; d: Tile;
        e?: Tile; f?: Tile;
    };
    style?: { margin?: string; padding?: string; background?: string };
};

export const categoryTiles: BlockManifest<Props> = {
    type: "categoryTiles",
    title: "Category Tiles",
    defaults: {
        title: "Shop by Category",
        columns: 3,
        tiles: {
            a: { title: "Men", image: "https://images.unsplash.com/photo-1535295972055-1c762f4483e5?q=80&w=800&auto=format&fit=crop" },
            b: { title: "Women", image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=800&auto=format&fit=crop" },
            c: { title: "Kids", image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?q=80&w=800&auto=format&fit=crop" },
            d: { title: "Accessories", image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=800&auto=format&fit=crop" },
            e: { title: "Footwear", image: "https://images.unsplash.com/photo-1520975730010-4e30e71f981d?q=80&w=800&auto=format&fit=crop" },
            f: { title: "Beauty", image: "https://images.unsplash.com/photo-1541829070764-84a7d30dd3d8?q=80&w=800&auto=format&fit=crop" },
        },
        style: { padding: "py-10", background: "bg-white" },
    },
    fields: [
        { name: "title", label: "Section Title", type: "string", group: "content" },
        {
            name: "columns", label: "Columns", type: "select",
            options: [{ label: "3", value: 3 }, { label: "2", value: 2 }],
            group: "content",
        },

        // Fixed tile fields (MVP; later we’ll switch to array editor)
        { name: "tiles.a.title", label: "Tile A Title", type: "string", group: "content" },
        { name: "tiles.a.image", label: "Tile A Image", type: "image", group: "content" },
        { name: "tiles.a.href",  label: "Tile A Link", type: "string", group: "content" },

        { name: "tiles.b.title", label: "Tile B Title", type: "string", group: "content" },
        { name: "tiles.b.image", label: "Tile B Image", type: "image", group: "content" },
        { name: "tiles.b.href",  label: "Tile B Link", type: "string", group: "content" },

        { name: "tiles.c.title", label: "Tile C Title", type: "string", group: "content" },
        { name: "tiles.c.image", label: "Tile C Image", type: "image", group: "content" },
        { name: "tiles.c.href",  label: "Tile C Link", type: "string", group: "content" },

        { name: "tiles.d.title", label: "Tile D Title", type: "string", group: "content" },
        { name: "tiles.d.image", label: "Tile D Image", type: "image", group: "content" },
        { name: "tiles.d.href",  label: "Tile D Link", type: "string", group: "content" },

        { name: "tiles.e.title", label: "Tile E Title", type: "string", group: "content" },
        { name: "tiles.e.image", label: "Tile E Image", type: "image", group: "content" },
        { name: "tiles.e.href",  label: "Tile E Link", type: "string", group: "content" },

        { name: "tiles.f.title", label: "Tile F Title", type: "string", group: "content" },
        { name: "tiles.f.image", label: "Tile F Image", type: "image", group: "content" },
        { name: "tiles.f.href",  label: "Tile F Link", type: "string", group: "content" },

        { name: "style.margin", label: "Margin", type: "string", group: "design" },
        { name: "style.padding", label: "Padding", type: "string", group: "design" },
        { name: "style.background", label: "Background", type: "string", group: "design" },
    ],
    Preview: (p) => {
        const cols = Math.max(2, Math.min(Number(p.columns ?? 3), 3));
        const list = Object.values(p.tiles).filter(Boolean) as Tile[];
        return (
            <section className={`${p.style?.background ?? ""} ${p.style?.padding ?? ""}`}>
                <div className="max-w-6xl mx-auto">
                    {p.title && <h3 className="text-xl font-semibold mb-4 text-neutral-900">{p.title}</h3>}
                    <div className="grid gap-4" style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}>
                        {list.map((t, i) => (
                            <div key={i} className="rounded-lg overflow-hidden ring-1 ring-black/5">
                                <div className="relative h-36 md:h-44">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img src={t.image} alt="" className="absolute inset-0 w-full h-full object-cover" />
                                </div>
                                <div className="p-3">
                                    <div className="text-sm font-medium text-neutral-900">{t.title}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    },
};
