import { useState, useRef, useEffect } from "react";

import useFetch from "../hooks/useFetch";
import Modal from "./Modal";
import data from "../assets/data.json";

import buttonIcon from "../assets/icon/icon-view-image.svg";

const mobileScreenWidth = 600;
const initWidth = window.innerWidth;
const initImgSize = initWidth > mobileScreenWidth ? "large" : "small";

const ArtworkInfo = ({ index }: { index: number }) => {
  const [introImgSize, setIntroImgSize] = useState<"large" | "small">(
    initImgSize
  );
  useEffect(() => {
    function updateImageSize() {
      const width = window.innerWidth;
      const newSize = width > mobileScreenWidth ? "large" : "small";
      setIntroImgSize(newSize);
    }
    window.addEventListener("resize", updateImageSize);
    return () => window.removeEventListener("resize", updateImageSize);
  }, []);

  const artData = data[index];
  const modalRef = useRef<HTMLDialogElement>(null);

  // getting the firebase path of the corresponding images
  const artistPath = artData.artist.image;
  const artworkPath = artData.images.hero[introImgSize];
  const fullImagePath = artData.images.gallery;

  // loading artwork images
  const { fetching: artistFetching, url: artistURL } = useFetch(artistPath);
  const { fetching: artworkFetching, url: artworkURL } = useFetch(artworkPath);
  const { url: fullImageURL } = useFetch(fullImagePath);

  // styles for paiting and artist images
  let artistStyle =
    "w-[128px] aspect-square transition-opacity delay-50 mobile:w-[64px]";
  if (artistFetching) artistStyle += " opacity-45";
  let artworkStyle =
    "relative w-[475px] h-[560px] transition-opacity delay-50 mobile:w-[327px] mobile:h-[280px]";
  if (artworkFetching) artworkStyle += " opacity-45";

  return (
    <>
      <div className="relative tablet:w-full py-10 h-fit overflow-y-scroll">
        <div className="flex flex-col desktop:gap-7 desktop:justify-start desktop:flex-row desktop:h-[624px] desktop:mx-10 mx-auto tablet:gap-16">
          <section className="relative mx-auto desktop:w-[850px] desktop:mx-0 tablet:w-[690px] mobile:h-[400px]">
            <img src={artworkURL} alt="" className={artworkStyle} />
            <div className="absolute top-0 left-[410px] h-full flex flex-col justify-between tablet:left-[240px] tablet:justify-start mobile:left-0 mobile:top-[240px] mobile:justify-start">
              <div className="w-[430px] bg-gray-100 pl-[60px] pb-[65px] mobile:w-[280px] mobile:h-[133px] mobile:p-[14px]">
                <h1 className="text-h1 leading-h1 font-bold mobile:text-[24px] mobile:leading-[29px]">
                  {artData.name}
                </h1>
                <p className="text-subh1 leading-subh1 mt-6 text-gray-30 mobile:mt-2">
                  {artData.artist.name}
                </p>
              </div>
              <div
                className={
                  artistStyle + " " + "ml-[90px] tablet:ml-[260px] mobile:ml-0"
                }
              >
                <img src={artistURL} alt="" />
              </div>
            </div>
            <button
              onClick={() => modalRef.current?.showModal()}
              className="absolute top-[500px] left-4 flex items-center justify-center gap-3 w-[152px] h-10 bg-gray-0/75 hover:bg-gray-100/25 duration-100 mobile:top-4"
            >
              <img src={buttonIcon} className="h-3" />
              <span className="h-3 text-link2 font-bold text-gray-100 tracking-link2">
                VIEW IMAGE
              </span>
            </button>
          </section>
          <article className="relative desktop:max-w-[350px] tablet:w-[457px] mobile:w-[327px] mx-auto desktop:mx-0 mobile:-translate-y-5">
            <span className="absolute top-0 text-gray-90 leading-display -z-10 tablet:left-[-120px] text-display mobile:text-[100px] mobile:top-[20px] mobile:right-0">
              {artData.year}
            </span>
            <p className="text-body text-gray-30 leading-body font-bold mt-[115px] mb-10 desktop:mb-[100px] z-10 tablet:mt-[75px]">
              {artData.description}
            </p>
            <a
              href={artData.source}
              target="_blank"
              className="text-link2 leading-link2 tracking-link2 underline text-gray-30 decoration-gray-30"
            >
              GO TO SOURCE
            </a>
          </article>
        </div>
      </div>
      <Modal ref={modalRef}>
        <button
          onClick={() => modalRef.current?.close()}
          className="text-body text-gray-100 tracking-[3px] font-bold"
        >
          CLOSE
        </button>
        <img
          src={fullImageURL}
          className="h-[770px] mt-10 mobile:w-[327px] tablet:w-[620px] tablet:h-auto mobile:h-auto"
        ></img>
      </Modal>
    </>
  );
};

export default ArtworkInfo;
