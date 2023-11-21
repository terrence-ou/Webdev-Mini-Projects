import lambdaImage from "./assets/robot_1.png";
import echoImage from "./assets/robot_2.png";
import zetaImage from "./assets/robot_3.png";
import omiImage from "./assets/robot_4.png";
import thetaImage from "./assets/robot_5.png";
import kappaImage from "./assets/robot_6.png";

export const ROBOTS = [
  {
    name: "Lambda",
    id: "SR-01-Lambda",
    img_source: lambdaImage,
    position: "Lead Strategist",
    description:
      "SR-01-Lambda is the brains of the operation, equipped with an advanced tactical AI. Its red and white armor is adorned with intricate circuitry patterns, symbolizing its role in devising strategies for peacekeeping missions.",
  },
  {
    name: "Echo",
    id: "SR-02-Echo",
    img_source: echoImage,
    position: "Reconnaissance Expert",
    description:
      "SR-02-Echo specializes in stealth and information gathering. With a sleek red and white chassis that can blend into shadows, it silently watches over the world, collecting data to prevent conflicts before they escalate.",
  },
  {
    name: "Zeta",
    id: "SR-03-Zeta",
    img_source: zetaImage,
    position: "Defense Coordinator",
    description:
      "SR-03-Zeta is the protector, featuring a robust red and white armor. Its heavy plating and defensive shields enable it to absorb attacks, safeguarding civilians and its fellow samurai robots from harm.",
  },
  {
    name: "Omicron",
    id: "SR-04-Omicron",
    img_source: omiImage,
    position: "Assault Leader",
    description:
      "SR-04-Omicron leads the charge with its fiery red and white armor. It's the first to enter high-risk areas, armed with energy swords and plasma cannons to neutralize threats to global stability.",
  },
  {
    name: "Theta",
    id: "SR-05-Theta",
    img_source: thetaImage,
    position: "Support Specialist",
    description:
      "SR-05-Theta ensures the team's operational capability, sporting a calming palette of white and soft red. It repairs and maintains its squad, equipped with nanotech healers and spare parts to keep the peacekeeping force in prime condition.",
  },
];
