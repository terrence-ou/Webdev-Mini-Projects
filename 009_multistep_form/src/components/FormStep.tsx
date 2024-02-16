import { useState, useEffect } from "react";

type FormStepPropsType = {
  index: number;
  text: string;
  isActive: boolean;
};

const FormStep = ({ index, text, isActive = false }: FormStepPropsType) => {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  // when window is being resized, updated the windowWidth state
  useEffect(function getWindowSize() {
    const handleResize = (): void => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const activeStyle = "bg-sky-blue text-denim";
  const inactiveStyle = "border-white border text-white";
  const currStyle = isActive ? activeStyle : inactiveStyle;
  return (
    <div className="flex items-center gap-4 text-white text-md font-bold">
      <p
        className={
          "w-8 h-8 leading-8 rounded-full text-center font-bold" +
          " " +
          currStyle
        }
      >
        {index}
      </p>
      {windowWidth >= 970 && (
        <p className="flex flex-col">
          <span className="font-normal text-sm text-light-blue">
            STEP {index}
          </span>
          <span>{text.toUpperCase()}</span>
        </p>
      )}
    </div>
  );
};

export default FormStep;
