import React from "react";
import "./Header.scss";

function Header() {
  return (
   
      <div className="navbar">
        <div className="brand-logo">
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <img
              className="logo-img"
              src="./Logo WO Branding-02 1.svg"
              alt="logo"
            />
          </a>
          <p className="logo-name">Welbure</p>
        </div>
        <div>
          <ul className="nav-links">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Career</li>
            <li>Clientele</li>
          </ul>
        </div>
        <button className="nav-btn">Contact Us</button>
      </div>
  );
}

export default Header;
