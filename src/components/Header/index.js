import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./styles.scss";

const NavMenu = ({topmenu, us, handleClick}) => {
  const getNavItem = (id, to, name, country) => (
    <a
      className="navbar-item"
      onClick={handleClick}
      key={id}
      href={us !== -1 && to === "events" ? `${to}-${country}` : to}>
      {name}
    </a>
  );
  return (
    <div className="navbar-end">
      {topmenu.map(({id, to, name, country}) => {
        if (us === -1 || country === "us") {
          return getNavItem(id, to, name, country, us);
        }
      })}
    </div>
  );
};

const propTypes = {
  topmenu: PropTypes.array.isRequired,
  logo: PropTypes.object.isRequired,
  us: PropTypes.number.isRequired,
};

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive,
    }));
  };

  render() {
    const {topmenu, logo: {file}, us} = this.props;
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
            <NavMenu topmenu={topmenu} us={us} handleClick={this.handleClick} />
          </div>
        </nav>
      </div>
    );
  }
}

Header.propTypes = propTypes;

export default Header;
