"use client";
import Link from "next/link";

export default function FeaturesPage() {
  const pillars = [
    {
      title: "Storefront & Experience",
      desc: "Build pixel-perfect, mobile-ready storefronts with visual controls.",
    },
    {
      title: "Commerce Ops",
      desc: "Manage products, orders, inventory, taxes, and fulfillment in one place.",
    },
    {
      title: "Growth & Marketing",
      desc: "Built-in tools for SEO, discounts, campaigns, and customer engagement.",
    },
    {
      title: "Developer Ready",
      desc: "API-first, extensible, and integration-friendly for custom stacks.",
    },
  ];

  const sections = [
    {
      id: "storefront",
      title: "Storefront & CMS",
      subtitle: "Create storefronts that look premium on day one.",
      description:
        "Like StoreHippo and Zoho Commerce, HCOM gives you theme-based layouts, drag-and-drop sections, and SEO-ready pages — but with headless flexibility.",
      features: [
        "Visual page & section builder",
        "Responsive, mobile-first themes",
        "SEO controls (meta, OG, sitemap)",
        "Multilingual-ready content",
      ],
    },
    {
      id: "products-orders",
      title: "Products, Orders & Inventory",
      subtitle: "Centralize your commerce core.",
      description:
        "Define products, attributes, variants, and categories just once — HCOM keeps them in sync across all your storefronts.",
      features: [
        "Advanced product & attribute manager",
        "SKU-level stock & adjustments",
        "Order lifecycle tracking (NEW → FULFILLED)",
        "Returns & partial refunds support",
      ],
    },
    {
      id: "payments-shipping",
      title: "Payments, Shipping & Taxes",
      subtitle: "Connect to India-first and global providers.",
      description:
        "Offer UPI, cards, wallets, COD, and international payments. Pair it with shipping partners for end-to-end fulfillment.",
      features: [
        "Razorpay, PhonePe, Stripe ready",
        "Shiprocket, Delhivery, BlueDart integrations",
        "Tax & invoice-ready order system",
        "Real-time payment status sync",
      ],
    },
    {
      id: "marketing",
      title: "Marketing & Customer Experience",
      subtitle: "Convert more visitors into loyal buyers.",
      description:
        "Campaigns, coupons, discounts, abandoned cart, and transactional messages — all in one operations-friendly UX.",
      features: [
        "Coupons, discounts & cart rules",
        "Abandoned cart notifications (email/SMS ready)",
        "Customer groups & segmentation",
        "Integrated analytics for campaigns",
      ],
    },
    {
      id: "integrations",
      title: "Ecosystem Integrations",
      subtitle: "Plug HCOM into your existing stack.",
      description:
        "Connect CRM, ERP, marketing, analytics, and shipping — with consistent data models and webhooks.",
      features: [
        "Payments, shipping, marketing apps",
        "Webhook & event-based triggers",
        "Prebuilt integration presets",
        "Docs-driven onboarding",
      ],
    },
    {
      id: "developer",
      title: "Developer Experience",
      subtitle: "Built for teams that care about structure.",
      description:
        "API-first approach, role-based access, environment isolation, and an opinionated schema make HCOM fit for enterprises.",
      features: [
        "REST & GraphQL-ready architecture",
        "Role-based admin & multi-tenant support",
        "Test / staging / production isolation",
        "Extensible via webhooks & SDKs",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-900">
      {/* HERO */}
      <section className="relative py-24 text-center px-6">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-500">
            Features
          </p>
          <h1 className="mt-4 text-4xl sm:text-5xl font-bold text-gray-900">
            Everything you need to run modern commerce.
          </h1>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            HCOM unifies what StoreHippo and Zoho Commerce offer — but with a
            headless, automation-first core designed to scale enterprises.
          </p>
        </div>
      </section>

      {/* PILLARS */}
      <section className="relative pb-20 px-6">
        <div className="mx-auto max-w-6xl grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="rounded-3xl bg-white border border-gray-200 shadow-md hover:shadow-lg transition p-6"
            >
              <h3 className="text-lg font-semibold text-gray-900">{p.title}</h3>
              <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURE SECTIONS */}
      <section className="relative pb-24">
        <div className="mx-auto max-w-6xl px-6 space-y-20">
          {sections.map((s, idx) => (
            <div
              key={s.id}
              id={s.id}
              className={`flex flex-col gap-10 lg:items-center lg:gap-16 ${
                idx % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
              }`}
            >
              {/* Text Section */}
              <div className="flex-1">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gray-500">
                  {s.subtitle}
                </p>
                <h2 className="mt-3 text-3xl font-semibold text-gray-900">
                  {s.title}
                </h2>
                <p className="mt-4 text-base text-gray-600 leading-relaxed">
                  {s.description}
                </p>
                <ul className="mt-6 space-y-3">
                  {s.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-3 text-sm text-gray-700"
                    >
                      <span className="mt-1 h-2 w-2 rounded-full bg-gradient-to-r from-gray-900 via-gray-600 to-gray-400" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Visual Panel */}
              <div className="flex-1 relative rounded-3xl border border-gray-200 bg-white shadow-xl p-6">
                <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
                  <span>{s.title}</span>
                  <span className="rounded-full bg-gray-100 px-3 py-1 text-gray-700 text-[10px]">
                    HCOM MODULE
                  </span>
                </div>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {s.features.slice(0, 4).map((f) => (
                    <div
                      key={f}
                      className="rounded-2xl bg-gray-50 p-4 border border-gray-100 hover:shadow-sm transition"
                    >
                      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-400">
                        Feature
                      </p>
                      <p className="mt-2 text-sm font-medium text-gray-800">
                        {f}
                      </p>
                      <p className="mt-1 text-xs text-gray-500">
                        Controlled via dashboard & APIs.
                      </p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 text-right">
                  <Link
                    href="/docs"
                    className="text-sm font-semibold text-gray-800 hover:underline"
                  >
                    View docs for {s.title} →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY HCOM */}
      <section className="relative py-20 bg-gray-900 text-white">
        <div className="mx-auto max-w-6xl px-6 grid gap-10 lg:grid-cols-2 items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-400">
              Why teams choose HCOM
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-snug">
              Built like an enterprise system, not a basic store builder.
            </h2>
            <p className="mt-4 text-sm text-gray-300 leading-relaxed">
              StoreHippo and Zoho Commerce work great for SMBs. HCOM extends
              that approach to multi-brand, API-driven, automation-heavy teams.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                title: "Headless-first",
                desc: "Use Flutter, Next.js, or any frontend.",
              },
              {
                title: "Automation built-in",
                desc: "Trigger flows on payment, order, and inventory.",
              },
              {
                title: "Multi-tenant ready",
                desc: "Serve multiple brands from one backend.",
              },
              {
                title: "Docs-first",
                desc: "Developer-friendly with API examples.",
              },
            ].map((b) => (
              <div
                key={b.title}
                className="rounded-2xl bg-white/5 p-5 border border-white/10 hover:bg-white/10 transition"
              >
                <p className="text-sm font-semibold">{b.title}</p>
                <p className="mt-2 text-xs text-gray-300">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 text-center bg-white">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-3xl font-semibold text-gray-900">
            See HCOM in action.
          </h2>
          <p className="mt-4 text-gray-600">
            Explore the docs, or talk to us to map these features to your current
            architecture.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/docs"
              className="rounded-full bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500 px-8 py-3 text-white font-semibold shadow-lg hover:-translate-y-1 transition"
            >
              View Developer Docs
            </Link>
            <Link
              href="mailto:hello@unistacx.com"
              className="rounded-full border border-gray-300 px-8 py-3 text-gray-800 font-semibold bg-white hover:bg-gray-50"
            >
              Talk to our team →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
