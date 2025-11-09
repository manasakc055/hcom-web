import Image from "next/image";

import { EarlyAccessDialog } from './components/EarlyAccessDialog';
import { GlassNavigation } from './components/GlassNavigation';

const navigation = [
  { name: "Home", href: "/" },
  { name: "Product", href: "/product" },
  { name: "Features", href: "/features" },
  { name: "Capabilities", href: "/capabilities" },
  { name: "Pricing", href: "/pricing" },
  { name: "Integrations", href: "/integrations" },
  { name: "Contact", href: "/contact" }, // or keep #footer if contact is a section on home
];


const features = [
  {
    title: "Headless Architecture",
    description:
      "Composable APIs connect every storefront surface with your commerce engine. Launch once, iterate forever.",
    icon: <IconArchitecture />,
  },
  {
    title: "Dynamic Store Builder",
    description:
      "Drag, drop, and orchestrate storefront modules with precision control, all without leaving your flow state.",
    icon: <IconBuilder />,
  },
  {
    title: "AI Automation",
    description:
      "Automate merchandising, content, and operations with intelligent workflows tuned for your brand.",
    icon: <IconAutomation />,
  },
  {
    title: "Multi-Store Management",
    description:
      "Manage multiple brands, regions, or storefronts from a single dashboard.",
    icon: <IconGlobal />,
  },
];

const featureNarratives = [
  {
    label: "Storefront Experience",
    headline: "Create seamless, high-performing storefronts with total design freedom.",
    description:
      "Craft storefronts that stay consistent with your brand, adapt across devices, and load at lightning speed.",
    bullets: [
      "Glass editor with live device previews",
      "Responsive, theme-based layouts",
      "SEO-ready pages and lightning-fast performance",
    ],
  },
  {
    label: "Operations Hub",
    headline: "Manage products, orders, and inventory effortlessly — all in one dashboard.",
    description:
      "Stay in control of every order, SKU, and fulfillment process with real-time updates.",
    bullets: [
      "Unified product, order, and inventory management",
      "Status tracking and bulk actions",
      "Real-time sync with your storefront",
    ],
  },
  {
    label: "Operational Intelligence",
    headline: "Handle pricing, discounts, and checkout with precision and flexibility.",
    description:
      "Configure advanced pricing, manage coupons, and integrate your preferred payment gateways.",
    bullets: [
      "Multi-tier pricing and discount rules",
      "Integrated Razorpay, Stripe, and PhonePe",
      "Tax and invoice-ready order system",
    ],
  },
  {
    label: "Global Scale",
    headline: "Launch worldwide with confident control",
    description:
      "Spin up localized stores, manage currencies, and comply with regional regulations while keeping the experience cohesive.",
    bullets: [
      "Region-aware deployments and CDN routing",
      "Localized content management for each market",
      "Built-in compliance guardrails and audit trails",
    ],
  },
];

const paymentIntegrations = [
  {
    name: "Razorpay",
    description:
      "Power instant checkouts across India with Smart Collect, subscriptions, and international payments orchestrated in one flow.",
  },
  {
    name: "PhonePe",
    description:
      "Deliver seamless UPI journeys with real-time status updates, refunds, and reconciliation embedded inside the storefront.",
  },
  {
    name: "Stripe",
    description:
      "Launch global storefronts with adaptive routing, fraud prevention, and billing automation synced to every customer moment.",
  },
];

const CONTACT_EMAIL = "hello@hcom.app";

const outcomeMetrics = [
  {
    value: "↑ 37%",
    label: "Conversion lift",
    description: "Personalized moments ship weekly thanks to composable experiment tracks and live data syncs.",
  },
  {
    value: "3x",
    label: "Faster launches",
    description: "Blueprint any storefront in parallel with automation-ready environments for every market.",
  },
  {
    value: "< 5min",
    label: "Ops to insight",
    description: "Operational telemetry streams straight into dashboards so teams adapt in real time.",
  },
];

