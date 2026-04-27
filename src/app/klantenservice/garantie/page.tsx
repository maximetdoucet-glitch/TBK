import { ShieldCheck, Award, Wrench, Mail } from "lucide-react";

export const metadata = {
  title: "Garantiebeleid — OneConnect Lightshop",
  description: "Wettelijke garantie + fabrikantengaranties op aanstekers en accessoires.",
};

export default function GarantiePage() {
  return (
    <article>
      <h2 className="font-montserrat text-2xl font-black text-[#2b3e51] tracking-tight mb-2">
        Garantiebeleid
      </h2>
      <p className="text-[13px] text-gray-500 leading-relaxed mb-8 max-w-2xl">
        Op alles wat we verkopen krijg je minimaal de wettelijke conformiteitsgarantie.
        Voor een aantal merken — Zippo voorop — geldt een aanvullende fabrikantsgarantie.
      </p>

      {/* Hero — Zippo lifetime warranty */}
      <div className="relative overflow-hidden bg-[#f5a623]/6 border border-[#f5a623]/25 rounded-sm p-8 mb-6">
        <div className="relative z-10 max-w-2xl">
          <Award className="size-8 text-[#f5a623] mb-4" />
          <h3 className="font-montserrat text-xl font-black text-[#2b3e51] tracking-tight mb-3">
            Zippo — levenslange garantie, zonder uitzondering
          </h3>
          <p className="text-[13px] text-gray-600 leading-relaxed">
            Elke Zippo die ooit is gemaakt — van 1932 tot vandaag — valt onder de
            levenslange garantie van het merk. Geen aankoopbewijs nodig, geen tijdslimiet,
            geen kleine lettertjes. Lever je Zippo in onze winkel in en wij regelen de
            reparatie of vervanging via Zippo zelf, kosteloos.
          </p>
        </div>
      </div>

      {/* Other warranties */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
        {[
          {
            icon: ShieldCheck,
            title: "Wettelijke garantie · 2 jaar",
            body:
              "Op alle producten geldt minimaal de wettelijke conformiteitsgarantie. Werkt een product niet zoals je redelijkerwijs mag verwachten, dan repareren of vervangen wij het kosteloos.",
          },
          {
            icon: Award,
            title: "Fabrikantsgarantie",
            body:
              "Bookwill, Faro, Champ en andere kwaliteitsmerken bieden vaak een aanvullende fabrikantsgarantie van 1–5 jaar. Het exacte aantal jaren staat per product vermeld.",
          },
          {
            icon: Wrench,
            title: "Reparatieservice",
            body:
              "Voor Zippo en enkele kwaliteitsknippers bieden we eigen reparatie en slijpservice in de winkel. Kom langs in de Molenstraat 120 voor een diagnose — meestal binnen 5 minuten klaar.",
          },
          {
            icon: Mail,
            title: "Garantie inroepen",
            body:
              "Mail naar service@tbk-lightshop.nl met je bestelnummer en een korte beschrijving van het probleem. We sturen je binnen 1 werkdag verdere instructies.",
          },
        ].map(({ icon: Icon, title, body }) => (
          <div
            key={title}
            className="border border-gray-100 rounded-sm p-5 hover:border-[#f5a623]/50 transition-colors"
          >
            <Icon className="size-5 text-[#f5a623] mb-3" />
            <h4 className="font-montserrat text-[14px] font-black text-[#2b3e51] mb-2">
              {title}
            </h4>
            <p className="text-[12px] text-gray-500 leading-relaxed">{body}</p>
          </div>
        ))}
      </div>

      <h3 className="font-montserrat text-base font-black text-[#2b3e51] mb-3">
        Wat valt buiten de garantie?
      </h3>
      <ul className="text-[13px] text-gray-500 leading-relaxed space-y-1 max-w-2xl mb-8">
        <li>· Schade door val, stoot of contact met water (tenzij anders aangegeven)</li>
        <li>· Slijtage van vuursteentjes, watten, filters en andere verbruiksonderdelen</li>
        <li>· Schade door gebruik van niet-originele brandstof of vervangonderdelen</li>
        <li>· Producten die zelf zijn gerepareerd of gewijzigd</li>
      </ul>

      <p className="text-[11px] text-gray-400 leading-relaxed max-w-2xl">
        Twijfel je of jouw situatie onder de garantie valt? Mail ons gerust — we kijken
        altijd of er een redelijke oplossing is, ook buiten de garantieperiode.
      </p>
    </article>
  );
}
