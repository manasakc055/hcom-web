// src/app/builder/[storeId]/BlockLibrary.tsx
"use client";
import { useEditor } from "./state";

const BLOCKS = [
  { type: "HeroBanner", title: "Hero Banner" },
  { type: "ProductGrid", title: "Product Grid" },
  { type: "CategoryCarousel", title: "Category Carousel" },
  { type: "RichText", title: "Rich Text" },
  { type: "Footer", title: "Footer" },
];

export default function BlockLibrary() {
  const addBlock = useEditor((s) => s.addBlock); // primitive selector = stable

  return (
    <aside className="w-64 shrink-0 border-r p-3 space-y-2 bg-white">
      <h3 className="text-sm font-semibold mb-2">Blocks</h3>
      {BLOCKS.map((b) => (
        <button
          key={b.type}
          className="w-full text-left px-3 py-2 rounded border hover:bg-gray-50"
          onClick={() => addBlock(b.type)}
        >
          {b.title}
        </button>
      ))}
    </aside>
  );
}
