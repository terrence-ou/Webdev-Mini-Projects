type inputType = {
  range?: number[];
  defaultValue?: number;
  callbackFn: (index: number, value: number) => void;
  index: number;
};

const NumberInput = ({
  range = [0, 100],
  defaultValue = 0,
  callbackFn,
  index,
}: inputType) => {
  return (
    <input
      type="number"
      min={range[0]}
      max={range[1]}
      defaultValue={defaultValue}
      onChange={(event) => callbackFn(index, +event.target.value)}
    />
  );
};

export default NumberInput;
