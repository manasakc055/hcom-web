// src/app/builder/[storeId]/BlockPreview.tsx
"use client";
import type { Section } from "./state";

export default function BlockPreview({ section }: { section: Section }) {
  if (section.type === "HeroBanner") {
    const { image, headline, subhead, ctaText } = section.props || {};
    return (
      <div className="relative overflow-hidden rounded-xl bg-gray-100">
        {image ? (
          <img src={image} alt="" className="w-full h-40 object-cover opacity-90" />
        ) : (
          <div className="w-full h-40 bg-gray-200 grid place-items-center text-gray-500 text-sm">Hero image</div>
        )}
        <div className="absolute inset-0 flex items-end p-4">
          <div className="bg-black/50 text-white rounded px-3 py-2">
            <div className="font-semibold leading-tight">{headline || "Your headline"}</div>
            <div className="text-xs opacity-80">{subhead || "Subhead"}</div>
            <div className="mt-2 inline-block bg-white text-black text-xs px-2 py-1 rounded">
              {ctaText || "Shop Now"}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // default lightweight preview for other blocks
  return (
    <div className="text-xs text-gray-500">{section.type}</div>
  );
}
