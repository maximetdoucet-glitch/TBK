// Deterministic mock review generator. Each product gets a stable slice of
// reviews derived from its id, so the same product always shows the same set.
// Real reviews would replace this with a fetch from a backend.

export type Review = {
  rating: number;       // 1..5
  name: string;
  date: string;         // ISO date (YYYY-MM-DD)
  body: string;
};

const REVIEW_POOL: Omit<Review, "rating">[] = [
  { name: "Enzo",          date: "2026-03-20", body: "Nu al mijn favoriete aansteker. Hervullen gaat soepel, je kan zien hoe vol hij nog zit en voelt kwalitatief hoogwaardig." },
  { name: "Daniel",        date: "2025-10-19", body: "Altijd snel en keurig geleverd en een groot aanbod rokers attributen." },
  { name: "Jan Droog",     date: "2025-04-23", body: "Super, snel en correct." },
  { name: "Marleen",       date: "2025-09-08", body: "Fijne winkel, goed advies in de chat. Bestelling kwam de volgende dag binnen." },
  { name: "Pieter K.",     date: "2025-07-14", body: "Top product voor een nette prijs. Verpakking netjes en alles kompleet." },
  { name: "Saskia",        date: "2025-11-02", body: "Werkt precies zoals beschreven. Voelt stevig in de hand en oogt premium." },
  { name: "Mohammed",      date: "2025-06-30", body: "Tweede keer hier besteld. Service blijft top, daarom kom ik terug." },
  { name: "Lucas",         date: "2026-01-15", body: "Mooi cadeau gedaan, ontvanger was er erg blij mee. Ziet er duurder uit dan het is." },
  { name: "Annemarie",     date: "2025-08-21", body: "Twijfelde tussen twee modellen, klantenservice gaf duidelijk advies. Goede keuze gemaakt." },
  { name: "Robin",         date: "2025-12-09", body: "Doet wat het moet doen. Geen extreem high-end gevoel maar voor het geld prima." },
  { name: "Stefan",        date: "2026-02-04", body: "Aansteker brandt mooi gelijkmatig. Wel even wennen aan het navullen." },
  { name: "Eva V.",        date: "2025-05-17", body: "Bestelling kwam super snel, en de verpakking was zelfs leuk om uit te pakken." },
  { name: "Kees",          date: "2025-10-28", body: "Doet het goed, maar de standaard vloeistof gaat wat snel op. Volgende keer 2 flesjes erbij." },
  { name: "Tess",          date: "2026-03-02", body: "Geweldig design en super degelijk. Aanrader!" },
  { name: "Bram",          date: "2025-11-19", body: "Werkt na anderhalf jaar nog steeds als een trein. Ouderwetse kwaliteit." },
  { name: "Iris",          date: "2025-07-03", body: "Voor mijn vader gekocht — hij is super tevreden. Echt mooi cadeau." },
  { name: "Hugo",          date: "2025-09-25", body: "Niet helemaal wat ik verwacht had qua kleur, maar functioneel prima." },
  { name: "Lara",          date: "2025-12-30", body: "Zeer tevreden! Komt er ook een refill bij die ik makkelijk kon meebestellen." },
  { name: "Maarten",       date: "2025-08-04", body: "Goed product, snelle levering en mooi verpakt. Niets op aan te merken." },
  { name: "Sophie",        date: "2026-01-28", body: "Knap stukje vakmanschap voor deze prijs. Voelt zwaar en stevig aan." },
];

// Cheap deterministic hash so the same id always produces the same slice
function hash(n: number): number {
  let x = n * 2654435761;
  x = (x ^ (x >>> 16)) >>> 0;
  return x;
}

export function getReviewsForProduct(productId: number, count: number, avgRating: number): Review[] {
  const n = Math.min(Math.max(count, 0), 12); // cap at 12 in the UI; "show more" can come later
  if (n === 0) return [];
  const start = hash(productId) % REVIEW_POOL.length;
  const out: Review[] = [];
  for (let i = 0; i < n; i++) {
    const base = REVIEW_POOL[(start + i) % REVIEW_POOL.length];
    // Distribute ratings around the product's average so the displayed
    // average matches roughly. Mostly 5s with occasional 4s and 3s.
    const r =
      avgRating >= 4.6 ? (i % 5 === 4 ? 4 : 5) :
      avgRating >= 4.0 ? (i % 4 === 0 ? 4 : i % 7 === 0 ? 3 : 5) :
      avgRating >= 3.5 ? (i % 3 === 0 ? 3 : i % 2 === 0 ? 4 : 5) :
                         (i % 3 === 0 ? 2 : i % 2 === 0 ? 3 : 4);
    out.push({ ...base, rating: r });
  }
  return out;
}
