import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const metadata = {
  title: "Contact — OneConnect Lightshop",
  description: "Neem contact op met de Tabaksspeciaalzaak Nijmegen — Molenstraat 120.",
};

export default function ContactPage() {
  return (
    <article>
      <h2 className="font-montserrat text-2xl font-black text-[#2b3e51] tracking-tight mb-2">
        Contact
      </h2>
      <p className="text-[13px] text-gray-500 leading-relaxed mb-8 max-w-2xl">
        Een vraag over een product, een advies nodig of even langskomen voor een
        Zippo-reparatie? Wij helpen je graag — schriftelijk, telefonisch of in de winkel.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
          {
            icon: MapPin,
            label: "Bezoek ons",
            lines: ["Molenstraat 120", "6511 HG Nijmegen", "Nederland"],
          },
          {
            icon: Phone,
            label: "Bel ons",
            lines: ["+31 (0)24 123 4567", "ma–vr 09:00–18:00", "za 10:00–17:00"],
          },
          {
            icon: Mail,
            label: "Mail ons",
            lines: ["service@tbk-lightshop.nl", "Reactie binnen 1 werkdag"],
          },
          {
            icon: Clock,
            label: "Openingstijden",
            lines: [
              "Maandag t/m vrijdag · 09:00–18:00",
              "Zaterdag · 10:00–17:00",
              "Zondag · gesloten",
            ],
          },
        ].map(({ icon: Icon, label, lines }) => (
          <div
            key={label}
            className="border border-gray-100 rounded-sm p-5 hover:border-[#f5a623]/50 transition-colors"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="size-8 rounded-sm bg-[#2b3e51]/5 flex items-center justify-center">
                <Icon className="size-4 text-[#f5a623]" />
              </div>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#2b3e51]">
                {label}
              </p>
            </div>
            <ul className="space-y-1 text-[13px] text-gray-600">
              {lines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-10 p-6 bg-[#f5a623]/6 border border-[#f5a623]/20 rounded-sm">
        <p className="text-[12px] text-[#2b3e51] leading-relaxed">
          <span className="font-black">Tip:</span> Voor Zippo-reparaties, gravures en
          persoonlijk advies kom je het beste even langs in de winkel. Onze specialisten
          helpen je in een paar minuten verder.
        </p>
      </div>
    </article>
  );
}
