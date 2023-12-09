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

  if (action.type === "UPDATE_CART"){
    const updatedState = {...state};
    if (action.payload.mode === "ADD"){
      updatedState[action.payload.id] += 1;
    } else if (action.payload.mode === "SUB"){
      updatedState[action.payload.id] -= 1;
      if (updatedState[action.payload.id] <= 0){
        delete updatedState[action.payload.id];
      }
    }
    return {...updatedState};
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

  function handleUpdateQuantity(id, mode){
    cartDispatch(
      {type: "UPDATE_CART",
        payload: {id, mode}
      }
    )
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
