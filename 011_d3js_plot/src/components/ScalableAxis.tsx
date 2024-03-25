import { useState } from "react";
import Axis from "./Axis";
import "./styles/scalableAxis.css";
import NumberInput from "./NumberInput";

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
        <NumberInput
          range={[0, 20]}
          defaultValue={domain[0]}
          callbackFn={handleDomainChange}
          index={0}
        />
        <NumberInput
          range={[100, 200]}
          defaultValue={domain[1]}
          callbackFn={handleDomainChange}
          index={1}
        />
        {"]"}
      </div>
      <div className="input-group">
        <p>Range: </p>
        {"["}
        <NumberInput
          range={[10, 50]}
          defaultValue={range[0]}
          callbackFn={handleRangeChange}
          index={0}
        />
        <NumberInput
          range={[200, 400]}
          defaultValue={range[1]}
          callbackFn={handleRangeChange}
          index={1}
        />
        {"]"}
      </div>
      <Axis domain={domain} range={range} />
    </div>
  );
};

export default ScalableAxis;
