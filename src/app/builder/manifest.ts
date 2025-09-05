// src/app/builder/manifest.ts
export const Registry = {
    HeroBanner: {
        title: 'Hero Banner',
        props: {
            image: { type: 'image', label: 'Image' },
            ctaText: { type: 'string', label: 'CTA Text' },
            ctaLink: { type: 'string', label: 'CTA Link' },
        },
    },
    ProductGrid: {
        title: 'Product Grid',
        props: {
            title: { type: 'string', label: 'Title' },
            source: { type: 'select', label: 'Source', options: ['collection', 'query'] },
            handle: { type: 'string', label: 'Collection Handle' },
            q: { type: 'string', label: 'Query' },
            limit: { type: 'number', label: 'Limit' },
        },
    },
    CategoryCarousel: {
        title: 'Category Carousel',
        props: { categories: { type: 'string', label: 'Categories (comma)' } },
    },
    RichText: {
        title: 'Rich Text',
        props: { html: { type: 'string', label: 'HTML', multiline: true } },
    },
    Footer: { title: 'Footer', props: {} },
} as const;
export type BlockType = keyof typeof Registry;