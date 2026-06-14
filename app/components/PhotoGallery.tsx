"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";

export interface GalleryPhoto {
  src: string;
  alt: string;
  caption?: string;
  /** layout span on desktop — "tall" or "wide" make a masonry-ish rhythm */
  span?: "tall" | "wide";
}

export default function PhotoGallery({ photos }: { photos: GalleryPhoto[] }) {
  const [open, setOpen] = useState<number | null>(null);

  const close = useCallback(() => setOpen(null), []);
  const go = useCallback(
    (dir: number) =>
      setOpen((i) => (i === null ? i : (i + dir + photos.length) % photos.length)),
    [photos.length]
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, close, go]);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[180px] md:auto-rows-[220px]">
        {photos.map((p, i) => {
          const span =
            p.span === "tall"
              ? "row-span-2"
              : p.span === "wide"
              ? "col-span-2"
              : "";
          return (
            <button
              key={p.src}
              onClick={() => setOpen(i)}
              className={`group relative overflow-hidden rounded-xl ${span}`}
              aria-label={`Open photo: ${p.alt}`}
            >
              <Image
                src={p.src}
                alt={p.alt}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
              />
              <span className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-300" />
              {p.caption && (
                <span className="absolute bottom-2 left-2 right-2 text-left text-[11px] font-medium text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow">
                  {p.caption}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {open !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm"
            onClick={close}
          >
            <button
              onClick={close}
              className="absolute top-5 right-5 h-11 w-11 rounded-full bg-white/10 text-white text-2xl flex items-center justify-center hover:bg-white/20 transition-colors"
              aria-label="Close"
            >
              ×
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); go(-1); }}
              className="absolute left-3 md:left-6 h-12 w-12 rounded-full bg-white/10 text-white text-2xl flex items-center justify-center hover:bg-white/20 transition-colors"
              aria-label="Previous"
            >
              ‹
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); go(1); }}
              className="absolute right-3 md:right-6 h-12 w-12 rounded-full bg-white/10 text-white text-2xl flex items-center justify-center hover:bg-white/20 transition-colors"
              aria-label="Next"
            >
              ›
            </button>

            <motion.figure
              key={open}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25 }}
              className="relative w-[92vw] h-[82vh] max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={photos[open].src}
                alt={photos[open].alt}
                fill
                sizes="92vw"
                className="object-contain"
                priority
              />
              {photos[open].caption && (
                <figcaption className="absolute -bottom-9 inset-x-0 text-center text-sm text-white/80">
                  {photos[open].caption}
                  <span className="text-white/40"> · {open + 1} / {photos.length}</span>
                </figcaption>
              )}
            </motion.figure>
          </motion.div>
        )}
    </>
  );
}
