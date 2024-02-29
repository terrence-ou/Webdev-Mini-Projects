import { useState } from "react";

import Header from "./components/Header";

// import data from "./assets/data.json";

function App() {
  const [slideshowMode, setSlideshowMode] = useState<boolean>(false);
  const toggleSlideshowMode = () => {
    setSlideshowMode((prevState) => !prevState);
  };
  return (
    <>
      <Header onClick={toggleSlideshowMode} isSlideshow={slideshowMode} />
    </>
  );
}

export default App;
