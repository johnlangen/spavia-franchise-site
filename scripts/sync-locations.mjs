#!/usr/bin/env node
/**
 * Regenerates app/data/spavia-locations.json from the brand websites.
 *
 * Two sources, both public pages, no credentials:
 *
 * 1. spaviadayspa.com/locations/ -- the spa finder on the consolidated Spavia
 *    site (repo: johnlangen/spavia-website). The page is server-rendered and
 *    its HTML carries the finder's full list in the React flight payload:
 *    slug, name, city, state, address, coordinates, phone and status ("open"
 *    or "coming-soon"). Announced spas live in that site's upcoming-locations
 *    data until the day they open, so status comes straight from the list.
 *
 * 2. swaywellnessspa.com -- Sway by Spavia. No finder payload there, so the
 *    sitemap gives one /locations/<slug>/ per spa and each spa page is read:
 *    DaySpa JSON-LD carries name, address, phone and (once open) coordinates,
 *    and an announced spa says "Coming Soon" in its <title>.
 *
 * The old source (the LiveEdit store locator at
 * /service/directorylisting/filterMarkers) went away when the new Spavia site
 * launched; on 2026-10-19 this script wrote an empty list because of it. The
 * guards below make that impossible now: the sync fails loudly instead of
 * writing a short or empty list, and the workflow commits nothing on failure.
 *
 * Map coordinates are fitted, not hardcoded: the @svg-maps/usa paths are a
 * Lambert conformal conic projection, so the script recovers the transform by
 * regressing projected state centers against the centroids of the real SVG
 * paths. If that package ever changes, the coordinates follow it.
 *
 * Usage:  node scripts/sync-locations.mjs [--dry] [--force] [--skip-zip-check]
 *   --force  write even when the open count drops sharply vs. the committed file
 */

import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const raw = require("@svg-maps/usa");
const usa = raw.usa || raw.default || raw;

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = resolve(__dirname, "../app/data/spavia-locations.json");

const UA = "SpaviaFranchiseSiteSync/1.0 (+https://spaviafranchise.com)";
const SITE = "https://spaviadayspa.com";
const FINDER = `${SITE}/locations/`;
const SITEMAP = `${SITE}/sitemap.xml`;
const SWAY = "https://swaywellnessspa.com";
const SWAY_SITEMAP = `${SWAY}/sitemap.xml`;

// Fewer than this from the Spavia finder and something is wrong with the
// page, not with Spavia.
const MIN_LOCATIONS = 40;
// Refuse to write when the Spavia open count falls this far below the
// committed file. Spavia does not close a tenth of its spas in a day.
const MAX_OPEN_DROP = 0.15;

const STATE_NAMES = {
  AL: "Alabama", AK: "Alaska", AZ: "Arizona", AR: "Arkansas", CA: "California",
  CO: "Colorado", CT: "Connecticut", DE: "Delaware", DC: "District of Columbia",
  FL: "Florida", GA: "Georgia", HI: "Hawaii", ID: "Idaho", IL: "Illinois",
  IN: "Indiana", IA: "Iowa", KS: "Kansas", KY: "Kentucky", LA: "Louisiana",
  ME: "Maine", MD: "Maryland", MA: "Massachusetts", MI: "Michigan",
  MN: "Minnesota", MS: "Mississippi", MO: "Missouri", MT: "Montana",
  NE: "Nebraska", NV: "Nevada", NH: "New Hampshire", NJ: "New Jersey",
  NM: "New Mexico", NY: "New York", NC: "North Carolina", ND: "North Dakota",
  OH: "Ohio", OK: "Oklahoma", OR: "Oregon", PA: "Pennsylvania",
  RI: "Rhode Island", SC: "South Carolina", SD: "South Dakota",
  TN: "Tennessee", TX: "Texas", UT: "Utah", VT: "Vermont", VA: "Virginia",
  WA: "Washington", WV: "West Virginia", WI: "Wisconsin", WY: "Wyoming",
};

