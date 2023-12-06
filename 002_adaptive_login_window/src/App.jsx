import { styled } from "styled-components";
import { useState } from "react";

import LoginContainer from "./components/LoginContainer.jsx";

const lightGradient = "radial-gradient(#FFFFFF, #C1B69D)";
const darkGradient = "radial-gradient(#FFFFFF, #655C47)"


export default function App(){

  const [ identity, setIdentity ] = useState(undefined);

  // Control background transition
  const darkBG = document.getElementById("background-dark");
  darkBG.style.transition = ".5s";
  darkBG.style.opacity =
    identity && identity.group === "sponsor" ? 1.0 : 0.0;

  return <>
    <LoginContainer
      identity={identity}
      setIdentity={setIdentity}
    />
  </>;
}