const journeyStages = [
  {
    title: "Compose your universe",
    description:
      "Start with a modular design system tuned for motion. Drag, script, and sync every surface in a single canvas.",
    bullets: ["Glass editor with instant previews", "Schema-linked components stay in harmony"],
  },
  {
    title: "Automate the rhythm",
    description:
      "Trigger workflows from any signal. Pricing, content, and campaigns adapt automatically as customers explore.",
    bullets: ["Branchless automation orchestrator", "AI copilots for merchandising and ops"],
  },
  {
    title: "Scale without limits",
    description:
      "Roll out localized stores, launch experiments, and monitor performance from a single command center.",
    bullets: ["Region-aware deployments in one click", "Unified analytics with intent-level insight"],
  },
];
export default function Home() {
  return (
    <div id="top" className="relative overflow-hidden bg-[#F5F7FB] text-slate-900">
      <span
        className="floating-particle"
        style={{ top: "-60px", right: "12%", width: "320px", height: "320px", animationDelay: "0s" }}
      />
      <span
        className="floating-particle"
        style={{ bottom: "-140px", left: "-120px", width: "280px", height: "280px", animationDelay: "4s" }}
      />
      <span
        className="floating-particle"
        style={{ bottom: "16%", right: "-160px", width: "380px", height: "380px", animationDelay: "9s" }}
      />

      <header className="sticky top-4 z-50">
        <div className="mx-auto max-w-6xl px-6">
          <GlassNavigation navigation={navigation} />
        </div>
      </header>

      <main className="relative z-10">
        <section id="product" className="relative isolate overflow-hidden pb-24 pt-28 sm:pt-32 lg:pt-36">
          <div className="mx-auto flex max-w-6xl flex-col gap-20 px-6 md:grid md:grid-cols-[1.05fr_0.95fr] md:items-center">
            <div className="flex flex-col gap-10">
              <div className="inline-flex items-center gap-3 rounded-full border border-white/60 bg-white/80 px-4 py-2 shadow-lg shadow-indigo-200/40 backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-gradient-to-r from-[#7C5CFF] to-[#00C6FF]" />
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">Introducing</span>
                <span className="text-xs font-semibold text-slate-600">The HCOM Experience</span>
              </div>

              <div className="space-y-6">
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#2D3FE0]">Build. Automate. Scale.</p>
                <h1 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
                  The Future of Commerce Begins with <span className="bg-gradient-to-r from-[#2D3FE0] via-[#7C5CFF] to-[#00C6FF] bg-clip-text text-transparent">HCOM</span>.
                </h1>
                <p className="max-w-xl text-lg leading-relaxed text-slate-600">
                  A unified, modern commerce platform built for growth.
                  Design, launch, and scale online storefronts with headless flexibility and enterprise power — all in one place.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <a
                  className="group relative inline-flex w-full items-center justify-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-[#00C6FF] via-[#2D3FE0] to-[#7C5CFF] px-8 py-3 text-base font-semibold text-white shadow-2xl shadow-blue-400/30 transition-transform duration-300 hover:-translate-y-1 sm:w-auto"
                  href="#cta"
                >
                  Get Started
                  <span className="absolute inset-0 rounded-full border border-white/10" />
                  <span className="absolute inset-0 scale-0 transform bg-white/30 opacity-0 transition-all duration-500 group-hover:scale-125 group-hover:opacity-100" />
                </a>
                <a
                  className="group inline-flex items-center justify-center gap-2 text-base font-semibold text-[#2D3FE0]"
                  href="#demo"
                >
                  Watch the demo
                  <span className="relative flex h-6 w-6 items-center justify-center overflow-hidden rounded-full border border-[#2D3FE0]/40">
                    <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-[#2D3FE0]/60 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
                    <span className="relative text-xs">▶</span>
                  </span>
                </a>
              </div>

              <dl className="grid gap-6 sm:grid-cols-3">
                <div className="rounded-2xl bg-white/80 p-5 text-center shadow-xl shadow-indigo-200/30 backdrop-blur">
                  <dt className="text-sm font-medium text-slate-500">Average launch time</dt>
                  <dd className="mt-2 text-2xl font-semibold text-slate-900">14 days</dd>
                </div>
                <div className="rounded-2xl bg-white/80 p-5 text-center shadow-xl shadow-indigo-200/30 backdrop-blur">
                  <dt className="text-sm font-medium text-slate-500">Automation coverage</dt>
                  <dd className="mt-2 text-2xl font-semibold text-slate-900">85%</dd>
                </div>
                <div className="rounded-2xl bg-white/80 p-5 text-center shadow-xl shadow-indigo-200/30 backdrop-blur">
                  <dt className="text-sm font-medium text-slate-500">Teams in flow</dt>
                  <dd className="mt-2 text-2xl font-semibold text-slate-900">24/7</dd>
                </div>
              </dl>
            </div>

            <div className="relative flex items-center justify-center">
              <div className="hero-scene">
                <div className="hero-grid-layer" />
                <div className="hero-structure">
                  <span
                    className="hero-block"
                    style={{ transform: "translate3d(-80px, -40px, 120px) rotateX(12deg)" }}
                  />
                  <span
                    className="hero-block"
                    style={{ transform: "translate3d(70px, -10px, 60px) rotateX(6deg)", background: "linear-gradient(140deg, rgba(0, 198, 255, 0.85), rgba(124, 92, 255, 0.8))" }}
                  />
                  <span
                    className="hero-block"
                    style={{ transform: "translate3d(-30px, 60px, -40px) rotateX(12deg)", background: "linear-gradient(160deg, rgba(45, 63, 224, 0.85), rgba(0, 114, 255, 0.7))" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="relative py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#2D3FE0]">Features</p>
              <h2 className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl">
                Intelligent systems designed for clarity and momentum.
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                Every module arrives with cinematic motion, intuitive control, and headless flexibility. Orchestrate
                experiences that feel effortless for teams and customers alike.
              </p>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="group relative flex flex-col gap-4 overflow-hidden rounded-3xl bg-white/80 p-8 shadow-xl shadow-indigo-200/20 backdrop-blur transition-transform duration-300 hover:-translate-y-2"
                >
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#2D3FE0] to-[#00C6FF] text-white shadow-lg shadow-blue-400/30">
                    {feature.icon}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-slate-900">{feature.title}</h3>
                    <p className="text-sm leading-relaxed text-slate-600">{feature.description}</p>
                  </div>
                  <span className="absolute -right-16 top-12 h-32 w-32 rounded-full bg-[#7C5CFF]/10 blur-3xl transition-transform duration-300 group-hover:translate-x-4 group-hover:-translate-y-4" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="capabilities" className="relative py-28">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-[#eef2ff] to-white" />
          <div className="mx-auto max-w-6xl px-6">
            <div className="mx-auto max-w-4xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#2D3FE0]/20 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#2D3FE0] shadow-lg shadow-blue-200/30">
                Clear for everyone
              </span>
              <h2 className="mt-6 text-3xl font-semibold text-slate-900 sm:text-4xl">
                Everything HCOM delivers, explained for the whole team.
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                Whether you build, automate, or scale, this guide shows exactly how HCOM translates into real outcomes for
                your designers, developers, operators, and finance partners.
              </p>
            </div>

            <div className="mt-16 grid gap-8 lg:grid-cols-2">
              {featureNarratives.map((item) => (
                <div
                  key={item.label}
                  className="group relative flex h-full flex-col gap-6 overflow-hidden rounded-3xl border border-slate-200/50 bg-white/80 p-8 shadow-xl shadow-indigo-200/30 backdrop-blur"
                >
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#7C5CFF]">{item.label}</p>
                    <span className="rounded-full border border-[#2D3FE0]/10 bg-[#2D3FE0]/5 px-3 py-1 text-xs font-medium text-[#2D3FE0]">
                      HCOM Advantage
                    </span>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-semibold text-slate-900">{item.headline}</h3>
                    <p className="text-base leading-relaxed text-slate-600">{item.description}</p>
                  </div>
                  <ul className="space-y-3 text-sm text-slate-600">
                    {item.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3">
                        <span className="mt-1 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-gradient-to-br from-[#2D3FE0] to-[#00C6FF]" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  <span className="pointer-events-none absolute -right-16 bottom-10 h-36 w-36 rounded-full bg-[#00C6FF]/10 blur-3xl transition-transform duration-500 group-hover:translate-x-6 group-hover:-translate-y-4" />
                  <span className="pointer-events-none absolute -left-20 top-8 h-24 w-24 rounded-full bg-[#7C5CFF]/10 blur-3xl transition-transform duration-500 group-hover:-translate-x-4 group-hover:translate-y-6" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* -------------------------------- HCOM EXPERIENCE DEMO -------------------------------- */}
<section id="demo" className="relative py-24">
  <div className="mx-auto flex max-w-6xl flex-col gap-16 px-6 lg:flex-row lg:items-center">
    {/* Left Side */}
    <div className="flex-1 space-y-6">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#2D3FE0]">
        Live Experience
      </p>
      <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
        Experience how HCOM automates, analyzes, and orchestrates in real time.
      </h2>
      <p className="text-lg text-slate-600">
        From storefront actions to fulfillment, HCOM’s unified dashboard gives every team live visibility and
        automation control — so merchants focus on growth, not complexity.
      </p>
      <ul className="space-y-3 text-slate-600">
        <li className="flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-[#2D3FE0]" />
          Real-time order, payment, and inventory sync.
        </li>
        <li className="flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-[#7C5CFF]" />
          AI-powered automations run without coding.
        </li>
        <li className="flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-[#00C6FF]" />
          Instant analytics for performance & uptime.
        </li>
      </ul>
    </div>

    {/* Right Side Dashboard Mock */}
    <div className="relative flex flex-1 justify-center">
      <div className="glass-surface relative w-full max-w-xl overflow-hidden rounded-[32px] border border-slate-200/50 bg-gradient-to-br from-white/80 via-white to-[#E5ECFF]/80 p-8 shadow-2xl shadow-blue-200/40 backdrop-blur">
        {/* Header */}
        <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
          <span>Unified Dashboard</span>
          <span className="rounded-full bg-[#2D3FE0]/10 px-3 py-1 text-[#2D3FE0]">LIVE</span>
        </div>

        {/* Grid of Cards */}
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          <div className="rounded-2xl border border-slate-200/60 bg-white/80 p-4 shadow-md shadow-indigo-200/30">
            <p className="text-xs font-semibold text-slate-500 uppercase">Orders Today</p>
            <p className="mt-2 text-3xl font-semibold text-slate-900">1,248</p>
            <p className="mt-1 text-xs text-slate-500">+12% vs yesterday</p>
          </div>
          <div className="rounded-2xl border border-slate-200/60 bg-white/80 p-4 shadow-md shadow-indigo-200/30">
            <p className="text-xs font-semibold text-slate-500 uppercase">Active Automations</p>
            <p className="mt-2 text-3xl font-semibold text-slate-900">37</p>
            <p className="mt-1 text-xs text-slate-500">Across 5 stores</p>
          </div>
          <div className="rounded-2xl border border-slate-200/60 bg-white/80 p-4 shadow-md shadow-indigo-200/30">
            <p className="text-xs font-semibold text-slate-500 uppercase">Conversion Rate</p>
            <p className="mt-2 text-3xl font-semibold text-slate-900">4.9%</p>
            <p className="mt-1 text-xs text-slate-500">Real-time update</p>
          </div>
          <div className="rounded-2xl border border-slate-200/60 bg-white/80 p-4 shadow-md shadow-indigo-200/30">
            <p className="text-xs font-semibold text-slate-500 uppercase">Revenue Today</p>
            <p className="mt-2 text-3xl font-semibold text-slate-900">$92,640</p>
            <p className="mt-1 text-xs text-slate-500">+8% from automation campaigns</p>
          </div>
        </div>

        {/* Automation Trigger Example */}
        <div className="mt-8 rounded-2xl border border-slate-200/60 bg-gradient-to-r from-[#2D3FE0]/10 via-[#7C5CFF]/10 to-[#00C6FF]/10 p-5 text-slate-700 shadow-inner">
          <div className="flex items-center justify-between text-sm font-semibold">
            <span>📦 Auto-Trigger: Low Inventory Alert</span>
            <span className="rounded-full bg-[#00C6FF]/10 px-3 py-1 text-xs font-medium text-[#00C6FF]">Active</span>
          </div>
          <p className="mt-2 text-xs text-slate-500">
            SKU 124-A drops below threshold → auto restock notification sent to supplier.
          </p>
        </div>

        {/* Decorative Blur Lights */}
        <span className="absolute -bottom-10 right-16 h-20 w-20 rounded-full bg-[#00C6FF]/20 blur-3xl" />
        <span className="absolute -top-10 left-16 h-16 w-16 rounded-full bg-[#7C5CFF]/20 blur-3xl" />
      </div>
    </div>
  </div>
</section>
  <section id="integrations" className="relative overflow-hidden py-28">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#111d3a] to-[#1e1b4b]" />
          <div
            className="absolute inset-0 opacity-60"
            style={{
              backgroundImage:
                "radial-gradient(circle at 15% 20%, rgba(124,92,255,0.25), transparent 55%), radial-gradient(circle at 80% 40%, rgba(0,198,255,0.2), transparent 50%)",
            }}
          />
          <div className="relative mx-auto max-w-6xl px-6 text-white">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#7C9CFF]">Payment Integrations</p>
              <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Connect frictionless checkout experiences worldwide.</h2>
              <p className="mt-4 text-lg text-slate-200">
                HCOM pairs cinematic storefronts with modern payment infrastructure so every region feels native and
                secure from first tap to confirmation.
              </p>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-2">
              {paymentIntegrations.map((item) => (
                <div
                  key={item.name}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl shadow-indigo-900/30 backdrop-blur"
                >
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-2xl font-semibold text-white">{item.name}</h3>
                    <span className="relative inline-flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl border border-white/10">
                      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
                      <span className="absolute inset-0 bg-white/10" />
                    </span>
                  </div>
                  <p className="mt-4 text-sm text-slate-200">{item.description}</p>
                  <span className="pointer-events-none absolute -right-14 -top-12 h-32 w-32 rounded-full bg-[#00C6FF]/20 blur-3xl transition duration-500 group-hover:translate-x-3 group-hover:-translate-y-2" />
                </div>
              ))}
            </div>
          </div>
        </section>


        <section id="why" className="relative py-28">
          <div className="mx-auto max-w-6xl px-6">
            <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-r from-slate-200/70 via-white to-[#E6ECFF]/80 p-10 md:p-16">
              <div className="absolute inset-y-0 left-0 w-1/2 bg-slate-200/70" />
              <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-r from-transparent via-[#2D3FE0]/10 to-[#7C5CFF]/20" />
              <div className="relative grid gap-10 lg:grid-cols-2">
                <div className="space-y-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Traditional Commerce</p>
                  <h3 className="text-3xl font-semibold text-slate-700">Rigid stacks. Manual workflows. Fragmented data.</h3>
                  <p className="text-lg text-slate-500">
                    Disconnected tools slow every iteration. Teams wrestle with legacy systems, while customers feel every
                    rough edge.
                  </p>
                </div>
                <div className="space-y-6 rounded-3xl bg-white/80 p-8 shadow-2xl shadow-blue-200/40 backdrop-blur">
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#2D3FE0]">HCOM</p>
                  <h3 className="text-3xl font-semibold text-slate-900">Freedom for Developers. Simplicity for Merchants.</h3>
                  <p className="text-lg text-slate-600">
                    Compose storefronts, automate operations, and ship brand-defining experiences at the speed of thought.
                    HCOM harmonizes human creativity with intelligent systems.
                  </p>
                  <div className="flex flex-wrap gap-3 text-sm font-semibold text-[#2D3FE0]">
                    <span className="rounded-full bg-[#2D3FE0]/10 px-4 py-2">Composable APIs</span>
                    <span className="rounded-full bg-[#7C5CFF]/10 px-4 py-2">Motion-first UX</span>
                    <span className="rounded-full bg-[#00C6FF]/10 px-4 py-2">Automated Ops</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      

        <section id="outcomes" className="relative overflow-hidden py-28">
          <div className="absolute inset-0 bg-gradient-to-br from-[#10172a] via-[#111d3a] to-[#1e1b4b]" />
          <div className="absolute inset-0 opacity-70" style={{
            backgroundImage:
              "radial-gradient(circle at 15% 20%, rgba(124,92,255,0.25), transparent 55%), radial-gradient(circle at 80% 50%, rgba(0,198,255,0.2), transparent 50%)",
          }} />
          <div className="relative mx-auto max-w-6xl px-6 text-white">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#7C9CFF]">Outcomes</p>
              <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Momentum your whole organization can measure.</h2>
              <p className="mt-4 text-lg text-slate-200">
                From first concept to multi-market rollout, HCOM orchestrates motion, automation, and insight so every release
                compounds.
              </p>
            </div>

            <div className="mt-16 grid gap-6 md:grid-cols-3">
              {outcomeMetrics.map((metric) => (
                <div
                  key={metric.label}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl shadow-indigo-900/30 backdrop-blur"
                >
                  <span className="pointer-events-none absolute -right-16 top-1/2 h-32 w-32 -translate-y-1/2 rounded-full bg-[#7C5CFF]/20 blur-3xl transition duration-500 group-hover:translate-x-4 group-hover:opacity-80" />
                  <div className="relative">
                    <p className="text-4xl font-semibold text-white">{metric.value}</p>
                    <p className="mt-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/60">{metric.label}</p>
                    <p className="mt-4 text-sm text-slate-200">{metric.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-20 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div className="space-y-10">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#7C9CFF]">The HCOM launch arc</p>
                <div className="space-y-10">
                  {journeyStages.map((stage, index) => (
                    <div key={stage.title} className="relative pl-14">
                      <span className="absolute left-0 top-0 flex h-11 w-11 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-sm font-semibold text-white/80">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div className="space-y-3">
                        <h3 className="text-xl font-semibold text-white">{stage.title}</h3>
                        <p className="text-sm text-slate-200">{stage.description}</p>
                        <ul className="space-y-2 text-sm text-slate-200/80">
                          {stage.bullets.map((bullet) => (
                            <li key={bullet} className="flex items-start gap-2">
                              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-[#7C5CFF] to-[#00C6FF]" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-10 shadow-2xl shadow-indigo-900/40">
                <span className="pointer-events-none absolute -top-24 -right-10 h-56 w-56 rounded-full bg-[#00C6FF]/30 blur-3xl" />
                <span className="pointer-events-none absolute -bottom-32 -left-12 h-64 w-64 rounded-full bg-[#7C5CFF]/20 blur-[120px]" />
                <div className="relative space-y-6 text-left">
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/60">Command center snapshot</p>
                  <h3 className="text-3xl font-semibold leading-snug text-white">One dashboard to choreograph every storefront move.</h3>
                  <p className="text-sm text-slate-200">
                    Monitor journey health, trigger automations, and launch experiments without breaking the flow. Teams stay
                    in sync while HCOM handles the orchestration.
                  </p>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl border border-white/10 bg-[#0B1220]/80 p-4">
                      <p className="text-sm font-semibold text-white">Live Journeys</p>
                      <p className="mt-2 text-2xl font-semibold text-[#7C9CFF]">12</p>
                      <p className="mt-1 text-xs text-slate-300">Updating in real time</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-[#0B1220]/80 p-4">
                      <p className="text-sm font-semibold text-white">Automation coverage</p>
                      <p className="mt-2 text-2xl font-semibold text-[#7C9CFF]">85%</p>
                      <p className="mt-1 text-xs text-slate-300">Across global stores</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-[#0B1220]/80 p-4 sm:col-span-2">
                      <p className="text-sm font-semibold text-white">Next launch window</p>
                      <div className="mt-2 flex items-baseline gap-3">
                        <span className="text-2xl font-semibold text-[#00C6FF]">03:18</span>
                        <span className="text-xs uppercase tracking-[0.3em] text-slate-400">hrs</span>
                      </div>
                      <p className="mt-2 text-xs text-slate-300">Automation will deploy localized variants automatically.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="cta" className="relative isolate py-28">
          <div className="absolute inset-0 bg-gradient-to-br from-[#2D3FE0] via-[#7C5CFF] to-[#141829]" />
          <div className="absolute inset-0 opacity-40" style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.35), transparent 60%), radial-gradient(circle at 80% 30%, rgba(0,198,255,0.45), transparent 60%)",
          }} />
          <div className="relative mx-auto max-w-4xl px-6 text-center text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/70">Ready for lift off?</p>
            <h2 className="mt-6 text-4xl font-semibold leading-tight sm:text-5xl">
              Launch Your Store in Minutes — with HCOM.
            </h2>
            <p className="mt-6 text-lg text-white/80">
              Your commerce. Elevated. Bring clarity to complexity and craft experiences that feel alive across every
              channel.
            </p>
            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <EarlyAccessDialog
                triggerClassName="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full bg-white px-8 py-3 text-base font-semibold text-[#2D3FE0] shadow-2xl shadow-slate-900/30 transition-transform duration-300 hover:-translate-y-1"
                outlineClassName="absolute inset-0 rounded-full border border-white/20"
                rippleClassName="absolute inset-0 scale-0 rounded-full bg-[#2D3FE0]/10 opacity-0 transition-all duration-500 group-hover:scale-125 group-hover:opacity-100"
              />
              <a
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-8 py-3 text-base font-semibold text-white transition-colors duration-300 hover:border-white hover:text-white"
                href={`mailto:${CONTACT_EMAIL}`}
              >
                Talk to an expert
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer id="footer" className="relative bg-[#0B1220] text-slate-300">
        <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#7C5CFF]/50 to-transparent" />
        <div className="relative mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#2D3FE0] to-[#7C5CFF] text-lg font-semibold text-white">
                  H
                </span>
                <div>
                  <p className="text-base font-semibold text-white">HCOM</p>
                  <p className="text-sm text-slate-400">Future-ready commerce, crafted for builders and operators.</p>
                </div>
              </div>
              <p className="max-w-lg text-sm text-slate-400">
                Design, automate, and scale immersive storefronts without friction. HCOM pairs headless flexibility with
                cinematic motion so every brand moment feels intentional.
              </p>
              <div className="flex flex-wrap items-center gap-3 text-sm text-slate-300">
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 font-medium text-white/80">
                  {CONTACT_EMAIL}
                </span>
                <a
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-slate-200 transition-colors hover:border-white/30 hover:text-white"
                  href={`mailto:${CONTACT_EMAIL}`}
                >
                  Contact us
                </a>
              </div>
            </div>
            <div className="grid gap-8 sm:grid-cols-3">
              <div className="space-y-3">
                <h4 className="text-sm font-semibold uppercase tracking-[0.25em] text-[#7C5CFF]">Product</h4>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li>
                    <a className="transition-colors hover:text-white" href="#product">
                      Overview
                    </a>
                  </li>
                  <li>
                    <a className="transition-colors hover:text-white" href="#features">
                      Features
                    </a>
                  </li>
                  <li>
                    <a className="transition-colors hover:text-white" href="#capabilities">
                      Capabilities
                    </a>
                  </li>
                  <li>
                    <a className="transition-colors hover:text-white" href="#demo">
                      Live demo
                    </a>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="text-sm font-semibold uppercase tracking-[0.25em] text-[#7C5CFF]">Resources</h4>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li>
                    <a className="transition-colors hover:text-white" href="#why">
                      Why HCOM
                    </a>
                  </li>
                  <li>
                    <a className="transition-colors hover:text-white" href="#integrations">
                      Integrations
                    </a>
                  </li>
                  <li>
                    <a className="transition-colors hover:text-white" href="#cta">
                      Early access
                    </a>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="text-sm font-semibold uppercase tracking-[0.25em] text-[#7C5CFF]">Connect</h4>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li>
                    <a className="transition-colors hover:text-white" href="https://linkedin.com" target="_blank" rel="noreferrer">
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a className="transition-colors hover:text-white" href="https://twitter.com" target="_blank" rel="noreferrer">
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a className="transition-colors hover:text-white" href="https://github.com" target="_blank" rel="noreferrer">
                      GitHub
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} HCOM. All rights reserved.</p>
            <div className="flex flex-wrap items-center gap-4">
              <a className="transition-colors hover:text-white" href="#integrations">
                Integration docs
              </a>
              <a
                className="transition-colors hover:text-white"
                href={`mailto:${CONTACT_EMAIL}?subject=Support`}
              >
                Support
              </a>
              <a className="transition-colors hover:text-white" href="#top">
                Back to top
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function IconArchitecture() {
  return (
    <svg aria-hidden="true" className="h-6 w-6" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4 7.5 12 3l8 4.5v4.75c0 3.54-2.68 6.5-6 6.5h-4c-3.32 0-6-2.96-6-6.5V7.5Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.4"
        className="text-white"
      />
      <path d="M9 12h6" stroke="#A5B4FC" strokeLinecap="round" strokeWidth="1.4" />
      <path d="M12 8v8" stroke="#A5B4FC" strokeLinecap="round" strokeWidth="1.4" />
    </svg>
  );
}

function IconBuilder() {
  return (
    <svg aria-hidden="true" className="h-6 w-6" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="4" width="6" height="6" rx="1.6" stroke="currentColor" strokeWidth="1.4" className="text-white" />
      <rect x="14" y="4" width="6" height="6" rx="1.6" stroke="#C7D2FE" strokeWidth="1.4" />
      <rect x="4" y="14" width="6" height="6" rx="1.6" stroke="#A5B4FC" strokeWidth="1.4" />
      <path d="M14 14h6v6h-6z" fill="#C7D2FE" fillOpacity="0.6" stroke="currentColor" strokeWidth="1.4" className="text-white" />
    </svg>
  );
}

function IconAutomation() {
  return (
    <svg aria-hidden="true" className="h-6 w-6" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5.5 8.5a3 3 0 1 1 6 0v7a3 3 0 1 1-6 0v-7Z"
        stroke="currentColor"
        strokeWidth="1.4"
        className="text-white"
      />
      <path d="M11.5 12h7" stroke="#C7D2FE" strokeLinecap="round" strokeWidth="1.4" />
      <path d="m18.5 8 2 4-2 4" stroke="#C7D2FE" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" />
    </svg>
  );
}

function IconGlobal() {
  return (
    <svg aria-hidden="true" className="h-6 w-6" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="7" stroke="currentColor" strokeWidth="1.4" className="text-white" />
      <path d="M5 12h14" stroke="#C7D2FE" strokeLinecap="round" strokeWidth="1.4" />
      <path d="M12 5c2 2.4 3 4.8 3 7s-1 4.6-3 7c-2-2.4-3-4.8-3-7s1-4.6 3-7Z" stroke="#C7D2FE" strokeWidth="1.4" />
    </svg>
  );
}