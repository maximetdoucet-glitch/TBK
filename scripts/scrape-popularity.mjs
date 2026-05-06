// One-off enrichment: pull rating + reviewCount from Bol.com (fallback Amazon.nl)
// for each product in src/data/products.json, then compute popularityScore.
//
// Run:  node scripts/scrape-popularity.mjs
// Resume-safe: skips products that already have popularitySource set unless
// you pass --rescrape.
//
// Polite: ~1.5s delay between hosts, randomized.

import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const DATA_PATH = path.join(ROOT, "src/data/products.json");

const RESCRAPE = process.argv.includes("--rescrape");
const LIMIT = (() => {
  const i = process.argv.indexOf("--limit");
  return i > -1 ? parseInt(process.argv[i + 1], 10) : Infinity;
})();

const UA =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 " +
  "(KHTML, like Gecko) Chrome/120.0 Safari/537.36";

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const jitter = (base) => base + Math.floor(Math.random() * 600);

function buildQuery(p) {
  // Drop separator, drop "(...)" parenthetical, collapse spaces, keep brand+name
  const cleaned = p.name
    .replace(/\(.+?\)/g, " ")
    .replace(/[–—-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  // If brand isn't already in the name, prepend it
  return cleaned.toLowerCase().includes(p.brand.toLowerCase())
    ? cleaned
    : `${p.brand} ${cleaned}`;
}

async function fetchHTML(url) {
  const res = await fetch(url, {
    headers: {
      "User-Agent": UA,
      "Accept-Language": "nl-NL,nl;q=0.9,en;q=0.8",
      Accept:
        "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
    },
    redirect: "follow",
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return await res.text();
}

// ── Bol.com ────────────────────────────────────────────────────────────────
function parseBol(html) {
  // Format: aria-label="Gemiddeld 3.7 van de 5 sterren uit 10 reviews"
  const m = html.match(
    /Gemiddeld\s+([\d.,]+)\s+van\s+de\s+5\s+sterren\s+uit\s+(\d+)\s+reviews/
  );
  if (!m) return null;
  return {
    rating: parseFloat(m[1].replace(",", ".")),
    reviewCount: parseInt(m[2], 10),
  };
}

async function lookupBol(query) {
  const url = `https://www.bol.com/nl/nl/s/?searchtext=${encodeURIComponent(query)}`;
  try {
    const html = await fetchHTML(url);
    return parseBol(html);
  } catch {
    return null;
  }
}

// ── Amazon.nl ──────────────────────────────────────────────────────────────
function parseAmazon(html) {
  // Find first rating — pattern "4,6 van 5 sterren"
  const r = html.match(/(\d+),(\d) van 5 sterren/);
  if (!r) return null;
  const rating = parseFloat(`${r[1]}.${r[2]}`);

  // Find review count near it: aria-label="8.285 beoordelingen"
  const start = r.index + r[0].length;
  const snippet = html.slice(start, start + 4000);
  const c = snippet.match(/aria-label="([\d.]+)\s+beoordelingen/);
  if (!c) return { rating, reviewCount: 0 };
  const count = parseInt(c[1].replace(/\./g, ""), 10);
  return { rating, reviewCount: isNaN(count) ? 0 : count };
}

async function lookupAmazon(query) {
  const url = `https://www.amazon.nl/s?k=${encodeURIComponent(query)}`;
  try {
    const html = await fetchHTML(url);
    return parseAmazon(html);
  } catch {
    return null;
  }
}

// ── Score ──────────────────────────────────────────────────────────────────
function popularityScore(rating, reviewCount) {
  // log2(1 + n) damps high counts; multiplied by rating to favor "loved" items
  return rating * Math.log2(1 + reviewCount);
}

// ── Main ───────────────────────────────────────────────────────────────────
async function main() {
  const raw = await fs.readFile(DATA_PATH, "utf8");
  const products = JSON.parse(raw);

  let processed = 0;
  let bolHits = 0;
  let amzHits = 0;
  let misses = 0;
  let saved = 0;

  for (let i = 0; i < products.length && processed < LIMIT; i++) {
    const p = products[i];
    if (!RESCRAPE && p.popularitySource) {
      continue;
    }

    const query = buildQuery(p);
    process.stdout.write(
      `[${i + 1}/${products.length}] ${query.slice(0, 60).padEnd(60)} `
    );

    let result = await lookupBol(query);
    let source = "bol";
    if (!result || result.reviewCount === 0) {
      await sleep(jitter(800));
      const amz = await lookupAmazon(query);
      if (amz && amz.reviewCount > 0) {
        result = amz;
        source = "amazon";
      } else if (!result) {
        result = null;
      }
    }

    if (result) {
      p.popularityRating = result.rating;
      p.popularityReviewCount = result.reviewCount;
      p.popularitySource = source;
      p.popularityScore = popularityScore(result.rating, result.reviewCount);
      if (source === "bol") bolHits++;
      else amzHits++;
      console.log(
        `→ ${source} ⭐${result.rating} (${result.reviewCount}) score=${p.popularityScore.toFixed(2)}`
      );
    } else {
      p.popularitySource = "none";
      p.popularityScore = 0;
      misses++;
      console.log("→ no match");
    }

    processed++;

    // Persist every 25 to survive interrupts
    if (processed % 25 === 0) {
      await fs.writeFile(DATA_PATH, JSON.stringify(products, null, 2));
      saved = processed;
      console.log(`  ↳ checkpoint saved (${saved} processed)`);
    }

    await sleep(jitter(2200));
  }

  await fs.writeFile(DATA_PATH, JSON.stringify(products, null, 2));
  console.log("\n=== done ===");
  console.log(`processed: ${processed}`);
  console.log(`bol hits:  ${bolHits}`);
  console.log(`amz hits:  ${amzHits}`);
  console.log(`misses:    ${misses}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
