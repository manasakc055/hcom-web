// src/lib/builder/components/Inspector.tsx
"use client";
import {useLayout, useSelectedId, useBuilder} from "../state";
import {MANIFESTS} from "../manifests";
import StringField from "./fields/StringField";
import TextareaField from "./fields/TextareaField";
import NumberField from "./fields/NumberField";
import SelectField from "./fields/SelectField";
import BooleanField from "./fields/BooleanField";
import ImageField from "./fields/ImageField";
import ResponsiveWrap from "./fields/ResponsiveWrap";

export default function Inspector() {
    const layout = useLayout();
    const selectedId = useSelectedId();
    const patchProps = useBuilder((s) => s.patchProps);

    const block = layout.sections.find((b) => b.id === selectedId);
    if (!block) return <div className="p-4 text-sm text-neutral-500">Select a section</div>;

    const m = MANIFESTS[block.type];
    if (!m) return <div className="p-4">Unknown block type</div>;

    const grouped = {
        content: m.fields.filter((f) => f.group !== "design" && f.group !== "advanced"),
        design: m.fields.filter((f) => f.group === "design"),
        advanced: m.fields.filter((f) => f.group === "advanced"),
    };

    return (
        <div className="p-3 space-y-6">
            <div>
                <div className="text-sm font-medium mb-2">Content</div>
                <FieldList fields={grouped.content} onChange={(path, v) => patchProps(block.id, path, v)}
                           value={block.props}/>
            </div>
            <div>
                <div className="text-sm font-medium mb-2">Design</div>
                <FieldList fields={grouped.design} onChange={(path, v) => patchProps(block.id, path, v)}
                           value={block.props}/>
            </div>
        </div>
    );
}

// src/lib/builder/components/Inspector.tsx (FieldList)

function FieldList({
                       fields, value, onChange,
                   }: { fields: any[]; value: any; onChange: (path: string, v: any) => void; }) {
    const getVal = (path: string) =>
        path.split(".").reduce((acc, k) => (acc ? acc[k] : undefined), value);

    return (
        <div className="space-y-3">
            {fields.map((f) => {
                // ❌ Do NOT put `key` inside this object
                const common = {
                    label: f.label,
                    value: getVal(f.name),
                    onChange: (v: any) => onChange(f.name, v),
                };

                switch (f.type) {
                    case "string":
                        return (
                            <StringField
                                key={f.name}               // ✅ key directly on the element
                                {...common}
                                maxLen={f.maxLen}
                                placeholder={f.placeholder}
                            />
                        );
                    case "textarea":
                        return (
                            <TextareaField
                                key={f.name}
                                {...common}
                                maxLen={f.maxLen}
                                placeholder={f.placeholder}
                            />
                        );
                    case "number":
                        return (
                            <NumberField
                                key={f.name}
                                {...common}
                                min={f.min}
                                max={f.max}
                            />
                        );
                    case "select": {
                        const Control = (
                            <SelectField
                                key={f.name}
                                label={f.label}
                                value={getVal(f.name)}
                                onChange={(v:any)=>onChange(f.name, v)}
                                options={f.options}
                            />
                        );
                        if (f.responsive) {
                            return (
                                <ResponsiveWrap
                                    key={f.name}
                                    label={f.label}
                                    value={getVal(f.name)}
                                    onChange={(v:any)=>onChange(f.name, v)}
                                >
                                    {(cur,set)=>(
                                        <SelectField
                                            label=""
                                            value={cur as any}
                                            onChange={set as any}
                                            options={f.options}
                                        />
                                    )}
                                </ResponsiveWrap>
                            );
                        }
                        return Control;
                    }
                    case "boolean":
                        return <BooleanField key={f.name} {...common} />;
                    case "image":
                        return <ImageField key={f.name} {...common} />;
                    default:
                        return null; // no key needed for null
                }
            })}
        </div>
    );
}
