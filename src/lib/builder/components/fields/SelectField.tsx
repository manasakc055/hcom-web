"use client";
export default function SelectField({
                                        label,
                                        value,
                                        onChange,
                                        options = [],
                                    }: {
    label: string;
    value?: string | number;
    onChange: (v: string | number) => void;
    options?: { label: string; value: string | number }[];
}) {
    return (
        <label className="block text-sm">
            <span className="text-neutral-700">{label}</span>
            <select
                className="mt-1 w-full border rounded px-2 py-1"
                value={value as any ?? ""}
                onChange={(e) => onChange(e.target.value)}
            >
                {options.map((o) => (
                    <option key={String(o.value)} value={o.value as any}>
                        {o.label}
                    </option>
                ))}
            </select>
        </label>
    );
}
