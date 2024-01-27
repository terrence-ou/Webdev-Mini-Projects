import { useParams } from "react-router-dom";
import { crewData } from "../assets/data";
const CrewIntro = () => {
  const params = useParams();
  const currCrewData = crewData.filter(
    (item) => item.id === (params.crewId ? params.crewId : "douglas"),
  )[0];
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
