import { useState } from "react";

import RadioInput from "../components/RadioInput";
import Title from "../components/Title";

export type currPlanType = "arcade" | "advanced" | "pro";
const plans = ["arcade", "advanced", "pro"] as const;
export type planType = (typeof plans)[number];

const SelectPlan = () => {
  const [currPlan, setCurrPlan] = useState<currPlanType>("arcade");
  // console.log(currPlan);
  const handleSetCurrPlan = (value: planType) => setCurrPlan(value);
  return (
    <div>
      <Title
        title="Select your plan"
        description="You have the option of monthly or yearly billing."
      />
      <form className="flex flex-row justify-between">
        {plans.map((value) => {
          return (
            <RadioInput
              key={value}
              value={value}
              handleSelection={handleSetCurrPlan}
              selected={currPlan === value}
            />
          );
        })}
      </form>
    </div>
  );
};

export default SelectPlan;
