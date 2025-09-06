// src/lib/builder/components/BlockLibrary.tsx
"use client";
import { useMemo, useState } from "react";
import { MANIFESTS } from "../manifests";
import { useBuilder, useLayout, useSelectedId } from "../state";

export default function BlockLibrary({ open, onClose }: { open: boolean; onClose: () => void }) {
    const [q, setQ] = useState("");
    const insertSection = useBuilder((s) => s.insertSection);
    const layout = useLayout();
    const selectedId = useSelectedId();

    const items = useMemo(
        () => Object.values(MANIFESTS).filter((m) =>
            (m.title + " " + m.type).toLowerCase().includes(q.toLowerCase())
        ),
        [q]
    );

    if (!open) return null;

    const insert = (type: string) => {
        const idx = layout.sections.findIndex((b) => b.id === selectedId);
        const at = idx >= 0 ? idx + 1 : layout.sections.length;
        insertSection(type, at);
        onClose();
    };

    return (
        <div className="fixed inset-0 z-50">
            <div className="absolute inset-0 bg-black/40" onClick={onClose} />
            <div className="absolute left-1/2 top-20 -translate-x-1/2 w-[680px] max-w-[92vw] rounded-xl bg-white shadow-xl ring-1 ring-black/10">
                <div className="p-3 border-b">
                    <input
                        autoFocus
                        value={q}
                        onChange={(e) => setQ(e.target.value)}
                        placeholder="Search blocks..."
                        className="w-full rounded-md border px-3 py-2 text-sm"
                    />
                </div>
                <div className="p-3 grid grid-cols-2 md:grid-cols-3 gap-3 max-h-[60vh] overflow-auto">
                    {items.map((m) => (
                        <button
                            key={m.type}
                            onClick={() => insert(m.type)}
                            className="text-left rounded-lg border hover:border-black/30 p-3 bg-white transition"
                        >
                            <div className="text-[11px] uppercase tracking-wide text-neutral-500">{m.type}</div>
                            <div className="font-medium text-neutral-900">{m.title}</div>
                            <div className="mt-2 rounded border bg-neutral-50 p-2 text-[11px] text-neutral-500">
                                Preview
                            </div>
                        </button>
                    ))}
                    {!items.length && <div className="col-span-full text-sm text-neutral-500 p-4">No matches</div>}
                </div>
                <div className="p-3 border-t text-xs text-neutral-500 flex justify-between">
                    <div>Enter to insert, Esc to close</div>
                    <div>↑/↓ select • ⌘/Ctrl+D duplicate • D delete • ⇧↑/↓ reorder</div>
                </div>
            </div>
        </div>
    );
}
