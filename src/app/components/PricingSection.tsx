"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "./SectionTitle";
import { EarlyAccessDialog } from "./EarlyAccessDialog-pricing";

const plans = [
  {
    name: "Custom Pricing for Scaling Brands",
    tagline: "Choose a plan that fits your technical and operational needs.",
    desc: "Every business is unique. Unistacx commerce offers modular pricing based on:",
    features: [
      "API usage",
      "Order volume",
      "Integrations required",
      "Additional services (ETL, agents, connectors)",
      "Multi-channel extensions"
    ],
  },

];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-28 bg-hcom-bg text-hcom-text relative overflow-hidden">
      {/* Soft gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-hcom-muted/40 via-white to-hcom-bg pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        <SectionTitle
          title="Plans That Grow With You"
          subtitle="Flexible and negotiable pricing — tailored to your business scale."
        />

        {/* <div className="mt-16  grid place-items-center gap-8 md:grid-cols-3 "> */}
        <div
  className={`mt-16 grid gap-8 place-items-center ${
    plans.length === 1 ? "grid-cols-1" : "md:grid-cols-3"
  }`}
>   
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="relative bg-white/80 backdrop-blur-xl border border-hcom-border rounded-2xl p-8 shadow-soft hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-hcom-text">{plan.name}</h3>
                <p className="text-hcom-primary text-sm font-medium">{plan.tagline}</p>
              </div>

              <p className="text-hcom-subtext mb-6">{plan.desc}</p>

              <ul className="space-y-3 mb-8 text-sm text-left">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-2">
                    <span className="text-hcom-primary text-lg">✓</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

                   {/* <button className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500 px-6 py-3 font-semibold text-white shadow-md transition-transform duration-300 hover:-translate-y-1 hover:brightness-110">
                Request Custom Quote
              </button> */}
               {/* CTA */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5, duration: 0.7 }}
                        className="text-center mt-14"
                      >
                        <EarlyAccessDialog
                          triggerClassName=" inline-flex w-full items-center justify-center gap-2 
    rounded-md bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500 
    px-8 py-3 font-semibold text-white shadow-md 
    transition-transform duration-300 hover:-translate-y-1 hover:brightness-110"
                          outlineClassName="absolute inset-0 rounded-xl border border-white/20"
                          rippleClassName="absolute inset-0 bg-gradient-to-r from-gray-200/20 to-white/20 opacity-0 hover:opacity-100 transition"
                        />
                      </motion.div>
            </motion.div>
          ))}
        </div>

        <p className="mt-14 text-center text-hcom-subtext max-w-2xl mx-auto text-sm">
          Every business has unique needs — let’s discuss yours.  
          Our team will help you identify the best plan and provide a personalized proposal.
        </p>
      </div>
    </section>
  );
}
