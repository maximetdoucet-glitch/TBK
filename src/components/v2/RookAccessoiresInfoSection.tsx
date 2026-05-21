"use client";

import { useState } from "react";
import { Award, Wrench, Scale, Info, type LucideIcon } from "lucide-react";
import { useLocale } from "@/i18n/LocaleContext";
import type { Locale } from "@/i18n/translations";

// ─── Localised copy ──────────────────────────────────────────────────────────

type RookTab = { id: string; label: string; title: string; body: string; fact: string; icon: LucideIcon };
type RookText = {
  eyebrow: string;
  headlineDark: string;
  headlineAccent: string;
  intro: string;
  kernpunt: string;
  tabs: RookTab[];
  legal: string;
  legalConnector: string;
  legalCity: string;
};

const TAB_IDS = ["vakmanschap", "onderhoud", "verantwoord"] as const;
const TAB_ICONS: Record<(typeof TAB_IDS)[number], LucideIcon> = {
  vakmanschap: Award,
  onderhoud: Wrench,
  verantwoord: Scale,
};

const LOCALIZED: Record<Locale, RookText> = {
  NL: {
    eyebrow: "Goed om te weten",
    headlineDark: "Pijpen, bestek",
    headlineAccent: "& grinders.",
    intro:
      "Klein gereedschap voor wie het proces waardeert - eerlijk uitgelegd in drie korte hoofdstukken.",
    kernpunt: "Kernpunt",
    tabs: [
      {
        id: "vakmanschap",
        label: "Vakmanschap",
        title: "Materialen die het proces respecteren",
        body: "Bruyère hout - de wortelknobbel van de heideboom - is sinds 1850 de standaard voor pijpen. Hittebestendig, geurneutraal, en het ontwikkelt na honderden vullingen een eigen rookkarakter. Onze grinders zijn vliegtuig-aluminium met diamantvormige tanden; ons bestek is messing dat niet roest in de tabak.",
        fact: "Sinds 1850",
        icon: Award,
      },
      {
        id: "onderhoud",
        label: "Onderhoud",
        title: "Klein gereedschap, lange levensduur",
        body: "Een 3-delig pijp-bestek (aandrukker, ruimer, prikker) houdt je pijp schoon en voorkomt verstopping. Grinders maak je handmatig schoon met warm water en een zachte borstel - niet in de vaatwasser. Goed onderhouden gereedschap gaat decennia mee.",
        fact: "Decennia mee",
        icon: Wrench,
      },
      {
        id: "verantwoord",
        label: "Verantwoord",
        title: "Verkoop volgens Nederlandse wetgeving",
        body: "Wij verkopen uitsluitend rook-gereedschap en accessoires (pijpen, grinders, bestek) - geen tabak of plantenmateriaal via deze webshop. Verkoop aan personen onder de 18 jaar is niet toegestaan. Bij twijfel over leeftijd vragen wij om legitimatie bij ophalen of bezorging.",
        fact: "18+ legitimatie",
        icon: Scale,
      },
    ],
    legal:
      "Verkoop uitsluitend aan 18+. Onze rook-accessoires zijn bedoeld voor wettige doeleinden in overeenstemming met de Nederlandse Opiumwet en Tabaks- en Rookwarenwet. Vragen?",
    legalConnector: "of",
    legalCity: "in Nijmegen",
  },
  EN: {
    eyebrow: "Good to know",
    headlineDark: "Pipes, tools",
    headlineAccent: "& grinders.",
    intro:
      "Small tools for those who value the process - explained honestly in three short chapters.",
    kernpunt: "Key point",
    tabs: [
      {
        id: "vakmanschap",
        label: "Craftsmanship",
        title: "Materials that respect the process",
        body: "Briar - the root burl of the heath tree - has been the standard for pipes since 1850. Heat-resistant, scent-neutral, and after hundreds of bowls it develops its own smoking character. Our grinders are aircraft aluminium with diamond-shaped teeth; our tools are brass that doesn't rust in the tobacco.",
        fact: "Since 1850",
        icon: Award,
      },
      {
        id: "onderhoud",
        label: "Maintenance",
        title: "Small tools, long lifespan",
        body: "A 3-piece pipe tool (tamper, reamer, pick) keeps your pipe clean and prevents clogging. Clean grinders by hand with warm water and a soft brush - not in the dishwasher. Well-maintained gear lasts for decades.",
        fact: "Lasts decades",
        icon: Wrench,
      },
      {
        id: "verantwoord",
        label: "Responsible",
        title: "Sales in line with Dutch law",
        body: "We sell only smoking gear and accessories (pipes, grinders, tools) - no tobacco or plant material via this webshop. Sales to anyone under 18 is not permitted. When in doubt about age we ask for ID at pickup or delivery.",
        fact: "18+ ID required",
        icon: Scale,
      },
    ],
    legal:
      "Sales strictly 18+. Our smoking accessories are intended for lawful purposes in accordance with the Dutch Opium Act and Tobacco & Smoking Products Act. Questions?",
    legalConnector: "or",
    legalCity: "in Nijmegen",
  },
  DE: {
    eyebrow: "Gut zu wissen",
    headlineDark: "Pfeifen, Besteck",
    headlineAccent: "& Mühlen.",
    intro:
      "Kleines Werkzeug für alle, die den Prozess schätzen - ehrlich erklärt in drei kurzen Kapiteln.",
    kernpunt: "Kernpunkt",
    tabs: [
      {
        id: "vakmanschap",
        label: "Handwerk",
        title: "Materialien, die den Prozess respektieren",
        body: "Bruyère - die Wurzelknolle der Erika - ist seit 1850 der Standard für Pfeifen. Hitzebeständig, geruchsneutral, und nach hunderten Füllungen entwickelt es einen eigenen Rauchcharakter. Unsere Tabakmühlen sind aus Flugzeugaluminium mit diamantförmigen Zähnen; unser Besteck ist aus Messing, das im Tabak nicht rostet.",
        fact: "Seit 1850",
        icon: Award,
      },
      {
        id: "onderhoud",
        label: "Pflege",
        title: "Kleines Werkzeug, lange Lebensdauer",
        body: "Ein 3-teiliges Pfeifenbesteck (Stopfer, Reibahle, Räumer) hält Ihre Pfeife sauber und verhindert Verstopfungen. Tabakmühlen reinigen Sie von Hand mit warmem Wasser und einer weichen Bürste - nicht in der Spülmaschine. Gut gepflegtes Werkzeug hält Jahrzehnte.",
        fact: "Jahrzehnte haltbar",
        icon: Wrench,
      },
      {
        id: "verantwoord",
        label: "Verantwortlich",
        title: "Verkauf nach niederländischem Recht",
        body: "Wir verkaufen ausschließlich Rauchwerkzeug und Zubehör (Pfeifen, Mühlen, Besteck) - keinen Tabak oder Pflanzenmaterial über diesen Webshop. Der Verkauf an Personen unter 18 Jahren ist nicht zulässig. Im Zweifelsfall verlangen wir bei Abholung oder Lieferung einen Altersnachweis.",
        fact: "18+ Ausweispflicht",
        icon: Scale,
      },
    ],
    legal:
      "Verkauf ausschließlich 18+. Unser Raucherzubehör ist für rechtmäßige Zwecke gemäß dem niederländischen Opiumgesetz und Tabak- und Raucherwarengesetz bestimmt. Fragen?",
    legalConnector: "oder",
    legalCity: "in Nijmegen",
  },
  FR: {
    eyebrow: "Bon à savoir",
    headlineDark: "Pipes, outils",
    headlineAccent: "& grinders.",
    intro:
      "De petits outils pour qui apprécie le geste - expliqués simplement en trois courts chapitres.",
    kernpunt: "Point clé",
    tabs: [
      {
        id: "vakmanschap",
        label: "Savoir-faire",
        title: "Des matériaux qui respectent le geste",
        body: "Le bruyère - la souche de la bruyère arborescente - est la référence pour les pipes depuis 1850. Résistant à la chaleur, neutre en odeur, il développe au fil des centaines de fournées un caractère de fumée propre. Nos grinders sont en aluminium d'aviation à dents diamantées ; nos outils sont en laiton qui ne rouille pas au contact du tabac.",
        fact: "Depuis 1850",
        icon: Award,
      },
      {
        id: "onderhoud",
        label: "Entretien",
        title: "Petits outils, longue durée de vie",
        body: "Un outil à pipe 3-en-1 (tasseur, alésoir, fourchette) garde votre pipe propre et évite les bouchages. Nettoyez les grinders à la main, à l'eau chaude avec une brosse douce - pas au lave-vaisselle. Un outillage bien entretenu dure des décennies.",
        fact: "Dure des décennies",
        icon: Wrench,
      },
      {
        id: "verantwoord",
        label: "Responsable",
        title: "Vente conforme à la loi néerlandaise",
        body: "Nous vendons uniquement de l'outillage et des accessoires pour fumer (pipes, grinders, outils) - pas de tabac ni de matière végétale via ce site. La vente aux personnes de moins de 18 ans est interdite. En cas de doute sur l'âge, nous demandons une pièce d'identité au retrait ou à la livraison.",
        fact: "Pièce d'identité 18+",
        icon: Scale,
      },
    ],
    legal:
      "Vente strictement réservée aux 18 ans et plus. Nos accessoires fumeur sont destinés à un usage légal conformément à la loi néerlandaise sur l'opium et à la loi sur le tabac et les produits à fumer. Des questions ?",
    legalConnector: "ou",
    legalCity: "à Nijmegen",
  },
};

