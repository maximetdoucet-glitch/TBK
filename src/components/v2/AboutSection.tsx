"use client";

import React, { useState } from "react";
import { Plus, Minus, Award, Truck, ShieldCheck, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

const STATS = [
  { value: "Nr. 1", label: "Tabakspecialist Nijmegen" },
  { value: "185+", label: "Zippo modellen" },
  { value: "98 jaar", label: "Vakmanschap" },
  { value: "4.8 ★", label: "Google Reviews" },
];

const PILLARS = [
  {
    icon: Award,
    title: "Officieel dealer",
    body: "TBK is officieel gecertificeerd dealer van Zippo, Clipper, Colibri en Xikar. Elke aankoop is gegarandeerd authentiek.",
  },
  {
    icon: Truck,
    title: "Snelle levering",
    body: "Voor 16:00 besteld, dezelfde dag verstuurd vanuit ons eigen magazijn in Nijmegen. Wereldwijd geleverd.",
  },
  {
    icon: ShieldCheck,
    title: "Gratis retour",
    body: "Niet tevreden? Retourneer binnen 30 dagen gratis. Geen gedoe, geen vragen.",
  },
  {
    icon: MapPin,
    title: "Fysieke winkel",
    body: "Bezoek ons in de Molenstraat 120 in hartje Nijmegen. Persoonlijk advies van echte kenners.",
  },
];

const FAQS = [
  {
    q: "Wanneer wordt mijn bestelling verzonden?",
    a: "Bestellingen op werkdagen vóór 16:00 worden dezelfde dag verstuurd via PostNL — op zaterdag verwerken we tot 13:00. Je ontvangt direct een bevestigingsmail met track & trace zodra je pakket is ingescand. Standaard levertijd binnen Nederland is 1–2 werkdagen.",
  },
  {
    q: "Betaal ik verzendkosten?",
    a: "Binnen Nederland is verzending volledig gratis vanaf €80. Onder dat bedrag rekenen we €4,95 voor standaard levering. Naar België geldt een gratis drempel van €100, daarna €6,95. Verzenden we naar andere landen, dan berekenen we het porto op basis van gewicht — je ziet het exacte bedrag altijd vóór het afrekenen.",
  },
  {
    q: "Kan ik mijn bestelling retourneren?",
    a: "Je hebt 30 dagen na ontvangst de tijd om te retourneren, gratis binnen Nederland. Stuur ons een e-mail met je ordernummer, dan ontvang je een voorgefrankeerd retourlabel. Producten dienen ongeopend en in originele verpakking te zijn. Na goedkeuring wordt het aankoopbedrag binnen 5 werkdagen teruggestort.",
  },
  {
    q: "Zijn de producten authentiek?",
    a: "Zonder uitzondering. TBK is officieel gecertificeerd dealer van Zippo, Clipper, Colibri, Xikar en alle andere merken in ons assortiment. We kopen uitsluitend in bij erkende Europese distributeurs — nooit via marktplaatsen of derde partijen. Op alle Zippo-aanstekers ontvang je bovendien de levenslange fabrieksgarantie van Zippo zelf.",
  },
  {
    q: "Kan ik ook in de winkel terecht?",
    a: "Zeker. Onze winkel in de Molenstraat 120 in Nijmegen is open op maandag t/m vrijdag van 09:00–18:00 en op zaterdag van 10:00–17:00. Je kunt er terecht voor persoonlijk advies, directe aankoop en het bekijken van de volledige collectie — inclusief Zippo-modellen die niet online staan.",
  },
];

function Accordion({ faq }: { faq: (typeof FAQS)[0] }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={cn("border-b border-gray-100 last:border-0", open && "")}>
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-start justify-between gap-4 py-5 text-left group"
      >
        <span
          className={cn(
            "text-sm font-bold text-[#2b3e51] leading-snug transition-colors",
            open ? "text-[#f5a623]" : "group-hover:text-[#f5a623]"
          )}
        >
          {faq.q}
        </span>
        <span
          className={cn(
            "shrink-0 size-6 rounded-full border flex items-center justify-center transition-all mt-0.5",
            open
              ? "bg-[#f5a623] border-[#f5a623] text-white"
              : "border-gray-200 text-gray-400 group-hover:border-[#f5a623] group-hover:text-[#f5a623]"
          )}
        >
          {open ? <Minus className="size-3" /> : <Plus className="size-3" />}
        </span>
      </button>
      {open && (
        <p className="text-sm text-gray-500 leading-relaxed pb-5 pr-10 animate-in fade-in slide-in-from-top-1 duration-200">
          {faq.a}
        </p>
      )}
    </div>
  );
}

