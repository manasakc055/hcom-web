"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import hero_img from "@/app/assets/arc.png";
import { CheckCircleIcon } from "@heroicons/react/24/outline";


// Local fallback if SectionTitle is not imported globally
function SectionTitle({ title, subtitle }) {
  return (
    <div className="text-center max-w-2xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-hcom-text">{title}</h2>
      {subtitle && (
        <p className="mt-3 text-sm md:text-base text-hcom-subtext">{subtitle}</p>
      )}
    </div>
  );
}

export default function ArchitectureSection() {
  return (
    <section
      id="architecture"
      className="relative overflow-hidden py-28 bg-gradient-to-b from-hcom-bg via-white to-hcom-muted"
    >
      {/* Floating gradient blobs */}
      <motion.div
        className="absolute -top-32 -left-32 w-[400px] h-[400px] rounded-full bg-hcom-primary/10 blur-3xl"
        animate={{ y: [0, 40, 0], opacity: [0.4, 0.8, 0.4] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-hcom-secondary/10 blur-3xl"
        animate={{ y: [0, -40, 0], opacity: [0.4, 0.8, 0.4] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
      />

      <div className="relative max-w-7xl mx-auto px-6 text-center">
        <SectionTitle
          title="Why Unistacx commerce ?"
          subtitle="A future-proof commerce foundation built for speed, flexibility, and scale."
        />

        {/* Architecture Image */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 flex justify-center"
        >
          <div className="relative bg-white/80 backdrop-blur-xl border border-hcom-border rounded-2xl shadow-soft p-6 max-w-md mx-auto">
            <Image
              src={hero_img}
              alt="HCOM Architecture"
              className="rounded-xl select-none"
            /> */}

            {/* Subtle Glow */}
            {/* <motion.div
              className="absolute inset-0 rounded-2xl bg-gradient-to-r from-hcom-primary/20 to-hcom-secondary/20 blur-2xl -z-10"
              animate={{ opacity: [0.4, 0.6, 0.4] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            />
          </div> 
        </motion.div>*/}

        {/* Why HCOM + What It Solves */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="mt-14 grid gap-10 md:grid-cols-2 text-left max-w-5xl mx-auto"
        >
          {/* Column 1 — Why HCOM */}
          <div className="bg-white/70 backdrop-blur-xl border border-hcom-border p-8 rounded-2xl shadow-sm">
            <h3 className="text-xl font-semibold text-hcom-text mb-4">Why Teams Choose  Unistacx commerce</h3>
            <ul className="space-y-3 text-hcom-subtext leading-relaxed">
              {/* <li className="flex items-start gap-3">
                <CheckCircleIcon className="w-6 h-6 text-black mt-1" />
                <span className="text-hcom-subtext leading-relaxed">
                  A clean, modular commerce engine instead of plugin-heavy platforms.
                </span>
              </li> */}

              <li>✔ They’re outgrowing Shopify/WordPress.</li>
              <li>✔ They need custom workflows with predictable performance.</li>
              <li>✔ They want multi-channel: app, web, chat, POS, marketplaces.</li>
              <li>✔ They want to own ALL their data.</li>
              <li>✔ They want to avoid vendor lock-in.</li>
              <li>✔ They need to scale rapidly without rewriting backend logic
                .</li>
            </ul>
          </div>

          {/* Column 2 — What HCOM Solves */}
          <div className="bg-white/70 backdrop-blur-xl border border-hcom-border p-8 rounded-2xl shadow-sm">
            <h3 className="text-xl font-semibold text-hcom-text mb-4">What Problems  Unistacx commerce Solves</h3>
            <ul className="space-y-3 text-hcom-subtext leading-relaxed">
              <li>✔ Slow storefronts on plugin-heavy systems.</li>
              <li>✔ Fragmented product, order, and inventory systems.</li>
              <li>✔ Inflexible checkout and fulfilment pipelines.</li>
              <li>✔ Difficult ERP/CRM integrations.</li>
              <li>✔ No standardization in custom-built apps.</li>
              <li>✔ High cost of maintaining in-house commerce tech.</li>



            </ul>
          </div>
        </motion.div>

        {/* Final description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="mt-12 text-hcom-subtext text-lg max-w-3xl mx-auto leading-relaxed"
        >
          HCOM becomes the unified backbone of your commerce ecosystem — powering
          <strong> storefronts</strong>, <strong>apps</strong>, <strong>marketplaces</strong>,
          <strong> analytics</strong>, and <strong>automation workflows</strong> through clean APIs
          and scalable services.
        </motion.p>
      </div>
    </section>
  );
}