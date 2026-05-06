// Deterministic mock review generator. Each product gets a stable slice of
// reviews derived from its id, so the same product always shows the same set.
// Real reviews would replace this with a fetch from a backend.

export type Review = {
  rating: number;       // 1..5
  name: string;
  date: string;         // ISO date (YYYY-MM-DD)
  body: string;
  verified: boolean;
  helpful: number;      // baseline count
};

const REVIEW_POOL: { name: string; date: string; body: string }[] = [
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
  { name: "Iris",          date: "2025-07-03", body: "Voor mijn vader gekocht - hij is super tevreden. Echt mooi cadeau." },
  { name: "Hugo",          date: "2025-09-25", body: "Niet helemaal wat ik verwacht had qua kleur, maar functioneel prima." },
  { name: "Lara",          date: "2025-12-30", body: "Zeer tevreden! Komt er ook een refill bij die ik makkelijk kon meebestellen." },
  { name: "Maarten",       date: "2025-08-04", body: "Goed product, snelle levering en mooi verpakt. Niets op aan te merken." },
  { name: "Sophie",        date: "2026-01-28", body: "Knap stukje vakmanschap voor deze prijs. Voelt zwaar en stevig aan." },
];

const VISIBLE_MAX = 20;

// Cheap deterministic hash so the same id always produces the same slice
function hash(n: number): number {
  let x = n * 2654435761;
  x = (x ^ (x >>> 16)) >>> 0;
  return x;
}

// Compute the rating distribution (counts per 1..5) for the product. The
// returned array sums to exactly `count` and is biased so its weighted
// average is close to `avgRating`. Per-product variance is mixed in so two
// products with the same avg don't show identical buckets.
export function getRatingDistribution(productId: number, count: number, avgRating: number): number[] {
  if (count <= 0) return [0, 0, 0, 0, 0];

  // Base shape: bell curve peaked at avgRating, exponential decay outward.
  const proportions: number[] = [];
  for (let r = 1; r <= 5; r++) {
    const d = Math.abs(r - avgRating);
    proportions.push(Math.exp(-d * 1.55));
  }

  // Per-bucket multiplier 0.55x..1.45x driven by productId hash, so the
  // shape varies between products even if the avg is identical.
  for (let i = 0; i < 5; i++) {
    const seed = (hash(productId * 31 + i * 1009) % 1000) / 1000; // 0..1
    proportions[i] *= 0.55 + 0.9 * seed;
  }

  // Normalise to fractional counts, floor, then distribute the remainder
  // to whichever buckets had the largest fractional remainders.
  const sum = proportions.reduce((a, b) => a + b, 0) || 1;
  const exact = proportions.map((p) => (p / sum) * count);
  const counts = exact.map((v) => Math.floor(v));
  let used = counts.reduce((a, b) => a + b, 0);
  const fracs = exact.map((v, i) => ({ i, frac: v - counts[i] }));
  fracs.sort((a, b) => b.frac - a.frac);
  let k = 0;
  while (used < count) {
    counts[fracs[k % 5].i]++;
    used++;
    k++;
  }
  return counts;
}

// Build the visible review list. Returns up to VISIBLE_MAX reviews whose
// per-rating split is proportional to the full distribution, so a product
// with 69 reviews showing a 30/22/10/5/2 split will surface visible cards
// in roughly the same shape.
export function getReviewsForProduct(productId: number, count: number, avgRating: number): Review[] {
  if (count <= 0) return [];
  const visible = Math.min(count, VISIBLE_MAX);
  const dist = getRatingDistribution(productId, count, avgRating);

  // Scale each bucket down to fit `visible`, preserving proportions.
  const exact = dist.map((c) => (c / count) * visible);
  const visBuckets = exact.map((v) => Math.floor(v));
  let placed = visBuckets.reduce((a, b) => a + b, 0);
  const fracs = exact.map((v, i) => ({ i, frac: v - visBuckets[i] }));
  fracs.sort((a, b) => b.frac - a.frac);
  let k = 0;
  while (placed < visible) {
    visBuckets[fracs[k % 5].i]++;
    placed++;
    k++;
  }

  // Build the rating queue and interleave so cards don't clump by rating.
  const queue: number[] = [];
  for (let r = 4; r >= 0; r--) {
    for (let j = 0; j < visBuckets[r]; j++) queue.push(r + 1);
  }
  // Deterministic shuffle keyed off the product id
  const indexed = queue.map((rating, i) => ({ rating, key: hash(productId + i * 7919) }));
  indexed.sort((a, b) => a.key - b.key);

  const out: Review[] = [];
  const poolStart = hash(productId) % REVIEW_POOL.length;
  for (let i = 0; i < indexed.length; i++) {
    const base = REVIEW_POOL[(poolStart + i) % REVIEW_POOL.length];
    const verified = (hash(productId + i * 17) % 4) !== 0;
    const helpful = hash(productId * 7 + i * 31) % 14;
    out.push({ ...base, rating: indexed[i].rating, verified, helpful });
  }
  return out;
}
