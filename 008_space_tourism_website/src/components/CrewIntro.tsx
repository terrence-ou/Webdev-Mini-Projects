import { crewData, crewType, fetchData } from "../assets/data";
const CrewIntro = () => {
  const currCrewData: crewType = fetchData(crewData, "crewId");
  return (
    <>
      <h4 className="text-h4 text-white/50 font-bellefair">
        {currCrewData.role.toUpperCase()}
      </h4>
      <h3 className="text-h3 font-bellefair mt-[15px] mb-[23px]">
        {currCrewData.name.toUpperCase()}
      </h3>
      <p className="text-desc font-barlow leading-content text-violet w-[445px]">
        {currCrewData.description}
      </p>
    </>
  );
};

export default CrewIntro;
