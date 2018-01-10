import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import "./styles.scss";

const propTypes = {
  topmenu: PropTypes.array.isRequired,
  logo: PropTypes.object.isRequired,
};

const Header = ({topmenu, logo: {file}}) => (
  <nav className="navbar">
    <div className="navbar-brand">
      <Link className="navbar-item" to={"/"}>
        <img src={file.url} alt={file.fileName} />
      </Link>
      <button className="button navbar-burger" />
    </div>
    <div className="navbar-menu">
      <div className="navbar-end">
        {topmenu.map(({id, to, name}) => (
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
