import { Outlet, useParams } from "react-router-dom";
import Nav from "../components/Nav";
import PageTitle from "../components/PageTitle";

import { destinationData } from "../assets/data";

const Destination = () => {
  const params = useParams();
  const currDestData = destinationData.filter(
    (item) =>
      item.name === (params.destinationId ? params.destinationId : "moon"),
  )[0];

  const navItems: string[] = ["moon", "mars", "europa", "titan"];
  return (
    <div className="flex flex-col justify-between">
      <div className="flex justify-between items-end pb-[130px]">
        <section className="flex flex-col gap-[97px]">
          <img
            className="w-[445px] h-[445px]"
            src={currDestData.image}
            alt={`${currDestData.name} image`}
          />
        </section>
        <section className="flex flex-col w-[445px]">
          <Nav navItems={navItems} showIndex={false} root={false} />
          <Outlet />
        </section>
      </div>
    </div>
  );
};

export default Destination;
