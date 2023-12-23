import React, { useState } from "react";
import Cart from "../Components/Cart/Cart";
const Cartpage = () => {
  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState({});

  const handleAddToCart = () => {
    setCartCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <Cart cartItems={cartItems} onAddToCart={handleAddToCart} />
    </div>
  );
};

export default Cartpage;
