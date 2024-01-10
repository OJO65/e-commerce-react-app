import React from "react";
import PropTypes from "prop-types";
import productdata from "./all-product"
import "./ProductItem.css";

const ProductItem = ({ id }) => {

  const product = productdata.find((product) => product.id === id);
  
  if (!product) {
    return ("no product is selected");
  }

  const { name, image, price, Description } = product;


  return (
    <div className="item">
      <div key={id} className="container">
        <div className="products-container">
          <div className="product">
            <img src={image} alt={name} />

            <div className="product-details">
              <h3>{name}</h3>
              <h3>{`Kshs ${price}`}</h3>
              <p>{Description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ProductItem.propTypes = {
  id: PropTypes.string.isRequired,
};

export default ProductItem;
