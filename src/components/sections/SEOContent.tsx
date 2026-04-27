import React from "react";
import { CheckCircle2, HelpCircle } from "lucide-react";

const FAQS = [
  { q: "Wanneer wordt mijn bestelling verzonden?", a: "Bestellingen op werkdagen voor 16:00 uur worden dezelfde dag nog verzonden via PostNL." },
  { q: "Betaal ik verzendkosten?", a: "Verzending is gratis vanaf € 80,- binnen Nederland en € 100,- naar België." },
  { q: "Kan ik mijn bestelling retourneren?", a: "Ja, binnen Nederland kun je gratis retourneren binnen 30 dagen na ontvangst." },
];

export default function SEOContent() {
  return (
    <section className="bg-[#f8f8f8] py-24">
      <div className="container mx-auto max-w-[1300px] px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="prose prose-sm max-w-none text-gray-600">
            <h2 className="font-montserrat text-3xl font-black text-[#2b3e51] mb-8 uppercase tracking-tighter">
              TBK LIGHTSHOP NIJMEGEN
            </h2>
            <p className="mb-6 leading-relaxed">
              In onze speciaalzaak in hartje Nijmegen vind je alles om jouw rookmoment compleet te maken. Van exclusieve Zippo&apos;s tot dagelijkse benodigdheden zoals vloei en filters. Met jarenlange ervaring adviseren wij onze klanten zowel in onze fysieke winkel als online over de beste producten en accessoires.
            </p>
            
            <h3 className="font-montserrat text-xl font-bold text-[#2b3e51] mb-6 uppercase tracking-tight border-b border-gray-200 pb-2">
              Waarom kiezen voor TBK?
            </h3>
            <p className="mb-6">
              Wij staan voor kwaliteit en service. Of je nu op zoek bent naar een duurzame aansteker voor jezelf of een uniek cadeau voor een ander, ons team staat klaar om je te helpen. Onze online shop biedt hetzelfde vertrouwde assortiment als onze winkel in de Molenstraat in Nijmegen.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
               {[
                 "1400+ Zippo modellen",
                 "Grootste assortiment in Nijmegen",
                 "Snelle levering uit eigen voorraad",
                 "Persoonlijk advies",
               ].map((item) => (
                 <div key={item} className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-[#2b3e51]">
                    <CheckCircle2 className="size-5 text-[#f5a623]" />
                    {item}
                 </div>
               ))}
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <div className="p-8 md:p-12 bg-[#2b3e51] text-white shadow-xl shadow-[#2b3e51]/10">
               <h3 className="font-montserrat text-2xl font-black mb-8 uppercase tracking-tighter italic">
                  GROOTSTE TABAKSPECIALIST VAN NIJMEGEN.
               </h3>
               <p className="text-white/80 text-sm leading-relaxed mb-8">
                  TBK Lightshop is een begrip in de regio. Onze passie voor vakmanschap en oog voor detail maken ons de specialist voor elke roker en verzamelaar.
               </p>
               <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4 border-b border-white/10 pb-4">
                     <div className="size-10 rounded-full bg-white/10 flex items-center justify-center font-bold text-[#f5a623]">1</div>
                     <span className="text-[11px] font-bold uppercase tracking-widest">Grootste Zippo Dealer</span>
                  </div>
                  <div className="flex items-center gap-4 border-b border-white/10 pb-4">
                     <div className="size-10 rounded-full bg-white/10 flex items-center justify-center font-bold text-[#f5a623]">2</div>
                     <span className="text-[11px] font-bold uppercase tracking-widest">Snelle Worldwide Shipping</span>
                  </div>
                  <div className="flex items-center gap-4">
                     <div className="size-10 rounded-full bg-white/10 flex items-center justify-center font-bold text-[#f5a623]">3</div>
                     <span className="text-[11px] font-bold uppercase tracking-widest">Officieel Dealer Topmerken</span>
                  </div>
               </div>
            </div>

            <div className="p-10 border border-gray-200 bg-white">
               <h3 className="font-montserrat text-lg font-bold text-[#2b3e51] mb-8 uppercase tracking-tight flex items-center gap-3">
                  <HelpCircle className="size-6 text-[#f5a623]" />
                  Veelgestelde Vragen
               </h3>
               <div className="space-y-6">
                  {FAQS.map((faq, i) => (
                    <div key={i} className="border-b border-gray-50 pb-4">
                       <p className="font-bold text-[11px] uppercase tracking-widest text-[#2b3e51] mb-2">{faq.q}</p>
                       <p className="text-gray-500 text-xs leading-relaxed">{faq.a}</p>
                    </div>
                  ))}
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
