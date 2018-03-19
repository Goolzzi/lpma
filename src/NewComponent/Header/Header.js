import React from "react";
import imgLogo from "../../assets/images/NewDesign/Header/logo.svg";

const Header = (props) => (
  <nav className="navbar  is-transparent header-wrapper">
    <div className="navbar-brand">
      <a className="navbar-item" href="#">
        <img src={imgLogo} alt="this is logo" width="112" height="28" />
      </a>
    </div>
    <div className="menu">
      <ul>
        <li><a>Home</a></li>
        <li><a>Pricing</a></li>
        <li><a>Blog</a></li>
        <li><a>Events</a></li>
      </ul>
    </div>
    <div className="navbar-btn-group">
      <div className="navbar-item"><a className="button menu-btn">JOIN LPMA</a></div>
      <div className="navbar-item"><a className="button menu-btn">Sign in</a></div>
    </div>
  </nav>
);
export default Header;