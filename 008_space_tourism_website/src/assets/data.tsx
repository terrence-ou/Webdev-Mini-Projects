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

import moonImg from "./destination/image-moon.png";
import marsImg from "./destination/image-mars.png";
import europaImg from "./destination/image-europa.png";
import titanImg from "./destination/image-titan.png";

/* BACKGROUNDS */

export type bgType = {
  desktop: string;
  tablet: string;
  mobile: string;
};

export type backgrounds = {
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

export const bgCovers: backgrounds = {
  home: bgHome,
  crew: bgCrew,
  destination: bgDestination,
  technology: bgTech,
};

/* DESTINATION DATA*/

export type destinationType = {
  name: string;
  desc: string;
  distance: string;
  travelTime: string;
  image: string;
};

export const destinationData: destinationType[] = [
  {
    name: "moon",
    desc: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    distance: "384,400 km",
    travelTime: "3 days",
    image: moonImg,
  },
  {
    name: "mars",
    desc: "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    distance: "255 mil. km",
    travelTime: "9 months",
    image: marsImg,
  },
  {
    name: "europa",
    desc: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    distance: "628 mil. km",
    travelTime: "3 years",
    image: europaImg,
  },
  {
    name: "titan",
    desc: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    distance: "1.6 bil. km",
    travelTime: "7 years",
    image: titanImg,
  },
];
