import { crewData, crewType, fetchData } from "../assets/data";
import { NavLink, Outlet } from "react-router-dom";

const DotsNav = () => {
  return (
    <ul className="flex tablet:justify-center gap-6 mt-[120px] tablet:mt-[40px]">
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
  const currCrewData: crewType = fetchData(crewData, "crewId");
  const key = Math.random().toFixed(4);

  return (
    <div className="flex tablet:flex-col items-end tablet:items-center justify-between pr-innerpad tablet:p-0">
      <section className="pb-[100px] tablet:pb-[40px]">
        <Outlet />
        <DotsNav />
      </section>
      <section>
        <img
          key={key}
          className="animate-fadeIn tablet:w-[456px]"
          src={currCrewData.image}
          alt="crew image"
        />
      </section>
    </div>
  );
};

export default Crew;
