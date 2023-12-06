import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = forwardRef(function Modal({ children }, ref){

  const modalRef = useRef();
  useImperativeHandle(ref, () => {
    return {
      open(){ modalRef.current.showModal(); }
    };
  });

  return createPortal(
    <dialog ref={modalRef} className="result-modal">
      {children}
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById("modal")
  )

});

export default Modal;
