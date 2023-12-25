import { createContext, useContext, useState } from "react";

export const LangContext = createContext({
  tranlationForm: {},
  translationHistory: [],
  handleSourceLang: () => {},
  handleTargetLang: () => {},
  handleSwapLangs: () => {},

});

const defaultForm = {
  source_lang: "none",
  target_lang: "EN",
  text: "",
}


export default function LangContextProvider({ children }){
  
  const [ translationForm, setTranslationForm ] = useState({...defaultForm});
  const [ translationHistory, setTranslationHistory ] = useState([]);

  // functions handling translation form
  function handleSourceLang(sourceLang){
    setTranslationForm(prevForm => {
      return {
        ...prevForm,
        source_lang: sourceLang
      };
    });
  }

  function handleTargetLang(targetLang){
    setTranslationForm(prevForm => {
      return {
        ...prevForm,
        target_lang: targetLang
      };
    });
  }

  function handleSwapLangs(){
    if (translationForm.source_lang != null){
      const prevSourceLang = translationForm.source_lang;
      const prevTargetLang = translationForm.target_lang;
      setTranslationForm(prevForm => {
        return {
          ...prevForm,
          source_lang: prevTargetLang,
          target_lang: prevSourceLang,
        };
      });
    }
  }
  
  // TODO
  function handleTextUpdate(){
    
  }
  

  const langContextValue = {
    translationForm: translationForm,
    translationHistory: translationHistory,

  }

  return (
    <LangContext.Provider value={langContextValue}>
      {children}
    </LangContext.Provider>
  )
}
