import { useState, useRef } from "react";


const INPUT_STYLE = "py-[0.2rem] border-b-2 border-b-zinc-700 focus:outline-none";

function getCurrentDate(){
  const today = new Date();
  let date = today.toLocaleString("en-US", {day:"numeric", year:"numeric", month:"numeric"});
  date = date.split("/");
  date = date[2] + "-" + date[0] + "-" + date[1];
  return date;
}


export default function InputSection({ handleTodoList }){

  const [inputKey, setInputKey] = useState(Math.random());
  const [warningState, setWarningState] = useState("hidden");

  const textInputRef = useRef();
  const dateInputRef = useRef();

  function submit(){

    if (textInputRef.current.value === ""){
      setWarningState("visible");
      const timer = setTimeout(() => {
        setWarningState("hidden");
      }, 2000) // make the timer slightly shorter than the animation
      return () => {
        clearTimeout(timer);
      };
    }

    const newTask = {
      text: textInputRef.current.value,
      date: dateInputRef.current.value,
      completed: false
    };
    handleTodoList(newTask);
    setInputKey(Math.random());
  }

  // get today's date as a default date input value
  const currentDate = getCurrentDate();

  return (
    <section
      key={inputKey}
      className="flex justify-between gap-3 mt-6 mb-10 font-serif text-lg"
    >
      {warningState === "visible" && <p className={"absolute text-sm text-rose-500 translate-y-10 animate-fadeIn"}>
        Input shouldn't be empty
      </p>}
      <input
        ref={textInputRef}
        type="text"
        placeholder="Type a new task here"
        className={INPUT_STYLE + " flex-1"}
      ></input>
      <input
        ref={dateInputRef}
        type="date"
        defaultValue={currentDate}
        min={currentDate}
        className={INPUT_STYLE}
      ></input>
      <button
        className="font-mono box-border h-8 w-8 ml-3 rounded-full bg-[#6D8AC1] hover:bg-[#2A4474] duration-200 text-white text-2xl text-center focus:outline-none drop-shadow-md"
        onClick={submit}>
        +
      </button>
    </section>
  )
}
