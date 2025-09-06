"use client";
export default function TextareaField({
                                          label,
                                          value,
                                          onChange,
                                          maxLen,
                                          placeholder,
                                      }: {
    label: string;
    value?: string;
    onChange: (v: string) => void;
    maxLen?: number;
    placeholder?: string;
}) {
    return (
        <label className="block text-sm">
            <span className="text-neutral-700">{label}</span>
            <textarea
                className="mt-1 w-full border rounded px-2 py-1"
                value={value ?? ""}
                maxLength={maxLen}
                placeholder={placeholder}
                onChange={(e) => onChange(e.target.value)}
                rows={4}
            />
        </label>
    );
}
