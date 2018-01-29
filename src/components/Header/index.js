import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import classNames from "classnames";
import "./styles.scss";

const propTypes = {
  topmenu: PropTypes.array.isRequired,
  logo: PropTypes.object.isRequired,
};

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
    };
  }

  render() {
    const {topmenu, logo: {file}} = this.props;
    const {isActive} = this.state;
    return (
      <div className="navbar-wrapper">
        <nav className="navbar">
          <div className="navbar-brand">
            <a className="navbar-item" href={"/"}>
              <img src={file.url} alt={file.fileName} />
            </a>
            <button
              onClick={() =>
                this.setState(prevState => ({isActive: !prevState.isActive}))
              }
              className={classNames("button navbar-burger", {
                "is-active": isActive,
              })}>
              <span />
              <span />
              <span />
            </button>
          </div>
          <div
            className={classNames("navbar-menu", {
              "is-active": isActive,
            })}>
            <div className="navbar-end">
              {topmenu.map(({id, to, name}) => (
                <a
                  className="navbar-item"
                  onClick={() => {
                    this.setState(prevState => ({
                      isActive: !prevState.isActive,
                    }));
                  }}
                  key={id}
                  href={to}>
                  {name}
                </a>
              ))}
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

Header.propTypes = propTypes;

export default Header;
