import { styled } from "styled-components";

import CustomInput from "./CustomInput.jsx";
import UsersData from "../data/data.js";


const LoginSection = styled.section`
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 5rem;
  width: 60%;
  background-color: #FDFCF6;

  & h3{
    font-weight: 600;
    margin: 0;
    margin-bottom: 2rem;
    font-size: 1.3rem;
  }

  & div{
    display: flex;
    gap: 5%;
    justify-content: flex-end;
  }

  & button.proceed{
    height: 2.2rem;
    width: 40%;
    background-color: #D88D4E;
    border: none;
    border-radius: 0.2rem;
    color: white;
    font-size: 1.1rem;
    transition: .2s;

    &:hover{
      cursor: pointer;
      background-color: #A94E1F;
    }
  }

  & button.clear{
    color: gray;
    width: 25%;
    border: none;
    background: none;

    &:hover{
      cursor: pointer;
      color:black;
    }
  }
`

const welcomeStrings = {
  default: "Login / Create Account",
  new: "Welcome, new friend!",
  user: "Welcome back, ",
  sponsor: "Welcome back, sponsor ",
}


export default function LoginWindow({ identity, handleIdentity }){

  function handleContinue(){
    if(identity === undefined) return;

    // manipulate user group
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

    // handle submit
    // avoid name conflict
    if (identity.group != undefined && identity.group === group){
      if (group === "new"){
        let result = identity.password === identity.confirmPassword;
        console.log(result);
      } else {
        let result = identity.password === UsersData[identity.username].password;
        console.log(result);
      }
    }
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
  let title = welcomeStrings["default"];
  if (identity && identity.group){
    title = welcomeStrings[`${identity.group}`];
    title += identity.group === "new" ? "" : identity.username;
  }

  return (
    <LoginSection>
      <h3> {title} </h3>
      {inputSection}
      <div>
        <button className="proceed" onClick={handleContinue}>
          Continue
        </button>
        <button className="clear" onClick={handleClear}>
          Clear
        </button>
      </div>
    </LoginSection>
  )
}
