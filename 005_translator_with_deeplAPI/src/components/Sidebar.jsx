import HistoryItem from "./HistoryItem.jsx";

export default function Sidebar({ translationHistory, onDelete }){
  
  const noHistoryItem = (
    <p className="text-xs text-zinc-400 italic py-4">
      No translation history so far
    </p>
  )

  const historyItems = () => {
    return (
      <section className="mt-5">
        {Object.entries(translationHistory).map(([key, item], i) => {
          return <HistoryItem key={key} id={key} item={item} onDelete={onDelete}/>
        })}
      </section>
    )
  };


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
        {Object.keys(translationHistory).length === 0 ? noHistoryItem : historyItems()}
      </div>
    </aside>
  )
}
