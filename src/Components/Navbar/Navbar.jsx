import React, { useState } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState({});

  const handleAddToCart = (productId, quantity) => {
    setCartCount((prevCount) => prevCount + quantity);
    setCartItems((prevItems) => ({
       ...prevItems,
       [productId]: (prevItems[productId] || 0) + quantity 
    }));
  };
  return (
    <>
      <div className="navbar">
        <Link to={"/Homepage"}>
          <div className="nav-logo">
            <img src={logo} />
          </div>
        </Link>
        <h3>Mbao Zetu</h3>
        <div className="nav-login-cart">
          <FontAwesomeIcon icon={faUser} />
          <Link to={"/login"}>
            <div className="login">Log in</div>
          </Link>
          <div id="cart">
            <FontAwesomeIcon icon={faShoppingCart} />
            {cartCount > 0 && (
              <div className="nav-login-cart-count">{cartCount}</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
