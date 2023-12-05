import { styled } from "styled-components";

import LoginWindow from "./LoginWindow.jsx";
import GalleryImage from "./GalleryImage.jsx";

const Container = styled.div`
  position: absolute;
  width: 700px;
  height: 460px;
  margin: auto auto;
  background-color: white;
  border-radius: 1.0rem;
  box-shadow: 0 0 30px gray;
  overflow: hidden;

  display: flex;
`

export default function LoginContainer({ userGroup, setUserGroup}){

  return (
  <Container>
      <LoginWindow userGroup={userGroup} setUserGroup={setUserGroup}/>
      <GalleryImage userGroup={userGroup}/>
  </Container>
  )
}