/* ------------------------------------------------------------------ *
 * Projection: recover lat/lon -> @svg-maps/usa coordinates
 * ------------------------------------------------------------------ */

// Approximate geographic center of each lower-48 state + DC. Only used as
// regression input, so small errors wash out across 49 points.
const CENTERS = {
  al: [32.7794, -86.8287], az: [34.2744, -111.6602], ar: [34.8938, -92.4426],
  ca: [37.1841, -119.4696], co: [38.9972, -105.5478], ct: [41.6219, -72.7273],
  de: [38.9896, -75.505], dc: [38.9101, -77.0147], fl: [28.6305, -82.4497],
  ga: [32.6415, -83.4426], id: [44.3509, -114.613], il: [40.0417, -89.1965],
  in: [39.8942, -86.2816], ia: [42.0751, -93.496], ks: [38.4937, -98.3804],
  ky: [37.5347, -85.3021], la: [31.0689, -91.9968], me: [45.3695, -69.2428],
  md: [39.055, -76.7909], ma: [42.2596, -71.8083], mi: [44.3467, -85.4102],
  mn: [46.2807, -94.3053], ms: [32.7364, -89.6678], mo: [38.3566, -92.458],
  mt: [47.0527, -109.6333], ne: [41.5378, -99.7951], nv: [39.3289, -116.6312],
  nh: [43.6805, -71.5811], nj: [40.1072, -74.6652], nm: [34.4071, -106.1126],
  ny: [42.9538, -75.5268], nc: [35.5557, -79.3877], nd: [47.4501, -100.4659],
  oh: [40.2862, -82.7937], ok: [35.5889, -97.4943], or: [43.9336, -120.5583],
  pa: [40.8781, -77.7996], ri: [41.6762, -71.5562], sc: [33.9169, -80.8964],
  sd: [44.4443, -100.2263], tn: [35.858, -86.3505], tx: [31.4757, -99.3312],
  ut: [39.3055, -111.6703], vt: [44.0687, -72.6658], va: [37.5215, -78.8537],
  wa: [47.3826, -120.4472], wv: [38.6409, -80.6227], wi: [44.6243, -89.9941],
  wy: [42.9957, -107.5512],
};

// Alaska and Hawaii are drawn as insets on this map, so the continental
// transform does not apply to them.
const INSET_STATES = new Set(["AK", "HI"]);

const rad = (d) => (d * Math.PI) / 180;

/** Lambert conformal conic, standard parallels 33 / 45, origin 39N 96W. */
function lambert(lon, lat) {
  const p1 = rad(33), p2 = rad(45), phi0 = rad(39), lam0 = rad(-96);
  const n =
    Math.log(Math.cos(p1) / Math.cos(p2)) /
    Math.log(Math.tan(Math.PI / 4 + p2 / 2) / Math.tan(Math.PI / 4 + p1 / 2));
  const F = (Math.cos(p1) * Math.pow(Math.tan(Math.PI / 4 + p1 / 2), n)) / n;
  const rho = F / Math.pow(Math.tan(Math.PI / 4 + rad(lat) / 2), n);
  const rho0 = F / Math.pow(Math.tan(Math.PI / 4 + phi0 / 2), n);
  const theta = n * (rad(lon) - lam0);
  return [rho * Math.sin(theta), rho0 - rho * Math.cos(theta)];
}

