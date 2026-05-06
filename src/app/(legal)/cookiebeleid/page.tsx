export const metadata = {
  title: "Cookiebeleid | Tabaksspeciaalzaak Molenstraat",
  description:
    "Welke cookies gebruikt Tabaksspeciaalzaak Molenstraat (Rokersbenodigdheden Nijmegen) en waarom?",
};

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-montserrat text-lg font-black text-[#2b3e51] mt-8 mb-3 first:mt-0">
      {children}
    </h2>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[13.5px] text-gray-600 leading-relaxed mb-3">{children}</p>
  );
}

const COOKIE_TABLE = [
  {
    name: "Functionele cookies",
    purpose:
      "Onmisbaar voor het functioneren van de website. Bewaren je winkelmandje, taalkeuze en sessie zodat je ongestoord kunt winkelen.",
    duration: "Sessie / 30 dagen",
    consent: "Geen toestemming vereist",
  },
  {
    name: "Analytische cookies",
    purpose:
      "Helpen ons te begrijpen hoe bezoekers de site gebruiken zodat we hem kunnen verbeteren. We meten op geaggregeerd niveau, niet op individueel niveau.",
    duration: "Tot 14 maanden",
    consent: "Toestemming vereist",
  },
  {
    name: "Marketing cookies",
    purpose:
      "Worden gebruikt om je relevantere advertenties te tonen op andere websites en om de effectiviteit van campagnes te meten. Worden alleen geplaatst nadat je hiervoor toestemming hebt gegeven.",
    duration: "Tot 12 maanden",
    consent: "Toestemming vereist",
  },
];

export default function CookiebeleidPage() {
  return (
    <>
      <h1 className="font-montserrat text-2xl font-black text-[#2b3e51] tracking-tight mb-2">
        Cookiebeleid
      </h1>
      <p className="text-[12px] text-gray-400 mb-8">Laatst bijgewerkt: mei 2026</p>

      <H2>1. Wat zijn cookies?</H2>
      <P>
        Cookies zijn kleine tekstbestanden die door je browser worden opgeslagen op
        je apparaat (computer, tablet of telefoon) wanneer je een website bezoekt.
        Ze helpen websites om bepaalde voorkeuren of acties te onthouden, zodat je
        niet bij iedere bezoek opnieuw hoeft in te stellen wat je wil.
      </P>

      <H2>2. Welke cookies plaatsen wij?</H2>
      <P>
        Op de website van Tabaksspeciaalzaak Molenstraat gebruiken we drie soorten
        cookies. Hieronder een overzicht.
      </P>

      <div className="overflow-x-auto mb-6">
        <table className="w-full text-[12.5px] border border-gray-100">
          <thead className="bg-gray-50 text-[#2b3e51]">
            <tr>
              <th className="text-left font-black uppercase tracking-wider text-[10.5px] px-3 py-2.5 border-b border-gray-100">Soort</th>
              <th className="text-left font-black uppercase tracking-wider text-[10.5px] px-3 py-2.5 border-b border-gray-100">Doel</th>
              <th className="text-left font-black uppercase tracking-wider text-[10.5px] px-3 py-2.5 border-b border-gray-100">Bewaartermijn</th>
              <th className="text-left font-black uppercase tracking-wider text-[10.5px] px-3 py-2.5 border-b border-gray-100">Toestemming</th>
            </tr>
          </thead>
          <tbody className="text-gray-600">
            {COOKIE_TABLE.map((c) => (
              <tr key={c.name} className="border-b border-gray-50 last:border-0 align-top">
                <td className="px-3 py-3 font-bold text-[#2b3e51] whitespace-nowrap">{c.name}</td>
                <td className="px-3 py-3 leading-relaxed">{c.purpose}</td>
                <td className="px-3 py-3 whitespace-nowrap">{c.duration}</td>
                <td className="px-3 py-3 whitespace-nowrap">{c.consent}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <H2>3. Cookies van derden</H2>
      <P>
        Sommige cookies worden geplaatst door derde partijen die we inschakelen
        voor specifieke functies, zoals onze betaaldienstverlener, ingebedde
        video-spelers, of platforms voor advertenties. Deze partijen kunnen via de
        cookies gegevens verzamelen onder hun eigen verantwoordelijkheid; lees
        daarvoor hun eigen privacy- en cookieverklaringen.
      </P>

      <H2>4. Hoe geef of trek je toestemming?</H2>
      <P>
        Bij je eerste bezoek vragen we via een cookiebanner toestemming voor
        analytische en marketing cookies. Je keuze kun je op elk moment aanpassen
        of intrekken via de cookie-instellingen onderaan de pagina, of door de
        cookies in je browser te verwijderen.
      </P>

      <H2>5. Cookies in je browser uitschakelen of verwijderen</H2>
      <P>
        Je kunt cookies altijd zelf via je browser verwijderen of uitschakelen.
        Hou er rekening mee dat sommige delen van de website daardoor minder goed
        werken. Voor instructies per browser:
      </P>
      <ul className="text-[13.5px] text-gray-600 leading-relaxed list-disc pl-6 mb-3 space-y-1">
        <li>
          <a
            href="https://support.google.com/chrome/answer/95647"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#f5a623] hover:underline"
          >
            Google Chrome
          </a>
        </li>
        <li>
          <a
            href="https://support.apple.com/nl-nl/guide/safari/sfri11471/mac"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#f5a623] hover:underline"
          >
            Safari
          </a>
        </li>
        <li>
          <a
            href="https://support.mozilla.org/nl/kb/cookies-verwijderen-gegevens-wissen-websites-opgeslagen"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#f5a623] hover:underline"
          >
            Mozilla Firefox
          </a>
        </li>
        <li>
          <a
            href="https://support.microsoft.com/nl-nl/microsoft-edge"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#f5a623] hover:underline"
          >
            Microsoft Edge
          </a>
        </li>
      </ul>

      <H2>6. Vragen</H2>
      <P>
        Heb je vragen over ons cookiegebruik? Mail dan naar{" "}
        <a href="mailto:service@tbk-lightshop.nl" className="text-[#f5a623] hover:underline">
          service@tbk-lightshop.nl
        </a>
        . Voor meer informatie over de verwerking van je persoonsgegevens verwijzen
        we je naar ons{" "}
        <a href="/privacybeleid" className="text-[#f5a623] hover:underline">
          privacybeleid
        </a>
        .
      </P>
    </>
  );
}
