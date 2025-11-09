"use client";
import { useState } from "react";
import Link from "next/link";

export default function PricingPage() {
  const plans = [
    {
      name: "Starter",
      tagline: "For small businesses getting started.",
      price: "₹0",
      period: "for 14-day trial",
      features: [
        "1 Storefront",
        "Up to 100 Products",
        "Basic Order & Inventory Management",
        "Razorpay / Stripe Integration",
        "Email Support",
      ],
      highlight: false,
    },
    {
      name: "Growth",
      tagline: "For growing brands expanding online.",
      price: "₹9,999",
      period: "/month",
      features: [
        "Unlimited Products & Orders",
        "Multi-Store Management",
        "AI Workflow Automation",
        "Custom Domain + SSL",
        "Priority Email & Chat Support",
      ],
      highlight: true,
    },
    {
      name: "Enterprise",
      tagline: "For large-scale commerce teams.",
      price: "Custom",
      period: "based on usage",
      features: [
        "Unlimited Stores & Users",
        "Private Cloud or On-Prem Setup",
        "Dedicated Account Manager",
        "Custom Integrations & APIs",
        "24×7 Enterprise SLA Support",
      ],
      highlight: false,
    },
  ];

  const faqs = [
    {
      q: "Can I try HCOM before paying?",
      a: "Absolutely! Every new account comes with a 14-day free trial — no credit card required. You’ll have full access to the Starter plan features.",
    },
    {
      q: "Do I need to know coding to use HCOM?",
      a: "No coding is needed for merchants. HCOM includes a visual storefront builder and ready-to-use templates. Developers can use APIs and SDKs for deeper customization.",
    },
    {
      q: "What payment methods are supported?",
      a: "HCOM integrates with Razorpay, Stripe, and PhonePe for global and local payments. Additional integrations can be configured on request.",
    },
    {
      q: "Can I migrate my existing store to HCOM?",
      a: "Yes! Our team offers assisted migration from Shopify, WooCommerce, Magento, or custom setups — with no downtime.",
    },
    {
      q: "Is my data secure?",
      a: "Yes. All data is encrypted, stored securely on AWS, and backed up automatically. Enterprise customers can opt for private cloud or on-premise hosting.",
    },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#F5F7FB] to-white text-slate-900">
      {/* Hero */}
      <section className="relative py-28 text-center">
        <div className="mx-auto max-w-4xl px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#2D3FE0]">
            Pricing
          </p>
          <h1 className="mt-4 text-4xl font-semibold text-slate-900 sm:text-5xl">
            Simple, transparent plans that scale with you.
          </h1>
          <p className="mt-6 text-lg text-slate-600">
            Whether you’re launching your first storefront or managing global operations,
            HCOM adapts to your business growth — with predictable pricing and
            enterprise flexibility.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="relative pb-32">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col justify-between rounded-3xl border backdrop-blur bg-white/80 shadow-xl transition-transform duration-300 hover:-translate-y-2 ${
                plan.highlight
                  ? "border-[#2D3FE0]/30 shadow-blue-300/30 ring-2 ring-[#2D3FE0]/20"
                  : "border-slate-200/40 shadow-indigo-200/20"
              }`}
            >
              <div className="p-8 space-y-5">
                <h2 className="text-2xl font-semibold text-slate-900">
                  {plan.name}
                </h2>
                <p className="text-sm text-slate-500">{plan.tagline}</p>
                <div className="mt-6">
                  <span className="text-4xl font-semibold text-slate-900">
                    {plan.price}
                  </span>
                  <span className="text-slate-500 text-sm ml-1">
                    {plan.period}
                  </span>
                </div>
                <ul className="mt-6 space-y-3 text-sm text-slate-600">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-gradient-to-r from-[#7C5CFF] to-[#00C6FF]" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-8 border-t border-slate-200/50 bg-gradient-to-b from-white/50 to-white/80 rounded-b-3xl">
                {plan.name === "Enterprise" ? (
                  <Link
                    href="mailto:hello@hcom.app?subject=Enterprise Pricing"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#2D3FE0]/30 bg-white px-6 py-3 text-[#2D3FE0] font-semibold transition hover:bg-[#2D3FE0] hover:text-white"
                  >
                    Talk to Sales →
                  </Link>
                ) : (
                  <Link
                    href="#"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#00C6FF] via-[#2D3FE0] to-[#7C5CFF] px-6 py-3 font-semibold text-white shadow-md transition-transform duration-300 hover:-translate-y-1"
                  >
                    {plan.highlight ? "Start Free Trial" : "Get Started"}
                  </Link>
                )}
              </div>

              {plan.highlight && (
                <span className="absolute top-4 right-6 rounded-full bg-[#2D3FE0]/10 px-3 py-1 text-xs font-semibold text-[#2D3FE0]">
                  Most Popular
                </span>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-gradient-to-br from-[#2D3FE0] via-[#7C5CFF] to-[#00C6FF] py-24 text-center text-white">
        <div className="mx-auto max-w-4xl px-6 space-y-8">
          <h2 className="text-4xl font-semibold">Ready to scale your commerce?</h2>
          <p className="text-lg text-white/90">
            Get started today or talk to our experts for enterprise-grade setup and onboarding.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
            <Link
              href="#"
              className="rounded-full bg-white px-8 py-3 text-base font-semibold text-[#2D3FE0] shadow-lg shadow-slate-900/20 hover:shadow-xl hover:-translate-y-1 transition"
            >
              Start Free Trial
            </Link>
            <Link
              href="mailto:hello@hcom.app"
              className="rounded-full border border-white/40 px-8 py-3 text-base font-semibold text-white transition hover:bg-white/10"
            >
              Talk to Sales →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection faqs={faqs} />
    </div>
  );
}

function FAQSection({ faqs }: { faqs: { q: string; a: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative py-28 bg-white">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="text-3xl font-semibold text-center text-slate-900 sm:text-4xl">
          Frequently Asked Questions
        </h2>
        <p className="mt-4 text-center text-lg text-slate-600">
          Everything you need to know about HCOM pricing, billing, and features.
        </p>

        <div className="mt-12 divide-y divide-slate-200 border-t border-b">
          {faqs.map((faq, i) => (
            <div key={i} className="py-6">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full items-center justify-between text-left"
              >
                <span className="text-base font-semibold text-slate-900">
                  {faq.q}
                </span>
                <span className="text-slate-500">
                  {openIndex === i ? "−" : "+"}
                </span>
              </button>
              <div
                className={`transition-all duration-300 overflow-hidden ${
                  openIndex === i ? "max-h-40 mt-3" : "max-h-0"
                }`}
              >
                <p className="text-sm text-slate-600 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-slate-500">
            Still have questions?{" "}
            <Link
              href="mailto:hello@hcom.app"
              className="text-[#2D3FE0] font-medium hover:underline"
            >
              Contact our support team →
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
