"use client";
import React from "react";
import Image from "next/image";
import logo from "@/app/assets/uc-logo-black.svg";
import Link from "next/link";

const CONTACT_EMAIL = "hello@unistacx.com";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="relative bg-gradient-to-b from-gray-900 via-gray-800 to-gray-950 text-gray-300"
    >
      {/* Top subtle border glow */}
      <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gray-500/40 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          {/* Left Section */}
          <div className="space-y-6">
            {/* Brand */}
            <div className="flex items-center  gap-3">
              {/* <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-gray-100 to-gray-400 text-lg font-bold text-gray-900 shadow-inner">
                U
              </span>
              <div>
                <p className="text-base font-semibold text-white">
                  UniStacx Commerce
                </p>
                <p className="text-sm text-gray-400">
                  Unified headless commerce, built for modern teams.
                </p>
              </div> */}
               {/* Logo */}
               <div className="bg-white rounded-md px-2 py-1">
                   <Link
                        href="/"
                        className="font-bold text-xl text-hcom-text flex items-center gap-2"
                      >
                        <Image src={logo} alt="logo" height={40} />
                      </Link>

               </div>
                   
            </div>

            {/* About */}
            <p className="max-w-lg text-sm text-gray-400 leading-relaxed">
              Design, automate, and scale immersive storefronts without
              friction. UniStacx connects your products, orders, payments, and
              integrations — all from a single, reliable engine.
            </p>

            {/* Contact */}
            <div className="flex flex-wrap items-center gap-3 text-sm text-gray-200">
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 font-medium text-gray-300">
                {CONTACT_EMAIL}
              </span>
              <a
                className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 font-medium text-gray-200 transition-colors hover:border-white/30 hover:text-white"
                href={`mailto:${CONTACT_EMAIL}`}
              >
                Contact us
              </a>
            </div>
          </div>

          {/* Right Section */}
          <div className="grid gap-8 sm:grid-cols-3">
            {/* Product */}
            <div className="space-y-3">
              <h4 className="text-sm font-semibold uppercase tracking-[0.25em] text-gray-400">
                Product
              </h4>
              <ul className="space-y-2 text-sm text-gray-400">
             
                <li>
                  <a className="hover:text-white" href="#features">
                    Features
                  </a>
                </li>
                 <li>
                  <a className="hover:text-white" href="#pricing">
                    Pricing
                  </a>
                </li>
                {/*   <li>
                  <a className="hover:text-white" href="/product">
                    Overview
                  </a>
                </li>
                 <li>
                  <a className="hover:text-white" href="/capabilities">
                    Capabilities
                  </a>
                </li> 
                <li>
                  <a className="hover:text-white" href="/#demo">
                    Live demo
                  </a>
                </li>*/}
              </ul>
            </div>

            {/* Resources */}
            <div className="space-y-3">
              <h4 className="text-sm font-semibold uppercase tracking-[0.25em] text-gray-400">
                Resources
              </h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a className="hover:text-white" href="#why">
                    Why UniStacx commerce
                  </a>
                </li>
                <li>
                  <a className="hover:text-white" href="#integrations">
                    Integrations
                  </a>
                </li>
                {/* <li>
                  <a className="hover:text-white" href="/#cta">
                    Early Access
                  </a>
                </li> */}
              </ul>
            </div>

            {/* Connect */}
            {/* <div className="space-y-3">
              <h4 className="text-sm font-semibold uppercase tracking-[0.25em] text-gray-400">
                Connect
              </h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a
                    className="hover:text-white"
                    href="https://linkedin.com/company/unistacx"
                    target="_blank"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-white"
                    href="https://twitter.com"
                    target="_blank"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-white"
                    href="https://github.com/unistacx"
                    target="_blank"
                  >
                    GitHub
                  </a>
                </li>
              </ul>
            </div> */}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} UniStacx Technologies Pvt. Ltd. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-4">
            {/* <a className="hover:text-white" href="/integrations">
              Integration Docs
            </a> */}
            <a
              className="hover:text-white"
              href={`mailto:${CONTACT_EMAIL}?subject=Support`}
            >
              Support
            </a>
            <a className="hover:text-white" href="#top">
              Back to top
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
