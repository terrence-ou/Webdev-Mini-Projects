import { useState } from "react";
import InputSection from "./InputSection.jsx";
import Stats from "./Stats.jsx";
import ListsByDate from "./ListsByDate.jsx";

export default function Container(){

  const [ todoList, setTodoList ] = useState({});
  function handleTodoList(newTask){
    const id = Math.random();
    setTodoList((prevList) => {
      return {
        ...prevList,
        [id]: newTask,
      }
    });
  }

  function handleComplete(id){
    setTodoList((prevList) => {
      const currState = prevList[id].completed;
      return {
        ...prevList,
        [id]: {...prevList[id], completed: !currState}
      }
    })
  }

  function handleDelete(id){
    setTodoList((prevList) => {
      delete prevList[id];
      return {...prevList};
    })
  }

  return (
    <div className="w-[40rem] min-h-[40rem] mx-auto px-16 py-14 rounded-xl bg-white shadow-[inset_5px_0_10px_0_#17255450] z-10">
      <h2
        className="font-serif text-[1.7rem] font-bold"
      >
        To Do List
      </h2>
      <InputSection handleTodoList={handleTodoList}/>
      <Stats todoList={todoList}/>
      <ListsByDate todoList={todoList} handleComplete={handleComplete} handleDelete={handleDelete}/>
    </div>
  )
}
