"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import paytm from "@/app/assets/paytm.svg";
import stripe from "@/app/assets/stripe.svg";
import phonepe from "@/app/assets/phonepe-1.svg";
import bluedart from "@/app/assets/bluedart-logo-hd.png";
import shiprocket from "@/app/assets/shiprocket-logo.png";


interface IntegrationsType{
  category:string,
  description:string,
   logos: {
        src: string;
        name: string;
    }[];
}

// Temporary fallback until real SectionTitle path confirmed
function SectionTitle({ title, subtitle }:{title:string, subtitle:string}) {
  return (
    <div className="text-center max-w-2xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-hcom-text">{title}</h2>
      {subtitle && (
        <p className="mt-3 text-sm md:text-base text-hcom-subtext">{subtitle}</p>
      )}
    </div>
  );
}



const integrations = [
  {
    category: "Payments",
    description:
      "Easily connect trusted payment gateways to process transactions securely and globally.",
    logos: [
      { src: paytm, name: "Paytm" },
      { src: stripe, name: "Stripe" },
      { src: phonepe, name: "PhonePe" },
    ],
  },
  {
    category: "logistics & fulfilment",
    description: "Automate fulfilment with your preferred shipping and logistics partners.",
    logos: [
      { src: shiprocket, name: "Shiprocket" },
      { src: bluedart, name: "BlueDart" },
    ],
  },
];

export default function IntegrationsSection() {
  const [active, setActive] = useState("Payments");
  const activeData:IntegrationsType | undefined = integrations.find((i) => i.category === active);

  return (
    <section
      id="integrations"
      className="relative py-28 bg-gradient-to-b from-hcom-muted/50 via-white to-hcom-bg text-hcom-text overflow-hidden"
    >
      {/* Floating backgrounds */}
      <motion.div
        className="absolute -top-20 left-10 w-[300px] h-[300px] bg-hcom-primary/10 rounded-full blur-3xl"
        animate={{ y: [0, 30, 0], opacity: [0.4, 0.7, 0.4] }}
        transition={{ repeat: Infinity, duration: 10 }}
      />
      <motion.div
        className="absolute bottom-0 right-10 w-[300px] h-[300px] bg-hcom-secondary/10 rounded-full blur-3xl"
        animate={{ y: [0, -30, 0], opacity: [0.4, 0.7, 0.4] }}
        transition={{ repeat: Infinity, duration: 12 }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8 text-center">
        <SectionTitle
          title="Integrations"
          subtitle="Seamlessly connect with your favorite tools and partners"
        />

        {/* Tabs */}
        <div className="mt-10 flex flex-wrap justify-center gap-3 sm:gap-4">
          {integrations.map((item) => (
            <button
              key={item.category}
              onClick={() => setActive(item.category)}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium border transition-all ${
                active === item.category
                  ? "bg-hcom-primary text-white border-hcom-primary shadow-md"
                  : "bg-white text-hcom-text border-hcom-border hover:bg-hcom-muted"
              }`}
            >
              {item.category}
            </button>
          ))}
        </div>

        {/* Animated Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="mt-12 bg-white/70 backdrop-blur-xl border border-hcom-border rounded-2xl shadow-soft p-6 sm:p-10"
          >
            <h3 className="text-xl sm:text-2xl font-semibold mb-1 text-hcom-text">
              {activeData?.category} Integrations
            </h3>
            <p className="text-hcom-subtext max-w-xl mx-auto text-sm sm:text-base">
              {activeData?.description}
            </p>

            {/* RESPONSIVE LOGO GRID */}
            <div
              className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:flex lg:flex-wrap lg:justify-center gap-4 sm:gap-6 md:gap-8"
            >
              {activeData?.logos.map((logo, j) => (
                <motion.div
                  key={j}
                  whileHover={{ scale: 1.08 }}
                  className="relative group flex items-center justify-center"
                >
                  <div className="p-3 sm:p-4 bg-white border border-hcom-border rounded-xl shadow-sm hover:shadow-md transition w-28 sm:w-32 md:w-40">
                    <Image
                      src={logo.src}
                      alt={logo.name}
                      className="h-auto w-full grayscale group-hover:grayscale-0 transition-all duration-300 object-contain"
                    />
                  </div>
                  <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[10px] sm:text-xs text-hcom-subtext opacity-0 group-hover:opacity-100 transition-all">
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