import { Outlet, useLocation, Location } from "react-router-dom";
import Nav from "../components/Nav";
import { bgCovers } from "../assets/data";
import logo from "../assets/shared/logo.svg";
import PageTitle from "../components/PageTitle";

const Root = () => {
  const navItems: string[] = ["home", "destination", "crew", "technology"];

  const location: Location = useLocation();
  const currTab: string = location.pathname.split("/")[1];
  let bgImage: string | undefined = undefined;
  let index: number = 0;
  let title: string = "";

  switch (currTab) {
    case "home":
      bgImage = bgCovers.home.desktop;
      index = 0;
      break;
    case "destination":
      bgImage = bgCovers.destination.desktop;
      index = 1;
      title = "PICK YOUR DESTINATION";
      break;
    case "crew":
      bgImage = bgCovers.crew.desktop;
      index = 2;
      title = "MEET YOUR CREW";
      break;
    case "technology":
      bgImage = bgCovers.technology.desktop;
      index = 3;
      title = "SPACE LAUNCH 101";
      break;
    default:
      bgImage = bgCovers.home.desktop;
      index = 0;
  }

  const style = {
    backgroundImage: `url(${bgImage})`,
    opcity: "100%",
    transition: "200ms",
  };

  return (
    <div
      className="box-border flex flex-col justify-between items-center w-dvw h-dvh pt-[40px] bg-dark bg-no-repeat bg-cover min-w-[1300px] min-h-[900px]"
      style={style}
    >
      <header className="relative flex justify-between items-center h-header w-full max-w-[1600px]">
        <div className="absolute right-0 top-0 w-[60%] h-full bg-white/10 backdrop-blur-2xl z-0">
          {" "}
        </div>
        <div className="absolute left-[167px] top-[50%] w-[30%] h-[1px] bg-white/25 z-0">
          {" "}
        </div>
        <p className="pl-[55px]">
          <img src={logo} alt="website logo" />
        </p>
        <Nav navItems={navItems} root={true} />
      </header>
      {index > 0 && (
        <PageTitle index={index.toString().padStart(2, "0")} title={title} />
      )}
      <div className="text-white pl-innerpad w-full max-w-[1600px]">
        <Outlet />
      </div>
    </div>
  );
};
export default Root;
