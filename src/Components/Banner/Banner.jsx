import React from "react";
import "./Banner.css";
import banner from "../Assets/banner-img.svg";
const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-left">
        <p>Welcome to Mbao Zetu</p>
        <button>View Furniture</button>
      </div>
      <div className="banner-right">
        <img src={banner} />
      </div>
    </div>
  );
};

export default Banner;
