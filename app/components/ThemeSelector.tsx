"use client";

import { useTheme } from "./ThemeProvider";
import { themes, ThemeKey } from "../themeConfig";

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
            onClick={() => setTheme(key)}
            className={`px-5 py-2 rounded font-semibold border transition-all duration-200 ease-in-out transform hover:scale-105 hover:shadow-lg`}
            style={{
              backgroundColor: isActive ? themeColor : "white",
              color: isActive ? "white" : "#C2A878", // gold text for inactive
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
