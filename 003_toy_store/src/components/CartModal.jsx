import { useRef, forwardRef, useImperativeHandle } from "react";
import { createPortal } from "react-dom";

import Cart from "./Cart.jsx";

const CartModal = forwardRef(function CartModal({props}, ref){

  const dialogRef = useRef();
  useImperativeHandle(ref, ()=>{
    return {
      open: () => {dialogRef.current.showModal()},
    };
  });

  return createPortal(
    <dialog ref={dialogRef}>
      <h2>Shopping Cart</h2>
      <Cart />
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
    , document.getElementById("modal")
  )

});

export default CartModal;
