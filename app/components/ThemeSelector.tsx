"use client";

import { ThemeKey,themes } from "../themeConfig";
import { useTheme } from "./ThemeProvider";

export default function ThemeSelector() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex justify-center gap-4 mb-8 flex-wrap">
      {(Object.keys(themes) as ThemeKey[]).map((key) => {
        const isActive = theme === key;
        const themeColor = themes[key].color;

        return (
          <button
            key={key}
            aria-pressed={isActive}
            onClick={() => setTheme(key)}
            className={`px-5 py-2 rounded font-semibold border transition-all duration-200 ease-in-out transform   cursor-pointer`}
            style={{
              backgroundColor: isActive ? "#1a1a1a" : "white",
              color: isActive ? "white" : "#806240", // gold text for inactive
              borderColor: isActive ? themeColor : "#C2A878",
            }}
          >
            {themes[key].name}
          </button>
        );
      })}
    </div>
  );
}