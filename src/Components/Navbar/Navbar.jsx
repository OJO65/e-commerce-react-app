import React from "react";
import "./Navbar.css";
import logo from "../Assets/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const Navbar = ({ cartCount, onAddToCart }) => {
  return (
    <>
      <div className="navbar">
        <Link to={"/Homepage"}>
          <div className="nav-logo">
            <img src={logo} alt={logo} />
          </div>
        </Link>
        <h3>Mbao Zetu</h3>
        <div className="nav-login-cart">
          <FontAwesomeIcon icon={faUser} />
          <Link to={"/login"}>
            <div className="login">Log in</div>
          </Link>
          <Link to={"/cartpage"}>
            <div id="cart" onClick={onAddToCart}>
              <FontAwesomeIcon icon={faShoppingCart} />
              {cartCount > 0 && (
                <div className="nav-login-cart-count">{cartCount}</div>
              )}
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
