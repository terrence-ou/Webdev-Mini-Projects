import { useState } from "react";
import { styled } from "styled-components";
import CustomInput from "./CustomInput.jsx";

import UserData from "../data/data.js";

const LoginBox = styled.div`
  position: absolute;
  border-radius: 10px;
  top: 50%;
  left: 50%;
  width: 400px;
  padding: 40px;
  box-sizing: border-box;
  box-shadow: 15px 15px 25px rgba(0, 0, 0, .6);
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, .5);
  text-align: center;
  transition: .5s;


  & h2{
    font-weight: 700;
    color: white;
    text-align: center;
  }
`

const Button = styled.button`
  position: relative;
  width: 100px;
  padding: 10px 10px;
  margin-top: 40px;
  font-size: 16px;
  border-radius: 5px;

  color: #03e9f4;
  background: none;
  border: none;
  transition: .5s;

  &:hover{
    background: #03e9f4;
    color:white;
    cursor: pointer;
  }
`


export default function LoginContainer(){

  const [ userName, setUserName ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ confirmPassword, setConfirmPassword] = useState("");
  const [ loginMode, setLoginMode ]= useState();
  const [ warningMessage, setWarningMessage ] = useState("");

  function handleUserName(event){
    setUserName(event.target.value);
  };

  function handlePassword(event){
    setPassword(event.target.value);
  };

  // Handle "Enter" key events
  function handleKeyPressed(event){
    if (event.key=="Enter"){
      event.preventDefault();
    }
  }


  function checkPassword(password, targetPassword){
    if (loginMode == null  || password.length == 0){
      return;
    }
    if (password == targetPassword){
      console.log("success");
    } else {
      console.log("failed");
    }
  }


  function handleButtonPressed(){
    // When username is empty, pop out warning
    if (userName.length == 0){
      console.log("Username filed is required.")
      setLoginMode(null);
      return;
    }

    let targetPassword = undefined;
    if (userName in UserData){
      setLoginMode(UserData[userName].group);
      targetPassword = UserData[userName].password;
    } else {
      setLoginMode("new");
    }

    checkPassword(password, targetPassword);

  }

  // Manipulate password inputs based on the current login mode
  const passwordInput = <CustomInput
                            label="Password"
                            handleInput={handlePassword}
                            inputValue={password}
                            onKeyPressed={handleKeyPressed}/>

  const newUserPasswordInput = [
    <CustomInput key="new password" label="New Password" handleInput={handlePassword}
                 inputValue={password} onKeyPressed={handleKeyPressed}/>,

    <CustomInput key="confirm password" label="Confirm Password" handleInput={handlePassword}
                 inputValue={password} onKeyPressed={handleKeyPressed}/>
  ]


  function getPasswordField(){
    if (loginMode == null){
      return <></>;
    } else if (loginMode == "new"){
      return newUserPasswordInput;
    } else {
      return passwordInput;
    }
  }


  return <>
    <LoginBox>
      <h2>Login</h2>
      <form>
        <CustomInput
            label="Username"
            handleInput={handleUserName}
            inputValue={userName}
            onKeyPressed={handleKeyPressed}/>
        {getPasswordField()}
      </form>
      <Button onClick={handleButtonPressed}>Continue</Button>
    </LoginBox>
  </>
}
