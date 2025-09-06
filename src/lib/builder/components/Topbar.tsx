// src/lib/builder/components/Topbar.tsx
"use client";
import { useState } from "react";
import { useDevice, useSaving } from "../state";
import BlockLibrary from "./BlockLibrary";

export default function Topbar() {
    const device = useDevice();
    const { saving, savedAt } = useSaving();
    const [open, setOpen] = useState(false);

    return (
        <>
            <div className="h-12 px-4 flex items-center justify-between bg-white border-b">
                <div className="flex items-center gap-3">
                    <span className="font-medium">Store Builder</span>
                    <span className="text-xs text-neutral-500">/home</span>
                    <button
                        onClick={() => setOpen(true)}
                        className="ml-2 text-xs px-2 py-1 rounded bg-black text-white"
                    >
                        + Add Block
                    </button>
                </div>
                <div className="flex items-center gap-2">
                    <DeviceButton label="M" active={device === "mobile"} target="mobile" />
                    <DeviceButton label="T" active={device === "tablet"} target="tablet" />
                    <DeviceButton label="D" active={device === "desktop"} target="desktop" />
                    <div className="text-xs text-neutral-500 ml-3">
                        {saving ? "Saving…" : savedAt ? `Saved ${new Date(savedAt).toLocaleTimeString()}` : "—"}
                    </div>
                </div>
            </div>
            <BlockLibrary open={open} onClose={() => setOpen(false)} />
        </>
    );
}

function DeviceButton({ label, active, target }: { label: string; active: boolean; target: any }) {
    const setDevice = (d: any) => import("../state").then(m => m.useBuilder.getState().setDevice(d));
    return (
        <button
            onClick={() => setDevice(target)}
            className={`h-8 w-8 rounded border text-sm ${active ? "bg-black text-white" : "bg-white"}`}
            aria-pressed={active}
        >
            {label}
        </button>
    );
}
