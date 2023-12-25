import { useEffect } from "react";
import axios from "axios";

import LangContextProvider from "./components/translationContext.jsx";
import Container from "./components/Container.jsx";

function App() {

  return (
    <LangContextProvider>
      <Container>
      </Container>
    </LangContextProvider>
  )
}

export default App
