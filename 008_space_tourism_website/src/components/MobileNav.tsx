import { useState } from "react";
import { Link } from "react-router-dom";
import iconList from "../assets/shared/icon-hamburger.svg";
import iconCross from "../assets/shared/icon-close.svg";

const MobileNav = ({ navItems }: { navItems: string[] }) => {
  const [menuVisible, setMenuVisible] = useState<boolean>(false);
  const handleMenuVisible = () => {
    setMenuVisible((prevValue) => !prevValue);
  };

  return (
    <>
      <div className="z-40">
        <button className="align-middle" onClick={handleMenuVisible}>
          <img
            className="py-auto"
            src={menuVisible ? iconCross : iconList}
            alt="list icon"
          />
        </button>
      </div>
      {menuVisible && (
        <ul className="absolute flex flex-col gap-8 right-0 top-0 bg-white/10 w-[60%] min-w-[254px] h-dvh backdrop-blur-2xl z-30 pt-[120px] pl-[30px]">
          {navItems.map((item, i) => {
            return (
              <li
                key={item}
                className="text-nav text-white font-barlow-condensed"
              >
                <Link to={item}>
                  <button onClick={handleMenuVisible} className="tracking-nav">
                    <span className="font-bold pr-[10px]">
                      {i.toString().padStart(2, "0")}
                    </span>
                    {item.toUpperCase()}
                  </button>
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default MobileNav;
