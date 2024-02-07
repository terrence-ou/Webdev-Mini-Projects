type ButtonPropsType = {
  text: string;
  type: "next" | "back";
};

const Button = ({ text, type }: ButtonPropsType) => {
  const textStyle = type === "next" ? "text-white" : "text-grey";
  const bgStyle = type === "next" ? "bg-denim w-32" : "";
  return (
    <button className={"h-12 rounded-lg" + " " + textStyle + " " + bgStyle}>
      {text}
    </button>
  );
};

export default Button;
