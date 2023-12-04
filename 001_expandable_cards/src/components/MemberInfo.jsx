import { styled } from "styled-components";
import { ROBOTS } from "../data/data.js";

const Info = styled.div`
  display: grid;
  grid-template-columns: 4fr 6fr;
  height: 150px;
  text-align: start;
  align-items: end;

  & .title{
    margin-right: 30px;
    border-right: solid white;

    & h2{
      font-size: 45px;
      margin: 10px 0px;
    }

    & p{
      font-size: 15px;
      margin: 10px 0px;
    }
  }

  & .description{
    & p{
      font-family: Georgia, serif;
      font-size: 15px;
      margin: 10px 0px;
    }
  }

`

export default function MemberInfo({ hoverIndex }){

  const currRobot = ROBOTS[hoverIndex];

  return <Info>
      <div className="title">
        <h2>{currRobot.name}</h2>
        <p>
          <b>Service ID: </b> {currRobot.id}
        </p>
      <p>
        <b>Position: </b> {currRobot.position}
      </p>
      </div>
      <div className="description">
        <h3>Role Description:</h3>
        <p>{currRobot.description}</p>
      </div>
    </Info>
};
