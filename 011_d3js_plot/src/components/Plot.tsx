import { useState, useCallback } from "react";
import AnimatedCirle from "./AnimatedCircle";
import Axis from "./Axis";
import useInterval from "../hooks/useInterval";
import { coordsType, generateDataset } from "../data";

const interval = 1500;

const Plot = () => {
  const [dataset, setDataset] = useState<coordsType>(generateDataset());

  const handleSetDataset = useCallback(() => setDataset(generateDataset()), []);
  useInterval(handleSetDataset, interval);

  return (
    <>
      {/* <svg viewBox="0 0 100 50" width="300" height="50"> */}
      <svg width="500" height="400">
        {dataset.map(([x, y], i) => (
          <AnimatedCirle key={i} cx={x} cy={y} />
        ))}
        <Axis />
      </svg>
    </>
  );
};

export default Plot;
