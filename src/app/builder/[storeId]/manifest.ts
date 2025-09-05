// src/app/builder/[storeId]/manifest.ts
export type PropSchema =
  | { type: "string"; label: string; multiline?: boolean; maxLen?: number; placeholder?: string }
  | { type: "image"; label: string }
  | { type: "select"; label: string; options: string[] }
  | { type: "boolean"; label: string };

export type BlockManifest = {
  type: string;
  title: string;
  props: Record<string, PropSchema>;
};

export const Manifests: Record<string, BlockManifest> = {
  HeroBanner: {
    type: "HeroBanner",
    title: "Hero Banner",
    props: {
      image: { type: "image", label: "Background Image" },
      headline: { type: "string", label: "Headline", maxLen: 80, placeholder: "New arrivals are here" },
      subhead: { type: "string", label: "Subhead", maxLen: 120, placeholder: "Shop the latest styles" },
      ctaText: { type: "string", label: "CTA Text", maxLen: 32, placeholder: "Shop Now" },
      ctaLink: { type: "string", label: "CTA Link", placeholder: "/collections/new" },
      tone: { type: "select", label: "Text Tone", options: ["light", "dark"] },
      fullBleed: { type: "boolean", label: "Full-bleed section" },
    },
  },

  // placeholders for your other blocks — they’ll still use the simple inputs
  ProductGrid: { type: "ProductGrid", title: "Product Grid", props: { title:{type:"string",label:"Title"}, source:{type:"select",label:"Source",options:["collection","query"]}, handle:{type:"string",label:"Collection Handle"}, q:{type:"string",label:"Query"}, limit:{type:"string",label:"Limit"} } },
  CategoryCarousel: { type: "CategoryCarousel", title: "Category Carousel", props: { categories:{type:"string",label:"Categories (comma)"} } },
  RichText: { type: "Rich Text", title: "Rich Text", props: { html:{type:"string",label:"HTML", multiline:true} } },
  Footer: { type: "Footer", title: "Footer", props: {} },
};
