import { useRef } from "react";

import useFetch from "../hooks/useFetch";
import Modal from "./Modal";
import buttonIcon from "../assets/icon/icon-view-image.svg";

import data from "../assets/data.json";

const fbPorjFolder = "galleria-slideshow";

const convertPath = (url: string): string => fbPorjFolder + url.slice(1);

const ArtworkInfo = ({ index }: { index: number }) => {
  const artData = data[index];
  const modalRef = useRef<HTMLDialogElement>(null);

  const artistPath = convertPath(artData.artist.image);
  const artworkPath = convertPath(artData.images.hero.large);
  const fullImagePath = convertPath(artData.images.gallery);

  const { fetching: artistFetching, url: artistURL } = useFetch(artistPath);
  const { fetching: artworkFetching, url: artworkURL } = useFetch(artworkPath);
  const { url: fullImageURL } = useFetch(fullImagePath);

  let artistStyle = "w-[128px] aspect-square transition-opacity delay-50";
  if (artistFetching) artistStyle += " opacity-45";
  let artworkStyle = "relative w-[475px] h-[560px] transition-opacity delay-50";
  if (artworkFetching) artworkStyle += " opacity-45";

  return (
    <>
      <div className="relative flex items-center mx-10 overflow-y-visible">
        <div className="flex gap-0 justify-start h-[624px]">
          <section className="flex">
            <img src={artworkURL} alt="" className={artworkStyle} />
            <div className="w-[430px] bg-gray-100 top-0 left-[410px] pl-[60px] pb-[65px] h-fit translate-x-[-65px]">
              <h1 className="text-h1 leading-h1 font-bold">{artData.name}</h1>
              <p className="text-subh1 leading-subh1 mt-6 text-gray-30">
                {artData.artist.name}
              </p>
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
            <div
              className={artistStyle + " " + "absolute bottom-0 left-[505px]"}
            >
              <img src={artistURL} alt="" />
            </div>
          </section>
          <article className="relative w-[350px]">
            <span className="absolute top-0 text-display text-gray-90 leading-display -z-10">
              {artData.year}
            </span>
            <p className="text-body text-gray-30 leading-body font-bold mt-[115px] mb-[100px] z-10">
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
