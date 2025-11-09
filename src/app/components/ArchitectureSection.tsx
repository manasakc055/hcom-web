"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "./SectionTitle";

export default function ArchitectureSection() {
  return (
    <section
      id="architecture"
      className="relative overflow-hidden py-28 bg-gradient-to-b from-hcom-bg via-white to-hcom-muted"
    >
      {/* Floating gradient blobs (visual background) */}
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

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 text-center">
        <SectionTitle
          title="Headless Architecture"
          subtitle="Decoupled. Modular. Scalable."
        />

        {/* Animated architecture image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 flex justify-center"
        >
          <div className="relative p-4 bg-white/70 backdrop-blur-xl rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.05)]">
            <img
              src="/images/architecture-diagram.svg"
              alt="HCOM Architecture"
              className="max-w-4xl rounded-lg select-none"
            />

            {/* subtle glowing accent */}
            <motion.div
              className="absolute inset-0 rounded-2xl bg-gradient-to-r from-hcom-primary/20 to-hcom-secondary/20 blur-2xl -z-10"
              animate={{ opacity: [0.4, 0.6, 0.4] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            />
          </div>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="mt-10 text-hcom-subtext text-lg max-w-3xl mx-auto leading-relaxed"
        >
          HCOM acts as the central engine connecting your <strong>storefronts</strong>,
          <strong> mobile apps</strong>, <strong>ERPs</strong>, and <strong>logistics partners</strong> through
          clean REST APIs, secure webhooks, and modular services.
          <br className="hidden md:block" />  
          This decoupled structure ensures speed, flexibility, and seamless scalability as your business grows.
        </motion.p>
      </div>
    </section>
  );
}
