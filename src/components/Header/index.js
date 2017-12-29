import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import "./styles.scss";

const propTypes = {
  navItems: PropTypes.array.isRequired,
};

const Header = ({navItems}) => (
  <nav className="navbar">
    <div className="navbar-brand">
      <a className="navbar-item" href="#">
        <img src={require("./../../assets/images/logo.svg")} alt="lpma-logo" />
      </a>
      <button className="button navbar-burger">
        <span />
        <span />
        <span />
      </button>
    </div>
    <div className="navbar-menu">
      <div className="navbar-end">
        {navItems.map(({node: {id, to, name}}) => (
          <Link className="navbar-item" key={id} to={to}>
            {name}
          </Link>
        ))}
      </div>
    </div>
  </nav>
);

Header.propTypes = propTypes;

export default Header;
