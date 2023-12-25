import { createContext, useContext, useState } from "react";

export const LangContext = createContext({
  tranlationForm: {},
  translationHistory: [],
  handleSwapLangs: () => {},
  handleSourceTextUpdate: () => {},
  handleLangSelection: () => {},
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

  function handleLangSelection(key, lang){
    if (key !== "source_lang" && key !== "target_lang"){
      console.error("Wrong key value provided");
      return;
    }
    setTranslationForm(prevForm => {
      return {
        ...prevForm,
        [key]: lang,
      }
    });
  }

  function handleSwapLangs(){
    if (translationForm.source_lang != "none"){
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
  
  function handleSourceTextUpdate(text){
    setTranslationForm(prevForm => {
      return {
        ...prevForm,
        text: text,
      }
    });
  }
  

  const langContextValue = {
    translationForm: translationForm,
    translationHistory: translationHistory,
    handleSwapLangs: handleSwapLangs,
    handleSourceTextUpdate: handleSourceTextUpdate,
    handleLangSelection: handleLangSelection,
  }

  return (
    <LangContext.Provider value={langContextValue}>
      {children}
    </LangContext.Provider>
  )
}
