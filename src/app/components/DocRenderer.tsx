"use client";

import React, { JSX } from "react";

type Block =
  | { type: "heading"; level?: number; content: string }
  | { type: "paragraph"; content: string }
  | { type: "list"; ordered?: boolean; items: string[] }
  | { type: "code"; content: string; language?: string }
  | { type: "image"; src: string; alt?: string; caption?: string }
  | { type: "table"; headers: string[]; rows: string[][] };

interface DocRendererProps {
  blocks: Block[];
}

export const DocRenderer: React.FC<DocRendererProps> = ({ blocks }) => {
  return (
    <div className="space-y-10">
      {blocks.map((block, i) => {
        switch (block.type) {
          // -----------------------------
          // HEADINGS
          // -----------------------------
          case "heading": {
            const Tag = (`h${block.level || 2}`) as keyof JSX.IntrinsicElements;
            const sizes: Record<number, string> = {
              1: "text-4xl",
              2: "text-3xl",
              3: "text-2xl",
              4: "text-xl",
              5: "text-lg",
              6: "text-base",
            };
            return (
              <Tag
                key={i}
                className={`${sizes[block.level || 2]} font-semibold text-slate-900 border-t border-slate-200 pb-1`}
              >
                {block.content}
              </Tag>
            );
          }

          // -----------------------------
          // PARAGRAPHS
          // -----------------------------
          case "paragraph":
            return (
              <p key={i} className="text-slate-700 leading-relaxed text-base">
                {block.content}
              </p>
            );

          // -----------------------------
          // LISTS
          // -----------------------------
          case "list":
            return block.ordered ? (
              <ol
                key={i}
                className="list-decimal ml-6 space-y-1 text-slate-700 text-base"
              >
                {block.items.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ol>
            ) : (
              <ul
                key={i}
                className="list-disc ml-6 space-y-1 text-slate-700 text-base"
              >
                {block.items.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
            );

          // -----------------------------
          // CODE BLOCKS
          // -----------------------------
          case "code":
            return (
              <pre
                key={i}
                className="bg-slate-900 text-slate-100 rounded-lg p-4 overflow-x-auto text-sm"
              >
                <code>{block.content}</code>
              </pre>
            );

          // -----------------------------
          // IMAGES
          // -----------------------------
          case "image":
            return (
              <figure key={i} className="text-center">
                <img
                  src={block.src}
                  alt={block.alt || ""}
                  className="mx-auto rounded-lg shadow-md border border-slate-200"
                />
                {block.caption && (
                  <figcaption className="text-sm text-slate-500 mt-2">
                    {block.caption}
                  </figcaption>
                )}
              </figure>
            );

          // -----------------------------
          // TABLES
          // -----------------------------
          case "table":
            return (
              <div key={i} className="overflow-x-auto rounded-lg border border-slate-200">
                <table className="min-w-full text-sm text-left border-collapse">
                  <thead className="bg-slate-100">
                    <tr>
                      {block.headers.map((header, h) => (
                        <th
                          key={h}
                          className="px-4 py-2 font-semibold text-slate-800 border-b border-slate-300"
                        >
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {block.rows.map((row, r) => (
                      <tr
                        key={r}
                        className="odd:bg-white even:bg-slate-50 border-b border-slate-200"
                      >
                        {row.map((cell, c) => (
                          <td key={c} className="px-4 py-2 text-slate-700">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );

          default:
            return null;
        }
      })}
    </div>
  );
};
