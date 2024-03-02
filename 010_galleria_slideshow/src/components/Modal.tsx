import { forwardRef, ReactNode } from "react";
import { createPortal } from "react-dom";

interface Props {
  children?: ReactNode;
}
export type Ref = HTMLDialogElement;

const element: HTMLElement | null = document.getElementById("modal");

const Modal = forwardRef<Ref, Props>((props, ref) => {
  return createPortal(
    <dialog ref={ref} className="backdrop:bg-gray-0/85 bg-gray-0/0 text-end">
      {props.children}
    </dialog>,
    element!
  );
});

export default Modal;
