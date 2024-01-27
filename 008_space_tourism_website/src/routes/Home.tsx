import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex justify-between items-end pb-[130px] pr-innerpad">
      <section className="flex flex-col w-[35%] min-w-[445px] gap-6">
        <p className="font-barlow-condensed text-h5 tracking-h5 text-violet">
          SO, YOU WANT TO TRAVEL TO
        </p>
        <p className="text-h1 font-bellefair">SPACE</p>
        <p className="text-desc leading-content font-barlow text-violet">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </section>
      <section className="relative w-[275px] h-[275px] bg-white rounded-full">
        <Link
          to="/destination"
          className="absolute w-full h-full rounded-full hover:scale-150 duration-100 bg-white/10"
        >
          {" "}
        </Link>
        <p className="text-h4 font-bellefair text-dark leading-[275px] text-center">
          EXPLORE
        </p>
      </section>
    </div>
  );
};

export default Home;
