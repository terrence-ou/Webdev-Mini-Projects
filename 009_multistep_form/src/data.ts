export type planPricesType = {
  arcade: number;
  advanced: number;
  pro: number;
};

export type addonPricesType = {
  "online-service": number;
  "large-storage": number;
  "customizable-profile": number;
};

export type priceDataType = {
  plan: planPricesType;
  addon: addonPricesType;
};

export type subPeriodType = "monthly" | "yearly";
export type planType = keyof planPricesType;
export type addonType = keyof addonPricesType;

export const priceData: priceDataType = {
  plan: {
    arcade: 9,
    advanced: 12,
    pro: 15,
  },
  addon: {
    "online-service": 1,
    "large-storage": 2,
    "customizable-profile": 2,
  },
};

export type subDetailType = {
  name: string | undefined;
  email: string | undefined;
  phone: string | undefined;
  subPeriod: subPeriodType;
  plan: planType;
  addons: addonType[];
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
