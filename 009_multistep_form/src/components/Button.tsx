type ButtonPropsType = {
  text: string;
  type: "next" | "back" | "confirm";
  onClick: () => void;
  disabled?: boolean;
};

const Button = ({ text, type, onClick, disabled }: ButtonPropsType) => {
  const textStyle =
    type === "next" || type === "confirm" ? "text-white" : "text-grey";
  let buttonColor = type === "next" ? "bg-denim" : "bg-purple";
  if (disabled) buttonColor = "bg-grey";
  const bgStyle =
    type === "next" || type === "confirm" ? buttonColor + " " + "w-32" : "";
  return (
    <button
      onClick={() => onClick()}
      className={"h-12 rounded-lg" + " " + textStyle + " " + bgStyle}
      disabled={disabled ? true : false}
    >
      {text}
    </button>
  );
};

export default Button;
