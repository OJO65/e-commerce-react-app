import React, { useState } from "react";
import ProductDetail from "../Components/Product-detail/ProductDetail";
const Product = () => {
  const [counters, setCounters] = useState({});
  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState({});

  const handleAddToCart = (productId) => {
    setCounters((prevCounters) => ({
      ...prevCounters,
      [productId]: Math.min((prevCounters[productId] || 0) + 1, 100),
    }));
    setCartCount((prevCount) => prevCount + 1);
    setCartItems((prevItems) => ({
      ...prevItems,
      [productId]: (prevItems[productId] || 0) + 1, 
    }));
  };

  const handleRemoveFromCart = (productId) => {
    setCounters((prevCounters) => ({
      ...prevCounters,
      [productId]: Math.max((prevCounters[productId] || 0) - 1, 0),
    }));
    setCartCount((prevCount) => Math.max(prevCount - 1, 0));
    setCartItems((prevItems) => {
      const updatedItems = { ...prevItems };
      if (updatedItems[productId] > 0) {
        updatedItems[productId] -= 1;
      }
      return updatedItems;
    });
  };

  return (
    <div>
      <ProductDetail
        counters={counters}
        onAddToCart={handleAddToCart}
        onRemoveFromCart={handleRemoveFromCart}
      />
    </div>
  );
};

export default Product;
