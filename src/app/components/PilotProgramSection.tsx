"use client";

import { motion } from "framer-motion";

export default function PilotProgramSection() {
  return (
    <section
      id="pilot"
      className="relative py-28 overflow-hidden text-center text-white bg-gradient-to-r from-hcom-primary via-hcom-secondary to-hcom-primary"
    >
      {/* Animated gradient overlay */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15)_0%,transparent_70%)]"
        animate={{ opacity: [0.6, 0.9, 0.6] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      />

      {/* Floating highlight glow */}
      <motion.div
        className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full bg-white/10 blur-3xl"
        animate={{ y: [0, -30, 0], opacity: [0.4, 0.7, 0.4] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
      />

      <div className="relative max-w-4xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold tracking-tight"
        >
          Join the <span className="text-white/90">HCOM Pilot Program</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="mt-6 text-lg md:text-xl opacity-90 leading-relaxed"
        >
          Be among the first to experience our headless commerce platform.
          Get <strong>personal onboarding</strong>, <strong>dedicated support</strong>, and
          <strong> exclusive early-access pricing</strong> tailored for scaling businesses.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
          <button className="mt-10 relative overflow-hidden bg-white text-hcom-primary font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-2xl transition-all hover:scale-[1.03]">
            <span className="relative z-10">Request Early Access</span>
            <span className="absolute inset-0 bg-gradient-to-r from-hcom-primary/10 to-hcom-secondary/10 opacity-0 hover:opacity-100 transition" />
          </button>
        </motion.div>

        {/* Optional trust or CTA hint line */}
        <p className="mt-8 text-sm text-white/70">
          Limited to <strong>5 onboarding slots</strong> — early partners receive lifetime support credits.
        </p>
      </div>
    </section>
  );
}
