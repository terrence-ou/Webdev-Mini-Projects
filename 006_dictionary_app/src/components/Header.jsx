import { useState, useContext } from "react";
import { ThemeContext } from "./themeContext";

import headerIcon from "../assets/icons/logo.svg";
import dropdownIcon from "../assets/icons/icon-arrow-down.svg";
import lightMoon from "../assets/icons/icon-moon.svg";
import darkMoon from "../assets/icons/icon-moon-dark.svg";

const fontMapping = {
  "font-sans": "Sans Serif",
  "font-serif": "Serif",
  "font-mono": "Mono",
};

export default function Header({}) {
  const [fontMenuVisible, setFontMenuVisible] = useState(false);
  const { theme, font, toggleDarkTheme, handleSetFont } =
    useContext(ThemeContext);

  function handleMenuVisibility() {
    setFontMenuVisible((prevVisibility) => !prevVisibility);
  }

  function handleFontSelection(currFont) {
    handleSetFont(currFont);
    setFontMenuVisible(false);
  }

  // handle update font style
  function getFontSelections() {
    return (
      <div className="absolute flex flex-col top-[40px] w-40 right-8 px-4 py-2 rounded-[1rem] bg-white dark:bg-dark-300 focus:outline-none shadow-light-scheme dark:shadow-dark-scheme z-20">
        {Object.entries(fontMapping).map(([key, item]) => (
          <button
            key={key}
            onClick={() => handleFontSelection(key)}
            className={
              "hover:text-light-purple dark:text-white text-start leading-[24px] py-[8px] duration-200 font-semibold " +
              key
            }
          >
            {item}
          </button>
        ))}
      </div>
    );
  }

  const buttonPosition = theme === "dark" ? "left-[22px]" : "left-[4px]";
  const moonIcon = theme === "dark" ? darkMoon : lightMoon;

  return (
    <div className="md:h-header-height sm:h-header-height-sm flex justify-between align-middle md:text-body-lg sm:text-body-sm">
      <img src={headerIcon} alt="Dictionary app icon" />
      <div className="flex my-auto">
        <div className="relative border-r-gray-700 border-r-[1px]">
          <button
            className="flex justify-end gap-[16px] w-[120px] mr-8 font-bold text-dark-500 dark:text-white focus:outline-none"
            onClick={handleMenuVisibility}
          >
            <span>{fontMapping[font]}</span>
            <img src={dropdownIcon} alt="dropdown icon" className="my-auto" />
          </button>
          {fontMenuVisible && getFontSelections()}
        </div>
        <div className="h-[20px] ml-8 my-auto flex gap-4">
          <button
            className="relative box-border h-full w-[40px] rounded-full bg-gray-700 dark:bg-light-purple focus:outline-none"
            onClick={toggleDarkTheme}
          >
            <span
              className={
                "absolute top-[3px] w-[14px] h-[14px] bg-white rounded-full duration-200 " +
                buttonPosition
              }
            ></span>
          </button>
          <img src={moonIcon} alt="dark mode icon" className="inline"></img>
        </div>
      </div>
    </div>
  );
}
