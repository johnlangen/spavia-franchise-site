/** Progressive motion: HTML is visible by default; only offscreen content is prepared. */
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
  // Includes paused entrances waiting below the fold as well as running ones.
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

  const prepare = (element: HTMLElement) => {
    const mobile = smallScreen.matches;
    const photo = element.dataset.motion === "photo";
    const delay = Math.min(
      Math.max(Number(element.dataset.motionDelay) || 0, 0),
      mobile ? 100 : 200,
    );
    const keyframes = photo
      ? [
          { clipPath: "inset(10% 7% 10% 7%)", opacity: 0.3 },
          { clipPath: "inset(0 0 0 0)", opacity: 1 },
        ]
      : [
          { transform: `translate3d(0, ${mobile ? 32 : 44}px, 0)`, opacity: 0.15 },
          { transform: "translate3d(0, 0, 0)", opacity: 1 },
        ];
    let animation: Animation | undefined;
    try {
      animation = element.animate(keyframes, {
        duration: photo ? 1300 : 1050,
        delay,
        easing: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        fill: "backwards",
      });
      // Prepare below the fold, so a slow scroll never shows full-opacity
      // content that suddenly turns faint when it reaches the entry line.
      // The temporary appearance belongs to this cancellable animation only.
      animation.pause();
      animation.currentTime = 0;
      playing.set(element, animation);
      animation.onfinish = animation.oncancel = () => playing.delete(element);
    } catch {
      animation?.cancel();
      // Unsupported animation APIs leave the original HTML readable.
    }
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
        if (preference.matches || document.hidden || protect(element)) {
          settle(element);
          continue;
        }
        try {
          playing.get(element)?.play();
        } catch {
          settle(element);
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
        settle(element);
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
        prepare(element);
        watched.add(element);
        observer.observe(element);
      }
    });
  };
  const scheduleScan = () => {
    if (!frame) frame = window.requestAnimationFrame(scan);
  };
  const stopPlaying = (includeWaiting = true) => {
    for (const element of playing.keys()) {
      if (includeWaiting || !watched.has(element)) settle(element);
    }
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
    if (document.hidden) stopPlaying(false);
  };
  const print = () => stopPlaying();
  const mutations = new MutationObserver(scheduleScan);
  mutations.observe(document.body, { childList: true, subtree: true });
  document.addEventListener("focusin", focus);
  document.addEventListener("visibilitychange", visibility);
  window.addEventListener("resize", scheduleScan, { passive: true });
  window.addEventListener("beforeprint", print);
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
    window.removeEventListener("beforeprint", print);
    preference.removeEventListener("change", preferenceChanged);
  };
}
