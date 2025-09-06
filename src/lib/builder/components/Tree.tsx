// src/lib/builder/components/Tree.tsx
"use client";
import { useLayout, useBuilder, useSelectedId } from "../state";
import { DndContext, PointerSensor, useSensor, useSensors, DragEndEvent } from "@dnd-kit/core";
import { SortableContext, verticalListSortingStrategy, arrayMove } from "@dnd-kit/sortable";
import SortableItem from "./TreeSortableItem";

export default function Tree() {
    const layout = useLayout();
    const selectedId = useSelectedId();
    const select = useBuilder((s) => s.select);
    const reorder = useBuilder((s) => s.reorder);
    const duplicate = useBuilder((s) => s.duplicate);
    const remove = useBuilder((s) => s.remove);

    const sensors = useSensors(useSensor(PointerSensor, { activationConstraint: { distance: 6 } }));

    const onDragEnd = (e: DragEndEvent) => {
        const ids = layout.sections.map((s) => s.id);
        const from = ids.indexOf(String(e.active.id));
        const to = ids.indexOf(String(e.over?.id));
        if (from >= 0 && to >= 0 && from !== to) reorder(from, to);
    };

    return (
        <div className="p-3">
            <div className="text-sm text-neutral-500 mb-2">Sections</div>
            <DndContext sensors={sensors} onDragEnd={onDragEnd}>
                <SortableContext items={layout.sections.map((s) => s.id)} strategy={verticalListSortingStrategy}>
                    <ul className="space-y-2">
                        {layout.sections.map((s) => (
                            <SortableItem
                                key={s.id}
                                id={s.id}
                                active={selectedId === s.id}
                                label={s.type}
                                onSelect={() => select(s.id)}
                                onDuplicate={() => duplicate(s.id)}
                                onDelete={() => remove(s.id)}
                            />
                        ))}
                    </ul>
                </SortableContext>
            </DndContext>
        </div>
    );
}
