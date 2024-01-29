import { crewData, crewType, fetchData } from "../assets/data";
const CrewIntro = () => {
  const currCrewData: crewType = fetchData(crewData, "crewId");
  return (
    <div className="desktop:text-start text-center tablet:mt-[60px]">
      <h4 className="text-h4 tablet:text-h4-tablet mobile:text-h4-mobile text-white/50 font-bellefair">
        {currCrewData.role.toUpperCase()}
      </h4>
      <h3 className="text-h3 tablet:text-h3-tablet mobile:text-h3-mobile font-bellefair desktop:mt-[15px] mt-[8px] desktop:mb-[23px] mb-[16px]">
        {currCrewData.name.toUpperCase()}
      </h3>
      <p className="text-desc tablet:text-desc-tablet mobile:text-desc-mobile font-barlow leading-content tablet:leading-content-tablet mobile:leading-content-mobile text-violet w-[445px] tablet:w-[458px] mobile:w-[327px]">
        {currCrewData.description}
      </p>
    </div>
  );
};

export default CrewIntro;
