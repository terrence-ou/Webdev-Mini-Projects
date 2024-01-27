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
    <div className="flex tablet:flex-col justify-between items-end tablet:items-center pb-[130px] pr-innerpad">
      <section className="flex flex-col gap-[97px]">
        <img
          className="w-[445px] h-[445px] tablet:w-[300px] tablet:h-[300px]"
          src={currDestData.image}
          alt={`${currDestData.name} image`}
        />
      </section>
      <section className="flex flex-col w-[445px]">
        <Nav navItems={navItems} showIndex={false} root={false} />
        <Outlet />
      </section>
    </div>
  );
};

export default Destination;
