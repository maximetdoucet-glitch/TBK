import { Truck, Package, Globe, Clock } from "lucide-react";

export const metadata = {
  title: "Verzenden & leveren — OneConnect Lightshop",
  description: "Verzendkosten, levertijden en bezorgopties bij OneConnect Lightshop Nijmegen.",
};

export default function VerzendenPage() {
  return (
    <article>
      <h2 className="font-montserrat text-2xl font-black text-[#2b3e51] tracking-tight mb-2">
        Verzenden & leveren
      </h2>
      <p className="text-[13px] text-gray-500 leading-relaxed mb-8 max-w-2xl">
        We versturen vanuit ons eigen magazijn in Nijmegen — snel, verzekerd en met
        bewuste verpakking.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
        {[
          {
            icon: Clock,
            title: "Voor 16:00 besteld, dezelfde dag verstuurd",
            body:
              "Op werkdagen pakken we elke bestelling die vóór 16:00 binnenkomt nog dezelfde dag in en geven we hem mee aan de bezorger.",
          },
          {
            icon: Truck,
            title: "Gratis verzending vanaf €80 (NL) / €100 (BE)",
            body:
              "Onder dit bedrag rekenen we €4,95 (NL) of €7,95 (BE) — track & trace altijd inbegrepen via PostNL of DHL.",
          },
          {
            icon: Package,
            title: "Levertijd 1–3 werkdagen",
            body:
              "Binnen Nederland meestal de volgende werkdag. België gemiddeld 2 werkdagen. Drukke periodes kunnen tot 1 dag extra duren.",
          },
          {
            icon: Globe,
            title: "Internationale verzending",
            body:
              "We versturen ook naar Duitsland, Frankrijk en de rest van Europa. Tarieven en levertijd worden in de checkout berekend.",
          },
        ].map(({ icon: Icon, title, body }) => (
          <div
            key={title}
            className="border border-gray-100 rounded-sm p-5 hover:border-[#f5a623]/50 transition-colors"
          >
            <Icon className="size-5 text-[#f5a623] mb-3" />
            <h3 className="font-montserrat text-[14px] font-black text-[#2b3e51] mb-2">
              {title}
            </h3>
            <p className="text-[12px] text-gray-500 leading-relaxed">{body}</p>
          </div>
        ))}
      </div>

      <h3 className="font-montserrat text-base font-black text-[#2b3e51] mb-3">
        Ophalen in de winkel
      </h3>
      <p className="text-[13px] text-gray-500 leading-relaxed mb-3 max-w-2xl">
        Je kunt je bestelling ook gratis ophalen in onze winkel aan de Molenstraat 120
        in Nijmegen. Je krijgt een mailtje zodra je bestelling klaarligt — meestal nog
        dezelfde dag bij bestellingen vóór 14:00.
      </p>

      <h3 className="font-montserrat text-base font-black text-[#2b3e51] mt-8 mb-3">
        Bezorgers waarmee we werken
      </h3>
      <ul className="text-[13px] text-gray-500 leading-relaxed space-y-1 max-w-2xl">
        <li>· <span className="font-bold text-[#2b3e51]">PostNL</span> — standaard binnen Nederland</li>
        <li>· <span className="font-bold text-[#2b3e51]">DHL</span> — voor pakketten boven 5 kg en internationale zendingen</li>
        <li>· <span className="font-bold text-[#2b3e51]">DPD</span> — keuze in de checkout, leverdag-flexibiliteit</li>
      </ul>
    </article>
  );
}
