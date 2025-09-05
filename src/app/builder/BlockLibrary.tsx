// src/app/builder/BlockLibrary.tsx
'use client';
import { Registry } from './manifest';
import { useEditor } from './state';
export default function BlockLibrary() {
    const add = useEditor(s => s.addBlock);
    return (
        <aside className="w-64 border-r p-3 space-y-2">
            <h3 className="text-sm font-semibold mb-2">Blocks</h3>
            {Object.entries(Registry).map(([type, m]) => (
                <button key={type} className="w-full text-left px-3 py-2 rounded border hover:bg-gray-50" onClick={() => add(type)}>
                    {m.title}
                </button>
            ))}
        </aside>
    );
}