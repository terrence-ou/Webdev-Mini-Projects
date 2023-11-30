import { styled } from "styled-components";
import { useState } from "react";

const InputSet = styled.div`
  position: relative;

  & input{
    width: 100%;
    padding: 10px 0;
    margin-bottom: 30px;
    font-size: 16px;
    border: none;
    border-bottom: 1px solid white;
    background: transparent;
    outline: none;
    color: white
  }

  & label{
    position: absolute;
    left: 0;
    padding: 10px 0;
    transition: .3s;
    top: ${(props) => props.$focused? "-20px" : 0};
    font-size: ${(props) => props.$focused? "12px" : "16px"};
    color: ${(props) => props.$focused? "#03e9f4" : "white"};
  }
`


export default function CustomInput({label, inputValue, handleInput, onKeyPressed}){

  const [ inputFocused, setInputFocused ] = useState(false);
  function handleOnFocus(value){
    setInputFocused(value);
  }

  return <InputSet $focused={inputFocused}>
    <input type="text"
           onFocus={() => handleOnFocus(true)}
           onBlur={() => handleOnFocus(inputValue.length != 0)}
           onChange={() => handleInput(event)}
           onKeyDown={() => onKeyPressed(event)}></input>
    <label>{label}</label>
  </InputSet>
}
