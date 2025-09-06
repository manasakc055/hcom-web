// src/lib/builder/components/Canvas.tsx
"use client";
import { useLayout, useSelectedId, useBuilder, useDevice } from "../state";
import { MANIFESTS } from "../manifests";
import { DndContext, PointerSensor, useSensor, useSensors, DragEndEvent } from "@dnd-kit/core";
import { SortableContext, rectSortingStrategy } from "@dnd-kit/sortable";
import { useMemo } from "react";

export default function Canvas() {
    const layout = useLayout();
    const selectedId = useSelectedId();
    const select = useBuilder((s) => s.select);
    const reorder = useBuilder((s) => s.reorder);
    const device = useDevice();

    const width = device === "mobile" ? 390 : device === "tablet" ? 768 : 1100;
    const sensors = useSensors(useSensor(PointerSensor, { activationConstraint: { distance: 6 } }));

    const ids = useMemo(() => layout.sections.map((s) => s.id), [layout.sections]);
    console.log(JSON.stringify(layout.sections));
    const onDragEnd = (e: DragEndEvent) => {
        const from = ids.indexOf(String(e.active.id));
        const to = ids.indexOf(String(e.over?.id));
        if (from >= 0 && to >= 0 && from !== to) reorder(from, to);
    };

    return (
        <div className="py-8 flex justify-center">
            <div className="bg-white shadow-sm ring-1 ring-black/5 rounded-lg overflow-hidden" style={{ width }}>
                <DndContext sensors={sensors} onDragEnd={onDragEnd}>
                    <SortableContext items={ids} strategy={rectSortingStrategy}>
                        {layout.sections.map((s) => {
                            const M = MANIFESTS[s.type];
                            if (!M) return null;
                            const selected = selectedId === s.id;
                            return (
                                <div key={s.id}
                                     onClick={() => select(s.id)}
                                     className={`relative cursor-default outline-none ${selected ? "ring-2 ring-blue-500" : ""}`}>
                                    <M.Preview {...(M.defaults as any)} {...s.props} selected={selected} />
                                    {selected && <div className="absolute inset-0 pointer-events-none ring-2 ring-blue-500/30" />}
                                </div>
                            );
                        })}
                    </SortableContext>
                </DndContext>
            </div>
        </div>
    );
}
