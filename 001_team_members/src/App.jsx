import { useState } from "react";
import "./App.css";
import MemberCard from "./components/MemberCard";

import { ROBOTS } from "./data.js";

function App() {


  // handling card expansion
  function handleHoverIn(index){
    setHoverIndex(index);
  }

  function handleHoverOut(){
    setHoverIndex(undefined);
  }

  const [hoverIndex, setHoverIndex] = useState(undefined);
  const columnSpans = Array(ROBOTS.length).fill(1);

  if (hoverIndex != undefined){
    columnSpans[hoverIndex] = 3;
  }
  const columnSpanStyle = columnSpans.map(item => `${item}fr`).join(" ");


  // Adding memeber cards to the section
  function addRobots(){
    return ROBOTS.map(
        (item, index) => (
          <MemberCard
            key={item.id}
            img_source={item.img_source}
            mouseIn={() => handleHoverIn(index)}
            mouseOut={() => handleHoverOut()}
            selected={hoverIndex===undefined? undefined : hoverIndex==index}
          />));
  }


  // Managing the Member introduction
  let info = (
    <div>
    </div>
  )
  if (hoverIndex !== undefined){
    const currRobot = ROBOTS[hoverIndex];

    info = (
      <div className="info">
        <h2>{currRobot.name}</h2>
        <p><b>Service ID: </b> {currRobot.id} </p>
        <p><b>Position: </b> {currRobot.position} </p>
        <p>{currRobot.description}</p>
      </div>
    )
  }


  // return the current component
  return (
    <section>
      <h1>Crew Members</h1>
      <div className='container' style={{gridTemplateColumns: columnSpanStyle}}>
        {addRobots()}
      </div>
      {info}
    </section>
  )
}

export default App
