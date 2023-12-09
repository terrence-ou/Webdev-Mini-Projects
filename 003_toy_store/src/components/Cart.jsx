import { useContext } from "react";
import { CartContext } from "./shopping_cart_context";
import ToysData from "../data/data";

export default function Cart(){

  const { items, updateItemQuantity } = useContext(CartContext);

  const totalPrice = Object.keys(items).reduce((acc, key) => {
    return acc + ToysData[key].price * items[key];
  }, 0).toFixed(2);

  function handleAddItem(key){
    updateItemQuantity(key, "ADD");
  }

  function handleSubtractItem(key){
    updateItemQuantity(key, "SUB");
  }

  function getItemsList(){

    return (<>
      <ul>
        {Object.keys(items).map(key => {
          return (
          <li key={key}>
            <div>
              <span>{ToysData[key].name}</span>
              <span>{ToysData[key].price}</span>
            </div>
            <div>
              <button onClick={()=>handleAddItem(key)}>+</button>
              <span>{items[key]}</span>
              <button onClick={()=>handleSubtractItem(key)}>-</button>
            </div>
          </li>)
        })}
      </ul>
      <p>Cart Total: {totalPrice}</p>
    </>)
  }

  const listEmpty = Object.keys(items).length === 0;

  return (<>
    <div>
      {listEmpty && <p>No items in cart!</p>}
      {!listEmpty && getItemsList()}
    </div>
    <form method="dialog">
      {!listEmpty && <button>Check Out</button>}
      <button>Close</button>
    </form>
    </>
  )
}
