import { useState, useCallback } from "react";
import AnimatedCirle from "./AnimatedCircle";
import Axis from "./Axis";
import useInterval from "../hooks/useInterval";
import { coordsType, generateDataset } from "../data";

const interval = 1500;

const ScatterPlot = () => {
  const [dataset, setDataset] = useState<coordsType>(generateDataset());

  const handleSetDataset = useCallback(() => setDataset(generateDataset()), []);
  useInterval(handleSetDataset, interval);

  return (
    <svg width="500" height="400">
      {dataset.map(([x, y], i) => (
        <AnimatedCirle key={i} cx={x} cy={y} />
      ))}
      <Axis translateY={380} />
    </svg>
  );
};

export default ScatterPlot;
