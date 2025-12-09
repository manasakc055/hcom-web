"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import razorpay from "@/app/assets/razorpay.svg";
import shiprocket from "@/app/assets/shiprocket.svg";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-hcom-bg py-28 px-6">
      <div className="max-w-5xl mx-auto flex flex-col py-10 items-center text-center">

        {/* --- HEADING --- */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold text-hcom-text leading-tight"
        >
          Perfect for brands <br className="hidden md:block" />
          evolving beyond plugins.
        </motion.h1>

        {/* --- DESCRIPTION --- */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="mt-6 text-hcom-subtext text-lg max-w-2xl leading-relaxed"
        >
          A scalable, API-first commerce OS that lets you own your data,
          customize every workflow, and sell across any channel — without
          limitations or vendor lock-in.
        </motion.p>

        {/* --- CTA BUTTON --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="mt-10"
        >
          <button className="inline-flex items-center justify-center gap-2 rounded-md bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500 px-8 py-3 font-semibold text-white shadow-md transition-transform duration-300 hover:-translate-y-1 hover:brightness-110">
            Request Early Access
          </button>
        </motion.div>

        {/* --- LOGOS (Centered) --- */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="mt-10 flex items-center justify-center gap-8 opacity-70"
        >
          {[razorpay, shiprocket].map((logo, i) => (
            <Image
              key={i}
              src={logo}
              alt={"integration-logo"}
              className="h-8 w-auto grayscale hover:grayscale-0 transition-all duration-300"
            />
          ))}
        </motion.div>

      </div>

      {/* Decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-hcom-primary via-hcom-secondary to-hcom-primary opacity-40" />
    </section>
  );
}