export default function RookAccessoiresInfoSection() {
  const { locale } = useLocale();
  const text = LOCALIZED[locale] ?? LOCALIZED.NL;
  // Re-attach the shared icons (the per-locale tab arrays already include them,
  // but TAB_ICONS lets the active-icon panel pick by id).
  const tabs = text.tabs;
  const [active, setActive] = useState<string>(tabs[0].id);
  const tab = tabs.find((t) => t.id === active) ?? tabs[0];
  const ActiveIcon = TAB_ICONS[tab.id as keyof typeof TAB_ICONS] ?? tab.icon;

  return (
    <div className="bg-white border-t border-gray-100">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Lead-in */}
        <div className="flex items-center gap-3 mb-6">
          <div className="h-px w-8 bg-[#2b3e51]/40" />
          <span className="text-[10px] font-black uppercase tracking-[0.35em] text-gray-400">
            {text.eyebrow}
          </span>
        </div>

        {/* Editorial headline */}
        <div className="mb-8 max-w-2xl">
          <h2 className="font-montserrat font-black tracking-tight leading-[0.95] text-[clamp(28px,4vw,44px)]">
            <span className="text-[#2b3e51]">{text.headlineDark}</span>{" "}
            <span className="text-[#f5a623]">{text.headlineAccent}</span>
          </h2>
          <p className="text-gray-500 text-[13px] mt-3 leading-relaxed">
            {text.intro}
          </p>
        </div>

        {/* Interactive tab card */}
        <div className="border border-gray-200 rounded-sm overflow-hidden bg-white">

          {/* Tab strip */}
          <div role="tablist" className="flex border-b border-gray-100 bg-gray-50/60">
            {tabs.map((tb) => {
              const Icon = tb.icon;
              const isActive = tb.id === active;
              return (
                <button
                  key={tb.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive ? "true" : "false"}
                  onClick={() => setActive(tb.id)}
                  className={`flex-1 flex items-center justify-center gap-2 px-4 py-4 text-[12px] font-black uppercase tracking-[0.12em] transition-all duration-300 border-b-2 ${
                    isActive
                      ? "border-[#f5a623] text-[#2b3e51] bg-white"
                      : "border-transparent text-gray-400 hover:text-[#2b3e51] hover:bg-white"
                  }`}
                >
                  <Icon className={`size-4 transition-colors ${isActive ? "text-[#f5a623]" : "text-gray-300"}`} />
                  <span className="hidden sm:inline">{tb.label}</span>
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
                {text.kernpunt}
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
            {text.legal}{" "}
            <span className="text-[#2b3e51] font-bold">Molenstraat 120</span> {text.legalConnector}{" "}
            <span className="text-[#2b3e51] font-bold">Lange Hezelstraat 26</span> {text.legalCity}
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
