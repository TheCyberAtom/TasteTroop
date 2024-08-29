import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <div className="footer-brand">
            <img src={assets.logoWhite} alt="app-logo" />
            <h1>TasteTroop</h1>
          </div>
          <p>
            TasteTroop is your go-to for exceptional meals from our single,
            carefully curated restaurant. Enjoy a diverse menu featuring
            expertly crafted dishes, delivered quickly and freshly to your home.
            With TasteTroop, savor high-quality, restaurant-style dining without
            stepping outside!
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <a
              href="https://www.linkedin.com/in/thecyberatom/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={assets.linkedin_icon} alt="" />
            </a>
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+91987654321</li>
            <li>contact@tastetroop.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 @ TasteTroop - All Right Reserved.
      </p>
    </div>
  );
};

export default Footer;
