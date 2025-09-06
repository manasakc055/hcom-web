// tailwind.config.(js|ts)
export default {
    content: ["./src/**/*.{ts,tsx}","./app/**/*.{ts,tsx}"],
    safelist: [
        // padding
        "py-0","py-2","py-4","py-6","py-8","py-12",
        "md:py-0","md:py-2","md:py-4","md:py-6","md:py-8","md:py-12",
        "lg:py-0","lg:py-2","lg:py-4","lg:py-6","lg:py-8","lg:py-12",
        // margin (block axis)
        "my-0","my-2","my-4","my-6","my-8","my-12",
        "md:my-0","md:my-2","md:my-4","md:my-6","md:my-8","md:my-12",
        "lg:my-0","lg:my-2","lg:my-4","lg:my-6","lg:my-8","lg:my-12",
        // backgrounds
        "bg-white","bg-neutral-50","bg-neutral-100",
        "md:bg-white","md:bg-neutral-50","md:bg-neutral-100",
        "lg:bg-white","lg:bg-neutral-50","lg:bg-neutral-100",
        // grids (for ProductGrid)
        "grid-cols-2","grid-cols-3","grid-cols-4","grid-cols-5","grid-cols-6",
        "md:grid-cols-2","md:grid-cols-3","md:grid-cols-4","md:grid-cols-5","md:grid-cols-6",
        "lg:grid-cols-2","lg:grid-cols-3","lg:grid-cols-4","lg:grid-cols-5","lg:grid-cols-6",
        // text sizes (if you expose them)
        "text-base","text-lg","text-xl","text-2xl","md:text-lg","md:text-xl","md:text-2xl","lg:text-xl","lg:text-2xl","lg:text-3xl",
    ],
};
