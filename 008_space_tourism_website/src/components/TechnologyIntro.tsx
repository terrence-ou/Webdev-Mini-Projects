import { techData, techType, fetchData } from "../assets/data";

const TechnologyIntro = () => {
  const currTechData: techType = fetchData(techData, "techId");
  return (
    <section className="desktop:text-start text-center">
      <p className="font-barlow-condensed text-nav mobile:text-nav-mobile tracking-nav mobile:tracking-nav-mobile text-violet">
        THE TERMINOLOGY...
      </p>
      <h3 className="font-bellefair text-h3 tablet:text-h3-tablet mobile:text-h3-mobile">
        {currTechData.name.toUpperCase()}
      </h3>
      <p className="text-violet text-desc tablet:text-desc-tablet mobile:text-desc-mobile font-barlow leading-content tablet:leading-content-tablet mobile:leading-content-mobile max-w-[445px] mobile:w-[327px] mobile:pb-[30px] mt-[17px]">
        {currTechData.description}
      </p>
    </section>
  );
};

export default TechnologyIntro;