/** Parse the M/L/H/V/Z polyline paths used by @svg-maps/usa into rings. */
function parsePath(d) {
  const tokens = [...d.matchAll(/([MmLlHhVvZz])|(-?\d*\.?\d+(?:e-?\d+)?)/g)].map(
    (m) => (m[1] ? { cmd: m[1] } : { num: parseFloat(m[2]) })
  );
  const rings = [];
  let ring = [], x = 0, y = 0, cmd = null, i = 0;
  const push = () => { if (ring.length >= 3) rings.push(ring); ring = []; };
  while (i < tokens.length) {
    if (tokens[i].cmd !== undefined) {
      cmd = tokens[i].cmd; i++;
      if (cmd === "Z" || cmd === "z") push();
      continue;
    }
    if (cmd === "M" || cmd === "m") {
      const nx = tokens[i].num, ny = tokens[i + 1].num; i += 2;
      if (cmd === "m") { x += nx; y += ny; } else { x = nx; y = ny; }
      push();
      ring = [[x, y]];
      cmd = cmd === "m" ? "l" : "L";
    } else if (cmd === "L" || cmd === "l") {
      const nx = tokens[i].num, ny = tokens[i + 1].num; i += 2;
      if (cmd === "l") { x += nx; y += ny; } else { x = nx; y = ny; }
      ring.push([x, y]);
    } else if (cmd === "H" || cmd === "h") {
      const nx = tokens[i].num; i++;
      x = cmd === "h" ? x + nx : nx;
      ring.push([x, y]);
    } else if (cmd === "V" || cmd === "v") {
      const ny = tokens[i].num; i++;
      y = cmd === "v" ? y + ny : ny;
      ring.push([x, y]);
    } else {
      i++;
    }
  }
  push();
  return rings;
}

function ringAreaCentroid(ring) {
  let a = 0, cx = 0, cy = 0;
  for (let i = 0; i < ring.length; i++) {
    const [x0, y0] = ring[i];
    const [x1, y1] = ring[(i + 1) % ring.length];
    const cross = x0 * y1 - x1 * y0;
    a += cross; cx += (x0 + x1) * cross; cy += (y0 + y1) * cross;
  }
  if (Math.abs(a) < 1e-9) return { area: 0, cx: 0, cy: 0 };
  a *= 0.5;
  return { area: Math.abs(a), cx: cx / (6 * a), cy: cy / (6 * a) };
}

function pathCentroid(rings) {
  let total = 0, sx = 0, sy = 0;
  for (const ring of rings) {
    const { area, cx, cy } = ringAreaCentroid(ring);
    total += area; sx += cx * area; sy += cy * area;
  }
  return [sx / total, sy / total];
}

/** Ordinary least squares for y = m*x + b. */
function linreg(xs, ys) {
  const n = xs.length;
  const mx = xs.reduce((a, b) => a + b, 0) / n;
  const my = ys.reduce((a, b) => a + b, 0) / n;
  let num = 0, den = 0;
  for (let i = 0; i < n; i++) { num += (xs[i] - mx) * (ys[i] - my); den += (xs[i] - mx) ** 2; }
  const m = num / den;
  return [m, my - m * mx];
}

function buildProjection() {
  const polys = Object.fromEntries(usa.locations.map((l) => [l.id, parsePath(l.path)]));
  const px = [], py = [], sx = [], sy = [];
  for (const [id, [lat, lon]] of Object.entries(CENTERS)) {
    if (!polys[id]) continue;
    const [a, b] = lambert(lon, lat);
    const [cx, cy] = pathCentroid(polys[id]);
    px.push(a); sx.push(cx); py.push(b); sy.push(cy);
  }
  const [mx, bx] = linreg(px, sx);
  const [my, by] = linreg(py, sy);

  const project = (lon, lat) => {
    const [a, b] = lambert(lon, lat);
    return [a * mx + bx, b * my + by];
  };

  // Residuals against the fit points, as a self-check.
  let worst = 0;
  for (const [id, [lat, lon]] of Object.entries(CENTERS)) {
    if (!polys[id]) continue;
    const [ex, ey] = project(lon, lat);
    const [cx, cy] = pathCentroid(polys[id]);
    worst = Math.max(worst, Math.hypot(ex - cx, ey - cy));
  }
  return { project, polys, worst };
}

