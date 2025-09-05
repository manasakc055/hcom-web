// src/app/builder/[storeId]/Inspector.tsx
"use client";

import { useMemo } from "react";
import { useEditor } from "./state";
import { Manifests } from "./manifest";
import ImageInput from "../_components/ImageInput";

export default function Inspector() {
  const sections = useEditor((s) => s.sections);
  const selectedId = useEditor((s) => s.selectedId);
  const updateProps = useEditor((s) => s.updateProps);

  const sel = useMemo(() => sections.find((s) => s.id === selectedId), [sections, selectedId]);
  if (!sel) {
    return (
      <aside className="w-80 shrink-0 border-l p-3 text-sm text-gray-500 bg-white">
        Inspector
      </aside>
    );
  }

  const manifest = Manifests[sel.type];
  const entries = manifest ? Object.entries(manifest.props) : [];

  return (
    <aside className="w-80 shrink-0 border-l p-3 space-y-3 bg-white">
      <h3 className="text-sm font-semibold">{manifest?.title ?? sel.type}</h3>

      {entries.length === 0 && <div className="text-sm text-gray-500">No props</div>}

      {entries.map(([name, schema]) => {
        const val = sel.props?.[name];

        if (schema.type === "image") {
          return (
            <ImageInput
              key={name}
              label={schema.label}
              value={val}
              onChange={(v) => updateProps(sel.id, { [name]: v })}
            />
          );
        }

        if (schema.type === "select") {
          return (
            <label key={name} className="block text-sm">
              {schema.label}
              <select
                className="mt-1 w-full border rounded px-2 py-1 text-sm"
                value={val ?? ""}
                onChange={(e) => updateProps(sel.id, { [name]: e.target.value })}
              >
                <option value="">—</option>
                {schema.options.map((o) => (
                  <option key={o} value={o}>{o}</option>
                ))}
              </select>
            </label>
          );
        }

        if (schema.type === "boolean") {
          return (
            <label key={name} className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={!!val}
                onChange={(e) => updateProps(sel.id, { [name]: e.target.checked })}
              />
              {schema.label}
            </label>
          );
        }

        // string (default)
        return (
          <label key={name} className="block text-sm">
            {schema.label}
            {schema.multiline ? (
              <textarea
                className="mt-1 w-full border rounded px-2 py-1 text-sm"
                rows={3}
                placeholder={schema.placeholder}
                value={val ?? ""}
                onChange={(e) => updateProps(sel.id, { [name]: e.target.value })}
              />
            ) : (
              <input
                className="mt-1 w-full border rounded px-2 py-1 text-sm"
                placeholder={schema.placeholder}
                value={val ?? ""}
                maxLength={schema.maxLen}
                onChange={(e) => updateProps(sel.id, { [name]: e.target.value })}
              />
            )}
          </label>
        );
      })}
    </aside>
  );
}
