import { useContext } from "react";
import { CartContext } from "./shopping_cart_context";
import ToysData from "../data/data";

export default function Cart(){

  const { items } = useContext(CartContext);
  const totalPrice = Object.keys(items).reduce((acc, key) => {
    return acc + ToysData[key].price * items[key];
  }, 0);

  return (
    <div>
      {Object.keys(items).length === 0 && <p>No items in cart!</p>}
    </div>
  )
}
