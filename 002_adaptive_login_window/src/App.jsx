import { styled } from "styled-components";
import { useState } from "react";

import LoginContainer from "./components/LoginContainer.jsx";

const lightGradient = "radial-gradient(#FFFFFF, #C1B69D)";
const darkGradient = "radial-gradient(#FFFFFF, #655C47)"


export default function App(){

  const [ identity, setIdentity ] = useState(undefined);
  document.getElementById("root").style.background =
    identity && identity.group === "sponsor" ? darkGradient : lightGradient;

  return <>
    <LoginContainer
      identity={identity}
      setIdentity={setIdentity}
    />
  </>;
}
