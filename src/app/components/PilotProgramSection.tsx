"use client";

import { motion } from "framer-motion";
import { EarlyAccessDialog } from "./EarlyAccessDialog";

export default function PilotProgramSection() {
  return (
    <section
      id="pilot"
      className="relative py-32 overflow-hidden text-center text-white bg-gradient-to-b from-[#0A0A0A] via-[#111827] to-[#0A0A0A]"
    >
      {/* Soft ambient spotlight */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08)_0%,transparent_70%)]"
        animate={{ opacity: [0.4, 0.7, 0.4] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
      />

      {/* Floating glows */}
      <motion.div
        className="absolute -bottom-24 -left-24 w-[500px] h-[500px] rounded-full bg-white/10 blur-3xl"
        animate={{ y: [0, -40, 0], opacity: [0.3, 0.6, 0.3] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -top-20 -right-20 w-[450px] h-[450px] rounded-full bg-indigo-500/10 blur-3xl"
        animate={{ y: [0, 30, 0], opacity: [0.2, 0.5, 0.2] }}
        transition={{ repeat: Infinity, duration: 14, ease: "easeInOut" }}
      />

      <div className="relative max-w-4xl mx-auto px-6">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-sm"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-white">
            5 Pilot Partnerships.
          </span>
          <br />
          <span className="text-2xl md:text-3xl font-light opacity-80">
            Perfect for teams preparing to scale.
          </span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="mt-8 text-lg md:text-xl text-white/80 leading-relaxed max-w-3xl mx-auto"
        >
          Join if you are a growing brand, engineering-driven team, or anyone building the next-generation of commerce experiences.
        </motion.p>

        {/* NEW CONTENT — Who Should Join */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="grid md:grid-cols-2 gap-6 mt-14 text-left"
        >
          {[
            "Expanding your brand across channels",
            "Outgrowing template-based platforms or plugin-heavy systems",
            "Building custom storefronts, apps, or mobile experiences",
            "Needing deeper control over catalog, inventory & workflows",
            "Wanting API-first, headless infrastructure",
            "Looking for engineering-level collaboration with our core team",
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="flex items-start gap-3 bg-white/5 border border-white/10 p-5 rounded-2xl backdrop-blur-md hover:bg-white/10 transition"
            >
              <span className="text-green-400 text-xl mt-1">●</span>
              <p className="text-white/90 text-base leading-relaxed">{item}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="text-center mt-14"
        >
          <EarlyAccessDialog
            triggerClassName="mt-10 relative overflow-hidden bg-white text-black font-semibold px-10 py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all hover:scale-105"
            outlineClassName="absolute inset-0 rounded-xl border border-white/20"
            rippleClassName="absolute inset-0 bg-gradient-to-r from-gray-200/20 to-white/20 opacity-0 hover:opacity-100 transition"
          />
        </motion.div>

        <p className="mt-10 text-sm text-white/60">
          These 5 pilot partnerships will shape the foundation of the Unistacx Commerce ecosystem.
        </p>
      </div>
    </section>
  );
}
