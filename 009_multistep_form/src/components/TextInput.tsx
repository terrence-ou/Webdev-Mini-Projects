import { useState, useRef } from "react";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import { subscriptionFormActions } from "../store/subForm";
import { RootState } from "../store";

type InputPropsType = {
  inputName: string;
  label: string;
  type: string;
  placeHolder: string;
  pattern?: string;
};

// Get reducer function by the input name
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

/* The body of the text input element */
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
      // in current input value is invalid, set the data state to undefined
      if (dispatchFn) {
        dispatch(dispatchFn(undefined));
      }
    } else {
      setInputValid(true);
      const inputValue = inputRef.current.value;
      if (dispatchFn) {
        dispatch(dispatchFn(inputValue));
      }
    }
  }

  const currValue: string | undefined = useAppSelector((state: RootState) => {
    switch (inputName) {
      case "name": {
        return state.subscriptionFormReducer.name;
      }
      case "email": {
        return state.subscriptionFormReducer.email;
      }
      case "phone": {
        return state.subscriptionFormReducer.phone;
      }
      default: {
        return undefined;
      }
    }
  });

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
        defaultValue={currValue}
        onBlur={() => onBlur()}
        pattern={pattern ? pattern : ".*"}
        aria-autocomplete="none"
        required
        className={
          "h-12 px-4 border focus:outline-none focus:border-purple rounded-lg text-lg leading-body-lg font-medium" +
          " " +
          borderColor
        }
      ></input>
    </fieldset>
  );
};

export default TextInput;
