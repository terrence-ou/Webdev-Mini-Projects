import { styled } from "styled-components";
import { useState, useRef } from "react";

import LoginContainer from "./components/LoginContainer.jsx";

const lightGradient = "radial-gradient(#FFFFFF, #C1B69D)";
const darkGradient = "radial-gradient(#FFFFFF, #655C47)"

export default function App(){

  const [ userGroup, setUserGroup ] = useState(undefined);

  document.getElementById("root").style.background =
    userGroup === "sponsor" ? darkGradient : lightGradient;

  return <>
    <LoginContainer userGroup={userGroup} setUserGroup={setUserGroup}/>
  </>;
}
