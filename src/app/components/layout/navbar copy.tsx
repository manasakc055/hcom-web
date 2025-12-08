'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Search } from 'lucide-react';

const navigation = [
  { name: "Home", href: "/" },
  // { name: "Product", href: "/product" },
  { name: "Features", href: "/features" },
  // { name: "Capabilities", href: "/capabilities" },
  { name: "Pricing", href: "/pricing" },
  { name: "Integrations", href: "/integrations" },
  // { name: "Contact", href: "/contact" }, // or keep #footer if contact is a section on home
];


export default function Navbar() {
  const [query, setQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      // Optional: Redirect to /search?q=
      window.location.href = `/search?q=${encodeURIComponent(query.trim())}`;
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4">
        {/* Left: Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#2D3FE0] to-[#7C5CFF] text-white font-semibold text-lg shadow-md">
            H
          </span>
          <span className="text-xl font-semibold text-slate-900">HCOM</span>
        </Link>

        {/* Middle: Nav links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="hover:text-slate-900 transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Right: Search */}
        <form
          onSubmit={handleSearch}
          className="hidden md:flex items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-2 shadow-sm focus-within:ring-2 focus-within:ring-indigo-300"
        >
          <Search className="h-4 w-4 text-slate-500" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none text-slate-800 placeholder:text-slate-400 w-32 md:w-48"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </form>
      </div>
    </header>
  );
}
