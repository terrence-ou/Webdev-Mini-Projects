import { styled } from "styled-components";
import MemberCard from "./MemberCard.jsx";
import { ROBOTS } from "../data/data.js";

const Container = styled.div`
  margin: 0px auto 30px auto;
  position: relative;
  display: grid;
  width: 65%;
  height: 55vh;
  gap: 1em;
  transition: 300ms;
  grid-template-columns: ${(props) => props.$columnSpanStyle};
`

export default function MembersContainer({ hoverIndex, handleHoverIn, handleHoverOut }){

  // Adding memeber cards to the section
  function addRobots() {
    return ROBOTS.map((item, index) => (
      <MemberCard
        key={item.id}
        img_source={item.img_source}
        mouseIn={() => handleHoverIn(index)}
        mouseOut={() => handleHoverOut()}
        selected={hoverIndex === undefined ? undefined : hoverIndex == index}
      />));
  }

  const columnSpans = Array(ROBOTS.length).fill(1);
  if (hoverIndex != undefined) {
    columnSpans[hoverIndex] = 3;
  }

  const columnSpanStyle = columnSpans.map((item) => `${item}fr`).join(" ");

  return <Container $columnSpanStyle={columnSpanStyle}>
    {addRobots()}
  </Container>
}
