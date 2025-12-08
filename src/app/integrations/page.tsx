"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// ✅ Import local logos
import razorpayLogo from "@/app/assets/razorpay.svg";
import phonepeLogo from "@/app/assets/phonepe.svg";
import stripeLogo from "@/app/assets/stripe.svg";

import shiprocketLogo from "@/app/assets/shiprocket.svg";
// import delhiveryLogo from "@/app/assets/delhivery.svg";
import bluedartLogo from "@/app/assets/bluedart-logo-hd.png";

// import hubspotLogo from "@/app/assets/logos/hubspot.svg";
// import mailchimpLogo from "@/app/assets/logos/mailchimp.svg";
// import zohoLogo from "@/app/assets/logos/zoho.svg";

// import gaLogo from "@/app/assets/logos/google-analytics.svg";
// import metaPixelLogo from "@/app/assets/logos/meta-pixel.svg";
// import mixpanelLogo from "@/app/assets/logos/mixpanel.svg";

export default function IntegrationsPage() {
  const [activeTab, setActiveTab] = useState("Payments");

  const integrations = [
    {
      category: "Payments",
      description:
        "Enable seamless global payments. Connect Razorpay, Stripe, and more to power smooth checkouts with real-time updates.",
      items: [
        {
          name: "Razorpay",
          logo: razorpayLogo,
          description:
            "Accept UPI, cards, wallets, and international payments with automated reconciliation.",
          docs: "https://razorpay.com/docs/",
        },
        {
          name: "PhonePe",
          logo: phonepeLogo,
          description:
            "Fast, secure UPI integration with refunds, auto-settlements, and webhook tracking.",
          docs: "https://developer.phonepe.com/docs/",
        },
        {
          name: "Stripe",
          logo: stripeLogo,
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
          logo: shiprocketLogo,
          description:
            "Smart shipping automation with 17+ courier integrations and real-time tracking.",
          docs: "https://apidocs.shiprocket.in/",
        },
        {
          name: "Delhivery",
          // logo: delhiveryLogo,
          description:
            "Automate pickup scheduling, status tracking, and COD handling with APIs.",
          docs: "https://delhivery.github.io/",
        },
        {
          name: "Blue Dart",
          logo: bluedartLogo,
          description:
            "Reliable express shipping with real-time delivery tracking and manifest automation.",
          docs: "https://bluedart.com/developer",
        },
      ],
    },
    /*{
      category: "Marketing & CRM",
      description:
        "Sync customer data and automate campaigns using built-in marketing and CRM integrations.",
      items: [
        {
          name: "HubSpot",
          logo: hubspotLogo,
          description:
            "Sync customers, orders, and leads directly into HubSpot pipelines.",
          docs: "https://developers.hubspot.com/docs/",
        },
        {
          name: "Mailchimp",
          logo: mailchimpLogo,
          description:
            "Trigger email campaigns automatically from HCOM events like checkout or order success.",
          docs: "https://mailchimp.com/developer/",
        },
        {
          name: "Zoho CRM",
          logo: zohoLogo,
          description:
            "Connect Zoho CRM for unified customer and order data with automation flows.",
          docs: "https://www.zoho.com/crm/developer/docs/",
        },
      ],
    },
    {
      category: "Analytics & Reporting",
      description:
        "Gain deeper insights with analytics integrations to monitor performance, traffic, and ROI in real time.",
      items: [
        {
          name: "Google Analytics",
          logo: gaLogo,
          description:
            "Track conversion funnels, campaigns, and user journeys effortlessly.",
          docs: "https://developers.google.com/analytics",
        },
        {
          name: "Meta Pixel",
          logo: metaPixelLogo,
          description:
            "Measure ad performance, retarget visitors, and sync checkout events.",
          docs: "https://developers.facebook.com/docs/meta-pixel",
        },
        {
          name: "Mixpanel",
          logo: mixpanelLogo,
          description:
            "Measure engagement, retention, and cohort-based analytics.",
          docs: "https://developer.mixpanel.com/",
        },
      ],
    }, */
  ];

  const activeSection = integrations.find((i) => i.category === activeTab);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-900">
      {/* HERO SECTION */}
      <section className="relative py-24 text-center">
        <div className="mx-auto max-w-4xl px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-500">
            Integrations
          </p>
          <h1 className="mt-4 text-4xl font-bold sm:text-5xl text-gray-900">
            Connect your commerce ecosystem effortlessly.
          </h1>
          <p className="mt-6 text-lg text-gray-600">
            Plug in payments, shipping, CRM, or analytics — orchestrate your
            entire business from a single platform.
          </p>
        </div>
      </section>

      {/* CATEGORY TABS */}
      <div className="mx-auto mt-2 flex max-w-6xl flex-wrap justify-center gap-3 px-6">
        {integrations.map((tab) => (
          <button
            key={tab.category}
            onClick={() => setActiveTab(tab.category)}
            className={`rounded-full px-6 py-2 text-sm font-semibold transition-all duration-300 ${
              activeTab === tab.category
                ? "bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 text-white shadow-lg"
                : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50"
            }`}
          >
            {tab.category}
          </button>
        ))}
      </div>

      {/* ACTIVE SECTION */}
      <section className="relative py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-semibold text-gray-900 sm:text-4xl">
              {activeSection?.category}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {activeSection?.description}
            </p>
          </div>

          {/* INTEGRATION CARDS */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {activeSection?.items.map((item) => (
              <div
                key={item.name}
                className="group relative flex flex-col gap-4 overflow-hidden rounded-3xl border border-gray-200 bg-white/90 p-8 shadow-md hover:-translate-y-2 hover:shadow-2xl transition-all"
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
                  <h3 className="text-lg font-semibold text-gray-900">
                    {item.name}
                  </h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
                <Link
                  href={item.docs}
                  target="_blank"
                  className="mt-auto inline-flex w-fit items-center gap-1 text-sm font-semibold text-gray-800 hover:underline"
                >
                  View Docs →
                </Link>
                <span className="absolute -right-16 top-12 h-32 w-32 rounded-full bg-gray-300/20 blur-3xl group-hover:scale-110 transition-transform duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-950 py-24 text-center text-white">
        <div className="mx-auto max-w-4xl px-6 space-y-8">
          <h2 className="text-4xl font-bold">Expand your ecosystem with HCOM</h2>
          <p className="text-lg text-gray-200">
            Access 20+ prebuilt integrations or connect any third-party app via
            APIs, webhooks, or SDKs.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
            <Link
              href="/docs/integrations"
              className="rounded-full bg-white text-gray-900 px-8 py-3 font-semibold shadow-md hover:-translate-y-1 transition"
            >
              View Integration Docs
            </Link>
            <Link
              href="mailto:hello@unistacx.com"
              className="rounded-full border border-white/40 px-8 py-3 font-semibold text-white hover:bg-white/10 transition"
            >
              Talk to an Expert →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
