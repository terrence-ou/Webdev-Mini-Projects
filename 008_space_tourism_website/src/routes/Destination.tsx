import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";

import { destinationData, destinationType, fetchData } from "../assets/data";

const Destination = () => {
  const currDestData: destinationType = fetchData(
    destinationData,
    "destinationId",
  );

  const navItems: string[] = ["moon", "mars", "europa", "titan"];
  return (
    <div className="flex desktop:flex-row flex-col justify-between desktop:items-end items-center pb-[130px] pr-innerpad tablet:p-0 mobile:p-0">
      <img
        className="aspect-square w-[445px] tablet:w-[300px] mobile:w-[170px] tablet:mt-[60px] tablet:mb-[40px] mobile:my-9"
        src={currDestData.image}
        alt={`${currDestData.name} image`}
      />
      <section className="flex flex-col tablet:items-center mobile:items-center w-[445px] tablet:w-[573px] mobile:w-[327px]">
        <Nav navItems={navItems} showIndex={false} root={false} />
        <Outlet />
      </section>
    </div>
  );
};

export default Destination;
