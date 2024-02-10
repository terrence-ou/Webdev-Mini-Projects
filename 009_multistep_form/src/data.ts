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
