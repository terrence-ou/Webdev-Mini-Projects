const MAX_LENGTH = 22;

export default function HistoryItem({id, item, onDelete}){
  return (
    <div className="flex justify-between p-2 mb-3 text-[0.65rem] text-zinc-200 bg-[rgba(255,255,255,0.3)] rounded-xl">
      <button className="text-left">
        <span className="italic font-thin">
          {`From ${item.source_lang} to ${item.target_lang}`}
        </span>
        <p className="font-light text-[0.7rem]">
          {item.text.length > MAX_LENGTH ? item.text.slice(0, MAX_LENGTH) + "..." : item.text}
        </p>
      </button>
      <button onClick={() => onDelete(id)}>X</button>
    </div>
  )
}
