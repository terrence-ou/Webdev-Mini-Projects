import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import moonImg from "../assets/destination/image-moon.png";

const Destination = () => {
  const navItems: string[] = ["moon", "mars", "europa", "titan"];
  return (
    <div className="flex justify-between items-end pb-[130px]">
      <section className="flex flex-col gap-[97px]">
        <h3 className="font-barlow-condensed text-h5 tracking-h5">
          <span className="font-bold text-white/25 pr-7">01</span>PICK YOUR
          DESTINATION
        </h3>
        <img className="w-[445px] h-[445px]" src={moonImg} alt="moon image" />
      </section>
      <section className="flex flex-col">
        <Nav navItems={navItems} showIndex={false} root={false} />
        <Outlet />
      </section>
    </div>
  );
};

export default Destination;
