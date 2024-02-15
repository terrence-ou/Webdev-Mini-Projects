import { useAppSelector } from "../store/hooks";
import { RootState } from "../store";

import { priceData } from "../data";

import Title from "../components/Title";
import DataRow from "../components/DataRow";

function toCapital(text: string) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

const Summary = () => {
  const plan = useAppSelector(
    (state: RootState) => state.subscriptionFormReducer.plan
  );
  const period = useAppSelector(
    (state: RootState) => state.subscriptionFormReducer.subPeriod
  );
  const addons = useAppSelector(
    (state: RootState) => state.subscriptionFormReducer.addons
  );

  const tag = period === "monthly" ? "/mo" : "/yr";
  const planPrice =
    period === "monthly" ? priceData.plan[plan] : priceData.plan[plan] * 10;

  let totalPrice = priceData.plan[plan];
  priceData.addon.forEach((addon) => {
    if (addons.includes(addon.title)) {
      totalPrice += addon.price;
    }
  });
  if (period === "yearly") totalPrice *= 10;

  return (
    <div>
      <Title
        title="Finishing up"
        description="Double-check everything looks OK before confirming."
      />
      <section className="bg-very-light-gray py-3 px-6">
        <div className="box-border pb-6 border-b border-b-grey/20">
          <DataRow
            category="plan"
            label={`${toCapital(plan)} (${toCapital(period)})`}
            price={`${planPrice}${tag}`}
          />
        </div>
        <div className="flex flex-col gap-4 my-4">
          {addons.length === 0 && (
            <DataRow category="add-on" label="no add-ons" price="" />
          )}
          {addons.map((item) => {
            const label = toCapital(item.split("-").join(" "));
            let addonPrice = priceData.addon.filter(
              (data) => data.title === item
            )[0].price;
            if (period === "yearly") addonPrice *= 10;
            return (
              <DataRow
                key={label}
                category="add-on"
                label={label}
                price={`+$${addonPrice}${tag}`}
              />
            );
          })}
        </div>
      </section>
      <section className="mt-6 px-6">
        <DataRow
          category="total"
          label={`Total (per ${period === "monthly" ? "month" : "year"})`}
          price={`$${totalPrice}${tag}`}
        />
      </section>
    </div>
  );
};

export default Summary;
