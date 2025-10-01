"use client";

import React, { createContext, useContext, useState } from "react";
import { themes, ThemeKey } from "../themeConfig";

type ThemeContextType = {
  theme: ThemeKey | null;
  setTheme: (theme: ThemeKey) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<ThemeKey | null>(null);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div
        style={
          theme
            ? ({ "--theme-color": themes[theme].color } as React.CSSProperties)
            : {}
        }
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

// 👇 THIS MUST BE EXPORTED
export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within ThemeProvider");
  return context;
}