function pointInPolygon([x, y], rings) {
  let inside = false;
  for (const ring of rings) {
    for (let i = 0; i < ring.length; i++) {
      const [x0, y0] = ring[i];
      const [x1, y1] = ring[(i + 1) % ring.length];
      if ((y0 > y) !== (y1 > y) && x < ((x1 - x0) * (y - y0)) / (y1 - y0) + x0) {
        inside = !inside;
      }
    }
  }
  return inside;
}

/* ------------------------------------------------------------------ *
 * Fetching
 * ------------------------------------------------------------------ */

async function getText(url) {
  const res = await fetch(url, { headers: { "User-Agent": UA }, redirect: "follow" });
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
  return res.text();
}

const LD_RE = /<script[^>]*application\/ld\+json[^>]*>(.*?)<\/script>/gs;

function jsonLdBlocks(html) {
  return [...html.matchAll(LD_RE)]
    .map((m) => { try { return JSON.parse(m[1]); } catch { return null; } })
    .filter(Boolean);
}

/**
 * The Spavia finder list, read out of the React flight payload the locations
 * page ships inline. Next writes it as self.__next_f.push([1, "<json>"])
 * chunks; decoding and joining them gives the serialized component tree, in
 * which the finder's locations prop is a plain JSON array.
 */
async function fetchFinderList() {
  const html = await getText(FINDER);
  let flight = "";
  for (const m of html.matchAll(/self\.__next_f\.push\(\[1,"((?:[^"\\]|\\.)*)"\]\)/g)) {
    flight += JSON.parse(`"${m[1]}"`);
  }
  if (!flight) throw new Error("no flight payload found on the Spavia locations page");

  const key = '"locations":[{"slug":';
  const at = flight.indexOf(key);
  if (at < 0) throw new Error("finder locations array not found in the Spavia page payload");
  const start = flight.indexOf("[", at);
  let depth = 0, end = start;
  for (; end < flight.length; end++) {
    const c = flight[end];
    if (c === "[") depth++;
    else if (c === "]" && --depth === 0) break;
  }
  const list = JSON.parse(flight.slice(start, end + 1));

  const bad = list.find(
    (l) => !l || typeof l.slug !== "string" || typeof l.name !== "string" ||
      typeof l.state !== "string" || !l.coordinates || typeof l.status !== "string"
  );
  if (bad) throw new Error(`finder entry has an unexpected shape: ${JSON.stringify(bad).slice(0, 200)}`);

  // The same page lists every open spa in an ItemList (JSON-LD). It is an
  // independent render of the same data, so it is the first cross-check.
  const ld = jsonLdBlocks(html).find((d) => d["@type"] === "ItemList");
  const listed = ld ? Number(ld.numberOfItems) || (ld.itemListElement || []).length : null;

  return { list, listed };
}

/** Every Sway spa page: its business JSON-LD plus whether the title says coming soon. */
async function fetchSwayPages() {
  const xml = await getText(SWAY_SITEMAP);
  const slugs = [...new Set(
    [...xml.matchAll(/<loc>https:\/\/swaywellnessspa\.com\/locations\/([a-z0-9-]+)\/<\/loc>/g)].map((m) => m[1])
  )];
  if (slugs.length === 0) throw new Error("no spa pages found in the Sway sitemap");
  return mapLimit(slugs, 3, async (slug) => {
    const html = await getText(`${SWAY}/locations/${slug}/`);
    const ld = jsonLdBlocks(html).find((d) =>
      ["DaySpa", "HealthAndBeautyBusiness", "LocalBusiness"].includes(d["@type"])
    );
    if (!ld) throw new Error(`no business JSON-LD on the Sway page for ${slug}`);
    const title = (html.match(/<title>(.*?)<\/title>/s) || [])[1] || "";
    return { slug, ld, comingSoon: /coming\s+soon/i.test(title) };
  });
}

