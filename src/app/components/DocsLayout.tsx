"use client";

import DocsSidebar from "./DocsSidebar";
import { motion } from "framer-motion";
import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface Props {
  active?: string;
  docData: {
    id?: string;
    title?: string;
    description?: string;
  };
  children: React.ReactNode;
}

export default function DocsLayout({ active, docData, children }: Props) {
  const currentTitle =
    docData?.title ||
    (active ? active.charAt(0).toUpperCase() + active.slice(1) : "Documents");

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* 🔹 Breadcrumb on top (spans across sidebar + main content) */}
      <div className="w-full  border-gray-200 bg-white px-8 py-5 flex items-center text-sm text-gray-600 sticky top-0 z-10">
        <Link href="/docs" className="hover:text-gray-900 font-medium">
          Documents
        </Link>
        <ChevronRight className="h-4 w-4 mx-2 text-gray-400" />
        <span className="text-gray-900 font-semibold">{currentTitle}</span>
      </div>

      {/* 🔹 Main Content Layout (Sidebar + Content) */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <DocsSidebar active={active} />

        {/* Main Content Area */}
        <main className="flex-1 p-10 overflow-y-auto">
          <motion.div
            key={docData?.id || active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="max-w-3xl mx-auto"
          >
            {/* Title */}
            {docData?.title && (
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                {docData.title}
              </h1>
            )}

            {/* Description */}
            {docData?.description && (
              <p className="text-gray-500 mb-8 leading-relaxed">
                {docData.description}
              </p>
            )}

            {/* Dynamic Page Content */}
            {children}
          </motion.div>
        </main>
      </div>
    </div>
  );
}
