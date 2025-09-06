"use client";
import * as React from "react";

export default function NumberField({
                                        label,
                                        value,
                                        onChange,
                                        min,
                                        max,
                                    }: {
    label: string;
    value?: number;
    onChange: (v: number | undefined) => void;
    min?: number;
    max?: number;
}) {
    const handle = (e: React.ChangeEvent<HTMLInputElement>) => {
        const raw = e.target.value;
        if (raw === "") return onChange(undefined);
        const num = Number(raw);
        if (!Number.isNaN(num)) onChange(num);
    };

    return (
        <label className="block text-sm">
            <span className="text-neutral-700">{label}</span>
            <input
                type="number"
                className="mt-1 w-full border rounded px-2 py-1"
                value={value ?? ""}
                min={min}
                max={max}
                onChange={handle}
            />
        </label>
    );
}
