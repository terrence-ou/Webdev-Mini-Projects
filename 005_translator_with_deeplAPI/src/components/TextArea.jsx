export default function TextArea({ title, buttonIcon, onButtonClick, styles, children, ...props }){
  
  let textAreaStyles = "z-10 mt-1 px-3 py-2 rounded-md shadow-[inset_1.5px_1.5px_2px_rgba(0,0,0,0.2)] focus:outline-none text-lg text-zinc-600 leading-6 resize-none";
  if(styles){
    textAreaStyles += " " + styles;
  }

  return (
    <section className="relative flex flex-col mt-6">
      <label className="text-sm text-zinc-600 font-semibold">
        {title}
      </label>
      {children}
      <textarea 
        className={textAreaStyles}
        {...props}
      >
      </textarea>
      <button
        className="absolute right-4 bottom-2 p-[0.1rem] bg-[rgba(255,255,255,0.95)] rounded-lg z-20"
        onClick={onButtonClick}
      >
        <img className="w-5 h-5" src={buttonIcon} alt="button icon" />
      </button>
    </section>
  )
}