export default function AboutSection() {
  return (
    <section className="bg-white">
      {/* ── Stats bar ── */}
      <div className="bg-[#2b3e51]">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/10">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center justify-center py-8 px-4 gap-1"
              >
                <span className="font-montserrat text-3xl sm:text-4xl font-black text-white tracking-tighter">
                  {stat.value}
                </span>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── About + Pillars ── */}
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left — brand story */}
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#f5a623] mb-3">
              Over ons
            </p>
            <h2 className="font-montserrat text-4xl sm:text-5xl font-black text-[#2b3e51] tracking-tighter leading-[0.92] mb-8">
              Nijmegen's specialist<br />
              <span className="text-[#f5a623]">in Nijmegen</span>
            </h2>
            <div className="space-y-4 text-[15px] text-gray-500 leading-relaxed">
              <p>
                In onze speciaalzaak in hartje Nijmegen vind je alles om jouw
                rookmoment compleet te maken. Van exclusieve Zippo's tot
                dagelijkse benodigdheden zoals vloei en filters.
              </p>
              <p>
                Met jarenlange ervaring adviseren wij onze klanten zowel in
                onze fysieke winkel als online. Ons team bestaat uit echte
                kenners — geen callcenter, maar mensen die passie hebben voor
                het vak.
              </p>
            </div>

            {/* Pillar grid */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {PILLARS.map((p) => (
                <div key={p.title} className="group flex gap-4">
                  <div className="shrink-0 size-10 rounded-lg bg-[#f8f8f8] border border-gray-100 flex items-center justify-center group-hover:bg-[#f5a623] group-hover:border-[#f5a623] transition-all duration-300">
                    <p.icon className="size-4.5 text-[#f5a623] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="font-bold text-[#2b3e51] text-sm mb-1">
                      {p.title}
                    </p>
                    <p className="text-[12px] text-gray-400 leading-relaxed">
                      {p.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — FAQ */}
          <div className="lg:pt-2">
            <div className="flex items-end justify-between mb-8">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#f5a623] mb-2">
                  FAQ
                </p>
                <h3 className="font-montserrat text-2xl sm:text-3xl font-black text-[#2b3e51] tracking-tighter">
                  Veelgestelde vragen
                </h3>
              </div>
            </div>

            <div className="divide-y divide-gray-100 border-t border-gray-100">
              {FAQS.map((faq, i) => (
                <Accordion key={i} faq={faq} />
              ))}
            </div>

            {/* Still have questions */}
            <div className="mt-8 p-6 bg-[#f8f8f8] rounded-xl flex items-start gap-4">
              <div className="size-10 rounded-full bg-[#f5a623]/15 flex items-center justify-center shrink-0 mt-0.5">
                <span className="text-lg">💬</span>
              </div>
              <div>
                <p className="font-bold text-sm text-[#2b3e51] mb-1">
                  Staat je vraag er niet bij?
                </p>
                <p className="text-[12px] text-gray-400 leading-relaxed">
                  Ons team staat klaar om je te helpen.{" "}
                  <a
                    href="#"
                    className="text-[#f5a623] font-bold hover:underline"
                  >
                    Neem contact op →
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
