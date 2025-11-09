"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "./SectionTitle";
import {
  FaCubes,
  FaPlug,
  FaCode,
  FaChartLine,
  FaServer,
  FaShieldAlt,
} from "react-icons/fa";

const features = [
  {
    icon: <FaCubes size={26} />,
    title: "Unified Product Engine",
    desc: "Centralize your products, SKUs, variants, and pricing logic in a single API-driven source of truth.",
  },
  {
    icon: <FaPlug size={26} />,
    title: "Flexible Integrations",
    desc: "Connect payments, logistics, analytics, or your internal ERP with minimal configuration.",
  },
  {
    icon: <FaCode size={26} />,
    title: "Developer Friendly",
    desc: "Access SDKs, sandbox environments, and modular microservice-ready APIs for total control.",
  },
  {
    icon: <FaChartLine size={26} />,
    title: "Analytics & Insights",
    desc: "Track performance and power your growth with built-in analytics and AI forecasting tools.",
  },
  {
    icon: <FaServer size={26} />,
    title: "Enterprise Scalability",
    desc: "Scale confidently with distributed architecture, caching, and high-availability deployments.",
  },
  {
    icon: <FaShieldAlt size={26} />,
    title: "Security & Compliance",
    desc: "Stay protected with encryption, tokenized sessions, and enterprise-grade access control.",
  },
];

export default function FeaturesSection() {
  return (
    <section
      id="features"
      className="relative overflow-hidden bg-gradient-to-b from-white via-hcom-bg to-hcom-muted py-28 text-hcom-text"
    >
      {/* Background motion accents */}
      <motion.div
        className="absolute -top-20 left-0 w-[420px] h-[420px] rounded-full bg-hcom-primary/10 blur-3xl"
        animate={{ y: [0, 35, 0], opacity: [0.4, 0.8, 0.4] }}
        transition={{ repeat: Infinity, duration: 14, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-[420px] h-[420px] rounded-full bg-hcom-secondary/10 blur-3xl"
        animate={{ y: [0, -35, 0], opacity: [0.4, 0.8, 0.4] }}
        transition={{ repeat: Infinity, duration: 14, ease: "easeInOut" }}
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        <SectionTitle
          title="Core Capabilities"
          subtitle="Everything you need to launch, manage, and scale modern commerce."
        />

        {/* Feature Grid */}
        <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.6 }}
              whileHover={{ y: -5 }}
              className="group relative p-8 rounded-2xl border border-hcom-border bg-white shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
            >
              {/* Gradient border shimmer on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-hcom-primary/10 to-hcom-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Icon */}
              <div className="relative text-hcom-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                {f.icon}
              </div>

              {/* Title */}
              <h3 className="relative font-semibold text-lg mb-2 text-hcom-text">
                {f.title}
              </h3>

              {/* Description */}
              <p className="relative text-hcom-subtext text-sm leading-relaxed">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-20 text-center"
        >
          <button className="inline-flex items-center gap-2 text-hcom-primary font-semibold hover:gap-3 transition-all duration-300">
            Explore Full Feature List →
          </button>
        </motion.div>
      </div>
    </section>
  );
}
