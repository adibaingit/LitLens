import { defineConfig } from "tailwindcss";

export default defineConfig({
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        primary: "#E59A1D",
        primaryHover: "#c98519",
        secondary: "#A36A3A",
        secondaryHover: "#8c5932",
        textBlack: "#000000",
        textCharcoal: "#1A1A1A",
        bgWhite: "#FFFFFF",
        bgSoft: "#E7D8C8",
        accentTeal: "#0F5B57",
        accentTealHover: "#0d4d49",
        accentWine: "#6E213F",
        accentWineHover: "#5a1c34",
      },
    },
  },
});
