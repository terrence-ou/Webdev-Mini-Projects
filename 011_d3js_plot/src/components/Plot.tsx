import { useState, useCallback } from "react";
import AnimatedCirle from "./AnimatedCircle";
import useInterval from "../hooks/useInterval";
import { coordsType, generateDataset } from "../data";

const interval = 1000;

const Plot = () => {
  const [dataset, setDataset] = useState<coordsType>(generateDataset());

  const handleSetDataset = useCallback(() => setDataset(generateDataset()), []);
  useInterval(handleSetDataset, interval);

  return (
    <svg viewBox="0 0 100 50">
      {dataset.map(([x, y], i) => (
        <AnimatedCirle key={i} cx={x} cy={y} />
      ))}
    </svg>
  );
};

export default Plot;
