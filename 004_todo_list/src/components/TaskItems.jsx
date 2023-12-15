export default function TaskItems({ tasks, handleComplete }){


  return (<ul>
    { tasks.map(item => {
      return (
        <li key={item.id} className="flex justify-between content-center px-3 py-1 my-2 bg-gradient-to-r to-[#CBEFFF] from-[#7D88E0] rounded-lg">
          <button
            onClick={() => {handleComplete(item.id)}}
            className="w-5 h-5 my-auto rounded-full border-white border-2 hover:border-[6px] duration-100 focus:outline-none"
          >
          </button>
          <p
            className="basis-[85%] my-auto text-white text-md"
          >
            {item.text}
          </p>
          <button
            className="text-[#2A4474]"
          >
            X
          </button>
        </li>
      )
    })}
  </ul>)
}
