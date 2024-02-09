import Title from "../components/Title";
import DataRow from "../components/DataRow";

const Summary = () => {
  return (
    <div>
      <Title
        title="Finishing up"
        description="Double-check everything looks OK before confirming."
      />
      <section className="bg-very-light-gray py-3 px-6">
        <div className="box-border pb-6 border-b border-b-grey/20">
          <DataRow category="plan" label="Arcade (Monthly)" price="$9/mo" />
        </div>
        <div className="flex flex-col gap-4 my-4">
          <DataRow category="add-on" label="Online service" price="+$1/mo" />
          <DataRow category="add-on" label="Large storage" price="+$2/mo" />
        </div>
      </section>
      <section className="mt-6 px-6">
        <DataRow category="total" label="Total (per month)" price="+$12/mo" />
      </section>
    </div>
  );
};

export default Summary;
