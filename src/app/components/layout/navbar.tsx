// components/layout/Navbar.tsx
"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import logo from "@/app/assets/uc-logo-black.svg"
export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Product", href: "#product" },
    { name: "Features", href: "#features" },
    { name: "Integrations", href: "#integrations" },
    { name: "Pricing", href: "#pricing" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <nav className="fixed top-0 z-50 w-full backdrop-blur-md bg-hcom-bg/60 text-hcom-text border-b border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="font-bold text-xl text-hcom-text">
          <Image src={logo} alt="logo" height={40}/>
        </Link>
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <a key={item.name} href={item.href} className="hover:text-hcom-primary transition">
              {item.name}
            </a>
          ))}
        </div>
        <button className="hidden md:block bg-hcom-primary hover:bg-indigo-600 text-white px-4 py-2 rounded-lg">
          Request Early Access
        </button>
      </div>
    </nav>
  );
}
