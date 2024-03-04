import { useRef } from "react";

import useFetch from "../hooks/useFetch";
import Modal from "./Modal";

import data from "../assets/data.json";

import buttonIcon from "../assets/icon/icon-view-image.svg";

const ArtworkInfo = ({ index }: { index: number }) => {
  const artData = data[index];
  const modalRef = useRef<HTMLDialogElement>(null);

  // getting the firebase path of the corresponding images
  const artistPath = artData.artist.image;
  const artworkPath = artData.images.hero.large;
  const fullImagePath = artData.images.gallery;

  // loading artwork images
  const { fetching: artistFetching, url: artistURL } = useFetch(artistPath);
  const { fetching: artworkFetching, url: artworkURL } = useFetch(artworkPath);
  const { url: fullImageURL } = useFetch(fullImagePath);

  // styles for paiting and artist images
  let artistStyle = "w-[128px] aspect-square transition-opacity delay-50";
  if (artistFetching) artistStyle += " opacity-45";
  let artworkStyle = "relative w-[475px] h-[560px] transition-opacity delay-50";
  if (artworkFetching) artworkStyle += " opacity-45";

  return (
    <>
      <div className="relative tablet:w-full py-10 h-fit overflow-y-scroll">
        <div className="flex flex-col desktop:gap-7 desktop:justify-start desktop:flex-row desktop:h-[624px] desktop:mx-10 tablet:mx-auto tablet:gap-16">
          <section className="relative desktop:w-[850px] tablet:w-[690px] tablet:mx-auto">
            <img src={artworkURL} alt="" className={artworkStyle} />
            <div className="absolute top-0 left-[410px] tablet:left-[240px] h-full flex flex-col justify-between tablet:justify-start">
              <div className="w-[430px] bg-gray-100 pl-[60px] pb-[65px]">
                <h1 className="text-h1 leading-h1 font-bold">{artData.name}</h1>
                <p className="text-subh1 leading-subh1 mt-6 text-gray-30">
                  {artData.artist.name}
                </p>
              </div>
              <div
                className={artistStyle + " " + "ml-[90px] tablet:ml-[260px]"}
              >
                <img src={artistURL} alt="" />
              </div>
            </div>
            <button
              onClick={() => modalRef.current?.showModal()}
              className="absolute top-[500px] left-4 flex items-center justify-center gap-3 w-[152px] h-10 bg-gray-0/75 hover:bg-gray-100/25 duration-100"
            >
              <img src={buttonIcon} className="h-3" />
              <span className="h-3 text-link2 font-bold text-gray-100 tracking-link2">
                VIEW IMAGE
              </span>
            </button>
          </section>
          <article className="relative desktop:max-w-[350px] tablet:w-[457px] mx-auto desktop:mx-0">
            <span className="absolute top-0 tablet:left-[-120px] text-display text-gray-90 leading-display -z-10">
              {artData.year}
            </span>
            <p className="text-body text-gray-30 leading-body font-bold mt-[115px] mb-[100px] tablet:mt-[75px] tablet:mb-[40px] z-10">
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
        <img src={fullImageURL} className="h-[770px] mt-10"></img>
      </Modal>
    </>
  );
};

export default ArtworkInfo;
