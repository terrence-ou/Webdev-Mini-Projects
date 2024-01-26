import { Outlet, useLocation } from "react-router-dom";
import Nav from "../components/Nav";
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
    opcity: "100%",
    transition: "200ms",
  };

  return (
    <div
      className="box-border flex flex-col justify-between items-center w-dvw h-dvh pt-[40px] bg-dark bg-no-repeat bg-cover min-w-[1300px]"
      style={style}
    >
      <header className="relative flex justify-between items-center h-header w-full max-w-[1920px]">
        <div className="absolute right-0 top-0 w-[60%] h-full bg-white/10 backdrop-blur-2xl z-0">
          {" "}
        </div>
        <div className="absolute left-[167px] top-[50%] w-[30%] h-[1px] bg-white/25 z-0">
          {" "}
        </div>
        <p className="pl-[55px]">
          <img src={logo} alt="website logo" />
        </p>
        <Nav navItems={navItems} />
      </header>
      <div className="text-white px-innerpad w-full">
        <Outlet />
      </div>
    </div>
  );
};
export default Root;
