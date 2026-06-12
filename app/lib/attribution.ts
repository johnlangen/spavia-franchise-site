const STORAGE_KEY = "spavia_first_touch_v1";
const CLICK_ID_KEY = "spavia_click_id_v1";

export interface Attribution {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
  referrer?: string;
  landing_page?: string;
  captured_at?: string;
  gclid?: string;
}

// Google click IDs are last-touch (unlike the first-touch UTM block above):
// offline conversion import credits the most recent ad click, so a fresh
// gclid always overwrites a stored one. wbraid/gbraid (iOS) are stored with
// a prefix so an import script can route them to the right upload column.
function captureClickId(params: URLSearchParams): void {
  const gclid = params.get("gclid");
  const wbraid = params.get("wbraid");
  const gbraid = params.get("gbraid");
  const value = gclid || (wbraid && `wbraid:${wbraid}`) || (gbraid && `gbraid:${gbraid}`);
  if (value) localStorage.setItem(CLICK_ID_KEY, value);
}

export function captureAttribution(): void {
  if (typeof window === "undefined") return;
  try {
    captureClickId(new URL(window.location.href).searchParams);
    if (localStorage.getItem(STORAGE_KEY)) return;

    const url = new URL(window.location.href);
    const params = url.searchParams;

    const data: Attribution = {
      utm_source: params.get("utm_source") || undefined,
      utm_medium: params.get("utm_medium") || undefined,
      utm_campaign: params.get("utm_campaign") || undefined,
      utm_content: params.get("utm_content") || undefined,
      utm_term: params.get("utm_term") || undefined,
      referrer: document.referrer || undefined,
      landing_page: url.pathname,
      captured_at: new Date().toISOString(),
    };

    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {
    // localStorage unavailable (privacy mode, quota, etc.) — fail silently
  }
}

export function getAttribution(): Attribution {
  if (typeof window === "undefined") return {};
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    const attribution: Attribution = stored ? (JSON.parse(stored) as Attribution) : {};
    const clickId = localStorage.getItem(CLICK_ID_KEY);
    if (clickId) attribution.gclid = clickId;
    return attribution;
  } catch {
    return {};
  }
}
