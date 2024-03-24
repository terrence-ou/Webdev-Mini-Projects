import { useMemo } from "react";
import * as d3 from "d3";

const Axis = () => {
  const ticks = useMemo(() => {
    const xScale = d3.scaleLinear().domain([0, 100]).range([10, 490]);
    return xScale.ticks().map((value) => ({ value, xOffset: xScale(value) }));
  }, []);

  return (
    // <svg>
    <>
      <path d="M 10 380 H 490" stroke="currentColor" />
      {ticks.map(({ value, xOffset }) => (
        <g key={value} transform={`translate(${xOffset}, 380)`}>
          <line y2="6" stroke="currentColor"></line>
          <text
            style={{
              fontSize: "12px",
              fontWeight: "bold",
              textAnchor: "middle",
              transform: "translateY(20px)",
            }}
          >
            {value}
          </text>
        </g>
      ))}
    </>
    // </svg>
  );
};

export default Axis;
