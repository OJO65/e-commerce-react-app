import React from "react";
import './ProductItem.css';
import productdata from "./all-product";


const ProductItem = ({ name, id, price, Description }) => {
  return (
    <div className="item">
      <div key={id} className="container">
        <div className="products-container">
          <div className="product">
            <img src={productdata} alt={name} />

            <div className="product-details">
              <h3>{name}</h3>
              <h3>{`Kshs ${price}`}</h3>
              <h4>{Description}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
