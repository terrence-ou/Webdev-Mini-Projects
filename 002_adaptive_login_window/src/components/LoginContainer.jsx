import { styled } from "styled-components";

import LoginWindow from "./LoginWindow.jsx";
import GalleryImage from "./GalleryImage.jsx";

const Container = styled.div`
  position: absolute;
  width: 700px;
  height: 460px;
  margin: auto auto;
  background-color: #FCF5DA;
  border-radius: 1.0rem;
  box-shadow: 0 0 30px gray;
  overflow: hidden;

  display: flex;
`

export default function LoginContainer({ identity, setIdentity}){

  return (
  <Container>
      <LoginWindow identity={identity} handleIdentity={setIdentity}/>
      <GalleryImage identity={identity}/>
  </Container>
  )
}
