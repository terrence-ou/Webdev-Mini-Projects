import axios from "axios";
import { useEffect } from "react";

import Container from "./components/Container.jsx";
import DEEPL_KEY from "./deeplapi.json";

const URL = "https://api-free.deepl.com/v2/translate";
const AUTH_KEY = DEEPL_KEY.key;

function App() {
  
  useEffect(() => {
    async function translate(){
      const response = await axios.post(URL, null, {
        params: {
          auth_key: AUTH_KEY,
          text: "Hello World",
          target_lang: "DE"
        }
      })
      console.log(response);
    }

    translate();

  });
   

  return (
    <Container>
    </Container>
  )
}

export default App
