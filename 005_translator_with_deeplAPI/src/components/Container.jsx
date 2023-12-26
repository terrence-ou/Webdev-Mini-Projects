import { useState } from "react";

import Sidebar from "./Sidebar.jsx";
import MainInterface from "./MainInterface.jsx";

const LOCAL_KEY = "DeepLTranslator";
const getLocalHistory = () => JSON.parse(localStorage.getItem(LOCAL_KEY)) || {};
const setLocalHistory = (newHist) => localStorage.setItem(LOCAL_KEY, JSON.stringify({...newHist})); 


export default function Container(){
  
  const [ translationHistory, setTranslationHistory ] = useState(getLocalHistory);

  // functions handle the traslation history
  function handleAddTranslation(id, tranlationForm){
    setTranslationHistory(prevHistory => {
      const currHistory = {...prevHistory, [id]: tranlationForm};
      setLocalHistory(currHistory);
      return currHistory;
    });
  }

  function handleRemoveTranslation(id){
    setTranslationHistory(prevHistory => {
      const currHistory = {...prevHistory};
      delete currHistory[id];
      setLocalHistory(currHistory);
      return {...currHistory};
    })
  }

  return (
    <div className="flex w-[860px] h-[600px] bg-white rounded-xl overflow-hidden">
      <Sidebar translationHistory={translationHistory} onDelete={handleRemoveTranslation}/>
      <MainInterface addTranslation={handleAddTranslation}/>
    </div>
  )
}
