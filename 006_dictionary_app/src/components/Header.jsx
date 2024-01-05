import { useState } from "react";

import headerIcon from "../assets/icons/logo.svg";
import dropdownIcon from "../assets/icons/icon-arrow-down.svg";
import lightMoon from "../assets/icons/icon-moon.svg";
import darkMoon from "../assets/icons/icon-moon-dark.svg";

const fontMapping = {
  "font-sans": "Sans Serif",
  "font-serif": "Serif",
  "font-mono": "Mono",
};

export default function Header({ fontType, setFontType }) {
  // TODO: add system theme when the application starts

  const [darkModeOn, setDarkModeOn] = useState(false);
  const [fontMenuVisible, setFontMenuVisible] = useState(false);

  const buttonPosition = darkModeOn ? "left-[22px]" : "left-[4px]";
  function handleToggleDarkMode() {
    setDarkModeOn((prevDarkOn) => !prevDarkOn);
  }

  function handleMenuVisibility() {
    setFontMenuVisible((prevVisibility) => !prevVisibility);
  }

  function handleFontSelection(currType) {
    setFontType(currType);
    setFontMenuVisible(false);
  }

  let moonIcon = lightMoon;

  // handle html theme
  if (darkModeOn) {
    moonIcon = darkMoon;
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  // handle font style
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

  return (
    <div className="md:h-header-height sm:h-header-height-sm flex justify-between align-middle md:text-body-lg sm:text-body-sm">
      <img src={headerIcon} alt="Dictionary app icon" />
      <div className="flex my-auto">
        <div className="relative border-r-gray-700 border-r-[1px]">
          <button
            className="flex justify-end gap-[16px] w-[120px] mr-8 font-bold text-dark-500 dark:text-white focus:outline-none"
            onClick={handleMenuVisibility}
          >
            <span>{fontMapping[fontType]}</span>
            <img src={dropdownIcon} alt="dropdown icon" className="my-auto" />
          </button>
          {fontMenuVisible && getFontSelections()}
        </div>
        <div className="h-[20px] ml-8 my-auto flex gap-4">
          <button
            className="relative box-border h-full w-[40px] rounded-full bg-gray-700 dark:bg-light-purple focus:outline-none"
            onClick={handleToggleDarkMode}
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
