import { useState } from "react";

import lightMoon from "../assets/icons/icon-moon.svg";
import darkMoon from "../assets/icons/icon-moon-dark.svg";

export default function useTheme() {
  const [fontType, setFontType] = useState("font-serif");
  const [darkMode, setDarkMode] = useState(false);
  let moonIcon = lightMoon;

  // handle html theme
  if (darkMode) {
    moonIcon = darkMoon;
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  function toggleDarkMode() {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  }

  return { darkMode, toggleDarkMode, fontType, setFontType, moonIcon };
}
