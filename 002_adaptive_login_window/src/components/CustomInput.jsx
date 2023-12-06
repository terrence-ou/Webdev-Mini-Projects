import { useState, useRef } from "react";
import { styled } from "styled-components";

const InputSection = styled.section`
  position: relative;

  & input{
    width: 100%;
    padding: 0.2em 0;
    margin-bottom: 2.2rem;
    border: none;
    border-bottom: 1px solid #774B2E;
    outline: none;
    font-size: 16px;
    background: none;
  }

  & label{
    position: absolute;
    left: 0;
    top: ${(props) => props.$focused? "-1rem" : "0"};
    font-size: ${(props) => props.$focused? "0.8rem" : "1.1rem"};
    transition: .3s;
    color: ${(props) => props.$focused ? "#667A5D" : "#774B2E"};
  }
`

export default function CustomInput({ handleIdentity, children, ...props }){

  const [ focused, setFocused ] = useState(false);
  const inputRef = useRef();
  const inputKey = props.id;

  const handleFocused = () => {setFocused(true)};

  const handleFocusOut = () => {
    const inputValue = inputRef.current.value;
    setFocused(inputValue.length != 0);

    if (inputValue.length > 0){
      handleIdentity(prevId => (
        {...prevId,
        [inputKey]:inputValue})
      );
    }
  }

  return (
    <InputSection $focused={focused}>
      <input
        ref={inputRef}
        onFocus={handleFocused}
        onBlur={handleFocusOut}
        {...props}
      >
      </input>
      <label>
        {children}
      </label>
    </InputSection>
  )
}
