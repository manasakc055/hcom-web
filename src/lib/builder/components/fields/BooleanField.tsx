"use client";
export default function BooleanField({
                                         label,
                                         value,
                                         onChange,
                                     }: {
    label: string;
    value?: boolean;
    onChange: (v: boolean) => void;
}) {
    return (
        <label className="flex items-center gap-2 text-sm">
            <input
                type="checkbox"
                checked={!!value}
                onChange={(e) => onChange(e.target.checked)}
            />
            <span className="text-neutral-700">{label}</span>
        </label>
    );
}
