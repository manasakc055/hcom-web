// src/app/builder/page.tsx
import React from 'react';
import BlockLibrary from '../builder/BlockLibrary';
import Canvas from '../builder/Canvas';
import Inspector from '../builder/Inspector';
export default function BuilderPage() {
    return (
        <div className="flex h-[calc(100vh-64px)]">
            <BlockLibrary />
            <Canvas />
            <Inspector />
        </div>
    );
}