import { destinationData, destinationType, fetchData } from "../assets/data";

const Metric = ({ label, data }: { label: string; data: string }) => {
  return (
    <section>
      <span className="text-sh2 tracking-sh2 font-barlow-condensed text-violet">
        {label}
      </span>
      <h5 className="text-h5 font-bellefair">{data}</h5>
    </section>
  );
};

const DestinationIntro = () => {
  const currDestData: destinationType = fetchData(
    destinationData,
    "destinationId",
  );

  return (
    <div className="tablet:text-center">
      <h2 className="text-h2 tablet:text-h2-tablet font-bellefair">
        {currDestData.name.toUpperCase()}
      </h2>
      <p className="text-desc tablet:text-desc-tablet text-violet font-barlow leading-content pb-[54px] tablet:pb-[48px] border-b border-white/20">
        {currDestData.description}
      </p>
      <div className="flex justify-start tablet:justify-center gap-[86px] pt-[28px]">
        <Metric
          label={"AVG. DISTANCE"}
          data={currDestData.distance.toUpperCase()}
        />
        <Metric
          label={"EST. TRAVEL TIME"}
          data={currDestData.travelTime.toUpperCase()}
        />
      </div>
    </div>
  );
};

export default DestinationIntro;
