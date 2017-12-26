import React from "react";
import classNames from "classnames";
import Link from "gatsby-link";
import "./styles.scss";

const Header = () => (
  <nav className={classNames("nav", {bar: true, d: false})}>
    <button className="button is-danger">Danger</button>
    <div className="nav-center">
      <a className="nav-item">
        <span className="icon">
          <i className="fa fa-github" />
        </span>
      </a>
      <a className="nav-item">
        <span className="icon">
          <i className="fa fa-twitter" />
        </span>
      </a>
    </div>

    <span className="nav-toggle">
      <span />
      <span />
      <span />
    </span>
    <div className="nav-right nav-menu">
      <Link className="nav-item" to="/page-2/">
        Go to page 2
      </Link>
      <Link className="nav-item" to="/">
        index
      </Link>
      <Link className="nav-item" to="/page-2/">
        Go to page 2
      </Link>
      <Link className="nav-item" to="/page-2/">
        Go to page 2
      </Link>
    </div>
  </nav>
);

export default Header;
