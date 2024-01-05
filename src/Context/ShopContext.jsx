import React, { createContext, useState } from "react";
import productdata from "../Components/Product-detail/ProductData";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < product.length + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};

const ShopContextProvider = (product) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const onAddToCart = (productId) => {
    setCartItems((prev) => ({ ...prev, [productId]: prev[productId] + 1 }));
  };

  const onRemoveFromCart = (productId) => {
    setCartItems((prev) => ({ ...prev, [productId]: prev[productId] - 1 }));
  };

  const contextValue = { productdata, cartItems, onAddToCart, onRemoveFromCart };
  return (
    <ShopContext.Provider value={contextValue}>{product}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
