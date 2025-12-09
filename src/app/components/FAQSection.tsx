// components/FAQSection.tsx
"use client";

import { useState } from "react";
import { SectionTitle } from "./SectionTitle";

const faqs = [
  {
    q: "What is Headless Commerce?",
    a: "A system where backend and frontend are decoupled, allowing complete flexibility across web, app, chat, POS, and more..",
  },
  {
    q: "Who is  Unistacx commerce for?",
    a: "Brands, agencies, and teams needing deeper control over catalog, inventory, orders, and integrations — and preparing to scale across channels.",
  },
  {
    q: "Can I use my existing payment gateway?",
    a: "Yes.  Unistacx commerce supports multiple payment providers and custom gateway integrations.",
  },
  {
    q: "How long does onboarding take?",
    a: "With predefined templates and structured APIs, onboarding can be completed in days — not months.",
  },
    {
    q: "Is  Unistacx commerce agentic?",
    a: "The platform is designed for agentic commerce. Upcoming releases will include AI shopping agents, smart recommendations, personalization, and conversational commerce.",
  },
  {
    q: "Is it self-hosted?",
    a: " Unistacx commerce is cloud-hosted with secure infrastructure. A self-hosted version will be available for enterprise clients (coming soon).",
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
            <div key={i} className="border border-gray/10 rounded-xl overflow-hidden">
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
