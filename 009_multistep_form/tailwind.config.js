/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      mobile: { max: "970px" },
    },
    colors: {
      white: "#FFFFFF",
      bg: "#EFF5FF",
      "border-color": "#D6D9E6",
      denim: "#022959",
      grey: "#9699AA",
      "light-gray": "#D6D9E6",
      "light-blue": "#ABBCFF",
      "very-light-gray": "#F8F9FF",
      orange: "#FFAF7E",
      pink: "#F9818E",
      purple: "#483EFF",
      "red-errors": "#EE374A",
      "sky-blue": "#BEE2FD",
    },
    fontSize: {
      heading: "32px",
      "heading-mobile": "24px",
      lg: "16px",
      md: "14px",
      sm: "12px",
    },
    extend: {
      lineHeight: {
        "body-lg": "25px",
      },
      spacing: {
        width: "940px",
        height: "600px",
      },
      backgroundImage: {
        desktop: "url('assets/bg-sidebar-desktop.svg')",
        mobile: "url('assets/bg-sidebar-mobile.svg')",
      },
    },
  },
  plugins: [],
};
