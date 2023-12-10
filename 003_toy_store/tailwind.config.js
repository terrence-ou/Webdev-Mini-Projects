/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    minWidth: {
      660: "660px",
    },
    maxWidth: {
      1280: "1280px",
    },
    fontFamily: {
      sans: ["Signika Negative", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        shop: `url('./public/storefront.png')`,
      },
    },
  },
  plugins: [],
};
