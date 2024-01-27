import { crewData } from "../assets/data";
import { NavLink, Outlet, useParams } from "react-router-dom";

const DotsNav = () => {
  return (
    <ul className="flex gap-6 mt-[120px]">
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
  const params = useParams();
  const currCrewData = crewData.filter(
    (item) => item.id === (params.crewId ? params.crewId : "douglas"),
  )[0];

  return (
    <div className="flex items-end justify-between">
      <section className="pb-[100px]">
        <Outlet />
        <DotsNav />
      </section>
      <section>
        <img src={currCrewData.image} alt="crew image" />
      </section>
    </div>
  );
};

export default Crew;
