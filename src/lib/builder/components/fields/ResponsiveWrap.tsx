// src/lib/builder/components/fields/ResponsiveWrap.tsx
"use client";
import { useDevice } from "../../state";
import { Breakpoint, Responsive } from "../../types";
import { useState } from "react";

const order: Breakpoint[] = ["base","md","lg"]; // M, T, D

export default function ResponsiveWrap<T>({
                                              label, value, onChange, children,
                                          }: {
    label: string;
    value?: Responsive<T>;
    onChange: (v: Responsive<T>) => void;
    children: (current: T|undefined, set: (nv: T|undefined) => void) => React.ReactNode;
}) {
    // default to current device tab
    const device = useDevice(); // "mobile" | "tablet" | "desktop"
    const initial = device === "desktop" ? "lg" : device === "tablet" ? "md" : "base";
    const [bp, setBp] = useState<Breakpoint>(initial as Breakpoint);

    const current = typeof value === "object" && value !== null ? (value as any)[bp] : (bp === "base" ? (value as any) : undefined);
    const setCurrent = (nv: any) => {
        if (bp === "base") {
            // base as scalar if no md/lg set
            const hasObj = typeof value === "object" && value !== null && ("md" in (value as any) || "lg" in (value as any));
            onChange(hasObj ? { ...(value as any), base: nv } : (nv as any));
        } else {
            onChange({ ...(typeof value === "object" && value !== null ? (value as any) : { base: value as any }), [bp]: nv });
        }
    };

    return (
        <div className="border rounded">
            <div className="flex items-center justify-between px-2 py-1 border-b">
                <span className="text-xs text-neutral-600">{label}</span>
                <div className="flex gap-1">
                    <Tab label="M" active={bp==="base"} onClick={()=>setBp("base")} />
                    <Tab label="T" active={bp==="md"}   onClick={()=>setBp("md")} />
                    <Tab label="D" active={bp==="lg"}   onClick={()=>setBp("lg")} />
                </div>
            </div>
            <div className="p-2">
                {children(current, setCurrent)}
            </div>
        </div>
    );
}

function Tab({label, active, onClick}:{label:string;active:boolean;onClick:()=>void}) {
    return (
        <button onClick={onClick}
                className={`h-6 w-6 text-[11px] rounded border ${active?"bg-black text-white":"bg-white"}`}
                aria-pressed={active}
        >
            {label}
        </button>
    );
}
