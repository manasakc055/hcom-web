// src/app/builder/[storeId]/Topbar.tsx
"use client";

import { useEffect, useRef } from "react";
import { useEditor } from "./state";

export default function Topbar({ storeId }: { storeId: string }) {
  const path = useEditor((s) => s.path);
  const setPath = useEditor((s) => s.setPath);
  const sections = useEditor((s) => s.sections);
  const dirty = useEditor((s) => s.dirty);
  const markClean = useEditor((s) => s.markClean);

  // Debounced autosave that does NOT set state during render
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(() => {
    if (!dirty) return;
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(async () => {
      await fetch("/api/builder/draft", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          storeId,
          path,
          layout: { version: 1, pageType: "CMS", sections },
        }),
      });
      markClean();
    }, 500);
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, [dirty, sections, path, storeId, markClean]);

  return (
    <header className="h-12 border-b flex items-center gap-3 px-3 bg-white">
      <input
        value={path}
        onChange={(e) => setPath(e.target.value)}
        className="h-8 px-2 border rounded text-sm w-64"
        placeholder="/ or /landing"
      />
      <span className="text-xs text-gray-500">
        {dirty ? "Saving…" : "Saved"}
      </span>
      <a
        href={`${path}?preview=1`}
        target="_blank"
        className="ml-auto text-sm px-3 py-1 border rounded hover:bg-gray-50"
      >
        Preview
      </a>
    </header>
  );
}
