import { createContext, useContext, useState } from "react";

export const LangContext = createContext({
  tranlationForm: {},
  handleSwapLangs: () => {},
  handleLangSelection: () => {},
  handleSourceTextUpdate: () => {},
  handleResultTextUpdate: () => {},
});

const defaultForm = {
  source_lang: "none",
  target_lang: "DE",
  text: "",
  result: "",
}

export default function LangContextProvider({ children }){
  
  const [ translationForm, setTranslationForm ] = useState({...defaultForm});

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
  
  function handleSourceTextUpdate(event){
    setTranslationForm(prevForm => {
      return {
        ...prevForm,
        text: event.target.value,
      }
    });
  }

  function handleResultTextUpdate(result){
    setTranslationForm(prevForm => {
      return {
        ...prevForm,
        result: result,
      };
    });
  }


  

  // final context value for context use
  const langContextValue = {
    translationForm: translationForm,
    handleSwapLangs: handleSwapLangs,
    handleLangSelection: handleLangSelection,
    handleSourceTextUpdate: handleSourceTextUpdate,
    handleResultTextUpdate: handleResultTextUpdate,
  }

  return (
    <LangContext.Provider value={langContextValue}>
      {children}
    </LangContext.Provider>
  )
}
