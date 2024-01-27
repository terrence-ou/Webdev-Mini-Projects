import { techData, techType, fetchData } from "../assets/data";

const TechnologyIntro = () => {
  const currTechData: techType = fetchData(techData, "techId");
  return (
    <section>
      <p className="font-barlow-condensed tracking-nav text-violet">
        THE TERMINOLOGY...
      </p>
      <h3 className="font-bellefair text-h3">
        {currTechData.name.toUpperCase()}
      </h3>
      <p className="text-violet font-barlow leading-content max-w-[445px] mt-[17px]">
        {currTechData.description}
      </p>
    </section>
  );
};

export default TechnologyIntro;
