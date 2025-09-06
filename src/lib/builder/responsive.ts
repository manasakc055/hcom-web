// src/lib/builder/responsive.ts
import { Responsive } from "./types";

const padMap = { none:"py-0", xs:"py-2", sm:"py-4", md:"py-6", lg:"py-8", xl:"py-12" } as const;
const marMap = { none:"my-0", xs:"my-2", sm:"my-4", md:"my-6", lg:"my-8", xl:"my-12" } as const;
const bgMap  = { white:"bg-white", "neutral-50":"bg-neutral-50", "neutral-100":"bg-neutral-100" } as const;

function expand<T extends string>(val?: Responsive<T>, map: Record<string,string>) {
    if (!val) return "";
    if (typeof val === "string") return map[val] ?? "";
    const parts: string[] = [];
    if (val.base) parts.push(map[val.base] ?? "");
    if (val.md)   parts.push(`md:${map[val.md] ?? ""}`);
    if (val.lg)   parts.push(`lg:${map[val.lg] ?? ""}`);
    return parts.filter(Boolean).join(" ");
}

export const clsPadding   = (v?: Responsive<keyof typeof padMap>) => expand(v, padMap as any);
export const clsMargin    = (v?: Responsive<keyof typeof marMap>) => expand(v, marMap as any);
export const clsBackground= (v?: Responsive<keyof typeof bgMap>)  => expand(v, bgMap  as any);

// grid columns token (2..6)
export function clsGridCols(v?: Responsive<number>) {
    if (!v) return "";
    const one = (n:number) => `grid-cols-${Math.min(6, Math.max(2, n))}`;
    if (typeof v === "number") return one(v);
    const parts:string[]=[];
    if (v.base) parts.push(one(v.base));
    if (v.md)   parts.push(`md:${one(v.md)}`);
    if (v.lg)   parts.push(`lg:${one(v.lg)}`);
    return parts.join(" ");
}
