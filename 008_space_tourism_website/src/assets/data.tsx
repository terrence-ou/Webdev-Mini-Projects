import { useParams } from "react-router-dom";

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

import douglasImg from "./crew/image-douglas-hurley.png";
import victorImg from "./crew/image-victor-glover.png";
import markImg from "./crew/image-mark-shuttleworth.png";
import anoushehImg from "./crew/image-anousheh-ansari.png";

import launchImgPortrait from "./technology/image-launch-vehicle-portrait.jpg";
import launchImgLandscape from "./technology/image-launch-vehicle-landscape.jpg";

import spacePortPortrait from "./technology/image-spaceport-portrait.jpg";
import spacePortLandscape from "./technology/image-spaceport-landscape.jpg";

import spaceCapsulePortrait from "./technology/image-space-capsule-portrait.jpg";
import spaceCapsuleLandscape from "./technology/image-space-capsule-landscape.jpg";

/* BACKGROUNDS */

interface imgType {
  desktop: string;
  tablet?: string;
  mobile?: string;
}

export type backgrounds = {
  home: imgType;
  crew: imgType;
  destination: imgType;
  technology: imgType;
};

const bgHome: imgType = {
  desktop: bgHomeDesktop,
  tablet: bgHomeTablet,
  mobile: bgHomeMobile,
};

const bgCrew: imgType = {
  desktop: bgCrewDesktop,
  tablet: bgCrewTablet,
  mobile: bgCrewMobile,
};

const bgDestination: imgType = {
  desktop: bgDestinationDesktop,
  tablet: bgDestinationTablet,
  mobile: bgDestinationMobile,
};

const bgTech: imgType = {
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

export interface introType {
  id: string;
  name: string;
  description: string;
}

/* DESTINATION DATA*/

export interface destinationType extends introType {
  distance: string;
  travelTime: string;
  image: string;
}

export const destinationData: destinationType[] = [
  {
    id: "moon",
    name: "moon",
    description:
      "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    distance: "384,400 km",
    travelTime: "3 days",
    image: moonImg,
  },
  {
    id: "mars",
    name: "mars",
    description:
      "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    distance: "255 mil. km",
    travelTime: "9 months",
    image: marsImg,
  },
  {
    id: "europa",
    name: "europa",
    description:
      "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    distance: "628 mil. km",
    travelTime: "3 years",
    image: europaImg,
  },
  {
    id: "titan",
    name: "titan",
    description:
      "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    distance: "1.6 bil. km",
    travelTime: "7 years",
    image: titanImg,
  },
];

/* CREW DATA */

export interface crewType extends introType {
  image: string;
  role: string;
}

export const crewData: crewType[] = [
  {
    id: "douglas",
    role: "commander",
    name: "douglas hurley",
    description:
      "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    image: douglasImg,
  },
  {
    id: "mark",
    role: "mission specialist",
    name: "mark shuttleworth",
    description:
      "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
    image: markImg,
  },
  {
    id: "victor",
    role: "pilot",
    name: "victor glover",
    description:
      "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
    image: victorImg,
  },
  {
    id: "anousheh",
    role: "flight engineer",
    name: "anousheh ansari",
    description:
      "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
    image: anoushehImg,
  },
];

/* TECHNOLOGY DATA */
export interface techType extends introType {
  image: imgType;
}

export const techData: techType[] = [
  {
    id: "launch-vehicle",
    name: "launch vehicle",
    description:
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
    image: {
      desktop: launchImgPortrait,
      tablet: launchImgLandscape,
      mobile: launchImgLandscape,
    },
  },
  {
    id: "spaceport",
    name: "space port",
    description:
      "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
    image: {
      desktop: spacePortPortrait,
      tablet: spacePortLandscape,
      mobile: spacePortLandscape,
    },
  },
  {
    id: "space-capsule",
    name: "space capsule",
    description:
      "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
    image: {
      desktop: spaceCapsulePortrait,
      tablet: spaceCapsuleLandscape,
      mobile: spaceCapsuleLandscape,
    },
  },
];

// export function fetchData(
//   dataset: destinationType[] | crewType[] | techType[],
//   key: string,
// ): destinationType | crewType | techType {
//   const params = useParams();
//   if (!params[key]) return dataset[0];
//   return dataset.filter((item) => item.id === params[key])[0];
// }

export function fetchData<Type extends introType>(
  dataset: Type[],
  key: string,
): Type {
  const params = useParams();
  if (!params[key]) return dataset[0];
  return dataset.filter((item) => item.id === params[key])[0];
}
