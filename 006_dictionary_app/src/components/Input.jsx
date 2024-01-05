import { useState, useRef, useEffect } from "react";
import { requestDictResult } from "../http.js";

import searchIcon from "../assets/icons/icon-search.svg";

export default function Input({ setResult }) {
  const [inputValid, setInputValid] = useState(true);
  const inputRef = useRef();

  async function handleSubmission(event) {
    event.preventDefault();
    const word = inputRef.current.value;
    if (word.length === 0) {
      setInputValid(false);
    } else {
      try {
        const definition = await requestDictResult(word);
        setResult(definition);
      } catch (error) {
        console.log(error);
        setResult("error");
      }
    }
  }

  // display warnings when the input invalid
  useEffect(() => {
    if (!inputValid) {
      const timeout = setTimeout(() => {
        setInputValid(true);
      }, 2000);
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [inputValid]);

  return (
    <form
      className="relative z-10 md:mt-input-mt-lg sm:mt-input-mt-sm mb-11"
      onSubmit={(event) => handleSubmission(event)}
    >
      <input
        className={
          "box-border px-6 md:h-input-h sm:h-input-h-sm w-full rounded-xl bg-gray-300 dark:bg-dark-700 md:text-heading-lg sm:text-heading-sm text-dark-500 dark:text-white font-semibold tracking-wide focus:outline focus:outline-light-purple" +
          (inputValid ? "" : " outline outline-1 outline-red-tomato")
        }
        placeholder="Search for any word..."
        ref={inputRef}
      ></input>
      {!inputValid && (
        <p className="absolute text-red-tomato pt-1 font-light">
          Whoops, can't be empty...
        </p>
      )}
      <button className="absolute w-4 right-5 md:top-[25px] sm:top-[18px]">
        <img src={searchIcon} alt="search button icon" />
      </button>
    </form>
  );
}
