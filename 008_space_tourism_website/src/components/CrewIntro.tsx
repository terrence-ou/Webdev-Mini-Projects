import { crewData, crewType, fetchData } from "../assets/data";
const CrewIntro = () => {
  const currCrewData: crewType = fetchData(crewData, "crewId");
  return (
    <div className="tablet:text-center tablet:mt-[60px]">
      <h4 className="text-h4 tablet:text-h4-tablet text-white/50 font-bellefair">
        {currCrewData.role.toUpperCase()}
      </h4>
      <h3 className="text-h3 tablet:text-h3-tablet font-bellefair mt-[15px] tablet:mt-[8px] mb-[23px] tablet:mb-[16px]">
        {currCrewData.name.toUpperCase()}
      </h3>
      <p className="text-desc tablet:text-desc-tablet font-barlow leading-content tablet:leading-content-tablet text-violet w-[445px] tablet:w-[458px]">
        {currCrewData.description}
      </p>
    </div>
  );
};

export default CrewIntro;