/** Map over items with a small concurrency cap. */
async function mapLimit(items, limit, fn) {
  const out = new Array(items.length);
  let cursor = 0;
  await Promise.all(
    Array.from({ length: Math.min(limit, items.length) }, async () => {
      while (cursor < items.length) {
        const i = cursor++;
        out[i] = await fn(items[i]);
      }
    })
  );
  return out;
}

const TIGERWEB_ZCTA =
  "https://tigerweb.geo.census.gov/arcgis/rest/services/TIGERweb/tigerWMS_Current/MapServer/2/query";

/** Centroid of a ZIP Code Tabulation Area, or null if it can't be looked up. */
async function zipCentroid(zip) {
  const params = new URLSearchParams({
    where: `BASENAME='${zip}'`,
    outFields: "BASENAME,CENTLAT,CENTLON",
    returnGeometry: "false",
    f: "json",
  });
  try {
    const body = await getText(`${TIGERWEB_ZCTA}?${params}`);
    const attrs = JSON.parse(body).features?.[0]?.attributes;
    if (!attrs) return null;
    return [parseFloat(attrs.CENTLAT), parseFloat(attrs.CENTLON)];
  } catch {
    return null; // advisory check only -- never fail the sync on it
  }
}

/** Great-circle distance in km. */
function haversine([lat1, lon1], [lat2, lon2]) {
  const R = 6371;
  const dLat = rad(lat2 - lat1), dLon = rad(lon2 - lon1);
  const h =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(rad(lat1)) * Math.cos(rad(lat2)) * Math.sin(dLon / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(h));
}

/* ------------------------------------------------------------------ *
 * Main
 * ------------------------------------------------------------------ */

const dry = process.argv.includes("--dry");
const force = process.argv.includes("--force");
const warnings = [];

/* ---- Spavia ---- */

console.log("Fetching the Spavia spa finder...");
const { list, listed } = await fetchFinderList();
const openCount = list.filter((l) => l.status === "open").length;
console.log(`  ${list.length} locations in the finder (${openCount} open)`);
if (list.length < MIN_LOCATIONS) {
  throw new Error(`only ${list.length} Spavia locations found; refusing to write (minimum ${MIN_LOCATIONS})`);
}
if (listed === null) {
  warnings.push("no ItemList JSON-LD on the Spavia locations page; open count not cross-checked");
} else {
  console.log(`  ItemList schema lists ${listed} open`);
  if (Math.abs(listed - openCount) > 2) {
    warnings.push(`finder shows ${openCount} open but the page's ItemList schema lists ${listed}`);
  }
}

// Second cross-check: the sitemap carries one top-level URL per spa page,
// open or announced.
try {
  const xml = await getText(SITEMAP);
  const slugs = new Set(
    [...xml.matchAll(/<loc>https:\/\/spaviadayspa\.com\/locations\/([a-z0-9-]+)\/<\/loc>/g)].map((m) => m[1])
  );
  console.log(`  sitemap lists ${slugs.size} spa pages`);
  if (Math.abs(slugs.size - list.length) > 2) {
    warnings.push(`finder returned ${list.length} but the sitemap lists ${slugs.size} spa pages`);
  }
  for (const l of list) {
    if (!slugs.has(l.slug)) warnings.push(`${l.name} (${l.slug}) is in the finder but not the sitemap`);
  }
} catch (err) {
  warnings.push(`sitemap cross-check failed: ${err.message}`);
}

// Third guard: compare with what is committed. A sudden drop means the page
// changed shape or half the list failed to render, not that spas closed.
if (existsSync(OUT) && !force) {
  let prevOpen = 0;
  try {
    const prev = JSON.parse(readFileSync(OUT, "utf8"));
    prevOpen = prev?.counts?.spavia?.open ?? prev?.counts?.open ?? 0;
  } catch (err) {
    warnings.push(`could not read the committed file for comparison: ${err.message}`);
  }
  if (prevOpen > 0 && openCount < prevOpen * (1 - MAX_OPEN_DROP)) {
    throw new Error(
      `Spavia open count fell from ${prevOpen} to ${openCount}; refusing to write (re-run with --force if this is real)`
    );
  }
}

