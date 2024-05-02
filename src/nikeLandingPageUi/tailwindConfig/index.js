const nikeFontSize = {
  xs: ["12px", "16px"],
  sm: ["14px", "20px"],
  base: ["16px", "19.5px"],
  lg: ["18px", "21.94px"],
  xl: ["20px", "24.38px"],
  "2xl": ["24px", "29.26px"],
  "3xl": ["28px", "50px"],
  "4xl": ["48px", "58px"],
  "8xl": ["96px", "106px"],
};

const nikeFontFamily = {
  palanquin: ["Palanquin", "sans-serif"],
  montserrat: ["Montserrat", "sans-serif"],
};

const nikeColors = {
  primary: "#ECEEFF",
  "coral-red": "#FF6452",
  "slate-gray": "#6D6D6D",
  "pale-blue": "#F5F6FF",
  "white-400": "rgba(255, 255, 255, 0.80)",
};

const nikeBoxShadow = {
  "3xl": "0 10px 40px rgba(0, 0, 0, 0.1)",
};

const nikeBackgroundImage = {
  hero: "url('src/assets/assetsNikeLandingPageUI/images/collection-background.svg')",
  card: "url('src/assets/assetsNikeLandingPageUI/images/thumbnail-background.svg')",
};

const nikeScreens = {
  wide: "1440px",
};

const tailwindConfig = {
  fontSize: nikeFontSize,
  fontFamiliy: nikeFontFamily,
  colors: nikeColors,
  boxShadow: nikeBoxShadow,
  backgroundImage: nikeBackgroundImage,
  screens: nikeScreens,
};

export default tailwindConfig;
