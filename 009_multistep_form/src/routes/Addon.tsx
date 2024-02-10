import { useState } from "react";

import Title from "../components/Title";
import CheckboxInput from "../components/CheckboxInput";

import { addonType } from "../data";

const descriptions: { title: addonType; description: string }[] = [
  { title: "online-service", description: "Access to multiplayer games" },
  { title: "large-storage", description: "Extra 1TB of cloud storage" },
  {
    title: "customizable-profile",
    description: "Custom theme on your profile",
  },
];

const Addon = () => {
  const [selected, setSelected] = useState<addonType[]>([]);
  const handleSelection = (item: addonType) => {
    setSelected((prevSelected) => {
      if (prevSelected.includes(item)) {
        return prevSelected.filter((selection) => selection !== item);
      } else {
        return [...prevSelected, item];
      }
    });
  };
  return (
    <div>
      <Title
        title="Pick add-ons"
        description="Add-ons help enhance your gaming experience"
      />
      {descriptions.map((item) => {
        return (
          <CheckboxInput
            key={item.title}
            title={item.title}
            description={item.description}
            checked={selected.includes(item.title)}
            handleSelection={handleSelection}
          />
        );
      })}
    </div>
  );
};

export default Addon;
