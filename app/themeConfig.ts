// app/themeConfig.ts

export const themes = {
  coastal: {
    name: "Coastal",
    color: "#86A2BF", // ocean blue
    description: "Ocean-inspired tones and airy textures create a serene, beachside retreat.",
    images: [
      "/themes/coastal1.png",
      "/themes/coastal2.png",
      "/themes/coastal3.png",
      "/themes/coastal4.png",
      "/themes/coastal5.png",
      "/themes/coastal6.png",
    ],
  },
  vineyard: {
    name: "Vineyard",
    color: "#A15751",
    description: "Rich textures and warm accents evoke the elegance of wine country.",
    images: [
      "/themes/vineyard1.png",
      "/themes/vineyard4.jpg",
      "/themes/vineyard3.png",
      "/themes/vineyard2.png",
      "/themes/vineyard5.png",
      "/themes/vineyard6.png",
    ],
  },
  mountain: {
    name: "Mountain",
    color: "#7C9A82",
    description: "Natural stone and warm wood tones bring rustic luxury to life.",
    images: [
      "/themes/mountain1.png",
      "/themes/mountain3.png",
      "/themes/mountain2.png",
      "/themes/mountain4.png",
      "/themes/mountain6.png",
      "/themes/mountain5.png",
    ],
  },
  sway: {
    name: "Sway (Urban)",
    color: "#163E34",
    description: "Sleek, modern design with bold contrasts for a contemporary urban feel.",
    images: [
      "/themes/sway1.png",
      "/themes/sway2.png",
      "/themes/sway3.png",
      "/themes/sway4.png",
      "/themes/sway5.png",
      "/themes/sway6.png",
    ],
  },
};

// Default hero image (used before a theme is selected)
export const defaultImage = "/themes/default.jpg";

export type ThemeKey = keyof typeof themes;
