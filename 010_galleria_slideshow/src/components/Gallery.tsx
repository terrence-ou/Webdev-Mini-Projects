// import { useEffect, useState } from "react";
import data from "../assets/data.json";
import Thumbnail from "../UI/Thumbnail";
const Gallery = () => {
  // const [galleryHeight, setGalleryHeight] = useState<number>(1500);
  // useEffect(function () {
  //   const updateWindowWidth = () => {
  //     const width = window.innerWidth;
  //     if (width <= 1400) setGalleryHeight(2200);
  //     else setGalleryHeight(1500);
  //   };
  //   window.addEventListener("resize", updateWindowWidth);
  //   return () => window.removeEventListener("resize", updateWindowWidth);
  // });
  return (
    <div
      className="flex flex-col flex-wrap m-10 gap-10"
      style={{ height: "1500px" }}
    >
      {data.map((_, index) => {
        return <Thumbnail key={index} index={index} />;
      })}
    </div>
  );
};

export default Gallery;
