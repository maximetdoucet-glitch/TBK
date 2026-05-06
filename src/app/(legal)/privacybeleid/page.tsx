export const metadata = {
  title: "Privacybeleid | Tabaksspeciaalzaak Molenstraat",
  description:
    "Privacybeleid van Tabaksspeciaalzaak Molenstraat (Rokersbenodigdheden Nijmegen). Welke gegevens we verzamelen, waarom en hoe we ze beschermen.",
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

export default function PrivacybeleidPage() {
  return (
    <>
      <h1 className="font-montserrat text-2xl font-black text-[#2b3e51] tracking-tight mb-2">
        Privacybeleid
      </h1>
      <p className="text-[12px] text-gray-400 mb-8">
        Laatst bijgewerkt: mei 2026
      </p>

      <H2>1. Wie zijn wij?</H2>
      <P>
        Tabaksspeciaalzaak Molenstraat (handelend onder de naam Rokersbenodigdheden Nijmegen)
        is verantwoordelijk voor de verwerking van persoonsgegevens zoals beschreven
        in dit privacybeleid.
      </P>
      <P>
        <b>Contactgegevens:</b><br />
        Tabaksspeciaalzaak Molenstraat<br />
        Molenstraat 120, 6511 HL Nijmegen<br />
        KvK: 94115419 · BTW-ID: NL866641269B01
      </P>

      <H2>2. Welke persoonsgegevens verwerken wij?</H2>
      <P>
        Wij verwerken de gegevens die je zelf aan ons verstrekt op het moment dat je
        een account aanmaakt, een bestelling plaatst, contact opneemt of je inschrijft
        voor onze nieuwsbrief. Dit kan gaan om:
      </P>
      <ul className="text-[13.5px] text-gray-600 leading-relaxed list-disc pl-6 mb-3 space-y-1">
        <li>Voor- en achternaam</li>
        <li>Adresgegevens (factuur- en bezorgadres)</li>
        <li>Telefoonnummer</li>
        <li>E-mailadres</li>
        <li>Bestelgeschiedenis en voorkeuren</li>
        <li>Betaalgegevens (verwerkt door onze betaaldienstverlener)</li>
        <li>IP-adres, browsertype en gebruiksstatistieken van de website</li>
      </ul>

      <H2>3. Bijzondere gegevens en minderjarigen</H2>
      <P>
        Onze webshop verkoopt geen producten aan personen onder de 18 jaar. Wij
        kunnen echter niet controleren of een bezoeker minderjarig is. We adviseren
        ouders of verzorgers betrokken te zijn bij online activiteiten van hun
        kinderen, om te voorkomen dat er gegevens over kinderen verzameld worden
        zonder ouderlijke toestemming. Als je ervan overtuigd bent dat wij zonder
        toestemming persoonlijke gegevens hebben verzameld over een minderjarige,
        neem dan contact met ons op via service@tbk-lightshop.nl, dan verwijderen
        wij deze informatie.
      </P>

      <H2>4. Met welk doel en op welke grondslag verwerken wij gegevens?</H2>
      <P>
        Wij verwerken jouw persoonsgegevens voor de volgende doelen:
      </P>
      <ul className="text-[13.5px] text-gray-600 leading-relaxed list-disc pl-6 mb-3 space-y-1">
        <li>Het afhandelen van jouw bestelling en betaling</li>
        <li>Het bezorgen van bestelde artikelen</li>
        <li>Klantcontact en service (telefonisch, per e-mail, via formulieren)</li>
        <li>Het versturen van een nieuwsbrief, indien je je hiervoor hebt aangemeld</li>
        <li>Het voldoen aan wettelijke verplichtingen, zoals de fiscale bewaartermijn</li>
        <li>Het analyseren van je gedrag op de website om het aanbod te verbeteren</li>
      </ul>
      <P>
        De grondslag voor deze verwerkingen is in de meeste gevallen de uitvoering
        van een overeenkomst (je bestelling), de wettelijke verplichting (boekhouding)
        of jouw expliciete toestemming (nieuwsbrief, marketing-cookies).
      </P>

      <H2>5. Hoe lang bewaren wij gegevens?</H2>
      <P>
        Wij bewaren persoonsgegevens niet langer dan strikt nodig is om de doelen
        te realiseren waarvoor de gegevens zijn verzameld. Voor bestel- en
        factuurgegevens hanteren wij de wettelijke fiscale bewaartermijn van zeven
        jaar. Klantaccounts blijven actief totdat je zelf om verwijdering vraagt.
        Nieuwsbriefgegevens verwijderen wij wanneer je je uitschrijft.
      </P>

      <H2>6. Delen van gegevens met derden</H2>
      <P>
        Wij verkopen jouw gegevens niet aan derden. We verstrekken deze uitsluitend
        indien dit nodig is voor de uitvoering van onze overeenkomst met jou of om
        te voldoen aan een wettelijke verplichting. Met partijen die je gegevens
        verwerken in onze opdracht (zoals onze pakketbezorgers, hostingprovider,
        betaaldienstverlener en e-mailmarketingsoftware) sluiten wij een
        verwerkersovereenkomst om te zorgen voor eenzelfde niveau van beveiliging
        en vertrouwelijkheid.
      </P>

      <H2>7. Cookies en vergelijkbare technieken</H2>
      <P>
        Onze website gebruikt functionele, analytische en (na toestemming)
        marketing cookies. Een uitgebreide uitleg vind je in ons{" "}
        <a href="/cookiebeleid" className="text-[#f5a623] hover:underline">
          cookiebeleid
        </a>.
      </P>

      <H2>8. Geautomatiseerde besluitvorming</H2>
      <P>
        Wij nemen geen besluiten op basis van geautomatiseerde verwerkingen over
        zaken die (aanzienlijke) gevolgen kunnen hebben voor personen.
      </P>

      <H2>9. Jouw rechten</H2>
      <P>
        Je hebt het recht om je persoonsgegevens in te zien, te corrigeren of te
        verwijderen. Daarnaast heb je het recht om je toestemming voor de
        gegevensverwerking in te trekken of bezwaar te maken tegen de verwerking
        en heb je het recht op gegevensoverdraagbaarheid. Stuur een verzoek naar{" "}
        <a href="mailto:service@tbk-lightshop.nl" className="text-[#f5a623] hover:underline">
          service@tbk-lightshop.nl
        </a>. Om misbruik te voorkomen kunnen we je vragen je adequaat te
        identificeren. We reageren binnen vier weken op je verzoek.
      </P>
      <P>
        Je hebt ook het recht een klacht in te dienen bij de Nederlandse
        toezichthouder, de Autoriteit Persoonsgegevens, via{" "}
        <a
          href="https://autoriteitpersoonsgegevens.nl"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#f5a623] hover:underline"
        >
          autoriteitpersoonsgegevens.nl
        </a>.
      </P>

      <H2>10. Beveiliging</H2>
      <P>
        Wij nemen de bescherming van jouw gegevens serieus en treffen passende
        technische en organisatorische maatregelen om misbruik, verlies, onbevoegde
        toegang, ongewenste openbaarmaking en ongeoorloofde wijziging tegen te
        gaan. Onze website gebruikt een SSL-certificaat (HTTPS), gegevens worden
        versleuteld verzonden en toegang tot persoonsgegevens binnen onze
        organisatie is beperkt tot medewerkers die deze nodig hebben.
      </P>

      <H2>11. Wijzigingen</H2>
      <P>
        Dit privacybeleid kan worden bijgewerkt. De meest recente versie staat
        altijd op deze pagina, met de datum van laatste wijziging bovenaan.
      </P>
    </>
  );
}
