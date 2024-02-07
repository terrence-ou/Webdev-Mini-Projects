import { useState } from "react";

import RadioInput from "../components/RadioInput";
import Title from "../components/Title";

type currPlanType = "arcade" | "advanced" | "pro";

const SelectPlan = () => {
  const [currPlan, setCurrPlan] = useState<currPlanType>("arcade");
  return (
    <div>
      <Title
        title="Select your plan"
        description="You have the option of monthly or yearly billing."
      />
      <form className="flex flex-row justify-between">
        <RadioInput value="arcade" />
        <RadioInput value="advanced" />
        <RadioInput value="pro" />
      </form>
    </div>
  );
};

export default SelectPlan;
