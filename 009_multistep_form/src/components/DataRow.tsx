type DataRowType = {
  category: "plan" | "add-on" | "total";
  label: string;
  price: string;
};

const DataRow = ({ category, label, price }: DataRowType) => {
  const labelStyle =
    category === "plan"
      ? "text-denim font-medium text-lg"
      : "text-grey text-md leading-[20px]";
  let priceStyle = "text-denim leading-[20px]";
  if (category === "plan") priceStyle += " " + "font-bold text-lg";
  else if (category === "total")
    priceStyle += " " + "text-[20px] text-purple font-bold";
  else priceStyle += " " + "text-md";

  return (
    <p className="flex justify-between items-center">
      <span className="flex flex-col">
        <span className={labelStyle}>{label}</span>
        {category === "plan" && (
          <span className="text-grey text-md underline">Change</span>
        )}
      </span>
      <span className={priceStyle}>{price}</span>
    </p>
  );
};

export default DataRow;
