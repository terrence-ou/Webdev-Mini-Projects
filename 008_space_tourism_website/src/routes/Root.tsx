import logo from "../assets/shared/logo.svg";

const Root = () => {
  const navItems: string[] = ["HOME", "DESTINATION", "CREW", "TECHNOLOGY"];

  return (
    <div className="w-dvw h-dvh bg-dark">
      <header className="flex justify-between items-center">
        <p>
          <img src={logo} alt="website logo" />
        </p>
        <nav>
          <ul className="flex items-center gap-[48px]">
            {navItems.map((item, i) => {
              return (
                <li key={item}>
                  <h1 className="leading-[96px] h-[96px] text-white hover:border-b-[3px] hover:border-b-white my-auto duration-75">
                    <span className="font-bold">
                      {i.toString().padStart(2, "0")}
                    </span>{" "}
                    {item}
                  </h1>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
    </div>
  );
};
export default Root;
