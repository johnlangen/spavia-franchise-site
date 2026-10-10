/** Meta (Facebook/Instagram) pixel helpers. Everything is a no-op until
 * NEXT_PUBLIC_META_PIXEL_ID is set in Vercel and the pixel script loads. */
export const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID || "";

type Fbq = (...args: unknown[]) => void;

export function trackMeta(
  event: string,
  params?: Record<string, unknown>,
  custom = false,
) {
  if (typeof window === "undefined") return;
  const fbq = (window as unknown as { fbq?: Fbq }).fbq;
  if (typeof fbq !== "function") return;
  fbq(custom ? "trackCustom" : "track", event, params);
}
