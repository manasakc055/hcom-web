// src/lib/builder/components/useAutosave.ts
"use client";
import { useEffect, useRef } from "react";
import { useBuilder, useLayout } from "../state";

export default function useAutosave(storeId = "demo", path = "/home") {
    const layout = useLayout();
    const setSaving = useBuilder((s) => s.setSaving);
    const setSavedAt = useBuilder((s) => s.setSavedAt);
    const t = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        if (t.current) clearTimeout(t.current);
        setSaving(true);
        t.current = setTimeout(async () => {
            await fetch(`/api/builder/draft?key=${encodeURIComponent(`${storeId}:${path}`)}`, {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(layout),
            });
            setSaving(false);
            setSavedAt(Date.now());
        }, 500);
        return () => { if (t.current) clearTimeout(t.current); };
    }, [layout, path, storeId, setSaving, setSavedAt]);
}
