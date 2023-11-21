import { useState } from 'react'
import './App.css'
import MemberCard from './components/MemberCard'

const membersData = [
  {name:"Renji", key:"renji", img_source:"https://i.postimg.cc/sgBkfbtx/img-1.jpg"},
  {name:"Sora", key:"sora",img_source:"https://i.postimg.cc/3RZ6bhDS/img-2.jpg"},
  {name:"Kaito", key:"kaito", img_source:"https://i.postimg.cc/DZhHg0m4/img-3.jpg"},
  {name:"Tsuki", key:"tsuki", img_source:"https://i.postimg.cc/KjqWx5ft/img-4.jpg"},
  {name:"Mitsui", key:"mitsui", img_source:"https://i.postimg.cc/nrcWyW4H/img-5.jpg"}
]

function App() {

  // handling card expansion
  const [hoverIndex, setHoverIndex] = useState(undefined);

  function handleHoverIn(index){
    setHoverIndex(index);
  }
  function handleHoverOut(){
    setHoverIndex(undefined);
  }

  const columnSpans = Array(membersData.length).fill(1);
  if (hoverIndex != undefined){
    columnSpans[hoverIndex] = 3;
  }

  const columnSpanStyle = columnSpans.map(item => `${item}fr`).join(" ");
  // Adding memebers to the section
  function addMembers(){
    return membersData.map(
        (item, index) => (
          <MemberCard
            key={item.key}
            img_source={item.img_source}
            mouseIn={() => handleHoverIn(index)}
            mouseOut={() => handleHoverOut()}
            selected={hoverIndex===undefined? undefined : hoverIndex==index}
          />));
  }

  // return the current component
  return (
    <section>
      <h2>Team Members</h2>
      <div className='container' style={{gridTemplateColumns: columnSpanStyle}}>
        {addMembers()}
      </div>
    </section>
  )
}

export default App
