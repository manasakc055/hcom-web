// src/app/(builder)/builder/page.tsx
"use client";
import Topbar from "@/lib/builder/components/Topbar";
import Tree from "@/lib/builder/components/Tree";
import Canvas from "@/lib/builder/components/Canvas";
import Inspector from "@/lib/builder/components/Inspector";
import KeyboardShortcuts from "@/lib/builder/components/KeyboardShortcuts";
import { useEffect } from "react";
import { useBuilder } from "@/lib/builder/state";

export default function BuilderPage() {
    const setLayout = useBuilder((s) => s.setLayout);
    useEffect(() => {
        setLayout({
            path: "/home",
            sections: [
                { id: crypto.randomUUID(), type: "heroBanner", props: {} },
                { id: crypto.randomUUID(), type: "productGrid", props: {} },
            ],
        });
    }, [setLayout]);

    return (
        <div className="h-screen grid grid-rows-[auto,1fr]">
            <Topbar />
            <div className="flex h-full border-t">
                <aside className="w-[300px] shrink-0 border-r bg-neutral-950 text-neutral-100">
                    <Tree />
                </aside>
                <main className="flex-1 min-w-0 overflow-auto bg-neutral-50 text-neutral-900">
                    <Canvas />
                </main>
                <aside className="w-[360px] shrink-0 border-l bg-neutral-950 text-neutral-100">
                    <Inspector />
                </aside>
            </div>
            <KeyboardShortcuts />
        </div>
    );
}
