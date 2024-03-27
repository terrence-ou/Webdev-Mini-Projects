import { plotParameters } from "./ResizablePlot";
import Slider from "./Slider";

interface SliderGroupPropsType {
  sizing: plotParameters;
  handleUpdateSizing: (name: keyof plotParameters, value: string) => void;
}

const SliderGroup = ({ sizing, handleUpdateSizing }: SliderGroupPropsType) => {
  return (
    <div className="sliders">
      <div className="slider-group">
        <Slider
          name="width"
          range={[300, 500]}
          defaultValue={sizing.width}
          handleUpdateSizing={handleUpdateSizing}
        />
        <Slider
          name="height"
          range={[200, 400]}
          defaultValue={sizing.height}
          handleUpdateSizing={handleUpdateSizing}
        />
      </div>
      <div className="slider-group">
        <Slider
          name="marginX"
          range={[0, 20]}
          defaultValue={sizing.marginX ? sizing.marginX : 0}
          handleUpdateSizing={handleUpdateSizing}
        />
        <Slider
          name="marginY"
          range={[0, 20]}
          defaultValue={sizing.marginY ? sizing.marginY : 0}
          handleUpdateSizing={handleUpdateSizing}
        />
      </div>
      <div className="slider-group">
        <Slider
          name="marginLeft"
          range={[0, 20]}
          defaultValue={sizing.marginLeft ? sizing.marginLeft : 0}
          handleUpdateSizing={handleUpdateSizing}
        />
        <Slider
          name="marginRight"
          range={[0, 20]}
          defaultValue={sizing.marginRight ? sizing.marginRight : 0}
          handleUpdateSizing={handleUpdateSizing}
        />
      </div>
      <div className="slider-group">
        <Slider
          name="marginTop"
          range={[0, 20]}
          defaultValue={sizing.marginTop ? sizing.marginTop : 0}
          handleUpdateSizing={handleUpdateSizing}
        />
        <Slider
          name="marginBottom"
          range={[0, 20]}
          defaultValue={sizing.marginBottom ? sizing.marginBottom : 0}
          handleUpdateSizing={handleUpdateSizing}
        />
      </div>
    </div>
  );
};

export default SliderGroup;
