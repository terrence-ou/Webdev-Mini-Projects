import { styled } from "styled-components";
import { ROBOTS } from "../data/data.js";

// Styles for the Info section
const Info = styled.div`
  background: white;
  opacity: 1.0;
  margin: auto;
  display: block;
  position: relative;
  width: 55%;
  padding: 10px 10px 20px 10px;
  border-radius: 20px;

  & p{
    font-size: 14px;
    margin: 0.2em;
  }

  & h2{
    font-family: "Roboto", sans-serif;
    margin: 0.4em;
    font-size: 20px;
    font-weight: bold;
}
`

export default function MemberInfo({ hoverIndex }){
  let info = <div></div>;
  if (hoverIndex !== undefined) {
    const currRobot = ROBOTS[hoverIndex];
    info = (
      <Info>
        <h2>{currRobot.name}</h2>
        <p>
          <b>Service ID: </b> {currRobot.id}{" "}
        </p>
        <p>
          <b>Position: </b> {currRobot.position}{" "}
        </p>
        <p>{currRobot.description}</p>
      </Info>
    );
  }
  return <>{info}</>;
}
