// src/lib/builder/state.ts
"use client";
import { create } from "zustand";
import { nanoid } from "nanoid";
import { PageLayout, BlockBase, Device } from "./types";
import { MANIFESTS } from "./manifests";

type BuilderState = {
    device: Device;
    layout: PageLayout;
    selectedId?: string;
    saving: boolean;
    savedAt?: number;
    // actions
    setDevice: (d: Device) => void;
    select: (id?: string) => void;
    selectByDelta: (delta: -1 | 1) => void;
    reorder: (fromIndex: number, toIndex: number) => void;
    duplicate: (id: string) => void;
    remove: (id: string) => void;
    patchProps: (id: string, path: string, value: any) => void;
    setLayout: (layout: PageLayout) => void;
    setSaving: (s: boolean) => void;
    setSavedAt: (ts: number) => void;
    insertSection: (type: string, at?: number) => string; // NEW
};

const setAtPath = (obj: any, path: string, value: any) => {
    const parts = path.split(".");
    let cur = obj;
    for (let i = 0; i < parts.length - 1; i++) {
        cur[parts[i]] ??= {};
        cur = cur[parts[i]];
    }
    cur[parts[parts.length - 1]] = value;
};

export const useBuilder = create<BuilderState>()((set, get) => ({
    device: "desktop",
    layout: { path: "/home", sections: [] },
    saving: false,

    setDevice: (d) => set({ device: d }),
    select: (id) => set({ selectedId: id }),
    selectByDelta: (delta) => {
        const { layout, selectedId } = get();
        const idx = layout.sections.findIndex((b) => b.id === selectedId);
        const next = Math.min(Math.max((idx < 0 ? (delta > 0 ? -1 : 0) : idx) + delta, 0), layout.sections.length - 1);
        const id = layout.sections[next]?.id;
        if (id) set({ selectedId: id });
    },

    reorder: (from, to) =>
        set((s) => {
            const arr = [...s.layout.sections];
            const [moved] = arr.splice(from, 1);
            arr.splice(to, 0, moved);
            return { layout: { ...s.layout, sections: arr } };
        }),

    duplicate: (id) =>
        set((s) => {
            const idx = s.layout.sections.findIndex((b) => b.id === id);
            if (idx < 0) return {};
            const clone: BlockBase = JSON.parse(JSON.stringify(s.layout.sections[idx]));
            clone.id = nanoid();
            const arr = [...s.layout.sections];
            arr.splice(idx + 1, 0, clone);
            return { layout: { ...s.layout, sections: arr }, selectedId: clone.id };
        }),

    remove: (id) =>
        set((s) => {
            const arr = s.layout.sections.filter((b) => b.id !== id);
            const curIdx = s.layout.sections.findIndex((b) => b.id === id);
            const nextSel = arr[Math.max(0, curIdx - 1)]?.id;
            return { layout: { ...s.layout, sections: arr }, selectedId: nextSel };
        }),

    patchProps: (id, path, value) =>
        set((s) => {
            const arr = s.layout.sections.map((b) => {
                if (b.id !== id) return b;
                const copy = JSON.parse(JSON.stringify(b));
                setAtPath(copy.props, path, value);
                return copy;
            });
            return { layout: { ...s.layout, sections: arr } };
        }),

    setLayout: (layout) => set({ layout }),
    setSaving: (saving) => set({ saving }),
    setSavedAt: (ts) => set({ savedAt: ts }),

    insertSection: (type, at) => {
        const m = MANIFESTS[type];
        if (!m) throw new Error(`Unknown block type: ${type}`);
        const newBlock: BlockBase = { id: nanoid(), type: m.type, props: JSON.parse(JSON.stringify(m.defaults)) };
        const { layout } = get();
        const arr = [...layout.sections];
        const index = typeof at === "number" ? Math.min(Math.max(at, 0), arr.length) : arr.length;
        arr.splice(index, 0, newBlock);
        set({ layout: { ...layout, sections: arr }, selectedId: newBlock.id });
        return newBlock.id;
    },
}));

// Primitive selectors (SSR-safe)
export const useDevice = () => useBuilder((s) => s.device);
export const useLayout = () => useBuilder((s) => s.layout);
export const useSelectedId = () => useBuilder((s) => s.selectedId);
export const useSaving = () => {
    const saving = useBuilder((s) => s.saving);
    const savedAt = useBuilder((s) => s.savedAt);
    return { saving, savedAt };
};
