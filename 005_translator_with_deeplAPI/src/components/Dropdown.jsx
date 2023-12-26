import { useState, useContext } from "react";

import { LangContext } from "./translationContext.jsx";
import { sourceLangs, targetLangs } from "../data/languageMapping.js";
import { nameBriefMapping, briefNameMapping } from "../data/languageMapping.js";

import dropdownIcon from "../assets/dropdown_icon.svg";

const MENU_STYLE = "absolute box-border drop-shadow bg-white ml-14 px-3 py-2 w-44 text-zinc-600 text-sm rounded-md z-30";


export default function Dropdown({label}){
  
   // controlling the visibility of the dropdown menu
  const [ dropdownVisible, setDropdownVisible ] = useState(false);
  const { translationForm, handleLangSelection } = useContext(LangContext);

  function handleShowDropdown(){
    setDropdownVisible(prevVal => !prevVal);
  }
  
  function toggleOffDropdown(){
    setDropdownVisible(false);
  }

  function handleClick(key, lang){
    handleLangSelection(key, lang);
    toggleOffDropdown();
  }
  
  // determing the purpose of the textarea component
  const listItems = label === "Source" ? sourceLangs : targetLangs;
  const sourceIdentifier = label.toLowerCase() + "_lang";
  const buttonKey = translationForm[sourceIdentifier];
  const buttonValue = briefNameMapping[buttonKey];
  
  const currMenuStyle = `${MENU_STYLE} ${dropdownVisible ? " visible" : " invisible"}`;

  return (
    <div>
      <div className="flex items-center">
        <span className="w-12 text-sm text-zinc-600 font-semibold mr-2">
          {label}
        </span>
        <button 
          className="flex justify-between bg-white w-44 px-2 py-[0.2rem] text-left text-zinc-600 rounded-md text-sm shadow-[inset_1.5px_1.5px_2px_rgba(0,0,0,0.2)] focus:outline-none"
          onClick={handleShowDropdown}
        >
          {buttonValue}
          <img 
            className="w-5"
            src={dropdownIcon}
            alt="dropdown icon"
          />
        </button>
      </div>
      <menu
        className={currMenuStyle}
      >
        <ul>
          {Object.keys(listItems).map(key => {
            return (
              <li key={key} className="py-1">
                <button 
                  className="hover:text-zinc-800 hover:font-semibold focus:outline-none"
                  onClick={() => handleClick(sourceIdentifier, nameBriefMapping[key])}
                >
                  {key}
                </button>
              </li>
            )
          })}
        </ul>
      </menu>
    </div>
  )
}
