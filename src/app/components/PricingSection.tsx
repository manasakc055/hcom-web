"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "./SectionTitle";

const plans = [
  {
    name: "Starter",
    tagline: "Perfect for growing brands",
    desc: "All the essentials to launch and manage your first storefront with headless flexibility.",
    features: [
      "Product & Inventory APIs",
      "Checkout & Order Management",
      "Basic Integrations (Payments, Shipping)",
      "Email Support",
    ],
  },
  {
    name: "Growth",
    tagline: "Built for scaling businesses",
    desc: "Advanced tools and APIs for multi-storefront brands and expanding teams.",
    features: [
      "Multi-channel integrations",
      "Advanced Inventory & Pricing Engine",
      "Analytics & Reporting Dashboard",
      "Priority Support & Sandbox Access",
    ],
  },
  {
    name: "Enterprise",
    tagline: "Custom-tailored for large organizations",
    desc: "Dedicated infrastructure, private SLAs, and enterprise integrations for high-volume commerce.",
    features: [
      "Dedicated Infrastructure",
      "Custom SLAs & Compliance",
      "Private AI Add-ons",
      "Team Training & Onboarding",
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

        <div className="mt-16 grid gap-8 md:grid-cols-3">
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

              <button className="w-full bg-hcom-primary hover:bg-hcom-primaryHover text-white font-semibold py-3 rounded-xl transition">
                Request Custom Quote
              </button>
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
