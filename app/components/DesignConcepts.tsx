"use client";

import Image from "next/image";
import { useState } from "react";
import { ThemeKey, themes } from "../themeConfig";

// The concept picker changes its own imagery, never the site's brand colors.
export default function DesignConcepts() {
  const [theme, setTheme] = useState<ThemeKey>("mountain");
  const active = themes[theme];
  return (
    <div className="max-w-5xl mx-auto">
      <div
        className="concept-options"
        role="group"
        aria-label="Design concepts"
      >
        {(Object.keys(themes) as ThemeKey[]).map((key) => (
          <button
            key={key}
            type="button"
            aria-pressed={theme === key}
            onClick={() => setTheme(key)}
          >
            <span
              aria-hidden="true"
              style={{ backgroundColor: themes[key].color }}
            />
            {themes[key].name}
          </button>
        ))}
      </div>
      <p className="body-copy text-center mb-8" aria-live="polite">
        {active.description}
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
        {active.images.map((src, index) => (
          <figure className="relative aspect-square overflow-hidden" key={src}>
            <Image
              src={src}
              alt={`${active.name} spa design concept ${index + 1}`}
              fill
              sizes="(max-width: 768px) 50vw, 320px"
              className="object-cover"
            />
          </figure>
        ))}
      </div>
    </div>
  );
}
