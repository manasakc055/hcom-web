// src/lib/builder/components/KeyboardShortcuts.tsx
"use client";
import { useEffect } from "react";
import { useBuilder, useLayout, useSelectedId } from "../state";

const isTyping = (el: EventTarget | null) => {
    if (!(el instanceof HTMLElement)) return false;
    const tag = el.tagName.toLowerCase();
    return (
        tag === "input" || tag === "textarea" || tag === "select" || el.isContentEditable
    );
};

export default function KeyboardShortcuts() {
    const selectByDelta = useBuilder((s) => s.selectByDelta);
    const duplicate = useBuilder((s) => s.duplicate);
    const remove = useBuilder((s) => s.remove);
    const reorder = useBuilder((s) => s.reorder);
    const layout = useLayout();
    const selectedId = useSelectedId();

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (isTyping(e.target)) return;

            // Navigation: Up/Down move selection
            if (e.key === "ArrowUp") {
                e.preventDefault();
                selectByDelta(-1);
                return;
            }
            if (e.key === "ArrowDown") {
                e.preventDefault();
                selectByDelta(1);
                return;
            }

            // Reorder selected with Shift+Arrow
            if (e.shiftKey && (e.key === "ArrowUp" || e.key === "ArrowDown")) {
                const ids = layout.sections.map((s) => s.id);
                const from = ids.indexOf(selectedId ?? "");
                if (from >= 0) {
                    const to = e.key === "ArrowUp" ? Math.max(0, from - 1) : Math.min(ids.length - 1, from + 1);
                    if (to !== from) {
                        e.preventDefault();
                        reorder(from, to);
                    }
                }
                return;
            }

            // Duplicate: Cmd/Ctrl + D
            if ((e.metaKey || e.ctrlKey) && (e.key === "d" || e.key === "D")) {
                if (selectedId) {
                    e.preventDefault();
                    duplicate(selectedId);
                }
                return;
            }

            // Delete: plain "D" or Backspace/Delete
            if (e.key === "D" || e.key === "Backspace" || e.key === "Delete") {
                if (selectedId) {
                    e.preventDefault();
                    remove(selectedId);
                }
            }
        };

        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [duplicate, remove, reorder, selectByDelta, layout.sections, selectedId]);

    return null;
}
