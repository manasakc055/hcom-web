// src/lib/builder/manifests/index.ts
import { BlockManifest } from "../types";
import { heroBanner } from "./heroBanner";
import { productGrid } from "./productGrid";
import {announcementBar} from "@/lib/builder/manifests/announcementBar";
import {imageWithText} from "@/lib/builder/manifests/imageWithText";
import {categoryTiles} from "@/lib/builder/manifests/categoryTiles";
import {featuresStrip} from "@/lib/builder/manifests/featuresStrip";
import {testimonials} from "@/lib/builder/manifests/testimonials";
import {newsletter} from "@/lib/builder/manifests/newsletter";
import {countdownBanner} from "@/lib/builder/manifests/countdownBanner";
import {divider} from "@/lib/builder/manifests/divider";

export const MANIFESTS: Record<string, BlockManifest> = {
    [heroBanner.type]: heroBanner,
    [productGrid.type]: productGrid,

    // NEW
    [announcementBar.type]: announcementBar,
    [imageWithText.type]: imageWithText,
    [categoryTiles.type]: categoryTiles,
    [featuresStrip.type]: featuresStrip,
    [testimonials.type]: testimonials,
    [newsletter.type]: newsletter,
    [countdownBanner.type]: countdownBanner,
    [divider.type]: divider,
};

export const defaultBlockOf = (type: string) => {
    const m = MANIFESTS[type];
    if (!m) throw new Error(`Unknown block type: ${type}`);
    return { type: m.type, props: structuredClone(m.defaults) };
};
