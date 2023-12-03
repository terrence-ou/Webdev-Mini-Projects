import { useState } from "react";
import { styled } from "styled-components";

import CustomInput from "./CustomInput.jsx";
import Message from "./Message.jsx";

import UserData from "../data/data.js";

// Styles
const LoginBox = styled.div`
  position: absolute;
  border-radius: 10px;
  top: 50%;
  left: 50%;
  width: 400px;
  padding: 40px;
  box-sizing: border-box;
  box-shadow: 15px 15px 25px #395D7380;
  transform: translate(-50%, -50%);
  background: #fff;
  text-align: center;

  & h2{
    font-weight: 700;
    color: "#395D73";
    text-align: center;
  }
`;

const ContinueButton = styled.button`
  position: relative;
  width: 100px;
  height: 40px;
  padding: 10px 10px;
  margin-top: 20px;
  font-size: 16px;
  border-radius: 3px;

  color: #F2594B;
  background: none;
  border: none;
  transition: .2s;

  &:hover{
    background: #F2594B;
    color:white;
    cursor: pointer;
  }
`

const ClearButton = styled.button`
  position: absolute;
  width: 100px;
  height: 40px;
  margin-top: 20px;
  font-size: 12px;

  color: darkgray;
  background: none;
  border: none;
  transition: .2s;

  &:hover{
    color: #F2594B;
    cursor: pointer;
  }
`


export default function LoginContainer(){

  // Handle username
  const [ userName, setUserName ] = useState("");

  function handleUserName(event){
    setUserName(event.target.value);
  };


  // Handle password
  const [ password, setPassword ] = useState("");

  function handlePassword(event){
    setPassword(event.target.value);
  };


  // Handle password confirmation
  const [ confirmPassword, setConfirmPassword] = useState("");

  function handleConfirmPassword(event){
    setConfirmPassword(event.target.value);
  };


  // Handling warning messages
  const [ warningMessage, setWarningMessage ] = useState("");

  function checkPassword(password, targetPassword){
    if (loginMode == null  || password.length == 0){
      return;
    }

    let message = "";
    if (loginMode == "new"){
      message = password === targetPassword ? "Account created!" : "Password does not match";
    } else {
      message = password === targetPassword ? "Login Succeeded!" : "User name or password is incorrect";
    }
    setWarningMessage(message);
  }


  // Handle login mode and passward checking
  const [ loginMode, setLoginMode ]= useState();

  function handleContinuePressed(){
    // When username is empty, pop out warning
    if (userName.length == 0){
      setWarningMessage("User name is required");
      setLoginMode(null);
      return;
    }

    let targetPassword = undefined;
    if (userName in UserData){
      setLoginMode(UserData[userName].group);
      targetPassword = UserData[userName].password;
    } else {
      setLoginMode("new");
      targetPassword = confirmPassword;
    }
    checkPassword(password, targetPassword);
  }


  // Clear all inputs
  function handleClearPressed(){
    setUserName("");
    setPassword("");
    setConfirmPassword("");
    setLoginMode();
    setWarningMessage("");
  }


  // Manipulate password inputs based on the current login mode
  function getPasswordInputs(){
    if (loginMode == null){
      return <></>;
    } else if (loginMode == "new"){
      return newUserPasswordInput;
    } else {
      return passwordInput;
    }
  }

  // Functions for generating components
  const passwordInput = <CustomInput
                            label="Password"
                            handleInput={handlePassword}
                            inputValue={password}
                            type="password"/>

  const newUserPasswordInput = [
    <CustomInput
          key="new password"
          label="New Password"
          handleInput={handlePassword}
          inputValue={password}
          type="password"/>,

    <CustomInput
          key="confirm password"
          label="Confirm Password"
          handleInput={handleConfirmPassword}
          inputValue={confirmPassword}
          type="password"/>
  ]


  // Manipulate login window title
  let loginText = "Login";

  if (loginMode == "premium"){
    loginText = "Premium Login";
  } else if (loginMode == "new"){
    loginText = "Create Account"
  }


  // Return login container
  return <>
    <LoginBox $mode={loginMode}>
      <h2>{loginText}</h2>
      <form>
        <CustomInput
            label="Username"
            handleInput={handleUserName}
            inputValue={userName}/>
        {getPasswordInputs()}
      </form>

      <ContinueButton onClick={handleContinuePressed}
              disabled={warningMessage.length > 0 ? true : false}>
        Continue
      </ContinueButton>

      <ClearButton onClick={handleClearPressed}
              disabled={warningMessage.length > 0 ? true : false}>
        Clear
      </ClearButton>

      {warningMessage.length > 0? <Message warningMessage={warningMessage} setWarningMessage={setWarningMessage}/> : null}
    </LoginBox>
  </>
}
