import React from "react";
import "./Navbar.css";
import logo from "../Assets/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-left">
      <Link to={"/Homepage"}>
          <img src={logo} alt="Mbao Zetu" />
      </Link>
      <h1>Mbao Zetu</h1>
      </div>
      <div className="nav-right">
        <FontAwesomeIcon icon={faUser} className="icon" />
        <Link to={"/login"}>
          <h1>Log in</h1>
        </Link>
        <Link to={"/cartpage"}>
            <FontAwesomeIcon icon={faShoppingCart} className="cart" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
