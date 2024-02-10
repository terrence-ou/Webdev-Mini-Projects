import { useState } from "react";

import RadioInput from "../components/RadioInput";
import Title from "../components/Title";
import Toggle from "../components/Toggle";

import { priceData, subPeriodType, planType } from "../data";

const plans: string[] = Object.keys(priceData.plan);

export type subPlanType = {
  plan: planType;
  billPeriod: subPeriodType;
};

// Body of Select Plan Element
const SelectPlan = () => {
  const [subPlan, setSubPlan] = useState<subPlanType>({
    plan: "arcade",
    billPeriod: "monthly",
  });

  const handleChangePlan = (plan: planType) => {
    setSubPlan((prevSubPlan) => ({ ...prevSubPlan, plan }));
  };

  const handleChangeBill = () => {
    setSubPlan((prevSubPlan) => {
      const billPeriod =
        prevSubPlan.billPeriod === "monthly" ? "yearly" : "monthly";
      return { ...prevSubPlan, billPeriod };
    });
  };

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
              subPeriod={subPlan.billPeriod}
              handleChangePlan={handleChangePlan}
              selected={subPlan.plan === value}
            />
          );
        })}
      </form>
      <Toggle subPlan={subPlan} handleChangeBill={handleChangeBill} />
    </div>
  );
};

export default SelectPlan;
