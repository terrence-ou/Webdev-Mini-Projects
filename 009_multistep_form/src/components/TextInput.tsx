import { useState, useRef } from "react";
import { useAppDispatch } from "../store/hooks";
import { subscriptionFormActions } from "../store/subForm";

type InputPropsType = {
  inputName: string;
  label: string;
  type: string;
  placeHolder: string;
  pattern?: string;
};

function getReducerAction(inputName: string) {
  switch (inputName) {
    case "name": {
      return subscriptionFormActions.updateUserName;
    }
    case "email": {
      return subscriptionFormActions.updateEmail;
    }
    case "phone": {
      return subscriptionFormActions.updatePhone;
    }
    default: {
      return undefined;
    }
  }
}

const TextInput = ({
  label,
  inputName,
  type,
  placeHolder,
  pattern,
}: InputPropsType) => {
  const [inputValid, setInputValid] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string>(
    "This field is invalid"
  );
  const inputRef = useRef<HTMLInputElement>(null);

  const dispatch = useAppDispatch();
  const dispatchFn = getReducerAction(inputName);
  const borderColor = inputValid ? "border-border-color" : "border-red-errors";

  function onBlur() {
    if (inputRef.current?.validity.valid !== true) {
      setInputValid(false);
      if (inputRef.current?.value.length === 0) {
        setErrorMessage("This field is required");
      }
    } else {
      setInputValid(true);
      const inputValue = inputRef.current.value;
      if (dispatchFn) {
        dispatch(dispatchFn(inputValue));
      }
    }
  }

  return (
    <fieldset className="flex flex-col gap-2">
      <label htmlFor={inputName} className="flex justify-between text-md">
        <span className="text-denim">{label}</span>
        {!inputValid && (
          <span className="text-red-errors font-bold">{errorMessage}</span>
        )}
      </label>
      <input
        ref={inputRef}
        type={type}
        name={inputName}
        id={inputName}
        placeholder={placeHolder}
        className={
          "h-12 px-4 border focus:outline-none focus:border-purple rounded-lg text-lg leading-body-lg font-medium" +
          " " +
          borderColor
        }
        onBlur={() => onBlur()}
        pattern={pattern ? pattern : ".*"}
        autoComplete="off"
        required
      ></input>
    </fieldset>
  );
};

export default TextInput;
