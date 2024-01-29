import { useRouteError } from "react-router-dom";
import { bgCovers } from "../assets/data";

const Error = ({ root }: { root: boolean }) => {
  const bgImage = bgCovers.home.desktop;
  const style = {
    backgroundImage: `url(${bgImage})`,
  };
  const error: any = useRouteError();
  return (
    <div
      className="flex flex-col justify-center text-center w-dvw h-dvh bg-cover bg-no-repeat text-white font-barlow"
      style={root ? style : undefined}
    >
      <h1 className="text-h2 tablet:text-h2-tablet mobile:text-h2-mobile">
        Oops!
      </h1>
      <p className="text-h5 tablet:text-h5-tablet mobile:text-h5-mobile">
        Sorry, an unexpected error has occured.
      </p>
      <p className="text-h3 tablet:text-h3-tablet mobile:text-h3-mobile font-bellefair py-10">
        {error.status} {error.statusText || error.message}
      </p>
    </div>
  );
};

export default Error;
