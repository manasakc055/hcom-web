// src/app/builder/page.tsx
import React from 'react';
import BlockLibrary from './BlockLibrary';
import Canvas from './Canvas';
import Inspector from './Inspector';
export default function BuilderPage() {
    return (
        <div className="flex h-[calc(100vh-64px)]">
            <BlockLibrary />
            <Canvas />
            <Inspector />
        </div>
    );
}