type InputPropsType = {
  inputName: string;
  label: string;
  type: string;
  placeHolder: string;
};

const Input = ({ label, inputName, type, placeHolder }: InputPropsType) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={inputName} className="text-md text-denim">
        {label}
      </label>
      <input
        type={type}
        name={inputName}
        id={inputName}
        placeholder={placeHolder}
        className="h-12 px-4 border border-border-color rounded-lg text-lg leading-body-lg font-medium"
      ></input>
    </div>
  );
};

export default Input;
