// components/layout/Footer.tsx
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0B1120] border-t border-white/10 text-hcom-subtext py-10 text-sm">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-white text-lg font-semibold mb-2">HCOM</h3>
          <p>© {new Date().getFullYear()} UniStacx Technologies Pvt. Ltd.</p>
          <p>All rights reserved.</p>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1">
            <li><Link href="#features">Features</Link></li>
            <li><Link href="#pricing">Pricing</Link></li>
            <li><Link href="#faq">FAQ</Link></li>
            <li><Link href="/docs">Docs</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-2">Connect</h3>
          <p>Email: hello@unistacx.com</p>
          <p>LinkedIn / GitHub</p>
        </div>
      </div>
    </footer>
  );
}
