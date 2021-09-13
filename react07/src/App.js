// import "./App.css";
import React, { useState } from "react";
import Header from "./Component/Layout/Header";
import Meal from "./Component/Meal/Meal";
import Cart from "./Component/CART/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartShown, setcartShown] = useState(false);

  function showCart() {
    setcartShown(true);
  }
  function hideCart() {
    setcartShown(false);
  }

  return (
    <CartProvider>
      {cartShown && <Cart onHideCart={hideCart} />}
      <Header onShowCart={showCart} />
      <main>
        <main>
          <Meal />
        </main>
      </main>
    </CartProvider>
  );
}

export default App;
