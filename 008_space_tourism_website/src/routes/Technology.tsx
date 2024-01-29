import { NavLink, Outlet, useOutletContext } from "react-router-dom";
import { techData, techType, fetchData } from "../assets/data";
import { sizeType } from "./Root";

const OrderedNav = () => {
  return (
    <section>
      <ol className="flex flex-col tablet:flex-row gap-8 tablet:gap-4 tablet:my-[50px]">
        {techData.map((item, index) => {
          return (
            <li
              className="w-[80px] h-[80px] tablet:w-[60px] tablet:h-[60px]"
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
                      <span className="leading-[80px] tablet:leading-[60px] font-bellefair text-h4 tablet:text-h4-tablet">
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
      className="w-[515px] h-[527px] tablet:h-[310px] tablet:w-auto animate-fadeIn"
      src={image}
      alt="tech image"
    />
  );
};

const Technology = () => {
  const currTechData: techType = fetchData(techData, "techId");
  const currSize: sizeType = useOutletContext();
  const ImgComponent = () => <Img image={currTechData.image[currSize] || ""} />;

  return (
    <div className="flex tablet:flex-col justify-between items-center pb-[100px] tablet:pb-0 tablet:mt-[60px]">
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
