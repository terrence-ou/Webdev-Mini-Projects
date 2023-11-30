import { styled } from "styled-components";


// Styles
const MessageBox = styled.div`
  position: absolute;
  top: 20%;
  left: 10%;
  width: 80%;
  height: 60%;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  box-shadow: 15px 15px 25px #395D7380;
  animation: pop-in 0.5s cubic-bezier(0.68, -0.55, 0.65, 0.52) forwards;

  & h3{
    color: #395D73;
    font-size: 16px;
    padding-bottom: 10px;
  }

  & button{
      font-size: 13px;
      height: 20px;
      border-radius: 5px;
      color: #fff;
      background: #F2594B;
      border: none;
      cursor: pointer;
    }
  }

  @keyframes pop-in {
    0% {
      transform: scale(0);
      opacity: 0;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
}
`

export default function Message({ warningMessage, setWarningMessage }){

  function handleClick(){
    setWarningMessage("");
  }

  return <MessageBox>
    <h3>{warningMessage}</h3>
    <button onClick={handleClick}>Continue</button>
  </MessageBox>
}
