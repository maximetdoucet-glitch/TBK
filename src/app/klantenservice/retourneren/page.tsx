import { Undo2, Calendar, PackageCheck, Euro } from "lucide-react";

export const metadata = {
  title: "Ruilen & retourneren — OneConnect Lightshop",
  description: "14 dagen bedenktijd, gratis retourneren binnen Nederland.",
};

const STEPS = [
  {
    n: "01",
    title: "Meld de retour aan",
    body:
      "Stuur een mail naar service@tbk-lightshop.nl met je bestelnummer en het artikel dat je wilt retourneren. Wij sturen je binnen één werkdag een retourlabel.",
  },
  {
    n: "02",
    title: "Pak het netjes in",
    body:
      "Stop het product terug in de originele verpakking, met alle accessoires en labels. Een product dat duidelijk gebruikt is, kunnen wij helaas niet terugnemen.",
  },
  {
    n: "03",
    title: "Lever in bij PostNL",
    body:
      "Plak het retourlabel op het pakket en lever het in bij elk PostNL-punt. Bewaar het bewijs van afgifte tot je terugbetaling rond is.",
  },
  {
    n: "04",
    title: "Terugbetaling binnen 5 werkdagen",
    body:
      "Zodra wij je retour ontvangen en goedkeuren, betalen we het bedrag terug op dezelfde betaalmethode. Verzendkosten van de oorspronkelijke bestelling vergoeden we ook bij volledige retour.",
  },
];

export default function RetournerenPage() {
  return (
    <article>
      <h2 className="font-montserrat text-2xl font-black text-[#2b3e51] tracking-tight mb-2">
        Ruilen & retourneren
      </h2>
      <p className="text-[13px] text-gray-500 leading-relaxed mb-8 max-w-2xl">
        14 dagen bedenktijd op alles wat je online bestelt — zonder gedoe, zonder vragen.
        Binnen Nederland sturen we het retourlabel kosteloos toe.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
        {[
          { icon: Calendar, label: "14 dagen", sub: "Bedenktijd" },
          { icon: Undo2, label: "Gratis", sub: "Retour binnen NL" },
          { icon: PackageCheck, label: "5 werkdagen", sub: "Terugbetaling" },
          { icon: Euro, label: "100%", sub: "Aankoopbedrag" },
        ].map(({ icon: Icon, label, sub }) => (
          <div key={label} className="border border-gray-100 rounded-sm p-4 text-center">
            <Icon className="size-5 text-[#f5a623] mx-auto mb-2" />
            <p className="font-montserrat text-lg font-black text-[#2b3e51]">{label}</p>
            <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 mt-1">{sub}</p>
          </div>
        ))}
      </div>

      <h3 className="font-montserrat text-base font-black text-[#2b3e51] mb-4">
        Zo werkt het — in vier stappen
      </h3>

      <ol className="space-y-4 mb-10 max-w-2xl">
        {STEPS.map((s) => (
          <li key={s.n} className="flex gap-5">
            <span className="font-montserrat text-2xl font-black text-[#f5a623] tabular-nums leading-none w-10 flex-shrink-0">
              {s.n}
            </span>
            <div>
              <p className="font-bold text-[#2b3e51] text-[14px] mb-1">{s.title}</p>
              <p className="text-[12px] text-gray-500 leading-relaxed">{s.body}</p>
            </div>
          </li>
        ))}
      </ol>

      <h3 className="font-montserrat text-base font-black text-[#2b3e51] mb-3">
        Wat valt buiten de retourregeling?
      </h3>
      <ul className="text-[13px] text-gray-500 leading-relaxed space-y-1 max-w-2xl mb-6">
        <li>· Producten die op maat of met gravure zijn gemaakt</li>
        <li>· Geopende e-liquids en filters om hygiënische redenen</li>
        <li>· Producten waarvan de verzegeling is verbroken</li>
      </ul>

      <p className="text-[12px] text-gray-400 leading-relaxed max-w-2xl">
        Twijfel je of jouw artikel onder een uitzondering valt? Mail ons even voordat je
        het terugstuurt — we kijken altijd of er een oplossing is.
      </p>
    </article>
  );
}
