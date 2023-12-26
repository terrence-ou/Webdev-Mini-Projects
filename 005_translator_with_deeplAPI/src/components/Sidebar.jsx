export default function Sidebar({ translationHistory }){
  
  console.log(translationHistory);

  const noHistoryItem = (
    <p className="text-xs text-zinc-400 italic py-4">
      No translation history so far
    </p>
  )

  return (
    <aside className="w-[30%] bg-[#3B3E57] px-6 py-uniform_y">
      <div className="pb-8 border-b-[1px] border-slate-500">
        <h1 className="text-white font-bold text-2xl">
          Translator
        </h1>
        <h3 className="text-white italic font-light text-sm">
          Powered by DeepL API
        </h3>
      </div>
      <div className="py-3">
        <h3 className="text-white italic text-xs">
          History:
        </h3>
        {noHistoryItem}
      </div>
    </aside>
  )
}
