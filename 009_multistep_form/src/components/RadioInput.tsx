import { planPricesType, priceData, planType, subPeriodType } from "../data";

import iconArcade from "../assets/icon-arcade.svg";
import iconAdvanced from "../assets/icon-advanced.svg";
import iconPro from "../assets/icon-pro.svg";

type inputPropsType = {
  value: planType | string;
  subPeriod: subPeriodType;
  handleChangePlan: (value: planType) => void;
  selected: boolean;
};

const planPrices: planPricesType = priceData.plan;

function getIcon(value: planType): string {
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
}

const RadioInput = ({
  value,
  subPeriod,
  handleChangePlan,
  selected,
}: inputPropsType) => {
  const borderStyle = selected
    ? "outline-purple bg-very-light-gray"
    : "outline-border-color";

  const planIcon: string = getIcon(value as planType);
  let planPrice: number = planPrices[value as planType];
  if (subPeriod === "yearly") planPrice *= 10;
  const priceTag: string =
    subPeriod === "yearly" ? `$${planPrice}/yr` : `$${planPrice}/mo`;

  return (
    <div
      className={
        "flex flex-col mobile:flex-row mobile:gap-4 justify-between mobile:justify-start box-border w-[138px] mobile:w-full h-[183px] mobile:h-full group hover:cursor-pointer px-4 py-5 mobile:py-3 outline outline-2 outline-border-color rounded-lg" +
        " " +
        borderStyle
      }
      onClick={() => handleChangePlan(value as planType)}
    >
      <img src={planIcon} alt={value + " " + "plan icon"} className="w-10" />
      <fieldset>
        <input
          type="radio"
          name="plan"
          value={value}
          id={value}
          className="appearance-none group-hover:cursor-pointer hidden"
          checked={selected}
          readOnly
        />
        <label
          htmlFor={value}
          className="flex flex-col gap-[5px] group-hover:cursor-pointer"
        >
          <span className="font-medium text-lg  text-denim">
            {value.charAt(0).toUpperCase() + value.slice(1)}
          </span>
          <span className="text-md text-grey">{priceTag}</span>
          {subPeriod === "yearly" && (
            <span className="text-sm text-denim">2 months free</span>
          )}
        </label>
      </fieldset>
    </div>
  );
};

export default RadioInput;
