import Image from "next/image";

import { EarlyAccessDialog } from './components/EarlyAccessDialog';
import { GlassNavigation } from './components/GlassNavigation';
import Navbar from "./components/layout/navbar";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import ArchitectureSection from "./components/ArchitectureSection";
import IntegrationsSection from "./components/IntegrationsSection";
import PilotProgramSection from "./components/PilotProgramSection";
import PricingSection from "./components/PricingSection";
import FAQSection from "./components/FAQSection";
import Footer from "./components/layout/Footer copy";
import HowItWorksSection from "./components/HowItWorksSection";

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
    <main className="bg-hcom-bg text-hcom-text overflow-hidden">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <ArchitectureSection />
      <HowItWorksSection/>
      <IntegrationsSection />
      <PilotProgramSection />
      <PricingSection />
      <FAQSection />
      <Footer />
    </main>
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