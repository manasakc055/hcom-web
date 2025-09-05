// src/app/builder/state.ts
'use client';
import { create } from 'zustand';
export type Section = { id: string; type: string; props: any };
type EditorState = {
    sections: Section[];
    selectedId?: string;
    setSections: (s: Section[]) => void;
    addBlock: (type: string) => void;
    updateProps: (id: string, p: any) => void;
    select: (id?: string) => void;
};
export const useEditor = create<EditorState>((set, get) => ({
    sections: [],
    setSections: (s) => set({ sections: s }),
    addBlock: (type) => set({ sections: [...get().sections, { id: crypto.randomUUID(), type, props: {} }] }),
    updateProps: (id, p) => set({ sections: get().sections.map(sec => sec.id === id ? { ...sec, props: { ...sec.props, ...p } } : sec) }),
    select: (id) => set({ selectedId: id }),
}));