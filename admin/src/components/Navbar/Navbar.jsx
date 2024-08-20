import React from "react";
import "./Navbar.css";
import Logo from "../../assets/logoBlack.png";
import ProfileImg from "../../assets/profile.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="admin-logo">
        <img className="logo" src={Logo} alt="app logo" />
        <div className="admin-text">
          <h2>TasteTroop</h2>
          <p>Admin Panel</p>
        </div>
      </div>
      <img className="profile" src={ProfileImg} alt="profile" />
    </div>
  );
};

export default Navbar;
