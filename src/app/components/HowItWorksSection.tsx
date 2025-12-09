"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "./SectionTitle";
import { FaPlug, FaCogs, FaRocket } from "react-icons/fa";

export default function HowItWorksSection() {
  const steps = [
    {
      title: "1. Connect",
      icon: <FaPlug className="text-hcom-primary text-4xl" />,
      desc: "Plug in your storefronts, mobile apps, ERP, POS, and logistics using clean REST APIs and secure webhooks.",
    },
    {
      title: "2. Configure",
      icon: <FaCogs className="text-hcom-primary text-4xl" />,
      desc: "Define products, pricing, inventory rules, locations, attributes, and channels — all from a centralized engine.",
    },
    {
      title: "3. Scale",
      icon: <FaRocket className="text-hcom-primary text-4xl" />,
      desc: "Launch multiple storefronts, handle high traffic, automate workflows, and expand globally without rewrites.",
    },
  ];

  return (
    <section id="why" className="relative py-28 bg-gradient-to-b from-white via-hcom-muted/20 to-white">
      {/* floating background glow */}
      <motion.div
        className="absolute -top-28 left-10 w-[350px] h-[350px] bg-hcom-primary/10 rounded-full blur-3xl"
        animate={{ opacity: [0.4, 0.8, 0.4], y: [0, 30, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
      />

      <div className="relative max-w-7xl mx-auto px-6 text-center">
        <SectionTitle
          title="How  Unistacx commerce Works"
          subtitle="A simple, powerful workflow to run and scale commerce — the modern way"
        />

        {/* Steps */}
        <div className="mt-16 grid gap-10 md:grid-cols-3">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.8 }}
              className="bg-white/80 backdrop-blur-xl border border-hcom-border rounded-2xl p-8 shadow-soft hover:shadow-md hover:-translate-y-1 transition-all"
            >
              <div className="flex justify-center mb-4">{step.icon}</div>

              <h3 className="text-xl font-semibold text-hcom-text">{step.title}</h3>

              <p className="mt-3 text-hcom-subtext text-sm md:text-base leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Closing line */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="mt-12 text-hcom-subtext max-w-2xl mx-auto"
        >
           Unistacx commerce powers everything behind the scenes — enabling storefronts, mobile apps,
          POS systems, marketplaces, and backend workflows through one secure,
          scalable API engine.
        </motion.p>
      </div>
    </section>
  );
}
