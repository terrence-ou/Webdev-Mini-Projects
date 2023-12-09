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
    <dialog ref={dialogRef}>
      <h2>Shopping Cart</h2>
      <Cart />

    </dialog>
    , document.getElementById("modal")
  )

});

export default CartModal;
