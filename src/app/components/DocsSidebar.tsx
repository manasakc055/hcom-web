"use client";
import { ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";

const sections = ["products", "orders", "payments", "products", "orders", "payments", "products", "orders", "payments", "products", "orders", "payments", "products", "orders", "payments", "products", "orders", "payments", "products", "orders", "payments", "products", "orders", "payments",];

export default function DocsSidebar({ active }: { active?: string }) {
  const router = useRouter();

  return (
    <aside className="w-75 bg-white border-r border-t border-gray-200 p-4 h-screen overflow-y-auto overflow-hidden">
      <h2 className="text-xl font-semibold text-indigo-700 mb-4">HCOM Docs</h2>
      <ul className="space-y-2">
        {sections.map((id) => (
          <li key={id}>
            <button
              onClick={() => router.push(`/docs/${id}`)}
              className={`group flex w-full items-center justify-between text-left px-3 py-2 rounded-md text-sm transition-all duration-200 ${active === id
                  ? "bg-indigo-50 text-indigo-700"
                  : "text-gray-600 hover:bg-gray-100"
                }`}
            >
              <span>{id.charAt(0).toUpperCase() + id.slice(1)}</span>
              <ChevronRight
                className={`h-4 w-4 transition-colors duration-200 ${active === id
                    ? "text-indigo-600"
                    : "text-gray-400 group-hover:text-indigo-500"
                  }`}
              />
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
