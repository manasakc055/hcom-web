// src/lib/builder/types.ts
export type Device = "mobile" | "tablet" | "desktop";

/*
export type DesignStyle = {
    margin?: string;    // e.g. "mt-8 mb-4"
    padding?: string;   // e.g. "py-12 px-4"
    background?: string; // tailwind classes or tokens e.g. "bg-neutral-50"
};
*/

export type BlockBase<TProps=any> = {
    id: string;
    type: string;            // key in manifest registry
    props: TProps & { style?: DesignStyle };
    hidden?: boolean;
};

export type PageLayout = {
    path: string;            // "/home"
    sections: BlockBase[];
};

export type ThemeJSON = {
    tokens: Record<string, string>; // e.g. brand colors, font scales
};

export type PartialJSON = {
    key: "header" | "footer";
    sections: BlockBase[];
};

export type FieldKind =
    | "string" | "textarea" | "number" | "select" | "boolean" | "image";

// src/lib/builder/types.ts
export type Breakpoint = "base" | "md" | "lg";            // mobile, tablet, desktop
export type Responsive<T> = T | Partial<Record<Breakpoint, T>>;

export type DesignStyle = {
    margin?: Responsive<"none"|"xs"|"sm"|"md"|"lg"|"xl">;
    padding?: Responsive<"none"|"xs"|"sm"|"md"|"lg"|"xl">;
    background?: Responsive<"white"|"neutral-50"|"neutral-100">;
};

export type FieldDef = {
    name: string;
    label: string;
    type: "string"|"textarea"|"number"|"select"|"boolean"|"image";
    options?: { label: string; value: string|number }[];
    min?: number; max?: number; maxLen?: number;
    placeholder?: string;
    group?: "content"|"design"|"advanced";
    /** NEW: show per-device tabs and store Responsive<T> */
    responsive?: boolean;
};

export type BlockManifest<TProps=any> = {
    type: string;
    title: string;
    defaults: TProps;
    fields: FieldDef[];
    Preview: (props: TProps & { selected?: boolean }) => JSX.Element;
};
