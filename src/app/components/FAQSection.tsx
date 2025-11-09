// components/FAQSection.tsx
"use client";

import { useState } from "react";
import { SectionTitle } from "./SectionTitle";

const faqs = [
  {
    q: "What is Headless Commerce?",
    a: "Headless commerce separates the frontend from the backend, giving businesses flexibility to build custom storefronts using APIs.",
  },
  {
    q: "Who is HCOM for?",
    a: "HCOM is built for scaling businesses that have outgrown Shopify, WooCommerce, or custom PHP stacks but need flexibility without enterprise bloat.",
  },
  {
    q: "Can I use my existing payment gateway?",
    a: "Yes. You can connect Razorpay, Stripe, PhonePe, or your preferred gateway using our integration layer.",
  },
  {
    q: "How long does onboarding take?",
    a: "Typically 2–5 days, depending on catalog size and existing system integrations.",
  },
  {
    q: "Is it SaaS or self-hosted?",
    a: "We provide a managed cloud version (SaaS) and offer self-hosted enterprise deployment options upon request.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-hcom-bg text-hcom-text">
      <div className="max-w-5xl mx-auto px-6">
        <SectionTitle title="Frequently Asked Questions" subtitle="Answers to the most common queries" />
        <div className="mt-10 space-y-4">
          {faqs.map((f, i) => (
            <div key={i} className="border border-white/10 rounded-xl overflow-hidden">
              <button
                className="w-full text-left px-6 py-4 flex justify-between items-center"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-medium">{f.q}</span>
                <span>{open === i ? "–" : "+"}</span>
              </button>
              {open === i && <div className="px-6 pb-4 text-hcom-subtext">{f.a}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
