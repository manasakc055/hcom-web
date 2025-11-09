"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionTitle } from "./SectionTitle";

import razorpay from "@/app/assets/razorpay.png"
import paytm from "@/app/assets/stripe.png"

import shiprocket from "@/app/assets/shiprocket.svg"
import Image from "next/image";

const integrations = [
  {
    category: "Payments",
    description: "Easily connect trusted payment gateways to process transactions securely and globally.",
    logos: [
      { src: razorpay, name: "Razorpay" },
      { src: paytm, name: "Stripe" },
      { src: "", name: "PhonePe" },
    ],
  },
  {
    category: "Shipping",
    description: "Automate fulfillment with your preferred shipping and logistics partners.",
    logos: [
      { src: "shiprocket.svg", name: "Shiprocket" },
      { src: "delhivery.svg", name: "Delhivery" },
      { src: "bluedart.svg", name: "BlueDart" },
    ],
  },
  {
    category: "Accounting",
    description: "Sync financials seamlessly with popular accounting platforms.",
    logos: [
      { src: "zoho.svg", name: "Zoho Books" },
      { src: "tally.svg", name: "Tally ERP" },
    ],
  },
];

export default function IntegrationsSection() {
  const [active, setActive] = useState("Payments");
  const activeData = integrations.find((i) => i.category === active)!;

  return (
    <section
      id="integrations"
      className="relative py-28 bg-gradient-to-b from-hcom-muted/50 via-white to-hcom-bg text-hcom-text overflow-hidden"
    >
      {/* Subtle background shapes */}
      <motion.div
        className="absolute -top-20 left-10 w-[400px] h-[400px] bg-hcom-primary/10 rounded-full blur-3xl"
        animate={{ y: [0, 40, 0], opacity: [0.5, 0.8, 0.5] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-10 w-[400px] h-[400px] bg-hcom-secondary/10 rounded-full blur-3xl"
        animate={{ y: [0, -40, 0], opacity: [0.5, 0.8, 0.5] }}
        transition={{ repeat: Infinity, duration: 14, ease: "easeInOut" }}
      />

      <div className="relative max-w-7xl mx-auto px-6 text-center">
        <SectionTitle
          title="Integrations"
          subtitle="Seamlessly connect with your favorite tools and partners"
        />

        {/* Tabs */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          {integrations.map((item) => (
            <button
              key={item.category}
              onClick={() => setActive(item.category)}
              className={`px-5 py-2 rounded-full text-sm font-medium border transition-all duration-300 ${
                active === item.category
                  ? "bg-hcom-primary text-white border-hcom-primary shadow-md"
                  : "bg-white text-hcom-text border-hcom-border hover:bg-hcom-muted"
              }`}
            >
              {item.category}
            </button>
          ))}
        </div>

        {/* Animated Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="mt-14 bg-white/70 backdrop-blur-xl border border-hcom-border rounded-2xl shadow-soft p-10"
          >
            <h3 className="text-2xl font-semibold mb-2 text-hcom-text">
              {activeData.category} Integrations
            </h3>
            <p className="text-hcom-subtext max-w-2xl mx-auto">
              {activeData.description}
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-8">
              {activeData.logos.map((logo, j) => (
                <motion.div
                  key={j}
                  whileHover={{ scale: 1.1 }}
                  className="relative group"
                >
                  <div className="p-4 bg-white border border-hcom-border rounded-xl shadow-sm hover:shadow-md transition">
                    <Image
                      src={logo.src}
                      alt={logo.name}
                      className="h-auto w-40 grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                  <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-hcom-subtext opacity-0 group-hover:opacity-100 transition-all">
                    {logo.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
