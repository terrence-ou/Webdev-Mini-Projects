import { useRef, forwardRef, useImperativeHandle } from "react";
import { createPortal } from "react-dom";

import Cart from "./Cart.jsx";

const CartModal = forwardRef(function CartModal({}, ref){

  const dialogRef = useRef();
  useImperativeHandle(ref, ()=>{
    return {
      open: () => {dialogRef.current.showModal()},
    };
  });

  return createPortal(
    <dialog ref={dialogRef} className="w-[36%] px-6 py-6 bg-orange-100 backdrop:bg-zinc-800/80 rounded-md shadow-md">
      <h2 className="font-bold relative text-center mx-auto text-zinc-800 text-lg pb-3">Shopping Cart</h2>
      <Cart />
    </dialog>
    , document.getElementById("modal")
  )

});

export default CartModal;
