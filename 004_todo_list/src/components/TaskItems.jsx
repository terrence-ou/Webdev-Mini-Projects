const COMPLETE_STYLE = {
  li: " bg-slate-200",
  btnCircle: " border-zinc-400 border-[6px] hover:border-2",
  text: " text-zinc-400 line-through",
  btnCross: " text-zinc-400 hover:text-zinc-800"
};

const ACTIVE_STYLE = {
  li: " bg-gradient-to-r to-[#CBEFFF] from-[#7D88E0]",
  btnCircle: " border-white border-2 hover:border-[6px]",
  text: " text-white",
  btnCross: " text-[#2A4474]",
};

export default function TaskItems({ tasks, handleComplete, handleDelete }){

  return (<ul>
    { tasks.map(item => {
      const currStyle = item.completed ? COMPLETE_STYLE : ACTIVE_STYLE;
      return (
        <li
          key={item.id}
          className={"flex justify-between content-center px-3 py-1 my-2 rounded-lg drop-shadow-md shadow-black" + currStyle.li}
        >
          <button
            onClick={() => {handleComplete(item.id)}}
            className={"w-5 h-5 my-auto rounded-full duration-100 focus:outline-none" + currStyle.btnCircle}
          >
          </button>
          <p
            className={"basis-[85%] my-auto text-md" + currStyle.text}
          >
            {item.text}
          </p>
          <button
            onClick={() => {handleDelete(item.id)}}
            className={"font-bold hover:rotate-180 duration-300" + currStyle.btnCross}
          >
            X
          </button>
        </li>
      )
    })}
  </ul>)
}
