import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmout: 0,
};

function cartReducer(state, action) {
  if(action.type==='ADD_CART_ITEM'){
    const updatedItems = state.items.concat(action.item);
    const updateTotalAmount = state.totalAmout + action.item.price * action.item.amount;
    return {
      items : updatedItems,
      totalAmout : updateTotalAmount
    }
  }
  return defaultCartState;
}

function CartProvider(props) {
  const [cartState,dispatchCartAction] = useReducer(cartReducer, defaultCartState);
  
  
  function addItemToCardHandler(item) {
    dispatchCartAction({type:'ADD_CART_ITEM',item:item})
  }
  function removeItemToCardHandler() {}

  const cartContext = {
    items: cartState.items,
    totalAmout: cartState.totalAmout,
    addItem: addItemToCardHandler,
    removeItem: removeItemToCardHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
}

export default CartProvider;
