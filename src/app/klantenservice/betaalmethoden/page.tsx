import { ShieldCheck, Lock } from "lucide-react";

export const metadata = {
  title: "Betaalmethoden — OneConnect Lightshop",
  description: "Veilig betalen via iDEAL, creditcard, PayPal, Klarna en meer.",
};

const METHODS = [
  { name: "iDEAL",       desc: "De meest gebruikte betaalmethode in Nederland — direct via je eigen bank." },
  { name: "Bancontact",  desc: "Voor onze Belgische klanten — directe betaling via je bankkaart." },
  { name: "Visa",        desc: "Wereldwijd geaccepteerd, met 3D Secure verificatie." },
  { name: "Mastercard",  desc: "Geaccepteerd in alle landen die we beleveren, met 3D Secure." },
  { name: "PayPal",      desc: "Veilig betalen zonder je kaartgegevens te delen — kopersbescherming inbegrepen." },
  { name: "Klarna",      desc: "Achteraf betalen binnen 14 of 30 dagen, of in 3 termijnen — zonder rente." },
  { name: "Apple Pay",   desc: "Eén tik op je iPhone of Mac — geen handmatig invullen." },
  { name: "Google Pay",  desc: "Snelle checkout op Android-apparaten en in Chrome." },
];

export default function BetaalmethodenPage() {
  return (
    <article>
      <h2 className="font-montserrat text-2xl font-black text-[#2b3e51] tracking-tight mb-2">
        Betaalmethoden
      </h2>
      <p className="text-[13px] text-gray-500 leading-relaxed mb-8 max-w-2xl">
        We bieden alle gangbare betaalmethoden in Nederland en België. Iedere transactie
        loopt via onze beveiligde betaalpartner — wij zien of bewaren je betaalgegevens nooit.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
        {METHODS.map((m) => (
          <div
            key={m.name}
            className="border border-gray-100 rounded-sm p-5 hover:border-[#f5a623]/50 transition-colors"
          >
            <p className="font-montserrat text-base font-black text-[#2b3e51] mb-1.5">{m.name}</p>
            <p className="text-[12px] text-gray-500 leading-relaxed">{m.desc}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex gap-4 p-5 bg-[#2b3e51]/3 border border-[#2b3e51]/15 rounded-sm">
          <Lock className="size-5 text-[#2b3e51] flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-bold text-[#2b3e51] text-[13px] mb-1">SSL-versleuteling</p>
            <p className="text-[12px] text-gray-500 leading-relaxed">
              Alle gegevens die je invult tijdens de checkout worden versleuteld via een
              256-bit SSL-verbinding — herkenbaar aan het slotje in je browser.
            </p>
          </div>
        </div>
        <div className="flex gap-4 p-5 bg-[#f5a623]/6 border border-[#f5a623]/25 rounded-sm">
          <ShieldCheck className="size-5 text-[#f5a623] flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-bold text-[#2b3e51] text-[13px] mb-1">PCI-DSS gecertificeerd</p>
            <p className="text-[12px] text-gray-500 leading-relaxed">
              Onze betaalprovider is PCI-DSS Level 1 gecertificeerd — de strengste
              standaard voor het verwerken van betaalgegevens.
            </p>
          </div>
        </div>
      </div>

      <p className="text-[11px] text-gray-400 leading-relaxed mt-8">
        Een betaalmethode niet zien die je verwacht? Mail ons via{" "}
        <span className="text-[#2b3e51] font-bold">service@tbk-lightshop.nl</span> — we
        breiden het aanbod regelmatig uit op basis van klantvraag.
      </p>
    </article>
  );
}
