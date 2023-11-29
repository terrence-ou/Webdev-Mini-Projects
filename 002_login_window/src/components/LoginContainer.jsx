import { styled } from "styled-components";

const LoginBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  padding: 40px;
  box-sizing: border-box;
  box-shadow: 15px 15px 25px rgba(0, 0, 0, .6);
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, .5);


  & h2{
    font-family: 'Ubuntu', sans-serif;
    font-weight: 700;
    color: white;
    text-align: center;
  }

`


export default function LoginContainer(){

  return <>
    <LoginBox>
      <h2>Login</h2>
    </LoginBox>
  </>
}
