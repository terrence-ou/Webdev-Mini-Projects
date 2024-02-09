type ButtonPropsType = {
  text: string;
  type: "next" | "back" | "confirm";
  onClick: () => void;
};

const Button = ({ text, type, onClick }: ButtonPropsType) => {
  const textStyle =
    type === "next" || type === "confirm" ? "text-white" : "text-grey";
  const buttonColor = type === "next" ? "bg-denim" : "bg-purple";
  const bgStyle =
    type === "next" || type === "confirm" ? buttonColor + " " + "w-32" : "";
  return (
    <button
      onClick={() => onClick()}
      className={"h-12 rounded-lg" + " " + textStyle + " " + bgStyle}
    >
      {text}
    </button>
  );
};

export default Button;
