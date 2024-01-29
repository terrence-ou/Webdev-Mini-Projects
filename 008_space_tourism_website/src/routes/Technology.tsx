import { NavLink, Outlet, useOutletContext } from "react-router-dom";
import { techData, techType, fetchData } from "../assets/data";
import Img from "../components/Img";
import { sizeType } from "./Root";

const OrderedNav = () => {
  return (
    <section>
      <ol className="flex desktop:flex-col flex-row gap-8 tablet:gap-4 tablet:my-[50px] mobile:my-[30px]">
        {techData.map((item, index) => {
          return (
            <li
              className="aspect-square w-[80px] tablet:w-[60px] mobile:w-[40px]"
              key={item.id}
            >
              <NavLink to={item.id}>
                {({ isActive }) => {
                  let style = "w-full h-full rounded-full text-center";
                  style += isActive
                    ? " bg-white text-dark"
                    : " border border-white/25 hover:border-white duration-200 text-white";
                  return (
                    <p className={style}>
                      <span className="leading-[80px] tablet:leading-[60px] mobile:leading-[40px] font-bellefair text-h4 tablet:text-h4-tablet mobile:text-h4-mobile">
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

const Technology = () => {
  const currTechData: techType = fetchData(techData, "techId");
  const currSize: sizeType = useOutletContext();
  const ImgComponent = () => (
    <Img
      image={currTechData.image[currSize]}
      name={currTechData.name}
      extraStyles="desktop:w-[515px] desktop:h-[527px] tablet:h-[310px] mobile:h-[170px]"
    />
  );

  return (
    <div className="flex desktop:flex-row flex-col justify-between items-center desktop:pb-[100px] pb-0 tablet:mt-[60px] mobile:mt-[32px]">
      {currSize === "desktop" && (
        <>
          <OrderedNav />
          <Outlet />
          <ImgComponent />
        </>
      )}
      {currSize !== "desktop" && (
        <>
          <ImgComponent />
          <OrderedNav />
          <Outlet />
        </>
      )}
    </div>
  );
};

export default Technology;
