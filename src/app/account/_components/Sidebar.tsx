"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogIn, UserPlus, Package, Heart, User } from "lucide-react";

const ITEMS = [
  { slug: "inloggen",     label: "Inloggen",             icon: LogIn },
  { slug: "registreren",  label: "Registreren",          icon: UserPlus },
  { slug: "bestelhistorie", label: "Bestelhistorie",     icon: Package },
  { slug: "verlanglijst", label: "Verlanglijst",         icon: Heart },
  { slug: "gegevens",     label: "Persoonlijke gegevens", icon: User },
];

export default function Sidebar() {
  const pathname = usePathname() || "";
  return (
    <aside className="w-full lg:w-64 flex-shrink-0 lg:sticky lg:top-6 self-start bg-white border border-gray-100 rounded-sm overflow-hidden">
      <div className="px-5 py-4 border-b border-gray-100">
        <p className="text-[11px] font-black uppercase tracking-[0.15em] text-[#2b3e51]">
          Mijn account
        </p>
      </div>
      <ul>
        {ITEMS.map(({ slug, label, icon: Icon }) => {
          const href = `/account/${slug}`;
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
