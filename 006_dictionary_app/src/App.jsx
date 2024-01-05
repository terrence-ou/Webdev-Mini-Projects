import { useState, useEffect } from "react";
import Header from "./components/Header.jsx";
import Input from "./components/Input.jsx";
import DictResult from "./components/DictResult.jsx";
import Error from "./components/Error.jsx";

import { requestDictResult } from "./http.js";

function App() {
  const [fontType, setFontType] = useState("font-sans");
  const [dictContent, setDictContent] = useState(undefined);
  const [result, setResult] = useState(undefined);

  // get open-screen content: the definition of the word "dictionary"
  useEffect(() => {
    async function getResult() {
      try {
        const definition = await requestDictResult("keyboard");
        setResult(definition);
      } catch (error) {
        console.error(err);
        setResult("error");
      }
    }
    if (result === undefined) getResult();
  }, [requestDictResult]);

  return (
    <div
      className={
        "mx-auto lg:w-page-width-lg md:w-page-width-md sm:w-page-width-sm mt-[58px] " +
        fontType
      }
    >
      <Header fontType={fontType} setFontType={setFontType} />
      <Input setResult={setResult} />
      {result && result !== "error" && <DictResult result={result} />}
      {result === "error" && <Error />}
    </div>
  );
}

export default App;
