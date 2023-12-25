import { useEffect } from "react";
import axios from "axios";

import LangContextProvider from "./components/translationContext.jsx";
import Container from "./components/Container.jsx";
//import DEEPL_KEY from "./deeplapi.json";

//const URL = "https://api-free.deepl.com/v2/translate";
//const AUTH_KEY = DEEPL_KEY.key;

function App() {
  
//  useEffect(() => {
//    async function translate(){
//      try {
//        const response = await axios.post(URL, null, {
//          params: {
//            auth_key: AUTH_KEY,
//            text: "测试API传输",
//            source_lang: null,
//            target_lang: "DE"
//          }
//        });
//        console.log(response.data.translations[0]);
//        // detected_source_language
//        // text
//      } catch(error) {
//        console.error("Error during translation:", error);
//        throw error;
//      }
//    }
//
//    //translate();
//  }, []);
//   

  return (
    <LangContextProvider>
      <Container>
      </Container>
    </LangContextProvider>
  )
}

export default App
