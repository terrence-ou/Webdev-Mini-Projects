import { createContext, useState, useContext } from "react";

const INIT_THEME = window.matchMedia("(prefers-color-scheme: dark)").matches
  ? "dark"
  : "light";
const INIT_FONT = "font-serif";

export const ThemeContext = createContext({
  theme: "",
  font: "",
  toggleDarkTheme: () => {},
  handleSetFont: () => {},
});

let initialized = false;

// initialize theme and font when loading the app
function initPage(initDarkTheme) {
  if (initialized) return;
  document.documentElement.classList.add(INIT_FONT);
  initialized = true;
  if (INIT_THEME === "dark") {
    document.documentElement.classList.add("dark");
  }
}

export default function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState(INIT_THEME);
  const [font, setFont] = useState(INIT_FONT);

  initPage();

  function handleSetFont(currFont) {
    const prevFont = font;
    document.documentElement.classList.remove(prevFont);
    document.documentElement.classList.add(currFont);
    setFont(currFont);
  }

  function toggleDarkTheme() {
    const currTheme = theme === "dark" ? "light" : "dark";
    if (currTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    setTheme(currTheme);
  }

  const themeContextValue = {
    theme,
    font,
    toggleDarkTheme,
    handleSetFont,
  };

  return (
    <ThemeContext.Provider value={themeContextValue}>
      {children}
    </ThemeContext.Provider>
  );
}
