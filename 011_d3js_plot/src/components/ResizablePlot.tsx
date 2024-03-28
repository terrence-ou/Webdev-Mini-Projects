import { useState } from "react";
import SliderGroup from "./SliderGroup";
import Axis from "./Axis";

export interface plotParameters {
  width: number;
  height: number;
  marginX: number;
  marginY: number;
  marginLeft?: number;
  marginRight?: number;
  marginTop?: number;
  marginBottom?: number;
}

const ResizablePlot = () => {
  const [sizing, setSizing] = useState<plotParameters>({
    width: 400,
    height: 300,
    marginX: 35,
    marginY: 35,
  });

  const handleUpdateSizing = (name: keyof plotParameters, value: string) => {
    setSizing((prevSizing) => ({ ...prevSizing, [name]: +value }));
  };

  // convert the sizing state to the plot-compatible dimension configuration
  const getPlotSizing = () => {
    const mLeft =
      sizing.marginLeft !== undefined ? sizing.marginLeft : sizing.marginX;
    const mRight =
      sizing.marginRight !== undefined ? sizing.marginRight : sizing.marginX;
    const mTop =
      sizing.marginTop !== undefined ? sizing.marginTop : sizing.marginY;
    const mBottom =
      sizing.marginBottom !== undefined ? sizing.marginBottom : sizing.marginY;
    const boundedWidth = sizing.width - mLeft - mRight;
    const boundedHeight = sizing.height - mTop - mBottom;
    const cornerTop = mTop;
    const cornerLeft = mLeft;
    return { boundedWidth, boundedHeight, cornerTop, cornerLeft };
  };

  // get the plot-compatible sizing
  const plotSizing = getPlotSizing();

  return (
    <div>
      <SliderGroup sizing={sizing} handleUpdateSizing={handleUpdateSizing} />
      <svg width={sizing.width} height={sizing.height} className="plot__sizing">
        <g>
          <text
            fill="currentColor"
            style={{
              textAnchor: "start",
              transform: "translateX(10px) translateY(20px)",
            }}
          >
            svg size
          </text>
          <rect
            width={sizing.width}
            height={sizing.height}
            fill="lightgray"
            opacity={0.2}
          />
        </g>
        <g
          transform={`translate(${plotSizing.cornerLeft}, ${plotSizing.cornerTop})`}
        >
          <rect
            fill="lavender"
            opacity={0.3}
            width={plotSizing.boundedWidth}
            height={plotSizing.boundedHeight}
          />
          <text
            fill="currentColor"
            style={{
              textAnchor: "start",
              transform: "translateX(10px) translateY(20px)",
            }}
          >
            actual plot size
          </text>
        </g>
        <Axis
          range={[
            plotSizing.cornerLeft,
            plotSizing.cornerLeft + plotSizing.boundedWidth,
          ]}
          translateY={plotSizing.cornerTop + plotSizing.boundedHeight}
        />
      </svg>
    </div>
  );
};

export default ResizablePlot;
