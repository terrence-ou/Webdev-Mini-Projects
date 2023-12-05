import { styled } from "styled-components";

import Input from "./Input.jsx";

const LoginSection = styled.section`
  position: relative;
  margin-top: 4.5rem;
  width: 60%;
  background-color: white;

  & h3{
    font-weight: 400;
    margin: 0;
  }
`

export default function LoginWindow(){

  return (
    <LoginSection>
      <h3> Please Enter Your Username </h3>
    </LoginSection>
  )
}
