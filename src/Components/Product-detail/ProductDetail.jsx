import React from "react";
import productdata from "./ProductData";
import "./ProductDetail.css";

const ProductDetail = () => {
  return (
    <div className="content">
      {productdata.map((product) => (
        <div key={product.id} className="container">
          <div className="products-container">
            <div className="product">
              <img src={product.img} alt={product.Title} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductDetail;
