import { NavLink } from "react-router-dom";

type navType = {
  navItems: string[];
  showIndex?: boolean;
  root: boolean;
};

const Nav = ({ navItems, showIndex = true, root }: navType) => {
  const gap: string = root ? "gap-[48px] tablet:gap-[42px]" : "gap-[32px]";
  const pr: string = root ? "tablet:pr-pagepad" : "tablet:pr-0";
  return (
    <nav
      className={
        "pr-innerpad font-barlow-condensed text-nav tracking-nav z-10 " + pr
      }
    >
      <ul className={"flex items-center " + gap}>
        {navItems.map((item, i) => {
          return (
            <li key={item}>
              <NavLink to={item}>
                {({ isActive }) => {
                  let style: string = `text-white hover:cursor-pointer my-auto ${
                    root ? "h-header leading-header" : "h-subnav leading-subnav"
                  }`;
                  style += isActive
                    ? " border-b-[3px] border-b-white"
                    : " border-b-white/0 hover:border-b-[3px] hover:border-b-white/50 duration-100";
                  return (
                    <h1 className={style}>
                      {showIndex && (
                        <span className="font-bold pr-3 tablet:hidden">
                          {i.toString().padStart(2, "0")}
                        </span>
                      )}
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
