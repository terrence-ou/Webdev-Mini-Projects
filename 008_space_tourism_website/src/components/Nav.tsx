import { NavLink } from "react-router-dom";

type navType = {
  navItems: string[];
};

const Nav = ({ navItems }: navType) => {
  return (
    <nav className="pr-innerpad font-barlow-condensed text-nav tracking-nav z-10">
      <ul className="flex items-center gap-[48px]">
        {navItems.map((item, i) => {
          return (
            <li key={item}>
              <NavLink to={item}>
                {({ isActive }) => {
                  let style: string =
                    "leading-header h-header text-white hover:cursor-pointer my-auto";
                  style += isActive
                    ? " border-b-[3px] border-b-white"
                    : " border-b-white/0 hover:border-b-[3px] hover:border-b-white/50 duration-100";
                  return (
                    <h1 className={style}>
                      <span className="font-bold pr-3">
                        {i.toString().padStart(2, "0")}
                      </span>
                      {item.toUpperCase()}
                    </h1>
                  );
                }}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
