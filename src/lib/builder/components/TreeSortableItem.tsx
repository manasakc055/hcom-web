// src/lib/builder/components/TreeSortableItem.tsx
"use client";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
export default function SortableItem({
                                         id, active, label, onSelect, onDuplicate, onDelete,
                                     }: { id: string; active?: boolean; label: string; onSelect: () => void; onDuplicate: () => void; onDelete: () => void; }) {
    const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id });
    const style = { transform: CSS.Transform.toString(transform), transition };
    return (
        <li ref={setNodeRef} style={style}
            className={`border rounded px-2 py-2 flex items-center justify-between ${active ? "bg-black text-white" : "bg-white"}`}>
            <button className="text-left flex-1" onClick={onSelect}>{label}</button>
            <div className="flex items-center gap-2">
                <button onClick={onDuplicate} title="Duplicate">⎘</button>
                <button onClick={onDelete} title="Delete">🗑</button>
                <button {...attributes} {...listeners} title="Drag">⠿</button>
            </div>
        </li>
    );
}
