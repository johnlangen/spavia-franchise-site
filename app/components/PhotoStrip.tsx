"use client";

import Image from "next/image";
import Link from "next/link";

// Auto-drifting film strip of real Spavia photography, Sway, and what's
// coming next. Duplicated list = seamless CSS loop; pauses on hover and
// respects prefers-reduced-motion (falls back to manual horizontal scroll).
const FRAMES = [
  { src: "/media/front-desk-wide.webp", chip: "Spavia · Welcome desk" },
  { src: "/media/fireplace-retreat-wide.webp", chip: "Spavia · Retreat lounge" },
  { src: "/media/couples-treatment-room.webp", chip: "Spavia · Couples retreat" },
  { src: "/media/salt-stone-therapy.webp", chip: "Spavia · Salt stone massage" },
  { src: "/media/sway-storefront.webp", chip: "Sway by Spavia · Denver" },
  { src: "/media/sway-sauna.webp", chip: "Sway · Sauna" },
  { src: "/media/aescape-robotic-table.webp", chip: "Sway · Robotic massage" },
  { src: "/media/sway-remedy-room.webp", chip: "Sway · Remedy room" },
  { src: "/media/hallway-tree-mural.webp", chip: "Spavia · Design detail" },
  { src: "/media/lounge-bookshelf-nook.webp", chip: "Spavia · Guest lounge" },
  { src: "/media/guest-robe-fireplace.webp", chip: "Spavia · Guest experience" },
  { src: "/media/retail-browsing-lifestyle.webp", chip: "Spavia · Retail boutique" },
];

function Frame({ src, chip }: { src: string; chip: string }) {
  return (
    <figure className="relative h-64 md:h-80 w-[300px] md:w-[400px] flex-shrink-0 overflow-hidden rounded-xl">
      <Image
        src={src}
        alt={chip.replace("·", "—")}
        fill
        sizes="400px"
        className="object-cover"
      />
      <figcaption className="absolute bottom-3 left-3 rounded-full bg-black/55 px-3 py-1 text-xs font-medium tracking-wide text-white backdrop-blur-sm">
        {chip}
      </figcaption>
    </figure>
  );
}

export default function PhotoStrip() {
  return (
    <section className="bg-[#faf8f4] py-14 overflow-hidden" aria-label="Inside Spavia and Sway">
      <div className="max-w-6xl mx-auto px-6 mb-8 flex flex-col md:flex-row md:items-end md:justify-between gap-3">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Inside Spavia — and what&apos;s next
          </h2>
          <p className="text-gray-600 mt-2 max-w-xl">
            Real spaces, our second brand, and the concepts we&apos;re building toward.
          </p>
        </div>
        <Link
          href="/whats-new"
          className="text-sm font-semibold text-[#9c8457] hover:text-[#7d6943] transition-colors whitespace-nowrap"
        >
          See what&apos;s new at Spavia →
        </Link>
      </div>

      <div className="strip-viewport" aria-hidden="false">
        <div className="strip-track">
          {FRAMES.map((f) => (
            <Frame key={f.src} {...f} />
          ))}
          <div className="strip-dup" aria-hidden="true">
            {FRAMES.map((f) => (
              <Frame key={`dup-${f.src}`} {...f} />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .strip-viewport {
          width: 100%;
          overflow: hidden;
        }
        .strip-track {
          display: flex;
          gap: 16px;
          width: max-content;
        }
        .strip-dup {
          display: contents;
        }
        /* Desktop (hover-capable): continuous auto-drift, never pauses */
        @media (hover: hover) and (prefers-reduced-motion: no-preference) {
          .strip-track {
            animation: strip-drift 75s linear infinite;
          }
        }
        /* Touch devices + reduced motion: natural swipeable row, no
           animation (tap-to-pause via sticky hover confused people) */
        @media (hover: none), (prefers-reduced-motion: reduce) {
          .strip-viewport {
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
            scroll-snap-type: x proximity;
            padding-left: 1.5rem;
            scroll-padding-left: 1.5rem;
          }
          .strip-track {
            padding-right: 1.5rem;
          }
          .strip-track :global(figure) {
            scroll-snap-align: start;
          }
          .strip-dup {
            display: none;
          }
        }
        @keyframes strip-drift {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(calc(-50% - 8px));
          }
        }
      `}</style>
    </section>
  );
}
