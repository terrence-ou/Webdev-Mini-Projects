type checkboxPropsType = {
  title: string;
  description: string;
  checked: boolean;
  priceTag: string;
  handleSelection: (item: string) => void;
};

function processTitle(title: string): string {
  const newTitle = title.charAt(0).toUpperCase() + title.slice(1);
  return newTitle.split("-").join(" ");
}

const CheckboxInput = ({
  title,
  description,
  checked,
  priceTag,
  handleSelection,
}: checkboxPropsType) => {
  const boxStyle = checked
    ? "outline-purple bg-very-light-gray"
    : "outline-light-gray";
  return (
    <fieldset
      onClick={() => handleSelection(title)}
      className={
        "flex items-center gap-6 px-6 h-20 my-4 outline outline-1 rounded-lg group hover:cursor-pointer" +
        " " +
        boxStyle
      }
    >
      <input
        id={title}
        name="add-ons"
        type="checkbox"
        checked={checked}
        className="w-5 h-5 checked:accent-purple group-hover:cursor-pointer"
        readOnly
      />
      <label
        htmlFor={title}
        className="grow flex justify-between items-center group-hover:cursor-pointer"
        onClick={() => handleSelection(title)}
      >
        <span className="flex flex-col">
          <span className="text-lg font-medium text-denim">
            {processTitle(title)}
          </span>
          <span className="mt-1.5 text-md leading-[20px] text-grey">
            {description}
          </span>
        </span>
        <span className="text-md text-purple">{priceTag}</span>
      </label>
    </fieldset>
  );
};

export default CheckboxInput;
