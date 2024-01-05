/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    colors: {
      dark: {
        300: "#3A3A3A",
        500: "#2D2D2D",
        700: "#1F1F1F",
        900: "#050505",
      },
      gray: {
        300: "#F4F4F4",
        500: "#E9E9E9",
        700: "#757575",
      },
      white: "#FFFFFF",
      "light-purple": "#A445ED",
      "red-tomato": "#FF5252",
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      serif: ["Lora", "serif"],
      mono: ["Inconsolata", "monospace"],
    },
    screens: {
      lg: "1024px",
      md: "750px",
      sm: "375px",
    },
    extend: {
      spacing: {
        "page-width-lg": "737px",
        "page-width-md": "689px",
        "page-width-sm": "327px",
        "header-height": "36.5px",
        "header-height-sm": "32px",
        "definition-gap": "6px",
        "definition-gap-tight": "4px",
        "input-h": "64px",
        "input-h-sm": "48px",
        "input-mt-lg": "52px",
        "input-mt-sm": "24px",
      },
      boxShadow: {
        "light-scheme": "0px 2px 25px rgba(0, 0, 0, 0.1)",
        "dark-scheme": "0px 2px 25px rgb(164, 69, 237)",
      },
      fontSize: {
        "title-lg": "64px",
        "title-sm": "32px",
        "subtitle-lg": "24px",
        "subtitle-sm": "18px",
        "heading-lg": "20px",
        "heading-sm": "16px",
        "body-lg": "18px",
        "body-sm": "15px",
        footer: "14px",
      },
    },
  },
  plugins: [],
};
