import { useState } from "react";
import SliderGroup from "./SliderGroup";

export interface plotParameters {
  width: number;
  height: number;
  marginX?: number;
  marginY?: number;
  marginLeft?: number;
  marginRight?: number;
  marginTop?: number;
  marginBotton?: number;
}

const ResizablePlot = () => {
  const [sizing, setSizing] = useState<plotParameters>({
    width: 400,
    height: 300,
  });

  const handleUpdateSizing = (name: keyof plotParameters, value: string) => {
    setSizing((prevSizing) => ({ ...prevSizing, [name]: +value }));
  };

  return (
    <SliderGroup sizing={sizing} handleUpdateSizing={handleUpdateSizing} />
  );
};

export default ResizablePlot;
