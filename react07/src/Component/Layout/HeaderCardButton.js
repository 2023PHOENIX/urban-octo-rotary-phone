import CartIcon from "../../Component/CART/CartIcon";
import classes from "./HeaderCardButton.module.css";

import CartContext from "../../store/cart-context";
import { useContext } from "react";

function HeaderCardButton(props) {
  const cartCTX = useContext(CartContext);

  const numberOfCartItems = cartCTX.items.reduce((curNumber,item) => {
    return curNumber + item.amount;
  },0);

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
}

export default HeaderCardButton;
