import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col desktop:flex-row justify-between items-center desktop:items-end tablet:gap-28 mobile:gap-20 desktop:pb-[130px] tablet:mt-[80px] mobile:mt-12 desktop:pr-innerpad pr-0">
      <section className="flex flex-col w-[35%] min-w-[445px] gap-6 text-center desktop:text-start">
        <p className="font-barlow-condensed text-h5 tablet:text-h5-tablet mobile:text-h5-mobile tracking-h5 text-violet">
          SO, YOU WANT TO TRAVEL TO
        </p>
        <h1 className="text-h1 mobile:text-h1-mobile font-bellefair tablet:leading-h1 mobile:leading-h1-mobile">
          SPACE
        </h1>
        <p className="text-desc tablet:text-desc-tablet mobile:text-desc-mobile leading-content tablet:leading-content-tablet mobile:leading-content-mobile font-barlow text-violet mobile:max-w-[327px] mobile:mx-auto">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </section>
      <section className="relative w-[275px] h-[275px] tablet:w-[242px] tablet:h-[242px] mobile:w-[150px] mobile:h-[150px] bg-white rounded-full">
        <Link
          to="/destination"
          className="absolute w-full h-full rounded-full hover:scale-150 hover:tablet:scale-[130%] duration-100 bg-white/10"
        >
          {" "}
        </Link>
        <p className="text-h4 mobile:text-h4-mobile font-bellefair text-dark leading-[275px] tablet:leading-[242px] mobile:leading-[150px] text-center">
          EXPLORE
        </p>
      </section>
    </div>
  );
};

export default Home;
