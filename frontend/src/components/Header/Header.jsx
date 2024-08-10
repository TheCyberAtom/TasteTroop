import React from 'react';
import "./Header.css";
import { assets } from "../../assets/assets";

const Header = () => {
  return (
    <div className='header' id='header'>
      <div className="header-left">
        <span>Welcome to TasteTroop</span>
        <h2>Delicious Food <br/> Delivered Fast & Fresh <br /> At Your Dorrstep</h2>
        <p>Enjoy a hassle-free food ordering experience with quick delivery, diverse cuisine options, and secure payments.</p>
        <button className='primary-btn'>View Menu</button>
      </div>
      <div className="header-right">
        <img src={assets.hero_image} alt="" />
      </div>
    </div>
  )
}

export default Header
