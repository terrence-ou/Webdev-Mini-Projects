import { styled } from "styled-components";
import { useState } from "react";


// Styles
const InputSet = styled.div`
  position: relative;

  & input{
    width: 100%;
    padding: 10px 0;
    margin-bottom: 30px;
    font-size: 16px;
    border: none;
    border-bottom: 1px solid #395D73;
    background: transparent;
    outline: none;
    color: #395D73;
  }

  & label{
    position: absolute;
    left: 0;
    padding: 10px 0;
    transition: .3s;
    top: ${(props) => props.$focused? "-20px" : 0};
    font-size: ${(props) => props.$focused? "12px" : "16px"};
    color: ${(props) => props.$focused? "#6BA7BF" : "#395D73"};
  }
`


export default function CustomInput({label, inputValue, handleInput, type="text"}){

  const [ inputFocused, setInputFocused ] = useState(false);
  function handleOnFocus(value){
    setInputFocused(value);
  }

  return <InputSet $focused={inputFocused}>
    <input type={type}
           onFocus={() => handleOnFocus(true)}
           onBlur={() => handleOnFocus(inputValue.length != 0)}
           onChange={() => handleInput(event)}
           value={inputValue}>
    </input>
    <label>{label}</label>
  </InputSet>
}
