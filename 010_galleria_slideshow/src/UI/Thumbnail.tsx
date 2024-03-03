import useFetch from "../hooks/useFetch";
import data from "../assets/data.json";

const Thumbnail = ({ index }: { index: number }) => {
  const artData = data[index];
  const thumbnailPath = artData.images.thumbnail;
  const { url } = useFetch(thumbnailPath);
  return (
    <button className="relative group">
      <img
        src={url}
        className="w-full min-h-[220px] duration-150 group-hover:opacity-50"
      ></img>
      <p className="absolute w-full bottom-0 p-7 pt-[55px] text-left bg-gradient-to-b from-gray-0/0 to-gray-0/80">
        <span className="text-[24px] font-bold text-gray-100 leading-[26px]">
          {artData.name}
        </span>
        <br />
        <span className="text-[13px] text-gray-100/80">
          {artData.artist.name}
        </span>
      </p>
    </button>
  );
};

export default Thumbnail;
