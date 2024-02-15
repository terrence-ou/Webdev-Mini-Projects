export type planPricesType = {
  arcade: number;
  advanced: number;
  pro: number;
};

export type addonItemType = {
  title: string;
  description: string;
  price: number;
};

export type priceDataType = {
  plan: planPricesType;
  addon: addonItemType[];
};

export type subPeriodType = "monthly" | "yearly";
export type planType = keyof planPricesType;

export const priceData: priceDataType = {
  plan: {
    arcade: 9,
    advanced: 12,
    pro: 15,
  },
  addon: [
    {
      title: "online-service",
      description: "Access to multiplayer games",
      price: 1,
    },
    {
      title: "large-storage",
      description: "Extra 1TB of cloud storage",
      price: 2,
    },
    {
      title: "customizable-profile",
      description: "Custom theme on your profile",
      price: 2,
    },
  ],
};

export type subDetailType = {
  name: string | undefined;
  email: string | undefined;
  phone: string | undefined;
  subPeriod: subPeriodType;
  plan: planType;
  addons: string[];
};

export type subDetailsKeyType = keyof subDetailType;

export const subDetailsInitData: subDetailType = {
  name: undefined,
  email: undefined,
  phone: undefined,
  subPeriod: "monthly",
  plan: "arcade",
  addons: [],
};
