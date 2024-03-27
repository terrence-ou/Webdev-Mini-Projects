import { useState } from "react";

type plotConfigType = {
  width: number;
  height: number;
  marginX?: number;
  marginY?: number;
  marginLeft?: number;
  marginRight?: number;
  marginTop?: number;
  marginBottom?: number;
};

type plotSizeStateType = {
  width: number;
  height: number;
  boundedWidth: number;
  boundedHeight: number;
  leftAnchor: number;
  topAnchor: number;
};

const usePlotSize = ({ plotConfig }: { plotConfig: plotConfigType }) => {
  const [plotSize, setPlotSize] = useState<plotSizeStateType>();
};

export default usePlotSize;
