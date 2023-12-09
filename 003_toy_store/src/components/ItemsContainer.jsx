import ItemCard from "./ItemCard.jsx";
import ToysData from "../data/data.js";

export default function ItemsContainer(){

  return (
    <section className="relative flex flex-wrap gap-y-10 gap-x-[4%] justify-start px-44">
      {Object.keys(ToysData).map(key => {
        return <ItemCard key={key} itemKey={key} />
      })}
    </section>
  )
}
