import { useState, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import { subscriptionFormActions } from "../store/subForm";

import Title from "../components/Title";
import CheckboxInput from "../components/CheckboxInput";

import { priceData } from "../data";
import { RootState } from "../store";

const Addon = () => {
  const dispatch = useAppDispatch();
  const currSelections = useAppSelector(
    (state: RootState) => state.subscriptionFormReducer.addons
  );
  const currentSubPeriod = useAppSelector(
    (state: RootState) => state.subscriptionFormReducer.subPeriod
  );
  const [selected, setSelected] = useState<string[]>(currSelections);
  const handleSelection = (item: string) => {
    setSelected((prevSelected) => {
      let newSelected = [...prevSelected];
      if (prevSelected.includes(item)) {
        newSelected = newSelected.filter((selection) => selection !== item);
      } else {
        newSelected.push(item);
      }
      return newSelected;
    });
  };

  useEffect(
    function updateAddons() {
      dispatch(subscriptionFormActions.updateAddons(selected));
    },
    [dispatch, selected]
  );

  return (
    <div>
      <Title
        title="Pick add-ons"
        description="Add-ons help enhance your gaming experience"
      />
      {priceData.addon.map((item) => {
        const price =
          currentSubPeriod === "monthly" ? item.price : item.price * 10;
        const period = currentSubPeriod === "monthly" ? "mo" : "yr";
        return (
          <CheckboxInput
            key={item.title}
            title={item.title}
            description={item.description}
            checked={selected.includes(item.title)}
            priceTag={`+${price}/${period}`}
            handleSelection={handleSelection}
          />
        );
      })}
    </div>
  );
};

export default Addon;
