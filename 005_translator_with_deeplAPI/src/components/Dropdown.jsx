import { useState } from "react";
import dropdownIcon from "../assets/dropdown_icon.svg";

const menuStyle = "absolute box-border drop-shadow bg-white ml-14 px-3 py-2 w-44 text-zinc-600 text-sm rounded-md z-30";


export default function Dropdown({label, listItems}){
  
   // controlling the visibility of the dropdown menu
  const [ dropdownVisible, setDropdownVisible ] = useState(false);

  function handleShowDropdown(){
    setDropdownVisible(prevVal => !prevVal);
  }
  function toggleOffDropdown(){
    setDropdownVisible(false);
  }

  const [ buttonValue, setButtonValue ] = useState(listItems[0]);

  function handleButtonValue(newValue){
    setButtonValue(newValue);
    toggleOffDropdown();
  } 

  const currMenuStyle = `${menuStyle} ${dropdownVisible ? " visible" : "invisible"}`;

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
                  onClick={() => handleButtonValue(key)}
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
