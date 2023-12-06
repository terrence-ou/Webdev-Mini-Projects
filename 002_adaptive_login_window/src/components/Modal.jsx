import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import { styled } from "styled-components";

const Dialog = styled.dialog`


  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  width: 15rem;
  height: 5rem;
  background-color: #FDFCF6;

  border: none;
  border-radius: 1rem;

  font-size: 1.0rem;
  font-weight: 400;


  &::backdrop{
    background-color: black;
    opacity: 0.5;
  }

  & button{
    height: 2.0rem;
    width: 4.5rem;
    border: none;
    border-radius: 0.2rem;
    background-color: #D88D4E;
    color: white;
    transition: .2s;

    &:hover{
      cursor: pointer;
      background-color: #A94E1F;
    }
  }
`

const Modal = forwardRef(function Modal({ children }, ref){

  const modalRef = useRef();
  useImperativeHandle(ref, () => {
    return {
      open(){ modalRef.current.showModal(); }
    };
  });

  return createPortal(
    <Dialog ref={modalRef}>
      {children}
      <form method="dialog">
        <button>Close</button>
      </form>
    </Dialog>,
    document.getElementById("modal")
  )

});

export default Modal;
