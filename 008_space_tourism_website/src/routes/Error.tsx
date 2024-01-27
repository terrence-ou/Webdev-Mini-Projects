import { useRouteError } from "react-router-dom";
import { bgCovers } from "../assets/data";

const Error = ({ root }: { root: boolean }) => {
  const bgImage = bgCovers.home.desktop;
  const style = {
    backgroundImage: `url(${bgImage})`,
  };
  const error: any = useRouteError();
  console.log(error);
  return (
    <div
      className="flex flex-col justify-center text-center w-dvw h-dvh bg-cover bg-no-repeat text-white font-barlow"
      style={root ? style : undefined}
    >
      <h1 className="text-h2">Oops!</h1>
      <p className="text-h5">Sorry, an unexpected error has occured.</p>
      <p className="text-h3 font-bellefair py-10">
        {error.status} {error.statusText || error.message}
      </p>
    </div>
  );
};

export default Error;
