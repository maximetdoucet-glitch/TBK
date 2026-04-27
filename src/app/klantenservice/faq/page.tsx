"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQS: { group: string; items: { q: string; a: string }[] }[] = [
  {
    group: "Bestellen & betalen",
    items: [
      {
        q: "Hoe lang duurt het voor mijn bestelling wordt verstuurd?",
        a: "Op werkdagen pakken we elke bestelling die vóór 16:00 binnenkomt nog dezelfde dag in en geven we hem mee aan PostNL of DHL.",
      },
      {
        q: "Kan ik achteraf betalen?",
        a: "Ja, via Klarna kun je achteraf betalen binnen 14 of 30 dagen, of de aankoop in 3 rentevrije termijnen splitsen.",
      },
      {
        q: "Krijg ik een factuur?",
        a: "Ja. Elke bestelling ontvangt een digitale factuur per mail, en je kunt hem ook downloaden via je account.",
      },
    ],
  },
  {
    group: "Verzending",
    items: [
      {
        q: "Vanaf welk bedrag is verzenden gratis?",
        a: "Binnen Nederland is verzenden gratis vanaf €80. Naar België is dat vanaf €100. Onder dat bedrag rekenen we €4,95 (NL) of €7,95 (BE).",
      },
      {
        q: "Versturen jullie ook naar andere landen?",
        a: "Ja, naast NL en BE versturen we naar Duitsland, Frankrijk en de meeste andere EU-landen. Tarief en levertijd worden in de checkout berekend.",
      },
      {
        q: "Kan ik mijn bestelling ophalen in de winkel?",
        a: "Zeker. Kies in de checkout voor afhalen — je krijgt een mailtje zodra je bestelling klaarligt aan de Molenstraat 120 in Nijmegen.",
      },
    ],
  },
  {
    group: "Retour & garantie",
    items: [
      {
        q: "Hoeveel dagen bedenktijd heb ik?",
        a: "14 dagen vanaf het moment dat je je bestelling ontvangt. Binnen Nederland sturen we het retourlabel kosteloos toe.",
      },
      {
        q: "Mijn Zippo werkt niet meer — wat nu?",
        a: "Zippo geeft levenslange garantie op al hun aanstekers. Lever je Zippo in bij ons in de winkel en wij regelen de reparatie of vervanging via Zippo zelf — kosteloos.",
      },
      {
        q: "Ik heb een product met gravure besteld, kan ik dit retourneren?",
        a: "Producten met persoonlijke gravure of op maat gemaakte items vallen niet onder de retourregeling. We melden dit altijd voordat we starten met graveren.",
      },
    ],
  },
  {
    group: "Producten & advies",
    items: [
      {
        q: "Verkopen jullie ook tabak of e-liquids?",
        a: "Nee. Wij zijn een tabaksspeciaalzaak voor accessoires — aanstekers, kokers, knippers, asbakken, pijpen, grinders en bestek. Tabak en plantenmateriaal verkopen wij niet via deze webshop.",
      },
      {
        q: "Kan ik mijn Zippo laten graveren?",
        a: "Ja. We graveren in onze winkel naam, datum, tekst of een eigen ontwerp. Loop binnen aan de Molenstraat 120 voor de mogelijkheden en levertijd.",
      },
      {
        q: "Welke pijp past bij een beginner?",
        a: "Een rechte bruyère-pijp van middelgrote kop, smooth-finish, met klassiek mondstuk. Tussen €50–100 vind je betrouwbare modellen die jaren meegaan. We adviseren graag in de winkel.",
      },
    ],
  },
];

function Item({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-100 last:border-b-0">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between gap-4 py-4 text-left group"
      >
        <span className="text-[13px] font-bold text-[#2b3e51] group-hover:text-[#f5a623] transition-colors">
          {q}
        </span>
        <ChevronDown
          className={`size-4 flex-shrink-0 transition-all duration-300 ${
            open ? "rotate-180 text-[#f5a623]" : "text-gray-300"
          }`}
        />
      </button>
      {open && (
        <p className="text-[12px] text-gray-500 leading-relaxed pb-4 pr-8">{a}</p>
      )}
    </div>
  );
}

export default function FaqPage() {
  return (
    <article>
      <h2 className="font-montserrat text-2xl font-black text-[#2b3e51] tracking-tight mb-2">
        Veelgestelde vragen
      </h2>
      <p className="text-[13px] text-gray-500 leading-relaxed mb-8 max-w-2xl">
        De meest gestelde vragen op een rij — gegroepeerd per onderwerp. Staat jouw vraag
        er niet bij? Mail ons via{" "}
        <span className="text-[#2b3e51] font-bold">service@tbk-lightshop.nl</span> of
        loop binnen op de Molenstraat 120.
      </p>

      <div className="space-y-8">
        {FAQS.map((group) => (
          <section key={group.group}>
            <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#f5a623] mb-3">
              {group.group}
            </p>
            <div>
              {group.items.map((item) => (
                <Item key={item.q} q={item.q} a={item.a} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </article>
  );
}
