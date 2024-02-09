type InputPropsType = {
  inputName: string;
  label: string;
  type: string;
  placeHolder: string;
};

const TextInput = ({ label, inputName, type, placeHolder }: InputPropsType) => {
  return (
    <fieldset className="flex flex-col gap-2">
      <label htmlFor={inputName} className="text-md text-denim">
        {label}
      </label>
      <input
        type={type}
        name={inputName}
        id={inputName}
        placeholder={placeHolder}
        className="h-12 px-4 border border-border-color focus:outline-none focus:border-purple rounded-lg text-lg leading-body-lg font-medium"
      ></input>
    </fieldset>
  );
};

export default TextInput;
