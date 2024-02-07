type inputPropsType = {
  value: string;
};

const RadioInput = ({ value }: inputPropsType) => {
  return (
    <div>
      <label
        htmlFor={value}
        className="flex flex-col"
        onClick={() => {
          console.log(value);
        }}
      >
        <span>{value}</span>
        <span>$9/mo</span>
      </label>
      <input
        type="radio"
        name="plan"
        value={value}
        id={value}
        className="appearance-none w-[138px]"
      />
    </div>
  );
};

export default RadioInput;
