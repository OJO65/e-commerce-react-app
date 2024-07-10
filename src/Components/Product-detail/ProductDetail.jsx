import productdata from "./all-product";
import "./ProductDetail.css";
import React, { useState } from "react";



const ProductDetail = () => {
  const [counters, setCounters] = useState({});

  const increaseCounter = (productId) => {
    setCounters((prevCounters) => ({
      ...prevCounters,
      [productId]: Math.min((prevCounters[productId] || 0) + 1, 100),
    }));
  };

  const decreaseCounter = (productId) => {
    setCounters((prevCounters) => ({
      ...prevCounters,
      [productId]: Math.max((prevCounters[productId] || 0) - 1, 0),
    }));
  };

  const handleInputChange = (productId, event) => {
    const inputValue = event.target.value;
    setCounters((prevCounters) => ({
      ...prevCounters,
      [productId]: inputValue,
    }));
  };

  return (
    <div className="content">
      {productdata.map((product) => (
        <div key={product.id} className="container">
          <div className="products-container">
            <div className="product">
              <img src={product.image} alt={product.name} />
              <div className="product-counters">
                <span
                  onClick={() => decreaseCounter(product.id)}
                  className="minus"
                >
                  -
                </span>
                <input
                  type="input"
                  className="counter-value"
                  min="0"
                  max="100"
                  value={counters[product.id] || "0"}
                  onChange={(event) => handleInputChange(product.id, event)}
                />
                <span
                  onClick={() => increaseCounter(product.id)}
                  className="plus"
                >
                  +
                </span>
              </div>
              <div className="product-details">
                <h3>{product.name}</h3>
                <h3>{`Kshs ${product.price}`}</h3>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};



export default ProductDetail;
