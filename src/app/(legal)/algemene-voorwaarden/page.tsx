export const metadata = {
  title: "Algemene voorwaarden | Tabaksspeciaalzaak Molenstraat",
  description:
    "Algemene voorwaarden voor bestellingen bij Tabaksspeciaalzaak Molenstraat (Rokersbenodigdheden Nijmegen).",
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

export default function VoorwaardenPage() {
  return (
    <>
      <h1 className="font-montserrat text-2xl font-black text-[#2b3e51] tracking-tight mb-2">
        Algemene voorwaarden
      </h1>
      <p className="text-[12px] text-gray-400 mb-8">Laatst bijgewerkt: mei 2026</p>

      <H2>Artikel 1 Identiteit van de ondernemer</H2>
      <P>
        Tabaksspeciaalzaak Molenstraat (handelend onder de naam Rokersbenodigdheden Nijmegen)<br />
        Vestigings- en bezoekadres: Molenstraat 120, 6511 HL Nijmegen<br />
        E-mail: service@tbk-lightshop.nl<br />
        KvK-nummer: 94115419<br />
        BTW-identificatienummer: NL866641269B01
      </P>

      <H2>Artikel 2 Toepasselijkheid</H2>
      <P>
        Deze algemene voorwaarden zijn van toepassing op elk aanbod van de ondernemer
        en op elke tot stand gekomen overeenkomst op afstand tussen ondernemer en
        consument. Voordat de overeenkomst op afstand wordt gesloten, wordt de tekst
        van deze voorwaarden aan de consument beschikbaar gesteld.
      </P>

      <H2>Artikel 3 Het aanbod</H2>
      <P>
        Indien een aanbod een beperkte geldigheidsduur heeft of onder voorwaarden
        geschiedt, wordt dit nadrukkelijk in het aanbod vermeld. Het aanbod bevat
        een volledige en nauwkeurige omschrijving van de aangeboden producten.
        Kennelijke vergissingen of fouten in het aanbod binden de ondernemer niet.
      </P>

      <H2>Artikel 4 De overeenkomst</H2>
      <P>
        De overeenkomst komt tot stand op het moment van aanvaarding door de
        consument van het aanbod en het voldoen aan de daarbij gestelde voorwaarden.
        De ondernemer bevestigt onverwijld langs elektronische weg de ontvangst van
        de aanvaarding van het aanbod.
      </P>

      <H2>Artikel 5 Herroepingsrecht</H2>
      <P>
        Bij de aankoop van producten heeft de consument de mogelijkheid de
        overeenkomst zonder opgave van redenen te ontbinden gedurende veertien
        dagen na ontvangst van het product. Tijdens deze termijn dient de consument
        zorgvuldig om te gaan met het product en de verpakking. Producten dienen in
        originele staat en verpakking te worden teruggestuurd. De kosten van
        retourzending zijn voor rekening van de consument, tenzij anders
        overeengekomen.
      </P>
      <P>
        Producten die zijn geopend en die om hygiënische redenen niet kunnen worden
        geretourneerd (zoals losse vloei, filters of mondstukken) zijn uitgesloten
        van het herroepingsrecht.
      </P>

      <H2>Artikel 6 De prijs</H2>
      <P>
        De in het aanbod van producten genoemde prijzen zijn inclusief BTW.
        Verzendkosten worden separaat in de checkout vermeld. Gedurende de in het
        aanbod vermelde geldigheidsduur worden de prijzen van de aangeboden
        producten niet verhoogd, behoudens prijswijzigingen als gevolg van
        veranderingen in BTW-tarieven.
      </P>

      <H2>Artikel 7 Conformiteit en garantie</H2>
      <P>
        De ondernemer staat ervoor in dat de producten voldoen aan de overeenkomst,
        de in het aanbod vermelde specificaties, aan de redelijke eisen van
        deugdelijkheid en bruikbaarheid en op de datum van totstandkoming van de
        overeenkomst bestaande wettelijke bepalingen. Op Zippo-aanstekers geldt
        bovendien de levenslange fabrieksgarantie van Zippo Manufacturing Co. op
        het mechaniek.
      </P>

      <H2>Artikel 8 Levering en uitvoering</H2>
      <P>
        Als plaats van levering geldt het adres dat de consument aan de ondernemer
        kenbaar heeft gemaakt. Bestellingen worden zo snel mogelijk doch uiterlijk
        binnen dertig dagen uitgevoerd, tenzij de consument akkoord is gegaan met
        een langere leveringstermijn. Indien de bezorging vertraging ondervindt, of
        indien een bestelling niet dan wel slechts gedeeltelijk kan worden
        uitgevoerd, ontvangt de consument hiervan uiterlijk dertig dagen na
        plaatsing bericht.
      </P>

      <H2>Artikel 9 Betaling</H2>
      <P>
        Betaling vindt plaats via de in de checkout aangeboden betaalmethoden
        (iDEAL, creditcard, PayPal, Bancontact). De ondernemer behoudt zich het
        recht voor bestellingen pas te verzenden nadat de betaling is ontvangen.
      </P>

      <H2>Artikel 10 Klachtenregeling</H2>
      <P>
        Klachten over de uitvoering van de overeenkomst moeten binnen redelijke
        termijn nadat de consument de gebreken heeft geconstateerd, volledig en
        duidelijk omschreven worden ingediend bij de ondernemer via{" "}
        <a href="mailto:service@tbk-lightshop.nl" className="text-[#f5a623] hover:underline">
          service@tbk-lightshop.nl
        </a>. Bij ons ingediende klachten worden binnen veertien dagen beantwoord.
      </P>
      <P>
        Indien een klacht niet in onderling overleg kan worden opgelost, kan de
        consument zich wenden tot het Europees ODR-platform via{" "}
        <a
          href="https://ec.europa.eu/consumers/odr"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#f5a623] hover:underline"
        >
          ec.europa.eu/consumers/odr
        </a>.
      </P>

      <H2>Artikel 11 Toepasselijk recht</H2>
      <P>
        Op overeenkomsten tussen de ondernemer en de consument waarop deze
        algemene voorwaarden betrekking hebben, is uitsluitend Nederlands recht
        van toepassing.
      </P>

      <H2>Artikel 12 Wijzigingen</H2>
      <P>
        De ondernemer behoudt zich het recht voor deze voorwaarden tussentijds te
        wijzigen. De meest recente versie staat altijd op deze pagina.
      </P>
    </>
  );
}
