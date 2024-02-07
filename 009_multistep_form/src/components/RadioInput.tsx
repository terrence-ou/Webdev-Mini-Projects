import { planType } from "../routes/SelectPlan";

type inputPropsType = {
  value: planType;
  handleSelection: (value: planType) => void;
  selected: boolean;
};

const RadioInput = ({ value, handleSelection, selected }: inputPropsType) => {
  const borderStyle = selected
    ? "outline-purple bg-very-light-gray"
    : "outline-border-color";

  return (
    <div
      className={
        "box-border w-[138px] h-[183px] hover:cursor-pointer p-4 outline outline-2 outline-border-color rounded-lg" +
        " " +
        borderStyle
      }
      onClick={() => handleSelection(value)}
    >
      <label htmlFor={value} className="flex flex-col">
        <span>{value}</span>
        <span>$9/mo</span>
      </label>
      <input
        type="radio"
        name="plan"
        value={value}
        id={value}
        className="appearance-none"
        checked={selected}
        readOnly
      />
    </div>
  );
};

export default RadioInput;
