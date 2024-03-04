/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      modile: { max: "600px" },
      tablet: { min: "600px", max: "1280px" },
      desktop: "1280px",
    },
    colors: {
      gray: {
        0: "#000000",
        30: "#7D7D7D",
        60: "#E5E5E5",
        90: "#F3F3F3",
        100: "#FFFFFF",
      },
    },
    fontSize: {
      display: "200px",
      h1: "56px",
      h2: "24px",
      h3: "18px",
      subh1: "15px",
      subh2: "13px",
      link1: "12px",
      link2: "9px",
      body: "14px",
    },
    lineHeight: {
      display: "150px",
      h1: "64px",
      h2: "29px",
      h3: "22px",
      subh1: "19px",
      subh2: "17px",
      link1: "15px",
      link2: "11px",
      body: "28px",
    },
    letterSpacing: {
      link1: "2.5px",
      link2: "2px",
    },
    extend: {},
  },
  plugins: [],
};
