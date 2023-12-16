/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      serif: ["Roboto Serif", "serif"],
      sans: ["Open Sans", "sans-serif"],
    },
    extend: {
      keyframes: {
        fadeIn: {
          "0%, 100%": { opacity: "0.0" },
          "50%": { opacity: "1.0" },
        },
      },

      animation: {
        fadeIn: "fadeIn 2s ease-in-out",
      },
    },
  },
  plugins: [],
};
