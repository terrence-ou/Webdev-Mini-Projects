import { createContext, useReducer } from "react";
import ToysData from "../data/data";

export const CartContext = createContext({
  items: {},
  addItemToCart: () => {},
  updateItemQuantity: () => {},
});

function cartReducer(state, action){
  if (action.type === "ADD_ITEM"){
    const updatedState = {...state};
    if (action.payload in updatedState){
      const newQuant = updatedState[action.payload] += 1;
      return {...updatedState,
              [action.payload]: newQuant}
    } else {
      return {...updatedState, [action.payload]: 1}
    }
  }
  return state;
}

export default function CartContextProvider({ children }){

  const [ cartState, cartDispatch ] = useReducer(cartReducer, {});

  function handleAddItem(id){
    cartDispatch(
      {type: "ADD_ITEM", payload: id}
    );
  }

  function handleUpdateQuantity(id){

  }

  const contextValue = {
    items: cartState,
    addItemToCart: handleAddItem,
    updateItemQuantity: handleUpdateQuantity,
  };

  return(
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  )
}
