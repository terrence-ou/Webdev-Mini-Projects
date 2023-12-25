import { useContext } from "react";

import Dropdown from "./Dropdown.jsx";
import TextArea from "./TextArea.jsx";
import { LangContext } from "./translationContext.jsx";

import switchIcon from "../assets/switch_icon.svg";
import copyIcon from "../assets/copy_icon.svg";
import actionIcon from "../assets/action_icon.svg";


export default function MainInterface(){
  
  const { handleSwapLangs } = useContext(LangContext);

  return (
    <div 
      className="w-[70%] h-full pl-8 pr-12 py-uniform_y bg-zinc-200"
    >
      {/*Section of Dropdown menus*/}
      <section
        id="languages"
        className="flex content-center justify-between"
      >
        <div>
          <Dropdown label="Source"/>
        </div>
        <button 
          className="focus:outline-none"
          onClick={handleSwapLangs}
        >
          <img 
            className="w-5"
            src={switchIcon} 
            alt="switch icon"/>
        </button>
        <div>
          <Dropdown label="Target"/>
        </div>
      </section>

      {/*Section of text areas*/}
      <section id="source">
        <TextArea 
          title="Source Text"
          buttonIcon={actionIcon}
          styles="h-28"
          placeholder="Type or paste text here"
        />
      </section>

      <section id="result">
        <TextArea 
          title="Result"
          buttonIcon={copyIcon}
          styles="h-56 bg-zinc-100"
          readOnly={true}
        >
          <p className="text-sm text-zinc-400 font-light py-1">
            Language detected: <span className="italic">unavailable</span>
          </p>
        </TextArea>
      </section>
    </div>
  )
}
