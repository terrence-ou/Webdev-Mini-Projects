import { useState, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import { subscriptionFormActions } from "../store/subForm";
import { priceData, subPeriodType, planType } from "../data";
import { RootState } from "../store";

import RadioInput from "../components/RadioInput";
import Title from "../components/Title";
import Toggle from "../components/Toggle";

const plans: string[] = Object.keys(priceData.plan);

export type subPlanType = {
  plan: planType;
  billPeriod: subPeriodType;
};

// Body of Select Plan Element
const SelectPlan = () => {
  const currPlan = useAppSelector(
    (state: RootState) => state.subscriptionFormReducer.plan
  );
  const currBillPeriod = useAppSelector(
    (state: RootState) => state.subscriptionFormReducer.subPeriod
  );
  const dispatch = useAppDispatch();

  const [subPlan, setSubPlan] = useState<subPlanType>({
    plan: currPlan,
    billPeriod: currBillPeriod,
  });

  const handleChangePlan = (plan: planType) => {
    setSubPlan((prevSubPlan) => ({ ...prevSubPlan, plan }));
    dispatch(subscriptionFormActions.updatePlan(plan));
  };

  const handleChangeBill = () => {
    setSubPlan((prevSubPlan) => {
      const billPeriod =
        prevSubPlan.billPeriod === "monthly" ? "yearly" : "monthly";
      return { ...prevSubPlan, billPeriod };
    });
  };

  useEffect(
    function updatePlanNPeriod() {
      dispatch(subscriptionFormActions.updatePlan(subPlan.plan));
      dispatch(subscriptionFormActions.updateSubPeriod(subPlan.billPeriod));
    },
    [dispatch, subPlan]
  );

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
