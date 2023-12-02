import React from "react";
import "./Navbar.css";
import logo from "../Assets/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="nav-logo">
          <img src={logo} />
        </div>

        <div className="title">Mbao Zetu</div>

        <div className="nav-login-cart">
          <FontAwesomeIcon icon={faUser} />
          <Link to={'/login'}><div className="login">LogIn</div></Link>
          <FontAwesomeIcon icon={faShoppingCart} />
          <div className="nav-login-cart-count">0</div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
