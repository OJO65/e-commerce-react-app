import React, { useState } from "react";
import Cart from "../Components/Cart/Cart";
const Cartpage = () => {
  const [cartItems, setCartItems] = useState({});
  return (
    <div>
      <Cart cartItems={cartItems} />
    </div>
  );
};

export default Cartpage;
