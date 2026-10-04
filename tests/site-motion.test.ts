import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { startSiteMotion } from "../app/lib/siteMotion";

class Preference extends EventTarget {
  matches = false;
}
let preference: Preference;
let phone: { matches: boolean };
let intersection: (entries: Partial<IntersectionObserverEntry>[]) => void;
let mutation: () => void;
let cleanup: (() => void) | undefined;
const observe = vi.fn();
const unobserve = vi.fn();
const disconnect = vi.fn();
const frames: FrameRequestCallback[] = [];
const observerOptions: IntersectionObserverInit[] = [];
const animations: { cancel: ReturnType<typeof vi.fn>; onfinish: (() => void) | null; oncancel: (() => void) | null }[] = [];
const animate = vi.fn<(keyframes: Keyframe[], options: KeyframeAnimationOptions) => (typeof animations)[number]>(() => {
  const animation = { cancel: vi.fn(), onfinish: null, oncancel: null };
  animations.push(animation);
  return animation;
});

function bounds(element: Element, top = 1200) {
  vi.spyOn(element, "getBoundingClientRect").mockReturnValue({
    top, bottom: top + 200, left: 0, right: 300, width: 300, height: 200,
    x: 0, y: top, toJSON: () => ({}),
  });
  return element as HTMLElement;
}
function enter(element: Element) {
  intersection([{ target: element, isIntersecting: true }]);
}
beforeEach(() => {
  vi.clearAllMocks();
  document.body.innerHTML = "";
  frames.length = animations.length = 0;
  observerOptions.length = 0;
  preference = new Preference();
  phone = { matches: false };
  vi.stubGlobal("innerHeight", 800);
  vi.stubGlobal("matchMedia", vi.fn((query: string) =>
    query.includes("reduced-motion") ? preference : phone,
  ));
  vi.stubGlobal("IntersectionObserver", class {
    observe = observe;
    unobserve = unobserve;
    disconnect = disconnect;
    constructor(callback: typeof intersection, options: IntersectionObserverInit) {
      intersection = callback;
      observerOptions.push(options);
    }
  });
  vi.stubGlobal("MutationObserver", class {
    observe = vi.fn();
    disconnect = vi.fn();
    constructor(callback: () => void) { mutation = callback; }
  });
  vi.stubGlobal("requestAnimationFrame", (callback: FrameRequestCallback) => {
    frames.push(callback);
    return frames.length;
  });
  vi.stubGlobal("cancelAnimationFrame", vi.fn());
  Object.defineProperty(Element.prototype, "animate", { value: animate, configurable: true });
});
afterEach(() => {
  cleanup?.();
  cleanup = undefined;
  vi.restoreAllMocks();
  vi.unstubAllGlobals();
  delete (Element.prototype as { animate?: unknown }).animate;
});

