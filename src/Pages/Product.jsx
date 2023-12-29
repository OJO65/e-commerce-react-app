import React, { useState } from "react";
import ProductDetail from "../Components/Product-detail/ProductDetail";

const Product = () => {
  const [counters, setCounters] = useState({});
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = (productId, quantity = 1) => {
    console.log("Adding to cart:", productId, quantity);
    setCounters((prevCounters) => ({
      ...prevCounters,
      [productId]: Math.min((prevCounters[productId] || 0) + quantity, 100),
    }));
    setCartCount((prevCount) => prevCount + quantity);
  };

  const handleRemoveFromCart = (productId) => {
    console.log("Removing from cart:", productId);
    setCounters((prevCounters) => ({
      ...prevCounters,
      [productId]: Math.max((prevCounters[productId] || 0) - 1, 0),
    }));
    setCartCount((prevCount) => Math.max(prevCount - 1, 0));
  };

  return (
    <div>
      <ProductDetail
        onAddToCart={handleAddToCart}
        onRemoveFromCart={handleRemoveFromCart}
        cartCount={cartCount}
      />
    </div>
  );
};

export default Product;
