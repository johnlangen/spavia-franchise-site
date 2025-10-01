// app/themeConfig.ts

export const themes = {
    mountain: {
      name: "Mountain",
      color: "#7C9A82", // earthy brown
      images: [
        "/themes/mountain1.png",
        "/themes/mountain3.png",
        "/themes/mountain2.png",
        "/themes/mountain4.png",
        "/themes/mountain6.png",
        "/themes/mountain5.png",
      ],
    },
    vineyard: {
      name: "Vineyard",
      color: "#A15751", // olive green
      images: [
        "/themes/vineyard1.png",
        "/themes/vineyard4.png",
        "/themes/vineyard3.png",
        "/themes/vineyard2.png",
        "/themes/vineyard5.png",
        "/themes/vineyard6.png",
      ],
    },
    coastal: {
      name: "Coastal",
      color: "#86A2BF", // ocean blue
      images: [
        "/themes/coastal1.png",
        "/themes/coastal2.png",
        "/themes/coastal3.png",
        "/themes/coastal4.png",
        "/themes/coastal5.png",
        "/themes/coastal6.png",
      ],
    },
    sway: {
      name: "Sway (Urban)",
      color: "#163E34", // deep modern red
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
  export const defaultImage = "/themes/default.png";
  
  export type ThemeKey = keyof typeof themes;
  