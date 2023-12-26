import { useState } from "react";

import { briefNameMapping } from "../data/languageMapping.js";

const MAX_LENGTH = 22; // max word length in preview mode

export default function HistoryItem({id, item, onDelete}){

  const [ expand, setExpand ] = useState(false);
  function handleExpand(){
    setExpand(prevExpand => !prevExpand);
  }

  const sourceText = expand ? item.text : item.text.slice(0, MAX_LENGTH) + "...";

  return (
    <>
      <div className="flex justify-between p-2 mb-3 text-[0.65rem] text-zinc-200 bg-[rgba(255,255,255,0.3)] rounded-xl">
        <button className="text-left" onClick={handleExpand}>
          <span className="italic font-thin">
            {`From ${briefNameMapping[item.source_lang]} to ${briefNameMapping[item.target_lang]}`}
          </span>
          <p className="font-light text-[0.7rem] pt-1">
            {sourceText}
          </p>
          {expand && <p className="pt-2"> {item.result} </p>}
        </button>
        <button onClick={() => onDelete(id)}>X</button>
      </div>
    </>
  )
}
