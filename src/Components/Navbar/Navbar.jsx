import React from "react";
import "./Navbar.css";
import logo from "../Assets/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import banner from "../Assets/banner-img.svg";
import { faUser } from "@fortawesome/free-solid-svg-icons";
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
          <div className="login">LogIn</div>
          <FontAwesomeIcon icon={faShoppingCart} />
        </div>
      </div>
      <section className="title-content">
        <div className="banner">
          <div className="content">
            Welcome to Mbao Zetu
            <button>View Furniture</button>
            <img src={banner} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;
