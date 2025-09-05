// src/app/builder/Canvas.tsx
'use client';
import { useEditor } from './state';
export default function Canvas() {
    const { sections, select, selectedId } = useEditor(s => ({ sections: s.sections, select: s.select, selectedId: s.selectedId }));
    return (
        <div className="flex-1 p-4 space-y-3">
            {sections.map(s => (
                <div key={s.id} className={`border rounded p-3 ${selectedId === s.id ? 'ring-2 ring-primary' : ''}`} onClick={() => select(s.id)}>
                    <div className="text-xs uppercase tracking-wider text-gray-500">{s.type}</div>
                    <div className="text-sm text-gray-700 truncate">{JSON.stringify(s.props)}</div>
                </div>
            ))}
            {sections.length === 0 && <div className="text-sm text-gray-500">Add blocks from the left to start building…</div>}
        </div>
    );
}