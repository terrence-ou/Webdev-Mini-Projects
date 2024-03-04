import logo from "../assets/icon/logo.svg";

const Header = ({
  isSlideshow,
  onClick,
}: {
  isSlideshow: boolean;
  onClick: () => void;
}) => {
  return (
    <header className="flex justify-between mx-10 py-10 border-b border-gray-60 tablet:py-[30px] mobile:py-6">
      <img src={logo} alt="" />
      <button
        className="text-link1 text-gray-30 hover:text-gray-0 leading-link1 tracking-link1 font-bold"
        onClick={() => onClick()}
      >
        {isSlideshow ? "STOP SLIDESHOW" : "START SLIDESHOW"}
      </button>
    </header>
  );
};

export default Header;
