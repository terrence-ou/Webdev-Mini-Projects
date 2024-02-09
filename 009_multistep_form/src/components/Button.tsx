type ButtonPropsType = {
  text: string;
  type: "next" | "back";
  onClick: () => void;
};

const Button = ({ text, type, onClick }: ButtonPropsType) => {
  const textStyle = type === "next" ? "text-white" : "text-grey";
  const bgStyle = type === "next" ? "bg-denim w-32" : "";
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
