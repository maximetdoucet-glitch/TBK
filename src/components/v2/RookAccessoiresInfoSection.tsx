"use client";

import { useState } from "react";
import { Award, Wrench, Scale, Info } from "lucide-react";

const TABS = [
  {
    id: "vakmanschap",
    label: "Vakmanschap",
    icon: Award,
    title: "Materialen die het proces respecteren",
    body:
      "Bruyère hout — de wortelknobbel van de heideboom — is sinds 1850 de standaard voor pijpen. Hittebestendig, geurneutraal, en het ontwikkelt na honderden vullingen een eigen rookkarakter. Onze grinders zijn vliegtuig-aluminium met diamantvormige tanden; ons bestek is messing dat niet roest in de tabak.",
    fact: "Sinds 1850",
  },
  {
    id: "onderhoud",
    label: "Onderhoud",
    icon: Wrench,
    title: "Klein gereedschap, lange levensduur",
    body:
      "Een 3-delig pijp-bestek (aandrukker, ruimer, prikker) houdt je pijp schoon en voorkomt verstopping. Grinders maak je handmatig schoon met warm water en een zachte borstel — niet in de vaatwasser. Goed onderhouden gereedschap gaat decennia mee.",
    fact: "Decennia mee",
  },
  {
    id: "verantwoord",
    label: "Verantwoord",
    icon: Scale,
    title: "Verkoop volgens Nederlandse wetgeving",
    body:
      "Wij verkopen uitsluitend rook-gereedschap en accessoires (pijpen, grinders, bestek) — geen tabak of plantenmateriaal via deze webshop. Verkoop aan personen onder de 18 jaar is niet toegestaan. Bij twijfel over leeftijd vragen wij om legitimatie bij ophalen of bezorging.",
    fact: "18+ legitimatie",
  },
];

export default function RookAccessoiresInfoSection() {
  const [active, setActive] = useState(TABS[0].id);
  const tab = TABS.find((t) => t.id === active) ?? TABS[0];
  const ActiveIcon = tab.icon;

  return (
    <div className="bg-white border-t border-gray-100">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Lead-in */}
        <div className="flex items-center gap-3 mb-6">
          <div className="h-px w-8 bg-[#2b3e51]/40" />
          <span className="text-[10px] font-black uppercase tracking-[0.35em] text-gray-400">
            Goed om te weten
          </span>
        </div>

        {/* Editorial headline */}
        <div className="mb-8 max-w-2xl">
          <h2 className="font-montserrat font-black tracking-tight leading-[0.95] text-[clamp(28px,4vw,44px)]">
            <span className="text-[#2b3e51]">Pijpen, bestek</span>{" "}
            <span className="text-[#f5a623]">& grinders.</span>
          </h2>
          <p className="text-gray-500 text-[13px] mt-3 leading-relaxed">
            Klein gereedschap voor wie het proces waardeert — eerlijk uitgelegd in drie korte hoofdstukken.
          </p>
        </div>

        {/* Interactive tab card */}
        <div className="border border-gray-200 rounded-sm overflow-hidden bg-white">

          {/* Tab strip */}
          <div role="tablist" className="flex border-b border-gray-100 bg-gray-50/60">
            {TABS.map((t) => {
              const Icon = t.icon;
              const isActive = t.id === active;
              return (
                <button
                  key={t.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive ? "true" : "false"}
                  onClick={() => setActive(t.id)}
                  className={`flex-1 flex items-center justify-center gap-2 px-4 py-4 text-[12px] font-black uppercase tracking-[0.12em] transition-all duration-300 border-b-2 ${
                    isActive
                      ? "border-[#f5a623] text-[#2b3e51] bg-white"
                      : "border-transparent text-gray-400 hover:text-[#2b3e51] hover:bg-white"
                  }`}
                >
                  <Icon className={`size-4 transition-colors ${isActive ? "text-[#f5a623]" : "text-gray-300"}`} />
                  <span className="hidden sm:inline">{t.label}</span>
                </button>
              );
            })}
          </div>

          {/* Active panel */}
          <div role="tabpanel" key={tab.id} className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 p-8 md:p-10 animate-[fadeIn_0.35s_ease-out]">
            <div>
              <h3 className="font-montserrat text-lg sm:text-xl font-black text-[#2b3e51] tracking-tight mb-3">
                {tab.title}
              </h3>
              <p className="text-[13px] text-gray-500 leading-relaxed max-w-xl">
                {tab.body}
              </p>
            </div>

            {/* Big number-style accent */}
            <div className="hidden md:flex flex-col items-end justify-center pl-6 border-l border-gray-100 min-w-[160px]">
              <ActiveIcon className="size-6 text-[#f5a623] mb-2" />
              <span className="font-montserrat text-[10px] font-black uppercase tracking-[0.2em] text-gray-300 mb-1">
                Kernpunt
              </span>
              <span className="font-montserrat text-base font-black text-[#2b3e51] tracking-tight text-right">
                {tab.fact}
              </span>
            </div>
          </div>
        </div>

        {/* Compact legal/contact note */}
        <div className="mt-6 flex items-start gap-3 text-[11px] text-gray-400 leading-relaxed">
          <Info className="size-3.5 text-[#2b3e51]/50 mt-0.5 flex-shrink-0" />
          <p>
            Verkoop uitsluitend aan 18+. Onze rook-accessoires zijn bedoeld voor wettige doeleinden in overeenstemming met de Nederlandse Opiumwet en Tabaks- en Rookwarenwet. Vragen?{" "}
            <span className="text-[#2b3e51] font-bold">Molenstraat 120, Nijmegen</span>{" "}
            · service@tbk-lightshop.nl
          </p>
        </div>

      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(4px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
