import React from "react";
import "./Navbar.css";
import logo from "../Assets/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Navbar = ({ cartCount }) => {
  return (
    <div className="navbar">
      <Link to={"/Homepage"}>
        <div className="nav-logo">
          <img src={logo} alt="Mbao Zetu" />
        </div>
      </Link>

      <div className="nav-login-cart">
        <h1>Mbao Zetu</h1>
        <FontAwesomeIcon icon={faUser} />
        <Link to={"/login"}>
          <div className="login">Log in</div>
        </Link>
        <Link to={"/cartpage"}>
          <div id="cart">
            <FontAwesomeIcon icon={faShoppingCart} />
            {cartCount > 0 && (
              <div className="nav-login-cart-count">{cartCount}</div>
            )}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
