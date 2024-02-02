import { useState, useEffect } from "react";
import { Outlet, useLocation, Location } from "react-router-dom";

import Nav from "../components/Nav";
import MobileNav from "../components/MobileNav";
import PageTitle from "../components/PageTitle";

import { bgCovers } from "../assets/data";
import logo from "../assets/shared/logo.svg";

export type sizeType = "desktop" | "tablet" | "mobile";

/* Defining current screen type according to the width of current screen */
const getWindowSize = (): sizeType => {
  const currWidth: number = window.innerWidth;
  let size: sizeType = "desktop";
  if (currWidth >= 1280) size = "desktop";
  else if (currWidth < 1280 && currWidth >= 600) size = "tablet";
  else size = "mobile";
  return size;
};

/* The Root Component */
const Root = () => {
  const navItems: string[] = ["home", "destination", "crew", "technology"];
  const [currSize, setCurrSize] = useState<sizeType>(getWindowSize());

  // Get the screen size at every resize
  useEffect(() => {
    const handleResize = () => {
      setCurrSize(getWindowSize());
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const location: Location = useLocation(); // Get current path
  const currTab: string = location.pathname.split("/")[1];
  let bgImage: string | undefined = undefined;
  let index: number = 0;
  let title: string = "";

  switch (currTab) {
    case "home":
      bgImage = bgCovers.home[currSize];
      index = 0;
      break;
    case "destination":
      bgImage = bgCovers.destination[currSize];
      index = 1;
      title = "PICK YOUR DESTINATION";
      break;
    case "crew":
      bgImage = bgCovers.crew[currSize];
      index = 2;
      title = "MEET YOUR CREW";
      break;
    case "technology":
      bgImage = bgCovers.technology[currSize];
      index = 3;
      title = "SPACE LAUNCH 101";
      break;
    default:
      bgImage = bgCovers.home[currSize];
      index = 0;
  }

  const style = {
    backgroundImage: `url(${bgImage})`,
    opcity: "100%",
    transition: "200ms",
  };

  return (
    <div
      className="box-border flex flex-col justify-between mobile:justify-start items-center h-dvh tablet:h-full mobile:h-full pt-[40px] tablet:pt-0 mobile:pt-0 bg-dark bg-no-repeat bg-cover desktop:min-h-[900px] mobile:min-w-[350px] mobile:pb-10 tablet:pb-10"
      style={style}
    >
      <header className="relative flex justify-between items-center h-header mobile:h-header-mobile w-full max-w-[1600px] mobile:px-6">
        <div className="absolute right-0 top-0 w-[60%] tablet:min-w-[500px] mobile:hidden h-full bg-white/10 backdrop-blur-2xl z-0">
          {" "}
        </div>
        <div className="absolute left-[167px] top-[50%] w-[30%] h-[1px] bg-white/25 z-0 mobile:hidden tablet:hidden">
          {" "}
        </div>
        <p className="pl-pagepad mobile:pl-0">
          <img
            className="mobile:w-10 mobile:h-10"
            src={logo}
            alt="website logo"
          />
        </p>
        {currSize !== "mobile" && <Nav navItems={navItems} root={true} />}
        {currSize === "mobile" && <MobileNav navItems={navItems} />}
      </header>
      {index > 0 && (
        <PageTitle index={index.toString().padStart(2, "0")} title={title} />
      )}
      <div className="text-white desktop:pl-innerpad p-0 w-full max-w-[1600px] tablet:grow">
        <Outlet context={currSize} />
      </div>
    </div>
  );
};
export default Root;