const { project, polys, worst } = buildProjection();
console.log(`  projection fitted (worst state-center residual ${worst.toFixed(2)}px)`);

/** Map coordinates for one spa, with the sanity warnings the old script had. */
function plot(name, state, lat, lon) {
  if (INSET_STATES.has(state)) {
    warnings.push(`${name}: ${state} is an inset on this map, not plotted`);
    return { x: null, y: null };
  }
  if (!Number.isFinite(lat) || !Number.isFinite(lon)) {
    warnings.push(`${name}: no coordinates, not plotted`);
    return { x: null, y: null };
  }
  const [x, y] = project(lon, lat);
  const sid = state.toLowerCase();
  if (polys[sid] && !pointInPolygon([x, y], polys[sid])) {
    warnings.push(`${name}: plotted point falls outside ${state}`);
  }
  return { x: Number(x.toFixed(2)), y: Number(y.toFixed(2)) };
}

const spaviaLocations = list.map((l) => {
  const state = (l.state || "").toUpperCase();
  const name = (l.name || "").trim();
  const lat = Number(l.coordinates?.lat);
  const lon = Number(l.coordinates?.lng);

  let status = l.status;
  if (status !== "open" && status !== "coming-soon") {
    warnings.push(`${name}: unexpected status "${status}", treating as open`);
    status = "open";
  }

  return {
    id: l.slug,
    name,
    brand: "spavia",
    status,
    address: [l.address?.street, l.address?.suite].filter(Boolean).join(", ").trim(),
    city: (l.city || l.address?.city || "").trim(),
    state,
    stateName: l.stateFullName || STATE_NAMES[state] || state,
    zip: (l.address?.zip || "").trim(),
    phone: (l.phone || "").trim(),
    website: `${SITE}/locations/${l.slug}/`,
    lat: Number.isFinite(lat) ? lat : null,
    lon: Number.isFinite(lon) ? lon : null,
    ...plot(name, state, lat, lon),
  };
});

/* ---- Sway by Spavia ---- */

console.log("Fetching Sway by Spavia spa pages...");
const swayPages = await fetchSwayPages();
console.log(`  ${swayPages.length} Sway locations (${swayPages.filter((p) => !p.comingSoon).length} open)`);

const swayLocations = [];
for (const { slug, ld, comingSoon } of swayPages) {
  const addr = ld.address || {};
  const state = String(addr.addressRegion || "").toUpperCase();
  // The pages title themselves "Sway Wellness Spa · RiNo" and the like; the
  // Sway site's own display names are "Sway RiNo", so normalize to that.
  let name = String(ld.name || "").trim().replace(/^Sway Wellness Spa\s*[\u00b7\u2013\u2014-]\s*/i, "Sway ");
  if (!/^sway\b/i.test(name)) name = `Sway ${name}`;
  const zip = String(addr.postalCode || "").trim();

  let lat = Number(ld.geo?.latitude);
  let lon = Number(ld.geo?.longitude);
  if ((!Number.isFinite(lat) || !Number.isFinite(lon)) && zip) {
    // Announced spas publish an address before coordinates; the ZIP centroid
    // is close enough for a coming-soon pin on a national map.
    const c = await zipCentroid(zip.slice(0, 5));
    if (c) {
      [lat, lon] = c;
      warnings.push(`${name}: no coordinates on its page, pinned at the ${zip} ZIP centroid`);
    }
  }

  swayLocations.push({
    id: `sway-${slug}`,
    name,
    brand: "sway",
    status: comingSoon ? "coming-soon" : "open",
    address: String(addr.streetAddress || "").trim(),
    city: String(addr.addressLocality || "").trim(),
    state,
    stateName: STATE_NAMES[state] || state,
    zip,
    phone: String(ld.telephone || "").trim(),
    website: `${SWAY}/locations/${slug}/`,
    lat: Number.isFinite(lat) ? lat : null,
    lon: Number.isFinite(lon) ? lon : null,
    ...plot(name, state, lat, lon),
  });
}

