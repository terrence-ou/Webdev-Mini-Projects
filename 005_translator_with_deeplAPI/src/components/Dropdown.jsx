export default function Dropdown({label, defaultVal}){

  return (
    <>
      <span className="text-sm text-zinc-600 font-semibold mr-2">
        {label + ":"}
      </span>
      <button className="bg-white w-44 px-2 py-[0.2rem] text-left text-zinc-600 rounded-md text-sm shadow-[inset_1px_1px_2px_rgba(0,0,0,0.2)]">
        {defaultVal}
      </button>
    </>
  )
}
