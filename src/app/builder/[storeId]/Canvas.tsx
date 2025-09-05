"use client";

import { useEditor } from "./state";
import BlockPreview from "./BlockPreview";

export default function Canvas() {
  const sections = useEditor((s) => s.sections);
  const selectedId = useEditor((s) => s.selectedId);
  const select = useEditor((s) => s.select);
  const remove = useEditor((s) => s.remove);
  const moveUp = useEditor((s) => s.moveUp);
  const moveDown = useEditor((s) => s.moveDown);

  return (
    <div className="flex-1 p-6 bg-slate-50 overflow-auto">
      <div className="max-w-5xl mx-auto space-y-4">
        {sections.map((s, idx) => (
          <div
            key={s.id}
            className={`border rounded-xl bg-white p-3 transition ring-offset-2 ${
              selectedId === s.id ? "ring-2 ring-blue-500" : ""
            }`}
            onClick={() => select(s.id)}
          >
            <div className="flex items-center justify-between mb-2">
              <div className="text-xs uppercase tracking-wide text-gray-500">{s.type}</div>
              <div className="flex gap-2">
                <button
                  className="text-xs px-2 py-1 border rounded"
                  onClick={(e) => { e.stopPropagation(); moveUp(s.id); }}
                  disabled={idx === 0}
                >
                  ↑
                </button>
                <button
                  className="text-xs px-2 py-1 border rounded"
                  onClick={(e) => { e.stopPropagation(); moveDown(s.id); }}
                  disabled={idx === sections.length - 1}
                >
                  ↓
                </button>
                <button
                  className="text-xs px-2 py-1 border rounded text-red-600"
                  onClick={(e) => { e.stopPropagation(); remove(s.id); }}
                >
                  Delete
                </button>
              </div>
            </div>

            <BlockPreview section={s} />
          </div>
        ))}

        {sections.length === 0 && (
          <div className="text-sm text-gray-500 text-center py-16 border-2 border-dashed rounded-xl bg-white">
            Add blocks from the left to start building…
          </div>
        )}
      </div>
    </div>
  );
}
