import Navigation from "../components/Navigation";
import { Outlet, useLocation } from "react-router-dom";
import Button from "../components/Button";

const Root = () => {
  const location = useLocation();
  const currLocation: string = location.pathname.split("/")[1];

  return (
    <div className="box-border flex w-width h-height bg-white rounded-2xl">
      <aside className="box-border m-[16px] mr-0 w-[300px] rounded-xl bg-desktop bg-center bg-cover">
        <Navigation />
      </aside>
      <section className="flex-grow flex flex-col justify-between mx-20 mt-14 mb-8">
        <Outlet />
        <div className="flex flex-row-reverse justify-between font-medium text-lg">
          <Button text="Next Step" type="next" />
          {currLocation !== "your-info" && currLocation !== "" && (
            <Button text="Go Back" type="back" />
          )}
        </div>
      </section>
    </div>
  );
};

export default Root;
