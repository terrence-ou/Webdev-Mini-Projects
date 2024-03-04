import { useState } from "react";

import Header from "./components/Header";
import ArtworkInfo from "./components/ArtworkInfo";
import Navigation from "./components/Navigation";
import Gallery from "./components/Gallery";

import data from "./assets/data.json";

function App() {
  const [slideshowMode, setSlideshowMode] = useState<boolean>(false);
  const [slideIndex, setSlideIndex] = useState<number>(0);

  // Switch between the slideshow mode and the gallery mode
  const toggleSlideshowMode = () => {
    setSlideshowMode((prevState) => !prevState);
    setSlideIndex(0);
  };

  // Move to the next slide
  const setNextIndex = () => {
    setSlideIndex((prevIndex) => Math.min(prevIndex + 1, data.length - 1));
  };
  // Move to the previous slide
  const setPrevIndex = () => {
    setSlideIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  // Select a specific artwork and move to the slideshow mode on the gallery mode
  const handleSelectSlide = (index: number) => {
    setSlideIndex(index);
    setSlideshowMode(true);
  };

  return (
    <main className="flex flex-col justify-between h-dvh">
      <Header onClick={toggleSlideshowMode} isSlideshow={slideshowMode} />
      {!slideshowMode && <Gallery handleSelectSlide={handleSelectSlide} />}
      {slideshowMode && (
        <>
          <ArtworkInfo index={slideIndex} />
          <Navigation
            index={slideIndex}
            setNextIndex={setNextIndex}
            setPrevIndex={setPrevIndex}
          />
        </>
      )}
    </main>
  );
}

export default App;
