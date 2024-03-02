import Progress from "../UI/Progress";
import NavButton, { ButtonPropsType } from "../UI/NavButton";
import data from "../assets/data.json";

type NavPropsType = {
  index: number;
  setNextIndex: () => void;
  setPrevIndex: () => void;
};

const PrevArrowButton = ({ onClick, disabled }: ButtonPropsType) => {
  return (
    <NavButton onClick={onClick} disabled={disabled}>
      <path
        d="M24.166 1.843L3.627 12.113l20.539 10.269V1.843z"
        strokeWidth={2}
      />
      <path d="M.986.5h-1v22.775h1z" strokeWidth={2} />
    </NavButton>
  );
};

const NextArrowButton = ({ onClick, disabled }: ButtonPropsType) => {
  return (
    <NavButton onClick={onClick} disabled={disabled}>
      <path d="M1.528 1.843l20.538 10.27L1.528 22.382V1.843z" strokeWidth={2} />
      <path d="M24.708.5h1v22.775h-1z" strokeWidth={2} />
    </NavButton>
  );
};

const Navigation = ({ index, setNextIndex, setPrevIndex }: NavPropsType) => {
  const { name, artist } = data[index];
  const percentage = (((index + 1) / data.length) * 100).toFixed(0);
  return (
    <div className="flex flex-col h-24">
      <Progress percentage={percentage} />
      <section className="flex justify-between items-center px-10 py-6">
        <div className="flex flex-col justify-center gap-2">
          <h3 className="text-h3 leading-h3 font-bold">{name}</h3>
          <p className="text-subh2 leading-subh2">{artist.name}</p>
        </div>
        <div className="flex gap-10">
          <PrevArrowButton onClick={setPrevIndex} disabled={index === 0} />
          <NextArrowButton
            onClick={setNextIndex}
            disabled={index === data.length - 1}
          />
        </div>
      </section>
    </div>
  );
};

export default Navigation;
