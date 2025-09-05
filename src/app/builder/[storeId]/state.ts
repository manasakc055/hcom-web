// src/app/builder/[storeId]/state.ts
"use client";

import { create } from "zustand";

export type Section = { id: string; type: string; props: Record<string, any> };

type EditorState = {
  path: string;
  sections: Section[];
  selectedId?: string;
  dirty: boolean;
  setPath: (p: string) => void;
  setSections: (s: Section[]) => void;
  addBlock: (type: string) => void;
  updateProps: (id: string, p: Record<string, any>) => void;
  select: (id?: string) => void;
  markClean: () => void;
  remove: (id: string) => void;
  moveUp: (id: string) => void;
  moveDown: (id: string) => void;
};

export const useEditor = create<EditorState>()((set, get) => ({
  path: "/",
  sections: [],
  dirty: false,

  setPath: (p) => set({ path: p, dirty: true }),
  setSections: (s) => set({ sections: s, dirty: true }),

  addBlock: (type) =>
    set({
      sections: [...get().sections, { id: crypto.randomUUID(), type, props: {} }],
      dirty: true,
    }),

  updateProps: (id, p) =>
    set({
      sections: get().sections.map((s) =>
        s.id === id ? { ...s, props: { ...s.props, ...p } } : s
      ),
      dirty: true,
    }),

  select: (id) => set({ selectedId: id }),

  markClean: () => set({ dirty: false }),

  remove: (id) =>
    set({
      sections: get().sections.filter((s) => s.id !== id),
      selectedId: get().selectedId === id ? undefined : get().selectedId,
      dirty: true,
    }),

  moveUp: (id) => {
    const arr = [...get().sections];
    const i = arr.findIndex((s) => s.id === id);
    if (i > 0) {
      [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]];
      set({ sections: arr, dirty: true });
    }
  },

  moveDown: (id) => {
    const arr = [...get().sections];
    const i = arr.findIndex((s) => s.id === id);
    if (i > -1 && i < arr.length - 1) {
      [arr[i + 1], arr[i]] = [arr[i], arr[i + 1]];
      set({ sections: arr, dirty: true });
    }
  },
}));
