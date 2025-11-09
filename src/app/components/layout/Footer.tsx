import React from "react";

const CONTACT_EMAIL = "hello@hcom.app";

export default function Footer() {
  return (
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
                <p className="text-sm text-slate-400">
                  Future-ready commerce, crafted for builders and operators.
                </p>
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
                <li><a className="hover:text-white" href="#product">Overview</a></li>
                <li><a className="hover:text-white" href="#features">Features</a></li>
                <li><a className="hover:text-white" href="#capabilities">Capabilities</a></li>
                <li><a className="hover:text-white" href="#demo">Live demo</a></li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="text-sm font-semibold uppercase tracking-[0.25em] text-[#7C5CFF]">Resources</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a className="hover:text-white" href="#why">Why HCOM</a></li>
                <li><a className="hover:text-white" href="#integrations">Integrations</a></li>
                <li><a className="hover:text-white" href="#cta">Early access</a></li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="text-sm font-semibold uppercase tracking-[0.25em] text-[#7C5CFF]">Connect</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a className="hover:text-white" href="https://linkedin.com" target="_blank">LinkedIn</a></li>
                <li><a className="hover:text-white" href="https://twitter.com" target="_blank">Twitter</a></li>
                <li><a className="hover:text-white" href="https://github.com" target="_blank">GitHub</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} HCOM. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-4">
            <a className="hover:text-white" href="#integrations">Integration docs</a>
            <a className="hover:text-white" href={`mailto:${CONTACT_EMAIL}?subject=Support`}>Support</a>
            <a className="hover:text-white" href="#top">Back to top</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
