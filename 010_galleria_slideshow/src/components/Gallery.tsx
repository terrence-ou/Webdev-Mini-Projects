import { useState, useEffect } from "react";
import data from "../assets/data.json";
import Thumbnail from "../UI/Thumbnail";

const getNumColumns = (): number => {
  const width = window.innerWidth;
  if (width <= 650) {
    return 1;
  } else if (width <= 1000) {
    return 2;
  } else if (width <= 1280) {
    return 3;
  }
  return 4;
};

const Gallery = ({
  handleSelectSlide,
}: {
  handleSelectSlide: (index: number) => void;
}) => {
  const [columns, setColumns] = useState<number>(getNumColumns());

  useEffect(() => {
    const updateWindowWidth = () => {
      const numCols = getNumColumns();
      setColumns(numCols);
    };
    window.addEventListener("resize", updateWindowWidth);
    return () => window.removeEventListener("resize", updateWindowWidth);
  }, []);

  const groupInputs = () => {
    const inputs: number | number[][] = [];
    for (let i = 0; i < columns; i++) {
      inputs.push([]);
    }
    data.forEach((_, index) => {
      inputs[index % columns].push(index);
    });
    return inputs;
  };

  let gap = "gap-10";
  if (columns <= 2) gap = "gap-5";

  const inputs = groupInputs();
  return (
    <div className={"flex m-10" + " " + gap}>
      {inputs.map((arr) => {
        const key = Math.random().toFixed(4);
        return (
          <div key={key} className={"w-full flex flex-col" + " " + gap}>
            {arr.map((val) => {
              const thumnailKey = Math.random().toFixed(4);
              return (
                <Thumbnail
                  key={thumnailKey}
                  index={val}
                  onClick={() => handleSelectSlide(val)}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Gallery;
