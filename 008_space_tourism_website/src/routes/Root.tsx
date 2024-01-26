import { NavLink, Outlet, useLocation } from "react-router-dom";
import bgCovers from "../assets/backgrounds";
import logo from "../assets/shared/logo.svg";

interface Location {
  pathname: string;
  search: string;
  hash: string;
  state: any;
  key?: string;
}

const Root = () => {
  const navItems: string[] = ["home", "destination", "crew", "technology"];

  const location: Location = useLocation();
  const currTab: string = location.pathname.split("/")[1];
  let bgImage: string | undefined = undefined;

  switch (currTab) {
    case "home":
      bgImage = bgCovers.home.desktop;
      break;
    case "destination":
      bgImage = bgCovers.destination.desktop;
      break;
    case "crew":
      bgImage = bgCovers.crew.desktop;
      break;
    case "technology":
      bgImage = bgCovers.technology.desktop;
      break;
    default:
      bgImage = bgCovers.home.desktop;
  }

  const style = {
    backgroundImage: `url(${bgImage})`,
  };

  return (
    <div
      className="flex flex-col justify-between w-dvw h-dvh pt-[40px] bg-dark bg-no-repeat bg-cover min-w-[1300px]"
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
        <nav className="pr-innerpad font-barlow-condensed text-nav tracking-nav z-10">
          <ul className="flex items-center gap-[48px]">
            {navItems.map((item, i) => {
              return (
                <li key={item}>
                  <NavLink to={item}>
                    {({ isActive }) => {
                      let style: string =
                        "leading-header h-header text-white hover:cursor-pointer my-auto";
                      style += isActive
                        ? " border-b-[3px] border-b-white"
                        : " border-b-white/0 hover:border-b-[3px] hover:border-b-white/50 duration-100";
                      return (
                        <h1 className={style}>
                          <span className="font-bold pr-3">
                            {i.toString().padStart(2, "0")}
                          </span>
                          {item.toUpperCase()}
                        </h1>
                      );
                    }}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
      <div className="text-white px-innerpad">
        <Outlet />
      </div>
    </div>
  );
};
export default Root;
