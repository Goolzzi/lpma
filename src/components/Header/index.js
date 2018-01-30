import React from "react";
import PropTypes from "prop-types";
import LPMALink from "../../utils/LPMALink";
import classNames from "classnames";
import "./styles.scss";

const propTypes = {
  topmenu: PropTypes.array.isRequired,
  logo: PropTypes.object.isRequired,
  forUSA: PropTypes.bool.isRequired,
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
    const {topmenu, logo: {file}, forUSA} = this.props;
    const {isActive} = this.state;
    const menuItems = forUSA
      ? topmenu.filter(({country}) => country === "us")
      : topmenu;
    return (
      <div className="navbar-wrapper">
        <nav className="navbar">
          <div className="navbar-brand">
            <LPMALink cssClass={"navbar-item"} force={true} to={"/"}>
              <img src={file.url} alt={file.fileName} />
            </LPMALink>
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
              {menuItems.map(({id, to, name, force}) => {
                return (
                  <LPMALink
                    cssClass={"navbar-item"}
                    force={!!force}
                    onClick={this.handleClick}
                    key={id}
                    to={to}>
                    {name}
                  </LPMALink>
                );
              })}
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

Header.propTypes = propTypes;

export default Header;
