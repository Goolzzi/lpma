import React from "react";
import Link from "gatsby-link";
import PropTypes from "prop-types";
import imgLogo from "../../assets/images/NewDesign/Header/logo.svg";
const menuPrimaryIndexes = [0, 1, 23]
const secondaryIndexes = [2, 3, 7, 8, 12, 13, 17, 18]
const primaryIndexes = [0, 1, 4, 5, 6, 9, 10, 11, 14, 15, 16, 19, 20, 21, 22, 23]
var menuClass = '';
var lightBtnClass = '';
var btnClass = '';

const Header = (props) => {
  console.log(props.pageNumber);
  const { pageNumber } = props;
  
  if (secondaryIndexes.indexOf(pageNumber) !== -1) {
    btnClass = 'secondary';
  } else if (primaryIndexes.indexOf(pageNumber) !== -1) {
    btnClass = '';
  }
  if (menuPrimaryIndexes.indexOf(pageNumber) !== -1) {
    menuClass = '';
  } else {
    menuClass = 'secondary';
  }

  return (
    <nav className={`navbar  is-transparent header-wrapper`}>
      <div className="navbar-brand">
        <a className="navbar-item" onClick={() => props.selectPage('Home')}>
          <img src={imgLogo} alt="this is logo" width="112" height="28" />
        </a>
      </div>
      <div className={`menu ${menuClass}`}>
        <ul>
          <li><Link to="/" onClick={() => props.selectPage('Home')}>Home</Link></li>
          <li><Link to="/" onClick={() => props.selectPage('Pricing')}>Pricing</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/events">Events</Link></li>
        </ul>
      </div>
      <div className={`navbar-btn-group ${btnClass}`}>
        <div className="navbar-item"><a className="button menu-btn" onClick={() => props.selectPage('Join')}>JOIN LPMA</a></div>
        <div className="navbar-item"><a className="button menu-btn" onClick={() => window.location.href = 'https://lpma-identity-dev.trunkplatform.com.au/users/sign_in'}>Sign in</a></div>
      </div>
    </nav>
  )
};
Header.propTypes = {
  selectPage: PropTypes.func
}
Header.defaultProps = {
  selectPage: () => console.log('on pricing')
}
export default Header;