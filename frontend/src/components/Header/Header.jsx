import React from "react";
import "./Header.css";
import { assets } from "../../assets/assets";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="header" id="header">
      <div className="header-left">
        <span>Welcome to TasteTroop</span>
        <h2>
          Delicious Food <br /> Delivered Fast & Fresh <br /> At Your Doorstep
        </h2>
        <p>
          Enjoy a hassle-free food ordering experience with quick delivery,
          diverse cuisine options, and secure payments.
        </p>
        <a href="#menu-container">
          <button className="primary-btn">View Menu</button>
        </a>
      </div>
      <div className="header-right">
        <img src={assets.hero_image} alt="" />
      </div>
    </div>
  );
};

export default Header;
