"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Mail, Truck, Undo2, CreditCard, HelpCircle, ShieldCheck } from "lucide-react";

const ITEMS = [
  { slug: "contact",        label: "Contact",                icon: Mail },
  { slug: "verzenden",      label: "Verzenden & leveren",    icon: Truck },
  { slug: "retourneren",    label: "Ruilen & retourneren",   icon: Undo2 },
  { slug: "betaalmethoden", label: "Betaalmethoden",         icon: CreditCard },
  { slug: "faq",            label: "Veelgestelde vragen",    icon: HelpCircle },
  { slug: "garantie",       label: "Garantiebeleid",         icon: ShieldCheck },
];

export default function Sidebar() {
  const pathname = usePathname() || "";
  return (
    <aside className="w-full lg:w-64 flex-shrink-0 lg:sticky lg:top-6 self-start bg-white border border-gray-100 rounded-sm overflow-hidden">
      <div className="px-5 py-4 border-b border-gray-100">
        <p className="text-[11px] font-black uppercase tracking-[0.15em] text-[#2b3e51]">
          Klantenservice
        </p>
      </div>
      <ul>
        {ITEMS.map(({ slug, label, icon: Icon }) => {
          const href = `/klantenservice/${slug}`;
          const active = pathname === href;
          return (
            <li key={slug}>
              <Link
                href={href}
                className={`flex items-center gap-3 px-5 py-3 border-l-2 text-[13px] transition-all ${
                  active
                    ? "border-[#f5a623] bg-[#f5a623]/5 text-[#2b3e51] font-bold"
                    : "border-transparent text-gray-500 hover:bg-gray-50 hover:text-[#2b3e51]"
                }`}
              >
                <Icon
                  className={`size-4 transition-colors ${
                    active ? "text-[#f5a623]" : "text-gray-400"
                  }`}
                />
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
