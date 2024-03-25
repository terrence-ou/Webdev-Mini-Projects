import { useState } from "react";
import Axis from "./Axis";
import "./styles/scalableAxis.css";

const ScalableAxis = () => {
  const [domain, setDomain] = useState<number[]>([0, 100]);
  const handleDomainChange = (index: number, value: number) => {
    setDomain((prevDomain) => {
      const newDomain = [...prevDomain];
      newDomain[index] = value;
      return newDomain;
    });
  };

  const [range, setRange] = useState<number[]>([10, 290]);
  const handleRangeChange = (index: number, value: number) => {
    setRange((prevRange) => {
      const newRange = [...prevRange];
      newRange[index] = value;
      return newRange;
    });
  };

  return (
    <div className="scalable-axis">
      <div className="input-group">
        <p>Domain: </p>
        {"["}
        <input
          type="number"
          min={0}
          max={20}
          defaultValue={domain[0]}
          onChange={(event) => handleDomainChange(0, +event.target.value)}
        />
        <input
          type="number"
          min={100}
          max={200}
          defaultValue={domain[1]}
          onChange={(event) => handleDomainChange(1, +event.target.value)}
        />
        {"]"}
      </div>
      <div className="input-group">
        <p>Range: </p>
        {"["}
        <input
          type="number"
          min={10}
          max={50}
          defaultValue={range[0]}
          onChange={(event) => handleRangeChange(0, +event.target.value)}
        />
        <input
          type="number"
          min={280}
          max={400}
          defaultValue={range[1]}
          onChange={(event) => handleRangeChange(1, +event.target.value)}
        />
        {"]"}
      </div>
      <Axis domain={domain} range={range} />
    </div>
  );
};

export default ScalableAxis;
