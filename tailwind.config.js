/** @type {import('tailwindcss').Config} */
import tailwindConfig from "./src/nikeLandingPageUi/tailwindConfig";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: tailwindConfig.fontSize,
    extend: {
      fontFamily: tailwindConfig.fontFamiliy,
      colors: tailwindConfig.colors,
      boxShadow: tailwindConfig.boxShadow,
      backgroundImage: tailwindConfig.backgroundImage,
      screens: tailwindConfig.screens,
    },
  },
  plugins: [],
};
