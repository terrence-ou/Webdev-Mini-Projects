import { useMemo } from "react";
import * as d3 from "d3";

type AxisType = {
  domain?: number[];
  range?: number[];
  translateX?: number;
  translateY?: number;
};

const Axis = ({
  domain = [0, 100],
  range = [10, 490],
  translateX = 0,
  translateY = 0,
}: AxisType) => {
  // Compute the axis ticks
  const ticks = useMemo(() => {
    const xScale = d3.scaleLinear().domain(domain).range(range);
    const width = range[1] - range[0];
    const pixelPerTick = 30;
    const numberOfTickTarget = Math.max(1, Math.floor(width / pixelPerTick));
    return xScale
      .ticks(numberOfTickTarget)
      .map((value) => ({ value, xOffset: xScale(value) }));
  }, [domain, range]);

  return (
    <>
      <path
        d={`M ${range[0] + translateX} ${translateY + 6} v -6 H ${range[1]} v 6`}
        fill="none"
        stroke="currentColor"
      />
      {ticks.map(({ value, xOffset }) => (
        <g key={value} transform={`translate(${xOffset}, ${translateY})`}>
          <line y2="6" stroke="currentColor" />
          <text
            fill="currentColor"
            style={{
              fontSize: "10px",
              textAnchor: "middle",
              transform: "translateY(20px)",
            }}
          >
            {value}
          </text>
        </g>
      ))}
    </>
  );
};

export default Axis;
