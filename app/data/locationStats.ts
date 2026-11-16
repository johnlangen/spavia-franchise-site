import locationData from "./spavia-locations.json";

/**
 * Live footprint (Spavia day spas + Sway by Spavia), from
 * app/data/spavia-locations.json. That file is regenerated daily from
 * spaviadayspa.com and swaywellnessspa.com by scripts/sync-locations.mjs
 * (GitHub Action: sync-locations.yml), so every "N locations" on this site
 * reads from here instead of a typed number. counts.open is all brands
 * together; counts.spavia and counts.sway split it. Year-specific FDD
 * figures (Item 19 / Item 20) stay hardcoded on purpose.
 */
export const locationCounts = locationData.counts;
export const locationsUpdated = locationData.generatedAt;
