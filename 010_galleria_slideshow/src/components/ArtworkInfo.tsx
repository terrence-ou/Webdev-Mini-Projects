import data from "../assets/data.json";
import useFetch from "../hooks/useFetch";
import buttonIcon from "../assets/icon/icon-view-image.svg";

const fbPorjFolder = "galleria-slideshow";

const convertPath = (url: string): string => fbPorjFolder + url.slice(1);

const ArtworkInfo = ({ index }: { index: number }) => {
  const artData = data[index];
  const artistPath = convertPath(artData.artist.image);
  const artworkPath = convertPath(artData.images.hero.large);

  const { fetching: artistFetching, url: artistURL } = useFetch(artistPath);
  const { fetching: artworkFetching, url: artworkURL } = useFetch(artworkPath);

  let artistStyle = "w-[128px] aspect-square transition-opacity delay-50";
  if (artistFetching) artistStyle += " opacity-45";
  let artworkStyle = "relative w-[475px] h-[560px] transition-opacity delay-50";
  if (artworkFetching) artworkStyle += " opacity-45";

  return (
    <div className="flex-1 flex items-center mx-10 overflow-y-scroll">
      <article className="flex h-[624px]">
        <section className={artworkStyle}>
          <img src={artworkURL} alt="" />
          <button className="absolute top-[500px] left-4 flex items-center justify-center gap-3 w-[152px] h-10 bg-gray-0/75 hover:bg-gray-100/25 duration-100">
            <span className="h-3">
              <img src={buttonIcon} />
            </span>
            <span className="h-3 text-link2 font-bold text-gray-100 tracking-link2">
              VIEW IMAGE
            </span>
          </button>
        </section>
        <section className={artistStyle}>
          <img src={artistURL} alt="" />
        </section>
      </article>
    </div>
  );
};

export default ArtworkInfo;
