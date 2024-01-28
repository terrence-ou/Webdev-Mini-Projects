import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex tablet:flex-col justify-between items-end tablet:gap-28 tablet:items-center pb-[130px] tablet:mt-[80px] pr-innerpad">
      <section className="flex flex-col w-[35%] min-w-[445px] gap-6 tablet:text-center">
        <p className="font-barlow-condensed text-h5 tablet:text-h5-tablet tracking-h5 text-violet">
          SO, YOU WANT TO TRAVEL TO
        </p>
        <h1 className="text-h1 font-bellefair tablet:leading-h1">SPACE</h1>
        <p className="text-desc tablet:text-desc-tablet leading-content tablet:leading-content-tablet font-barlow text-violet">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </section>
      <section className="relative w-[275px] h-[275px] tablet:w-[242px] tablet:h-[242px] bg-white rounded-full">
        <Link
          to="/destination"
          className="absolute w-full h-full rounded-full hover:scale-150 hover:tablet:scale-[130%] duration-100 bg-white/10"
        >
          {" "}
        </Link>
        <p className="text-h4 font-bellefair text-dark leading-[275px] tablet:leading-[242px] text-center">
          EXPLORE
        </p>
      </section>
    </div>
  );
};

export default Home;
