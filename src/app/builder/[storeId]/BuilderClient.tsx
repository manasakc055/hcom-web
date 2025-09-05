// src/app/builder/[storeId]/BuilderClient.tsx
"use client";

import Topbar from "./Topbar";
import BlockLibrary from "./BlockLibrary";
import Canvas from "./Canvas";
import Inspector from "./Inspector";

export default function BuilderClient({ storeId }: { storeId: string }) {
  return (
    <div className="flex flex-col h-screen">
      <Topbar storeId={storeId} />
      <div className="flex flex-1 min-h-0">
        <BlockLibrary />
        <Canvas />
        <Inspector />
      </div>
    </div>
  );
}
