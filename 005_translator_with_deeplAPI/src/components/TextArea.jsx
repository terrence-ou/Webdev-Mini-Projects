export default function TextArea({ title, children }){

  return (
    <section className="relative flex flex-col mt-6">
      <label className="text-sm text-zinc-600 font-semibold">
        {title}
      </label>
      {children}
      <textarea 
        className="mt-1 px-3 py-2 rounded-md shadow-[inset_1.5px_1.5px_2px_rgba(0,0,0,0.2)] focus:outline-none text-lg leading-6 h-28 resize-none"
        placeholder="Type or paste text here"
      >
      </textarea>
      <button
        className="absolute right-4 bottom-1"
      >
        X
      </button>
    </section>
  )
}
