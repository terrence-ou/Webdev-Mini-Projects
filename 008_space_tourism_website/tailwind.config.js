/** @type {import('tailwindcss').Config} */
const content = "32px";
const contentTablet = "28px";
const header = "96px";
const subnav = "42px";
const h1 = "150px";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      mobile: { max: "767px", min: "375px" },
      tablet: { max: "1279px", min: "768px" },
      desktop: "1280px",
    },
    colors: {
      dark: "#0B0D17",
      violet: "#D0D6F9",
      white: "#FFFFFF",
    },
    fontFamily: {
      barlow: ["Barlow", "sans-serif"],
      "barlow-condensed": ["Barlow Condensed", "sans-serif"],
      bellefair: ["Bellefair", "serif"],
    },
    extend: {
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0.0" },
          "100%": { opacity: "1.0" },
        },
      },
      animation: {
        fadeIn: "fadeIn 300ms linear",
      },
      spacing: {
        pagepad: "55px",
        innerpad: "165px",
      },
      fontSize: {
        h1: "150px",
        h2: "100px",
        "h2-tablet": "80px",
        h3: "56px",
        h4: "32px",
        h5: "28px",
        "h5-tablet": "20px",
        sh1: "28px",
        sh2: "14px",
        desc: "18px",
        "desc-tablet": "16px",
        nav: "16px",
        content: content,
      },
      letterSpacing: {
        h5: "4.75px",
        "h5-tablet": "3.38px",
        nav: "2.7px",
        sh2: "2.35px",
      },
      height: {
        header: header,
        subnav: subnav,
      },
      lineHeight: {
        content: content,
        "content-tablet": contentTablet,
        header: header,
        h1: h1,
      },
    },
  },
  plugins: [],
};
