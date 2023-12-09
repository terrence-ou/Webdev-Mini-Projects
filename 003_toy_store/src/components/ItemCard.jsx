import { useContext } from "react";
import { CartContext } from "./shopping_cart_context";
import ToysData from "../data/data";

export default function ItemCard({itemKey}){

  const { items, addItemToCart } = useContext(CartContext);
  const {name, price, img} = ToysData[itemKey];
  const imgDir = "/src/assets/" + img;
  return (
    <div className="relative flex flex-col w-[22%] h-64 rounded-xl bg-gradient-to-t from-[#F2DDC8] via-white via-50% to-white drop-shadow-lg overflow-hidden">
      <img src={imgDir} className="h-[75%] object-cover rounded-xl drop-shadow-lg"/>
      <div className="flex justify-between content-end align-bottom px-2 my-auto">
        <div>
          <h2 className="font-bold tracking-wide text-[0.9rem]">{name}</h2>
          <h2 className="font-semibold text-[0.8rem] tracking-tight">${price}</h2>
        </div>
        <button
          className="self-end bg-zinc-50 hover:bg-zinc-800 text-zinc-800 hover:text-zinc-50 duration-100 text-[0.6rem] tracking-tight py-1 px-2 rounded-full"
          onClick={() => addItemToCart(itemKey)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  )
}
