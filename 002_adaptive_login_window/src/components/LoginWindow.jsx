import { styled } from "styled-components";

import CustomInput from "./CustomInput.jsx";
import userData from "../data/data.js";
import UsersData from "../data/data.js";


const LoginSection = styled.section`
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 5rem;
  width: 60%;
  background-color: white;

  & h3{
    font-weight: 600;
    margin: 0;
    font-size: 1.3rem;
  }
`

export default function LoginWindow({ identity, handleIdentity }){


  function handleContinue(){
    if(identity === undefined) return;

    let group = undefined;
    if (identity.username in UsersData){
      group = UsersData[identity.username].group;
    } else {
      group = "new";
    }
    handleIdentity(prevId => {
      return {
        ...prevId,
        group: group,
      }
    })
  }

  function handleClear(){
    handleIdentity(undefined);
    document.getElementById("username").value="";
  }

  function getInputSection(group){
    let inputKeys = [
      {text:"Username", type:"text", id:"username"},
      {text:"Password", type:"password", id:"password"},
      {text:"Confirm Password", type:"password", id:"confirmPassword"},
      ];

    let numInputs = 0;
    if (group === undefined) numInputs += 1;
    else if (group === "new") numInputs += 3;
    else numInputs += 2;

    return (
      <section>
        {[...Array(numInputs).keys()].map((idx) => {
          return(
            <CustomInput
              key={inputKeys[idx].id}
              identity={identity}
              handleIdentity={handleIdentity}
              type={inputKeys[idx].type}
              id={inputKeys[idx].id}
            >
              {inputKeys[idx].text}
            </CustomInput>);
        })}
      </section>
    )
  }

  const inputSection = getInputSection(identity ? identity.group : undefined);

  return (
    <LoginSection>
      <h3> Login / Create Account </h3>
      {inputSection}
      <section>
        <button className="proceed" onClick={handleContinue}>
          Continue
        </button>
        <button className="clear" onClick={handleClear}>
          Clear
        </button>
      </section>
    </LoginSection>
  )
}
