"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function IntegrationsPage() {
  const [activeTab, setActiveTab] = useState("Payments");

  const integrations = [
    {
      category: "Payments",
      description:
        "Enable seamless payments globally. Connect Razorpay, Stripe, and more to power smooth checkouts with real-time updates.",
      items: [
        {
          name: "Razorpay",
          logo: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Razorpay_logo.svg",
          description:
            "Accept UPI, cards, wallets, and international payments with automated reconciliation.",
          docs: "https://razorpay.com/docs/",
        },
        {
          name: "PhonePe",
          logo: "https://upload.wikimedia.org/wikipedia/commons/f/f2/PhonePe_Logo.svg",
          description:
            "Fast, secure UPI integration with refunds, auto-settlements, and webhook tracking.",
          docs: "https://developer.phonepe.com/docs/",
        },
        {
          name: "Stripe",
          logo: "https://upload.wikimedia.org/wikipedia/commons/4/41/Stripe_Logo%2C_revised_2016.svg",
          description:
            "Scale globally with advanced billing, adaptive routing, and multi-currency support.",
          docs: "https://stripe.com/docs",
        },
      ],
    },
    {
      category: "Shipping & Logistics",
      description:
        "Automate fulfillment and tracking with India’s top logistics partners — configure APIs and track parcels right inside HCOM.",
      items: [
        {
          name: "Shiprocket",
          logo: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Shiprocket_logo.svg",
          description:
            "Smart shipping automation with 17+ courier integrations and real-time tracking.",
          docs: "https://apidocs.shiprocket.in/",
        },
        {
          name: "Delhivery",
          logo: "https://upload.wikimedia.org/wikipedia/commons/2/22/Delhivery_logo.svg",
          description:
            "Automate pickup scheduling, status tracking, and COD handling with APIs.",
          docs: "https://delhivery.github.io/",
        },
        {
          name: "Blue Dart",
          logo: "https://upload.wikimedia.org/wikipedia/commons/f/f7/Blue_Dart_Aviation_logo.svg",
          description:
            "Reliable express shipping with real-time delivery tracking and manifest automation.",
          docs: "https://bluedart.com/developer",
        },
      ],
    },
    {
      category: "Marketing & CRM",
      description:
        "Sync your customer data and automate campaigns using marketing and CRM integrations built for commerce.",
      items: [
        {
          name: "HubSpot",
          logo: "https://upload.wikimedia.org/wikipedia/commons/2/20/HubSpot_Logo.svg",
          description:
            "Sync customers, orders, and leads directly into HubSpot pipelines.",
          docs: "https://developers.hubspot.com/docs/",
        },
        {
          name: "Mailchimp",
          logo: "https://upload.wikimedia.org/wikipedia/en/9/92/Mailchimp_logo.svg",
          description:
            "Trigger email campaigns automatically from HCOM events like checkout or order success.",
          docs: "https://mailchimp.com/developer/",
        },
        {
          name: "Zoho CRM",
          logo: "https://upload.wikimedia.org/wikipedia/commons/2/26/Zoho_Corporation_logo.svg",
          description:
            "Connect Zoho CRM for unified customer and order data with automation flows.",
          docs: "https://www.zoho.com/crm/developer/docs/",
        },
      ],
    },
    {
      category: "Analytics & Reporting",
      description:
        "Gain deeper insights with powerful analytics integrations to monitor performance, traffic, and ROI in real-time.",
      items: [
        {
          name: "Google Analytics",
          logo: "https://upload.wikimedia.org/wikipedia/commons/7/74/Google_Analytics_Logo.svg",
          description:
            "Track conversion funnels, campaigns, and user journeys effortlessly.",
          docs: "https://developers.google.com/analytics",
        },
        {
          name: "Meta Pixel",
          logo: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Facebook_icon.svg",
          description:
            "Measure ad performance, retarget visitors, and sync events from HCOM checkout.",
          docs: "https://developers.facebook.com/docs/meta-pixel",
        },
        {
          name: "Mixpanel",
          logo: "https://upload.wikimedia.org/wikipedia/commons/d/d6/Mixpanel_logo.svg",
          description:
            "Measure customer engagement, retention, and cohort-based analytics.",
          docs: "https://developer.mixpanel.com/",
        },
      ],
    },
  ];

  const activeSection = integrations.find((i) => i.category === activeTab);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F5F7FB] to-white text-slate-900">
      {/* Hero Section */}
      <section className="relative py-28 text-center">
        <div className="mx-auto max-w-4xl px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#2D3FE0]">
            Integrations
          </p>
          <h1 className="mt-4 text-4xl font-semibold sm:text-5xl">
            Connect your commerce ecosystem effortlessly.
          </h1>
          <p className="mt-6 text-lg text-slate-600">
            Plug in your favorite payment, shipping, CRM, or analytics tools —
            and orchestrate your entire business from a single platform.
          </p>
        </div>
      </section>

      {/* Tabs */}
      <div className="mx-auto mt-4 flex max-w-6xl flex-wrap justify-center gap-4 px-6">
        {integrations.map((tab) => (
          <button
            key={tab.category}
            onClick={() => setActiveTab(tab.category)}
            className={`rounded-full px-6 py-2 text-sm font-semibold transition-all duration-300 ${
              activeTab === tab.category
                ? "bg-gradient-to-r from-[#00C6FF] to-[#2D3FE0] text-white shadow-lg shadow-blue-300/30"
                : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
            }`}
          >
            {tab.category}
          </button>
        ))}
      </div>

      {/* Active Section */}
      <section className="relative py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
              {activeSection?.category}
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              {activeSection?.description}
            </p>
          </div>

          {/* Integrations Grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {activeSection?.items.map((item) => (
              <div
                key={item.name}
                className="group relative flex flex-col gap-4 overflow-hidden rounded-3xl border border-slate-200/40 bg-white/80 p-8 shadow-lg shadow-indigo-200/20 backdrop-blur transition-transform duration-300 hover:-translate-y-2"
              >
                <div className="flex items-center gap-4">
                  <div className="relative h-10 w-10">
                    <Image
                      src={item.logo}
                      alt={item.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    {item.name}
                  </h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
                <Link
                  href={item.docs}
                  target="_blank"
                  className="mt-auto inline-flex w-fit items-center gap-1 text-sm font-semibold text-[#2D3FE0] hover:underline"
                >
                  View Docs →
                </Link>
                <span className="absolute -right-16 top-12 h-32 w-32 rounded-full bg-[#7C5CFF]/10 blur-3xl transition-transform duration-300 group-hover:translate-x-4 group-hover:-translate-y-4" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-gradient-to-br from-[#2D3FE0] via-[#7C5CFF] to-[#00C6FF] py-24 text-center text-white">
        <div className="mx-auto max-w-4xl px-6 space-y-8">
          <h2 className="text-4xl font-semibold">
            Expand your ecosystem with HCOM.
          </h2>
          <p className="text-lg text-white/90">
            Access 20+ pre-built integrations or connect any third-party app using
            APIs, webhooks, and SDKs.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
            <Link
              href="/docs/integrations"
              className="rounded-full bg-white px-8 py-3 text-base font-semibold text-[#2D3FE0] shadow-lg shadow-slate-900/20 hover:shadow-xl hover:-translate-y-1 transition"
            >
              View Integration Docs
            </Link>
            <Link
              href="mailto:hello@hcom.app"
              className="rounded-full border border-white/40 px-8 py-3 text-base font-semibold text-white transition hover:bg-white/10"
            >
              Talk to an Expert →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
