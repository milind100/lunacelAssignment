/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"], // This makes Poppins the default sans font
        poppins: ["Poppins", "sans-serif"],
        jakarta: ["Plus Jakarta Sans", "sans-serif"], // Adding Plus Jakarta Sans
      },
      colors: {
        overlayGray: "#616161D1", // Semi-transparent dark gray
        deepBlack: "#171717", // Deep black
        lightGray: "#969696", // Light gray
        slateGray: "#363C43", // Dark slate gray
        pureWhite: "#FFFFFF", // Pure white
        lightBlue: "#96BEE7",
        lightBlack: "#28292F",
      },

      boxShadow: {
        "main-background": "10px 10px 40px 10px #00000080", // Main background shadow
        "section-shadow": "box-shadow: 5.67px 5.67px 3.78px 0px #00000066",
        "divider-shadow": "0px 4px 4px 0px rgba(0, 0, 0, 0.33)",
        "tabs-main-shadow": "0px 4.96px 12.4px 2.48px #00000040 inset",
        "activeTab-shadow-1":
          "  13.49px 16.87px 67.47px 8.43px #0A0A0A,   -8.43px -16.87px 50.6px -16.87px #485B71;",
      },
      backgroundImage: {
        "main-background":
          "linear-gradient(180deg, #373E44 -100%, #191B1F 100%)", // Main background gradient
        "divider-background":
          "linear-gradient(180deg, rgba(40, 40, 40, 0.1) 0%, rgba(248, 248, 248, 0.1) 100%), linear-gradient(0deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))",
      },
    },
    screens: {
      ssm: "398px",

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }
      xmd: "930px",

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }
      sxl: "1160px",

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
};
