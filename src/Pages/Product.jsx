import React from "react";
import ProductDetail from "../Components/Product-detail/ProductDetail";
import productdata from "../Components/Product-detail/all-product";

const Product = () => {
  return (
    <div>
      <ProductDetail products={productdata}/>
    </div>
  );
};

export default Product;
