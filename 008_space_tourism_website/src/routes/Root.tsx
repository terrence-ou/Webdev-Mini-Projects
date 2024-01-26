import { NavLink, Outlet } from "react-router-dom";

import bgCovers from "../assets/backgrounds";
import logo from "../assets/shared/logo.svg";

// type pageType = "home" | "destination" | "crew" | "technology";

const Root = () => {
  const navItems: string[] = ["HOME", "DESTINATION", "CREW", "TECHNOLOGY"];

  const bgImage = bgCovers.home.desktop;
  const style = {
    backgroundImage: `url(${bgImage})`,
  };

  return (
    <div
      className="w-dvw h-dvh py-[40px] bg-no-repeat bg-cover min-w-[1300px]"
      style={style}
    >
      <header className="relative flex justify-between items-center h-header w-full">
        <div className="absolute right-0 top-0 w-[60%] h-full bg-white/10 backdrop-blur-2xl z-0">
          {" "}
        </div>
        <div className="absolute left-[167px] top-[50%] w-[30%] h-[1px] bg-white/25 z-0">
          {" "}
        </div>
        <p className="pl-[55px]">
          <img src={logo} alt="website logo" />
        </p>
        <nav className="pr-[167px] font-barlow-condensed text-nav tracking-nav z-10">
          <ul className="flex items-center gap-[48px]">
            {navItems.map((item, i) => {
              return (
                <li key={item}>
                  <NavLink to={item.toLowerCase()}>
                    <h1 className="leading-header h-header text-white hover:border-b-[3px] hover:border-b-white/50 hover:cursor-pointer my-auto">
                      <span className="font-bold pr-3">
                        {i.toString().padStart(2, "0")}
                      </span>
                      {item}
                    </h1>
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
      <Outlet />
    </div>
  );
};
export default Root;
