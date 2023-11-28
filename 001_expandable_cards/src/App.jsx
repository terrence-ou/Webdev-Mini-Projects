/* eslint-disable react/react-in-jsx-scope */
import { useState } from "react";
import MemberCard from "./components/MemberCard";
import MembersContainer from "./components/MembersContainer.jsx";
import MemberInfo from "./components/MemberInfo.jsx";

function App() {
  // handling card expansion
  const [hoverIndex, setHoverIndex] = useState(undefined);

  function handleHoverIn(index) {
    setHoverIndex(index);
  }

  function handleHoverOut() {
    setHoverIndex(undefined);
  }


  // return the current component
  return (
    <section>
      <h1>Crew Members</h1>
      <MembersContainer hoverIndex={hoverIndex}
                        handleHoverIn={handleHoverIn}
                        handleHoverOut={handleHoverOut}/>
      <MemberInfo hoverIndex={hoverIndex}/>
    </section>
  );
}

export default App;
