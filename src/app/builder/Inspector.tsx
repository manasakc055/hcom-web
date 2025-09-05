// src/app/builder/Inspector.tsx
'use client';
import { useEditor } from './state';
import { Registry } from './manifest';
export default function Inspector() {
    const { sections, selectedId, updateProps } = useEditor(s => ({ sections: s.sections, selectedId: s.selectedId, updateProps: s.updateProps }));
    const selected = sections.find(s => s.id === selectedId);
    if (!selected) return <aside className="w-80 border-l p-3 text-sm text-gray-500">Select a block</aside>;
    const manifest = (Registry as any)[selected.type];
    return (
        <aside className="w-80 border-l p-3 space-y-3">
            <h3 className="text-sm font-semibold">Inspector</h3>
            {Object.entries(manifest.props || {}).map(([name, schema]: any) => (
                <Field key={name} label={schema.label} value={selected.props?.[name] ?? ''} onChange={(v) => updateProps(selected.id, { [name]: v })} schema={schema} />
            ))}
        </aside>
    );
}
function Field({ label, value, onChange, schema }: any) {
    if (schema.type === 'number') return (
        <label className="block text-sm">{label}
            <input type="number" className="input input-bordered input-sm w-full" value={value} onChange={e => onChange(Number(e.target.value))} />
        </label>
    );
    if (schema.type === 'select') return (
        <label className="block text-sm">{label}
            <select className="select select-bordered select-sm w-full" value={value} onChange={e => onChange(e.target.value)}>
                <option value="">—</option>
                {schema.options.map((o: string) => <option key={o} value={o}>{o}</option>)}
            </select>
        </label>
    );
    if (schema.type === 'boolean') return (
        <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" checked={!!value} onChange={e => onChange(e.target.checked)} /> {label}
        </label>
    );
    return (
        <label className="block text-sm">{label}
            <input type="text" className="input input-bordered input-sm w-full" value={value} onChange={e => onChange(e.target.value)} />
        </label>
    );
}