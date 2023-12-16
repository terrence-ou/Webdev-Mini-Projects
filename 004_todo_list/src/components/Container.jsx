import { useState } from "react";
import InputSection from "./InputSection.jsx";
import Stats from "./Stats.jsx";
import ListsByDate from "./ListsByDate.jsx";

// use local storages to store the todolist data in the local storage
const localStorageKey = "storedTodoList";
const getStoredData = () => JSON.parse(localStorage.getItem(localStorageKey)) || {};
const setStoredData = (data) => localStorage.setItem(localStorageKey, JSON.stringify({...data}));


export default function Container(){
  // `todoList` stores the todo list data in the format of the Object
  const [ todoList, setTodoList ] = useState(getStoredData());
  function handleTodoList(newTask){
    const id = Math.random(); // generate a random id for the newly added task
    setTodoList((prevList) => {
      const currList = {...prevList, [id]: newTask};
      setStoredData(currList);
      return currList;
    });
  }

  // Making a single task completed/incompleted
  function handleComplete(id){
    setTodoList((prevList) => {
      const currState = prevList[id].completed;
      const currList = {
        ...prevList,
        [id]: {...prevList[id], completed: !currState}
      }
      setStoredData(currList);
      return currList;
    })
  }

  // Deleting a task
  function handleDelete(id){
    setTodoList((prevList) => {
      delete prevList[id];
      setStoredData(prevList);
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
