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
      q: "Can I try UniStacx Commerce before paying?",
      a: "Yes! You get a 14-day free trial — no credit card required. Explore full Starter features before subscribing.",
    },
    {
      q: "Do I need to know coding to use it?",
      a: "Not at all. UniStacx offers a visual builder, while developers can extend via APIs and SDKs.",
    },
    {
      q: "What payment methods are supported?",
      a: "We integrate with Razorpay, Stripe, and PhonePe. More payment partners can be added on request.",
    },
    {
      q: "Can I migrate my existing store?",
      a: "Yes, our migration experts can move you from Shopify, WooCommerce, or Magento without downtime.",
    },
    {
      q: "Is my data secure?",
      a: "Absolutely. Your data is encrypted and stored securely on AWS, with regular automated backups.",
    },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-800">
      {/* Hero Section */}
      <section className="py-24 text-center px-6">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gray-500">
            Pricing
          </p>
          <h1 className="mt-4 text-4xl font-bold sm:text-5xl text-gray-900">
            Simple, transparent plans that scale with you
          </h1>
          <p className="mt-6 text-lg text-gray-600">
            Whether you’re launching your first store or managing enterprise operations, our plans adapt as you grow — with no hidden costs.
          </p>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="pb-32 px-6">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col justify-between rounded-3xl border backdrop-blur-sm bg-white/90 shadow-md transition-transform duration-300 hover:-translate-y-2 ${
                plan.highlight
                  ? "border-gray-300 shadow-gray-300/40 ring-1 ring-gray-400/20"
                  : "border-gray-200 shadow-gray-200/20"
              }`}
            >
              <div className="p-8 space-y-5">
                <h2 className="text-2xl font-semibold text-gray-900">
                  {plan.name}
                </h2>
                <p className="text-sm text-gray-500">{plan.tagline}</p>
                <div className="mt-6">
                  <span className="text-4xl font-semibold text-gray-900">
                    {plan.price}
                  </span>
                  <span className="text-gray-500 text-sm ml-1">
                    {plan.period}
                  </span>
                </div>
                <ul className="mt-6 space-y-3 text-sm text-gray-600">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-8 border-t border-gray-200 bg-gradient-to-b from-white to-gray-50 rounded-b-3xl">
                {plan.name === "Enterprise" ? (
                  <Link
                    href="mailto:hello@unistacx.com?subject=Enterprise Plan Inquiry"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-gray-800/20 bg-white px-6 py-3 text-gray-900 font-semibold transition hover:bg-gray-900 hover:text-white"
                  >
                    Talk to Sales →
                  </Link>
                ) : (
                  <Link
                    href="#"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500 px-6 py-3 font-semibold text-white shadow-md transition-transform duration-300 hover:-translate-y-1 hover:brightness-110"
                  >
                    {plan.highlight ? "Start Free Trial" : "Get Started"}
                  </Link>
                )}
              </div>

              {plan.highlight && (
                <span className="absolute top-4 right-6 rounded-full bg-gray-900/10 px-3 py-1 text-xs font-semibold text-gray-700">
                  Most Popular
                </span>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500 py-24 text-center text-white">
        <div className="mx-auto max-w-4xl px-6 space-y-8">
          <h2 className="text-4xl font-semibold">Ready to scale your commerce?</h2>
          <p className="text-lg text-white/90">
            Get started today or talk to our experts for enterprise-grade onboarding.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
            <Link
              href="#"
              className="rounded-full bg-white px-8 py-3 text-base font-semibold text-gray-900 shadow-lg hover:-translate-y-1 hover:shadow-2xl transition"
            >
              Start Free Trial
            </Link>
            <Link
              href="mailto:hello@unistacx.com"
              className="rounded-full border border-white/40 px-8 py-3 text-base font-semibold text-white transition hover:bg-white/10"
            >
              Talk to Sales →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection faqs={faqs} />
    </div>
  );
}

function FAQSection({ faqs }: { faqs: { q: string; a: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-28 bg-white">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="text-3xl font-semibold text-center text-gray-900 sm:text-4xl">
          Frequently Asked Questions
        </h2>
        <p className="mt-4 text-center text-lg text-gray-600">
          Everything you need to know about UniStacx Commerce pricing and plans.
        </p>

        <div className="mt-12 divide-y divide-gray-200 border-t border-b">
          {faqs.map((faq, i) => (
            <div key={i} className="py-6">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full items-center justify-between text-left"
              >
                <span className="text-base font-semibold text-gray-900">
                  {faq.q}
                </span>
                <span className="text-gray-500">
                  {openIndex === i ? "−" : "+"}
                </span>
              </button>
              <div
                className={`transition-all duration-300 overflow-hidden ${
                  openIndex === i ? "max-h-40 mt-3" : "max-h-0"
                }`}
              >
                <p className="text-sm text-gray-600 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-gray-500">
            Still have questions?{" "}
            <Link
              href="mailto:hello@unistacx.com"
              className="text-gray-900 font-medium hover:underline"
            >
              Contact our support team →
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