describe("motion preserves access to the franchise content", () => {
  it("keeps the hero, form containers and initial viewport immediate", () => {
    document.body.innerHTML = `<main>
      <section id="hero"><div data-motion="rise">Alisa</div></section>
      <div data-motion="rise"><form><input aria-label="Email" /></form></div>
      <section><h2>Initially visible heading</h2></section>
    </main>`;
    document.querySelectorAll("[data-motion]").forEach((element) => bounds(element));
    bounds(document.querySelector("h2")!, 200);
    cleanup = startSiteMotion();
    expect(observe).not.toHaveBeenCalled();
    expect(animate).not.toHaveBeenCalled();
    expect(document.querySelector("[data-motion]")?.getAttribute("style")).toBeNull();
  });

  it("reveals an offscreen story once without changing its readable resting styles", () => {
    document.body.innerHTML = '<div data-motion="rise">An owner’s story</div>';
    const story = bounds(document.querySelector("div")!);
    cleanup = startSiteMotion();
    expect(observe).toHaveBeenCalledWith(story);
    expect(story.style.opacity).toBe("");
    enter(story);
    enter(story);
    expect(animate).toHaveBeenCalledTimes(1);
    expect(unobserve).toHaveBeenCalledWith(story);
    expect(story.style.opacity).toBe("");
  });

  it("gives a phone story visible travel and a full second inside the viewport", () => {
    phone.matches = true;
    document.body.innerHTML = '<div data-motion="rise">A story worth noticing</div>';
    const story = bounds(document.querySelector("div")!);
    cleanup = startSiteMotion();
    // On an 800px-tall phone, start at 640px rather than the old 776px edge.
    expect(observerOptions[0].rootMargin).toBe("0px 0px -160px 0px");
    enter(story);
    const [keyframes, options] = animate.mock.calls[0];
    expect(options.duration).toBeGreaterThanOrEqual(1000);
    expect(keyframes[0].transform).toBe("translate3d(0, 32px, 0)");
    expect(story.style.opacity).toBe("");
  });

  it("allows the offscreen mobile hero photo to enter while keeping Alisa and email immediate", () => {
    phone.matches = true;
    document.body.innerHTML = `<section id="hero">
      <div data-motion="rise">Alisa</div>
      <form><input aria-label="Email" /></form>
      <figure class="home-hero-photo" data-motion="photo">Guest experience</figure>
    </section>`;
    document.querySelectorAll("[data-motion]").forEach((element) => bounds(element));
    const photo = document.querySelector("figure")!;
    cleanup = startSiteMotion();
    expect(observe).toHaveBeenCalledTimes(1);
    expect(observe).toHaveBeenCalledWith(photo);
    enter(photo);
    expect(animate.mock.calls[0][1].duration).toBe(1300);
    expect(document.querySelector("form")?.getAttribute("style")).toBeNull();
  });

  it("keeps the entry position proportional after a viewport resize", () => {
    document.body.innerHTML = '<div data-motion="rise">Story</div>';
    const story = bounds(document.querySelector("div")!);
    cleanup = startSiteMotion();
    vi.stubGlobal("innerHeight", 1000);
    window.dispatchEvent(new Event("resize"));
    frames.shift()?.(0);
    expect(observerOptions.at(-1)?.rootMargin).toBe("0px 0px -200px 0px");
    expect(observe).toHaveBeenLastCalledWith(story);
    enter(story);
    expect(animate).toHaveBeenCalledTimes(1);
  });

  it("does not animate a heading again inside an already animated story", () => {
    document.body.innerHTML = '<main><section><div data-motion="rise"><h2>Story title</h2></div></section></main>';
    const story = bounds(document.querySelector("[data-motion]")!);
    bounds(document.querySelector("h2")!);
    cleanup = startSiteMotion();
    expect(observe).toHaveBeenCalledTimes(1);
    expect(observe).toHaveBeenCalledWith(story);
  });

  it("honors reduced motion initially and immediately cancels motion when the preference changes", () => {
    document.body.innerHTML = '<div data-motion="photo">Spa photography</div>';
    const photo = bounds(document.querySelector("div")!);
    preference.matches = true;
    cleanup = startSiteMotion();
    expect(observe).not.toHaveBeenCalled();
    preference.matches = false;
    preference.dispatchEvent(new Event("change"));
    enter(photo);
    expect(animate).toHaveBeenCalledTimes(1);
    preference.matches = true;
    preference.dispatchEvent(new Event("change"));
    expect(animations[0].cancel).toHaveBeenCalled();
    expect(photo.style.opacity).toBe("");
  });

  it("settles a story immediately when a keyboard user focuses its link", () => {
    document.body.innerHTML = '<div data-motion="rise"><a href="/get-started">Request info</a></div>';
    const story = bounds(document.querySelector("div")!);
    cleanup = startSiteMotion();
    enter(story);
    document.querySelector("a")!.focus();
    expect(animations[0].cancel).toHaveBeenCalled();
    expect(document.activeElement).toBe(document.querySelector("a"));
  });

  it("discovers later content and cancels active animations during route cleanup", () => {
    cleanup = startSiteMotion();
    const photo = document.createElement("figure");
    photo.dataset.motion = "photo";
    document.body.append(photo);
    bounds(photo);
    mutation();
    frames.shift()?.(0);
    expect(observe).toHaveBeenCalledWith(photo);
    enter(photo);
    cleanup();
    cleanup = undefined;
    expect(animations[0].cancel).toHaveBeenCalled();
    expect(disconnect).toHaveBeenCalled();
  });

  it("leaves content usable when animation APIs are unavailable", () => {
    document.body.innerHTML = '<div data-motion="rise">Always readable</div>';
    delete (Element.prototype as { animate?: unknown }).animate;
    cleanup = startSiteMotion();
    expect(observe).not.toHaveBeenCalled();
    expect(document.body.textContent).toBe("Always readable");
    expect(document.querySelector("div")?.getAttribute("style")).toBeNull();
  });
});
