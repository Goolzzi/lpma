import React from "react";
import imgLogo from "../../assets/images/NewDesign/Header/logo.svg";
var menuClass = '';
var lightBtnClass = '';
var btnClass = '';

const Header = (props) => {
  console.log(props.pageNumber);
  const { pageNumber } = props;
  
  if (pageNumber > 1) {
    menuClass = 'transition-down menu-2';
    lightBtnClass = '';
    btnClass = '';
  }
  // let menuClass = 'page-1';
  // switch (pageNumber) {
  //   case 0:
  //     menuClass = 'page-1';
  //     break;
  //   case 2:
  //     menuClass = menuClass + ' page-2';
  //     break;
  // }
  return (
    <nav className={`navbar  is-transparent header-wrapper`}>
      <div className="navbar-brand">
        <a className="navbar-item" href="#">
          <img src={imgLogo} alt="this is logo" width="112" height="28" />
        </a>
      </div>
      <div className={`menu ${menuClass}`}>
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
  )
};
export default Header;