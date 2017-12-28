import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import "./styles.scss";

const propTypes = {
  navItems: PropTypes.array.isRequired,
};

const Header = ({navItems}) => (
  <nav className="nav">
    {navItems.map(({node: {id, to, name}}) => (
      <Link className="nav-item" key={id} to={to}>
        {name}
      </Link>
    ))}
  </nav>
);

Header.propTypes = propTypes;

export default Header;
