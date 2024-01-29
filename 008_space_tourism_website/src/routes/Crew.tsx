import { crewData, crewType, fetchData } from "../assets/data";
import { NavLink, Outlet, useOutletContext } from "react-router-dom";
import Img from "../components/Img";

const DotsNav = () => {
  return (
    <ul className="flex desktop:justify-start justify-center gap-6 mt-[120px] tablet:mt-[40px] mobile:my-[32px]">
      {crewData.map((item) => {
        return (
          <li key={item.name}>
            <NavLink to={item.id}>
              {({ isActive }) => {
                let style: string = "text-[17px] duration-200";
                style += isActive
                  ? " opacity-100"
                  : " opacity-20 hover:opacity-60";
                return <span className={style}>●</span>;
              }}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};

const Crew = () => {
  const currSize = useOutletContext();
  const currCrewData: crewType = fetchData(crewData, "crewId");
  const ImgComponent = () => (
    <Img
      image={currCrewData.image}
      name={currCrewData.name}
      extraStyles="desktop:max-w-[600px] tablet:h-[532px] mobile:h-[327px] mobile:mt-[32px] mobile:border-b-white/20 mobile:border-b"
    />
  );
  return (
    <div className="flex desktop:flex-row flex-col desktop:items-end items-center justify-between desktop:pr-innerpad p-0">
      {currSize === "mobile" && <ImgComponent />}
      <section className="pb-[100px] tablet:pb-[40px]">
        {currSize === "mobile" && <DotsNav />}
        <Outlet />
        {currSize !== "mobile" && <DotsNav />}
      </section>
      {currSize !== "mobile" && <ImgComponent />}
    </div>
  );
};

export default Crew;
