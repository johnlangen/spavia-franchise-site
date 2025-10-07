"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { themes, ThemeKey } from "../themeConfig";

type ThemeContextType = {
  theme: ThemeKey | null;
  setTheme: (theme: ThemeKey) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<ThemeKey | null>(null);

  // Keep a global CSS var in sync with the theme
  useEffect(() => {
    if (theme) {
      const color = themes[theme].color;
      document.documentElement.style.setProperty("--accent", color);
    } else {
      document.documentElement.style.setProperty("--accent", "#C2A878");
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within ThemeProvider");
  return context;
}
