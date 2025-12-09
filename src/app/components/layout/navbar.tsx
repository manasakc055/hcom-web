"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import logo from "@/app/assets/uc-logo-black.svg";
import { EarlyAccessDialog } from "../EarlyAccessDialog";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    // { name: "Product", href: "/product" },
    { name: "Features", href: "#features" },
    // { name: "Capabilities", href: "/capabilities" },
    { name: "Pricing", href: "#pricing" },
    { name: "Integrations", href: "#integrations" },
    // { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 z-50 w-full backdrop-blur-md bg-hcom-bg/60 text-hcom-text border-b border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          href="/"
          className="font-bold text-xl text-hcom-text flex items-center gap-2"
        >
          <Image src={logo} alt="logo" height={40} />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="hover:text-hcom-primary transition"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Desktop Button */}
        <div className="hidden md:block">
          <EarlyAccessDialog
            triggerClassName=" inline-flex items-center justify-center gap-2 
    rounded-md bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500 
    px-8 py-3 font-semibold text-white shadow-md 
    transition-transform duration-300 hover:-translate-y-1 hover:brightness-110"
            outlineClassName="absolute inset-0 rounded-lg border border-white/20"
            rippleClassName="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 hover:opacity-100 transition"
          />
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex items-center justify-center text-hcom-primary hover:text-indigo-700 transition text-2xl"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)]"
          >
            <div className="relative">
              {/* Subtle gradient line at top for polish */}
              <span className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[#00C6FF] via-[#2D3FE0] to-[#7C5CFF]" />
            </div>
            <div className="flex flex-col space-y-3 px-6 py-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-slate-700 hover:text-hcom-primary transition font-medium"
                >
                  {item.name}
                </Link>
              ))}
              <EarlyAccessDialog
                triggerClassName="relative overflow-hidden bg-hcom-primary hover:bg-indigo-600 text-white px-4 py-2 rounded-lg font-medium transition-all hover:scale-[1.03] shadow-lg shadow-indigo-200/40"
                outlineClassName="absolute inset-0 rounded-lg border border-white/20"
                rippleClassName="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 hover:opacity-100 transition"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
