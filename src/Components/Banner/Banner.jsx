import React from "react";
import { useNavigate } from "react-router-dom"
import "./Banner.css";
import banner from "../Assets/banner-img.svg";
const Banner = () => {
  const navigate = useNavigate ();
  const handleClick = () => {
    navigate("/Product");
  };
  return (
    <div className="banner">
      <div className="banner-left">
        <p>Welcome to Mbao Zetu</p>
        <button onClick={handleClick}>View Furniture</button>
      </div>
      <div className="banner-right">
        <img src={banner} />
      </div>
    </div>
  );
};

export default Banner;
