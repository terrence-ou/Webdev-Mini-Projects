import errorIcon from "../assets/icons/no-result.svg";

export default function Error() {
  return (
    <div className="w-full flex flex-col content-center text-center">
      <img src={errorIcon} className="w-32 mx-auto my-10" />
      <h2 className="text-[20px] font-bold text-dark-500 dark:text-white">
        No Definitions Found
      </h2>
      <p className="text-[18px] my-6 text-gray-700">
        Sorry pal, we couldn't find definitions for the word you were looking
        for. You can try the search again at later time or head to the web
        instead.
      </p>
    </div>
  );
}
