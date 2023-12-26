/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      serif: ["Roboto Serif", "serif"],
      sans: ["Open Sans", "sans-serif"],
    },
    extend: {
      padding: {
        uniform_y: "2rem",
      },
    },
  },
  plugins: [],
};
