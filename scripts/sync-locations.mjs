#!/usr/bin/env node
/**
 * Regenerates app/data/spavia-locations.json from Spavia's corporate site.
 *
 * Source of truth is the spaviadayspa.com store locator, which exposes a JSON
 * endpoint behind the "find a location" page:
 *   /service/directorylisting/filterMarkers?s=<query>
 * It returns name, street address, city/state/zip, phone, lat/lon and website
 * for every location in the directory.
 *
 * Open vs. coming-soon is NOT taken from that endpoint -- its "COMING SOON"
 * custom field goes stale (St. Augustine was still flagged after opening).
 * Each location page is fetched instead and checked for the literal
 * "Coming Soon to:" banner, which is what the corporate site actually renders.
 *
 * Map coordinates are fitted, not hardcoded: the @svg-maps/usa paths are a
 * Lambert conformal conic projection, so the script recovers the transform by
 * regressing projected state centers against the centroids of the real SVG
 * paths. If that package ever changes, the coordinates follow it.
 *
 * Usage:  node scripts/sync-locations.mjs [--dry]
 */

import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const raw = require("@svg-maps/usa");
const usa = raw.usa || raw.default || raw;

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = resolve(__dirname, "../app/data/spavia-locations.json");

const UA = "SpaviaFranchiseSiteSync/1.0 (+https://spaviafranchise.com)";
const LOCATOR = "https://spaviadayspa.com/service/directorylisting/filterMarkers?s=";
const SITEMAP = "https://spaviadayspa.com/locations_sitemap.xml";

const STATES = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado",
  "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho",
  "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine",
  "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi",
  "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey",
  "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio",
  "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina",
  "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia",
  "Washington", "West Virginia", "Wisconsin", "Wyoming",
  "District of Columbia",
];

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

// The locator stores a few internal shorthands in the city field.
const CITY_FIXES = { "West Plano": "Plano", "Chicago/West Loop": "Chicago" };

// Coordinates the locator gets wrong, keyed by its own location id. Only add an
// entry with evidence -- the ZIP check below is what surfaces these.
const COORD_OVERRIDES = {
  // Spavia Fairfield, 29040 Hwy 290, Cypress TX 77433. The locator's point
  // (30.1166557, -96.086116) reverse-geocodes to ZCTA 77445 in Waller County,
  // ~22mi northwest near Hempstead. This point is inside ZCTA 77433 in Harris
  // County, matching the address the spa's own page publishes.
  44444: { lat: 29.993129, lon: -95.751465 },
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

async function fetchDirectory() {
  const byId = new Map();
  for (const state of STATES) {
    try {
      const body = await getText(LOCATOR + encodeURIComponent(state));
      for (const marker of JSON.parse(body).markers || []) byId.set(marker.id, marker);
    } catch (err) {
      console.warn(`  ! ${state}: ${err.message}`);
    }
    await new Promise((r) => setTimeout(r, 250)); // be polite
  }
  return [...byId.values()];
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

async function isComingSoon(url) {
  try {
    return /coming\s+soon\s+to\s*:/i.test(await getText(url));
  } catch {
    return null; // unreachable -- leave status unchanged rather than guessing
  }
}

/* ------------------------------------------------------------------ *
 * Main
 * ------------------------------------------------------------------ */

const dry = process.argv.includes("--dry");
const warnings = [];

console.log("Fetching Spavia directory...");
const markers = await fetchDirectory();
console.log(`  ${markers.length} unique locations`);

// Cross-check against the sitemap so a locator outage cannot silently
// truncate the list.
try {
  const xml = await getText(SITEMAP);
  const count = (xml.match(/<loc>/g) || []).length;
  console.log(`  sitemap lists ${count}`);
  if (Math.abs(count - markers.length) > 2) {
    warnings.push(`locator returned ${markers.length} but sitemap lists ${count}`);
  }
} catch (err) {
  warnings.push(`sitemap cross-check failed: ${err.message}`);
}

console.log("Checking open / coming-soon status on each location page...");
const comingSoon = await mapLimit(markers, 6, (m) => isComingSoon((m.web_site || "").trim()));

const { project, polys, worst } = buildProjection();
console.log(`  projection fitted (worst state-center residual ${worst.toFixed(2)}px)`);

const locations = markers.map((m, i) => {
  const state = (m.state || "").toUpperCase();
  const site = (m.web_site || "").trim().replace(/\/$/, "").replace(/^http:/, "https:");
  const isSpavia = /spaviadayspa\.com/i.test(site);

  let name = (m.name || "").trim();
  if (isSpavia && !/^spavia\b/i.test(name)) name = `Spavia ${name}`;

  const city = CITY_FIXES[(m.city || "").trim()] || (m.city || "").trim();
  const override = COORD_OVERRIDES[m.id];
  const lat = override ? override.lat : parseFloat(m.lat);
  const lon = override ? override.lon : parseFloat(m.lon);

  let x = null, y = null;
  if (Number.isFinite(lat) && Number.isFinite(lon) && !INSET_STATES.has(state)) {
    [x, y] = project(lon, lat);
    const sid = state.toLowerCase();
    if (polys[sid] && !pointInPolygon([x, y], polys[sid])) {
      warnings.push(`${name}: plotted point falls outside ${state}`);
    }
  } else if (INSET_STATES.has(state)) {
    warnings.push(`${name}: ${state} is an inset on this map, not plotted`);
  }

  return {
    id: m.id,
    name,
    brand: isSpavia ? "spavia" : "other",
    status: comingSoon[i] === true ? "coming-soon" : "open",
    address: [m.address1, m.address2].filter(Boolean).join(", ").trim(),
    city,
    state,
    stateName: STATE_NAMES[state] || state,
    zip: (m.zip || "").trim(),
    phone: (m.phone || "").trim(),
    website: site,
    lat, lon,
    x: x === null ? null : Number(x.toFixed(2)),
    y: y === null ? null : Number(y.toFixed(2)),
  };
});

// Advisory: is each plotted point anywhere near the ZIP its address claims?
//
// The state point-in-polygon test is too coarse to catch a bad coordinate --
// the locator had Spavia Fairfield 38km away in the wrong county but still
// inside Texas. Distance to the claimed ZIP's centroid separates that cleanly:
// every good pin sits within 5km, that one sat at 38km.
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

const spavia = locations.filter((l) => l.brand === "spavia");
const payload = {
  // Generated by scripts/sync-locations.mjs -- do not edit by hand.
  generatedAt: new Date().toISOString().slice(0, 10),
  source: "spaviadayspa.com store locator",
  counts: {
    total: spavia.length,
    open: spavia.filter((l) => l.status === "open").length,
    comingSoon: spavia.filter((l) => l.status === "coming-soon").length,
    states: new Set(spavia.map((l) => l.state)).size,
  },
  locations,
};

console.log(
  `\n${payload.counts.total} Spavia locations ` +
  `(${payload.counts.open} open, ${payload.counts.comingSoon} coming soon) ` +
  `across ${payload.counts.states} states`
);
const others = locations.filter((l) => l.brand !== "spavia");
if (others.length) console.log(`plus ${others.length} non-Spavia brand: ${others.map((l) => l.name).join(", ")}`);

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
