import { NavLink, Outlet } from "react-router-dom";
import { techData, techType, fetchData } from "../assets/data";

const OrderedNav = () => {
  return (
    <section>
      <ol className="flex flex-col gap-8">
        {techData.map((item, index) => {
          return (
            <li className="w-[80px] h-[80px]" key={item.id}>
              <NavLink to={item.id}>
                {({ isActive }) => {
                  let style = "w-full h-full rounded-full text-center";
                  style += isActive
                    ? " bg-white text-dark"
                    : " border border-white/25 hover:border-white duration-200 text-white";
                  return (
                    <p className={style}>
                      <span className="leading-[80px] font-bellefair text-h4">
                        {index + 1}
                      </span>
                    </p>
                  );
                }}
              </NavLink>
            </li>
          );
        })}
      </ol>
    </section>
  );
};

const Img = ({ image }: { image: string }) => {
  const key = Math.random().toFixed(4);
  return (
    <img
      key={key}
      className="w-[515px] h-[527px] animate-fadeIn"
      src={image}
      alt="tech image"
    />
  );
};

const Technology = () => {
  const currTechData: techType = fetchData(techData, "techId");
  return (
    <div className="flex justify-between items-center pb-[100px]">
      <OrderedNav />
      <Outlet />
      <Img image={currTechData.image.desktop} />
    </div>
  );
};

export default Technology;
