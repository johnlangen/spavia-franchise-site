"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";
import { trackMeta } from "../lib/metaPixel";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const GA_ID = "G-6N6Q7GX5D4";

export default function Analytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const firstView = useRef(true);

  useEffect(() => {
    // The pixel snippet records the first PageView; track later route changes.
    if (firstView.current) {
      firstView.current = false;
      return;
    }
    trackMeta("PageView");
  }, [pathname, searchParams]);

  useEffect(() => {
    if (typeof window.gtag !== "function") return;
    const query = searchParams.toString();
    const url = query ? `${pathname}?${query}` : pathname;
    window.gtag("event", "page_view", {
      page_path: url,
      page_location: window.location.href,
      send_to: GA_ID,
    });
  }, [pathname, searchParams]);

  return null;
}
