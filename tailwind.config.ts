import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        recoleta: ["var(--font-recoleta)"],
        sans: ["var(--font-recoleta)", "sans-serif"], // make Recoleta the default
      },
    },
  },
  plugins: [],
};
export default config;
