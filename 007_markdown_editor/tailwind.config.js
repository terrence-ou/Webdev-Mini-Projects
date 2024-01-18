/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    colors: {
      gray: {
        200: "#F5F5F5",
        300: "#E4E4E4",
        400: "#C1C4CB",
        500: "#7C8187",
        600: "#5A6069",
        700: "#35393F",
        800: "#2B2D31",
        900: "#1D1F22",
        1000: "#151619",
      },
      white: "#FFFFFF",
      orange: {
        light: "#F39765",
        dark: "#E46643",
      },
    },
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
      serif: ["Roboto Slab", "serif"],
      mono: ["Roboto Mono", "monospace"],
    },
    extend: {
      spacing: {
        "header-height": "72px",
      },
      lineHeight: {
        content: "24px",
      },
      letterSpacing: {
        "header-space": "2px",
      },
      fontSize: {
        "header-lg": "15px",
        "header-md": "14px",
        "header-sm": "13px",
        content: "14px",
      },
    },
  },
  plugins: [],
};
