import bgHomeDesktop from "./home/background-home-desktop.jpg";
import bgHomeTablet from "./home/background-home-tablet.jpg";
import bgHomeMobile from "./home/background-home-mobile.jpg";

import bgCrewDesktop from "./crew/background-crew-desktop.jpg";
import bgCrewTablet from "./crew/background-crew-tablet.jpg";
import bgCrewMobile from "./crew/background-crew-mobile.jpg";

import bgDestinationDesktop from "./destination/background-destination-desktop.jpg";
import bgDestinationTablet from "./destination/background-destination-tablet.jpg";
import bgDestinationMobile from "./destination/background-destination-mobile.jpg";

import bgTechDesktop from "./technology/background-technology-desktop.jpg";
import bgTechTablet from "./technology/background-technology-tablet.jpg";
import bgTechMobile from "./technology/background-technology-mobile.jpg";

type bgType = {
  desktop: string;
  tablet: string;
  mobile: string;
};

type backgrounds = {
  home: bgType;
  crew: bgType;
  destination: bgType;
  technology: bgType;
};

const bgHome: bgType = {
  desktop: bgHomeDesktop,
  tablet: bgHomeTablet,
  mobile: bgHomeMobile,
};

const bgCrew: bgType = {
  desktop: bgCrewDesktop,
  tablet: bgCrewTablet,
  mobile: bgCrewMobile,
};

const bgDestination: bgType = {
  desktop: bgDestinationDesktop,
  tablet: bgDestinationTablet,
  mobile: bgDestinationMobile,
};

const bgTech: bgType = {
  desktop: bgTechDesktop,
  tablet: bgTechTablet,
  mobile: bgTechMobile,
};

const bgCovers: backgrounds = {
  home: bgHome,
  crew: bgCrew,
  destination: bgDestination,
  technology: bgTech,
};
export default bgCovers;
