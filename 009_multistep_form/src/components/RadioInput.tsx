import { planType } from "../routes/SelectPlan";

import iconArcade from "../assets/icon-arcade.svg";
import iconAdvanced from "../assets/icon-advanced.svg";
import iconPro from "../assets/icon-pro.svg";

import { subPlanType } from "../routes/SelectPlan";

type inputPropsType = {
  value: planType;
  subPlan: subPlanType;
  handleChangePlan: (value: planType) => void;
  selected: boolean;
};

const getIcon = (value: planType): string => {
  switch (value) {
    case "arcade":
      return iconArcade;
    case "advanced":
      return iconAdvanced;
    case "pro":
      return iconPro;
    default:
      return iconArcade;
  }
};

const RadioInput = ({
  value,
  subPlan,
  handleChangePlan,
  selected,
}: inputPropsType) => {
  const borderStyle = selected
    ? "outline-purple bg-very-light-gray"
    : "outline-border-color";

  const planIcon: string = getIcon(value);

  return (
    <div
      className={
        "flex flex-col justify-between box-border w-[138px] h-[183px] group hover:cursor-pointer px-4 py-5 outline outline-2 outline-border-color rounded-lg" +
        " " +
        borderStyle
      }
      onClick={() => handleChangePlan(value)}
    >
      <img src={planIcon} alt={value + " " + "plan icon"} className="w-10" />
      <fieldset>
        <input
          type="radio"
          name="plan"
          value={value}
          id={value}
          className="appearance-none group-hover:cursor-pointer"
          checked={selected}
          readOnly
        />
        <label
          htmlFor={value}
          className="flex flex-col gap-[5px] group-hover:cursor-pointer"
        >
          <span className="font-medium text-lg text-denim">
            {value.charAt(0).toUpperCase() + value.slice(1)}
          </span>
          <span className="text-md text-grey">$9/mo</span>
          {subPlan.billPeriod === "yearly" && (
            <span className="text-sm text-denim">2 months free</span>
          )}
        </label>
      </fieldset>
    </div>
  );
};

export default RadioInput;
