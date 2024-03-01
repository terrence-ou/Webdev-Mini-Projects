import { useState } from "react";

import Header from "./components/Header";
import Navigation from "./components/Navigation";

import data from "./assets/data.json";

function App() {
  const [slideshowMode, setSlideshowMode] = useState<boolean>(false);
  const toggleSlideshowMode = () => {
    setSlideshowMode((prevState) => !prevState);
  };
  const [slideIndex, setSlideIndex] = useState<number>(0);
  // const handleSetSlideIndex = (index: number) => {
  //   setSlideIndex(index);
  // };
  const setNextIndex = () => {
    setSlideIndex((prevIndex) => Math.min(prevIndex + 1, data.length - 1));
  };
  const setPrevIndex = () => {
    setSlideIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  return (
    <main className="flex flex-col justify-between h-dvh">
      <Header onClick={toggleSlideshowMode} isSlideshow={slideshowMode} />
      <Navigation
        index={slideIndex}
        setNextIndex={setNextIndex}
        setPrevIndex={setPrevIndex}
      />
    </main>
  );
}

export default App;
