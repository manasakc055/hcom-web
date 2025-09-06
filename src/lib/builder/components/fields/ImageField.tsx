"use client";
export default function ImageField({
                                       label,
                                       value,
                                       onChange,
                                       placeholder,
                                   }: {
    label: string;
    value?: string;
    onChange: (v: string) => void;
    placeholder?: string;
}) {
    return (
        <div className="text-sm">
            <label className="block text-sm">
                <span className="text-neutral-700">{label}</span>
                <input
                    className="mt-1 w-full border rounded px-2 py-1"
                    type="url"
                    value={value ?? ""}
                    placeholder={placeholder ?? "https://..."}
                    onChange={(e) => onChange(e.target.value)}
                />
            </label>
            {value ? (
                <div className="mt-2 rounded border overflow-hidden">
                    {/* Using plain <img> to avoid Next/Image config here */}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={value} alt="" className="w-full h-32 object-cover" />
                </div>
            ) : null}
        </div>
    );
}
