"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Fixed names can be read in GA4's event report without registering custom dimensions.
// Never collect field contents, link text, query strings or email addresses here.
export default function EngagementTracking() {
  const pathname = usePathname();
  useEffect(() => {
    if (
      !["spaviafranchise.com", "www.spaviafranchise.com"].includes(
        window.location.hostname,
      )
    )
      return;
    const send = (event: string) =>
      window.gtag?.("event", event, {
        page_path: pathname,
        design_version: "2026-10",
        send_to: "G-6N6Q7GX5D4",
      });
    const click = (event: MouseEvent) => {
      const target = (event.target as Element)?.closest<HTMLElement>(
        "[data-track]",
      );
      const name = target?.dataset.track;
      if (name === "faq_open" && target?.closest("details")?.open) return;
      if (name && /^(cta|faq)_[a-z_]{1,32}$/.test(name)) send(name);
    };
    document.addEventListener("click", click);
    const seen = new Set<Element>();
    const timers = new Map<Element, ReturnType<typeof setTimeout>>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (
            entry.intersectionRatio >= 0.15 &&
            !seen.has(entry.target) &&
            !timers.has(entry.target)
          ) {
            timers.set(
              entry.target,
              setTimeout(() => {
                const name = (entry.target as HTMLElement).dataset.section;
                if (name && /^[a-z_]{1,32}$/.test(name) && !document.hidden) {
                  send(`view_${name}`);
                  seen.add(entry.target);
                  observer.unobserve(entry.target);
                }
                timers.delete(entry.target);
              }, 1000),
            );
          } else if (entry.intersectionRatio < 0.15) {
            clearTimeout(timers.get(entry.target));
            timers.delete(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );
    document
      .querySelectorAll("[data-section]")
      .forEach((element) => observer.observe(element));
    return () => {
      document.removeEventListener("click", click);
      observer.disconnect();
      timers.forEach(clearTimeout);
    };
  }, [pathname]);
  return null;
}
