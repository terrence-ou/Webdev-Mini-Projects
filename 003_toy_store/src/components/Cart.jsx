import { useContext } from "react";
import { CartContext } from "./shopping_cart_context";
import ToysData from "../data/data";

export default function Cart(){

  const { items, updateItemQuantity } = useContext(CartContext);

  // Calculate total price in the shopping cart
  const totalPrice = Object.keys(items).reduce((acc, key) => {
    return acc + ToysData[key].price * items[key];
  }, 0).toFixed(2);

  function handleAddItem(key){
    updateItemQuantity(key, "ADD");
  }

  function handleSubtractItem(key){
    updateItemQuantity(key, "SUB");
  }

  // Generate a list of items in the cart
  function getItemsList(){
    return (<>
      <ul className="flex flex-col gap-1 content-center my-4 text-[1rem]">
        {Object.keys(items).map(key => {
          return (
          <li key={key} className="flex justify-between content-center">
            <div className="flex pr-5 w-full justify-between">
              <span>{ToysData[key].name}</span>
              <span>${ToysData[key].price}</span>
            </div>
            <div className="flex gap-1">
              <button onClick={()=>handleAddItem(key)} className="w-4 bg-white">+</button>
              <span className="w-5 text-center">{items[key]}</span>
              <button onClick={()=>handleSubtractItem(key)} className="w-4 bg-white">-</button>
            </div>
          </li>)
        })}
      </ul>
      <p className="text-right">Cart Total: <span className="font-bold pl-4">${totalPrice}</span></p>
    </>)
  }

  const listEmpty = Object.keys(items).length === 0;

  return (<>
    <div>
      {listEmpty && <p>No items in cart!</p>}
      {!listEmpty && getItemsList()}
    </div>
    <form method="dialog" className="flex gap-6 justify-center pt-4 mx-auto text-center">
      {!listEmpty && <button className="py-1 rounded-md hover:font-bold">Check Out</button>}
      <button className="hover:font-bold duration-100">Close</button>
    </form>
    </>
  )
}