const locations = [...spaviaLocations, ...swayLocations];

// Advisory: is each plotted point anywhere near the ZIP its address claims?
//
// The state point-in-polygon test is too coarse to catch a bad coordinate --
// the locator had Spavia Fairfield 38km away in the wrong county but still
// inside Texas. Distance to the claimed ZIP's centroid catches that: the bad
// pin measured 38km, while every current pin is within 12km.
//
// The threshold has to clear large rural ZIPs. Reno's 89511 runs into the
// desert, so a legitimate address there sits 12.0km from the centroid; 25km
// leaves headroom without missing a Fairfield-sized error.
//
// KNOW THE LIMIT: this is a coarse filter for gross errors, not a correctness
// proof. A wrong point that still lands inside a large ZCTA is invisible to it.
// Measured case: a known-bad coordinate for Springfield IL sits 9.6km from the
// 62704 centroid -- below Reno's legitimate 12.0km, so no threshold catches
// both. If a second coordinate source is ever added here, disagreement between
// sources is the stronger signal, with this check as the tiebreaker.
const MAX_ZIP_DISTANCE_KM = 25;

if (!process.argv.includes("--skip-zip-check")) {
  console.log("Checking coordinates against claimed ZIP codes...");
  const checked = locations.filter((l) => l.zip && Number.isFinite(l.lat));
  const centroids = await mapLimit(checked, 4, (l) => zipCentroid(l.zip.slice(0, 5)));

  let worst = 0, skipped = 0, flagged = 0;
  checked.forEach((loc, i) => {
    if (!centroids[i]) { skipped++; return; }
    const km = haversine([loc.lat, loc.lon], centroids[i]);
    worst = Math.max(worst, km);
    if (km > MAX_ZIP_DISTANCE_KM) {
      flagged++;
      warnings.push(
        `${loc.name}: coordinate is ${km.toFixed(0)}km from ZIP ${loc.zip} ` +
        `(${loc.city}, ${loc.state}) -- check this pin`
      );
    }
  });
  console.log(
    `  ${checked.length - flagged - skipped} within ${MAX_ZIP_DISTANCE_KM}km, ` +
    `${flagged} flagged, ${skipped} not checked (worst ${worst.toFixed(1)}km)`
  );
}

locations.sort((a, b) =>
  a.stateName.localeCompare(b.stateName) || a.city.localeCompare(b.city) ||
  a.name.localeCompare(b.name)
);

const tally = (ls) => ({
  total: ls.length,
  open: ls.filter((l) => l.status === "open").length,
  comingSoon: ls.filter((l) => l.status === "coming-soon").length,
  states: new Set(ls.map((l) => l.state)).size,
});
const payload = {
  // Generated by scripts/sync-locations.mjs -- do not edit by hand.
  generatedAt: new Date().toISOString().slice(0, 10),
  source: "spaviadayspa.com/locations + swaywellnessspa.com/locations",
  counts: {
    // All brands together: what "N locations open" means on the site.
    ...tally(locations),
    spavia: tally(spaviaLocations),
    sway: tally(swayLocations),
  },
  locations,
};

console.log(
  `\n${payload.counts.total} locations ` +
  `(${payload.counts.open} open, ${payload.counts.comingSoon} coming soon) ` +
  `across ${payload.counts.states} states: ` +
  `${payload.counts.spavia.open} Spavia + ${payload.counts.sway.open} Sway open`
);
if (warnings.length) {
  console.log("\nWarnings:");
  for (const w of warnings) console.log(`  - ${w}`);
}

if (dry) {
  console.log("\n--dry: not writing");
} else {
  writeFileSync(OUT, JSON.stringify(payload, null, 2) + "\n");
  console.log(`\nWrote ${OUT}`);
}
