import { plotParameters } from "./ResizablePlot";

type nameType = keyof plotParameters;

interface sliderPropsType {
  name: nameType;
  defaultValue: number;
  range: number[];
  handleUpdateSizing: (name: nameType, value: string) => void;
}

const Slider = ({
  name,
  defaultValue,
  range,
  handleUpdateSizing,
}: sliderPropsType) => {
  return (
    <div className="slider">
      <label>{name}</label>
      <input
        type="range"
        min={range[0]}
        max={range[1]}
        name={name}
        value={defaultValue}
        onChange={(event) => handleUpdateSizing(name, event.target.value)}
      />
    </div>
  );
};

export default Slider;
