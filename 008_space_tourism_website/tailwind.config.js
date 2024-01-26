/** @type {import('tailwindcss').Config} */
const content = "32px";
const header = "96px";
const subnav = "34px";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
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
      spacing: {
        innerpad: "165px",
      },
      fontSize: {
        h1: "150px",
        h2: "100px",
        h3: "56px",
        h4: "32px",
        h5: "28px",
        sh1: "28px",
        sh2: "14px",
        desc: "18px",
        nav: "16px",
        content: content,
      },
      letterSpacing: {
        h5: "4.75px",
        nav: "2.7px",
        sh2: "2.35px",
      },
      height: {
        header: header,
        subnav: subnav,
      },
      lineHeight: {
        content: content,
        header: header,
      },
    },
  },
  plugins: [],
};
