import { techData, techType, fetchData } from "../assets/data";

const TechnologyIntro = () => {
  const currTechData: techType = fetchData(techData, "techId");
  return (
    <section className="tablet:text-center">
      <p className="font-barlow-condensed text-nav tracking-nav text-violet">
        THE TERMINOLOGY...
      </p>
      <h3 className="font-bellefair text-h3 tablet:text-h3-tablet">
        {currTechData.name.toUpperCase()}
      </h3>
      <p className="text-violet text-desc tablet:text-desc-tablet font-barlow leading-content tablet:leading-content-tablet max-w-[445px] mt-[17px]">
        {currTechData.description}
      </p>
    </section>
  );
};

export default TechnologyIntro;
