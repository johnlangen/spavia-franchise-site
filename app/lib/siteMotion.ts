/** Progressive motion: HTML stays visible; only entering, offscreen content animates. */
export function startSiteMotion() {
  if (
    !("IntersectionObserver" in window) ||
    !("MutationObserver" in window) ||
    !("matchMedia" in window) ||
    !Element.prototype.animate
  )
    return () => {};

  const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
  const smallScreen = window.matchMedia("(max-width: 800px)");
  const seen = new WeakSet<Element>();
  const watched = new Set<HTMLElement>();
  const playing = new Map<HTMLElement, Animation>();
  const selector = "[data-motion], main section h2, .franchise-article h2";
  const protectedArea =
    "nav, form, [data-motion-static], .overview-form, .long-lead-form, [role=dialog]";
  let frame = 0;
  // Use pixels: IntersectionObserver percentage margins resolve against width,
  // which would make the trigger much shallower on a portrait phone.
  let entryInset = Math.round(window.innerHeight * 0.2);

  const protect = (element: HTMLElement) =>
    element.closest(protectedArea) ||
    (element.closest("#hero") && !element.matches(".home-hero-photo")) ||
    element.querySelector("form, input, select, textarea") ||
    element.contains(document.activeElement);

  const settle = (element: HTMLElement) => {
    playing.get(element)?.cancel();
    playing.delete(element);
    observer.unobserve(element);
    watched.delete(element);
    seen.add(element);
  };

  const createObserver = () => new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const element = entry.target as HTMLElement;
        observer.unobserve(element);
        watched.delete(element);
        if (seen.has(element)) continue;
        seen.add(element);
        if (preference.matches || document.hidden || protect(element)) continue;

        const mobile = smallScreen.matches;
        const photo = element.dataset.motion === "photo";
        const delay = Math.min(
          Math.max(Number(element.dataset.motionDelay) || 0, 0),
          mobile ? 100 : 200,
        );
        // Nothing is hidden while waiting for JS, an observer or a delayed animation.
        // The animation owns its temporary appearance and releases it when finished.
        const keyframes = photo
          ? [
              { clipPath: "inset(10% 7% 10% 7%)", opacity: 0.3 },
              { clipPath: "inset(0 0 0 0)", opacity: 1 },
            ]
          : [
              { transform: `translate3d(0, ${mobile ? 32 : 44}px, 0)`, opacity: 0.15 },
              { transform: "translate3d(0, 0, 0)", opacity: 1 },
            ];
        try {
          const animation = element.animate(keyframes, {
            duration: photo ? 1300 : 1050,
            delay,
            easing: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            fill: "backwards",
          });
          playing.set(element, animation);
          animation.onfinish = animation.oncancel = () => playing.delete(element);
        } catch {
          // Unsupported keyframes are cosmetic; content remains readable.
        }
      }
    },
    { threshold: 0, rootMargin: `0px 0px -${entryInset}px 0px` },
  );
  let observer = createObserver();

  const scan = () => {
    frame = 0;
    if (preference.matches) return;
    const nextInset = Math.round(window.innerHeight * 0.2);
    if (nextInset !== entryInset) {
      entryInset = nextInset;
      observer.disconnect();
      observer = createObserver();
      for (const element of watched) observer.observe(element);
    }
    for (const element of watched) {
      if (!element.isConnected) {
        observer.unobserve(element);
        watched.delete(element);
      }
    }
    const candidates = [...document.querySelectorAll<HTMLElement>(selector)].filter(
      (element) =>
        !seen.has(element) &&
        !watched.has(element) &&
        !element.parentElement?.closest("[data-motion]") &&
        !protect(element),
    );
    // Batch reads before registering observers. Above-the-fold and already-read
    // content is never replayed, including when arriving at an anchor link.
    const bounds = candidates.map((element) => element.getBoundingClientRect());
    candidates.forEach((element, index) => {
      if (!bounds[index].width || !bounds[index].height) return;
      if (bounds[index].top < window.innerHeight) {
        seen.add(element);
      } else {
        watched.add(element);
        observer.observe(element);
      }
    });
  };
  const scheduleScan = () => {
    if (!frame) frame = window.requestAnimationFrame(scan);
  };
  const stopPlaying = () => {
    for (const element of playing.keys()) settle(element);
  };
  const preferenceChanged = () => {
    if (preference.matches) {
      stopPlaying();
      observer.disconnect();
      watched.clear();
    } else {
      scan();
    }
  };
  const focus = (event: FocusEvent) => {
    if (!(event.target instanceof Element)) return;
    for (const element of [...watched, ...playing.keys()]) {
      if (element.contains(event.target)) settle(element);
    }
  };
  const visibility = () => {
    if (document.hidden) stopPlaying();
  };
  const mutations = new MutationObserver(scheduleScan);
  mutations.observe(document.body, { childList: true, subtree: true });
  document.addEventListener("focusin", focus);
  document.addEventListener("visibilitychange", visibility);
  window.addEventListener("resize", scheduleScan, { passive: true });
  preference.addEventListener("change", preferenceChanged);
  scan();

  return () => {
    window.cancelAnimationFrame(frame);
    mutations.disconnect();
    observer.disconnect();
    stopPlaying();
    watched.clear();
    document.removeEventListener("focusin", focus);
    document.removeEventListener("visibilitychange", visibility);
    window.removeEventListener("resize", scheduleScan);
    preference.removeEventListener("change", preferenceChanged);
  };
}
