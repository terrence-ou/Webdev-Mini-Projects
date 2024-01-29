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
    <div className="tablet:text-center mobile:text-center">
      <h2 className="text-h2 tablet:text-h2-tablet mobile:text-h2-mobile mobile:mt-5 font-bellefair">
        {currDestData.name.toUpperCase()}
      </h2>
      <p className="text-desc tablet:text-desc-tablet mobile:text-desc-mobile text-violet font-barlow leading-content mobile:leading-content-mobile pb-[54px] tablet:pb-[48px] mobile:pb-[20px] border-b border-white/20">
        {currDestData.description}
      </p>
      <div className="flex mobile:flex-col desktop:justify-start justify-center gap-[86px] mobile:gap-[32px] pt-[28px]">
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
