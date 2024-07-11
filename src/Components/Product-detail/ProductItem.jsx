import React from "react";
import PropTypes from "prop-types";
import productdata from "./all-product";
import "./ProductItem.css";
import nocart from "../Assets/img/no-cart.svg";

const ProductItem = ({ id }) => {
  const product = productdata.find((product) => product === id);

  if (!product) {
    return (
      <>
      <div className="cart-img">
        <img src={nocart} />
        </div>
      </>
    );
  }

  const { name, image, price, Description } = product;

  return (
    <div className="item">
      <div className="products-container">
        <div key={id} className="product">
          <img src={image} alt={name} />

          <div className="product-details">
            <h3>{name}</h3>
            <h3>{`Kshs ${price}`}</h3>
            <p>{Description}</p>
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
