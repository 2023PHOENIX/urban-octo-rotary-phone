import classes from "./Cart.module.css";
import Modal from "../../Component/UI/Modal";
function Cart(props) {
  const cartItems = [{ id: "c1", name: "sushi", amount: 2, price: 12.99 }].map(
    (item) => <li>{item.name}</li>
  );

  return (
    <Modal>

      {cartItems}
      <div className={classes.total}>
        <span>Total amount.</span>
        <span> 42.43</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onHideCart}>Close </button>
        <button className={classes.button} onClick={props.onHideCart}> Order</button>
      </div>
    </Modal>

  );
}

export default Cart;
