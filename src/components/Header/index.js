import React from "react";
import PropTypes from "prop-types";
import BurgerSubMenu from "./burgerSubMenu";
import LPMALink from "../../utils/LPMALink";
import classNames from "classnames";
import "./styles.scss";

const propTypes = {
  topmenu: PropTypes.array.isRequired,
  logo: PropTypes.object.isRequired,
  foundryLinks: PropTypes.array.isRequired,
  forUSA: PropTypes.bool.isRequired,
};

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
      isActiveMenu: false,
      isFoundryOpen: false,
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive,
      isActiveMenu: !prevState.isActiveMenu,
    }));
  };

  render() {
    const {topmenu, logo: {file}, foundryLinks, forUSA} = this.props;
    const {isActive, isActiveMenu, isFoundryOpen} = this.state;
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
              {menuItems.map(({id, to, name, force, slug}) => {
                return slug === "foundry" ? (
                  <button
                    onClick={() =>
                      this.setState(prevState => ({
                        isFoundryOpen: !prevState.isFoundryOpen,
                      }))
                    }
                    className={classNames("navbar-item has-dropdown", {
                      "is-active": isFoundryOpen,
                    })}>
                    <LPMALink to={"#"} cssClass={"navbar-link"}>
                      {name}
                    </LPMALink>
                    <div className="navbar-dropdown">
                      {foundryLinks.edges.map(({node: {title, slug}}) => (
                        <LPMALink key={slug} to={slug} cssClass={"navbar-item"}>
                          {title}
                        </LPMALink>
                      ))}
                    </div>
                  </button>
                ) : (
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
          <button
            onClick={() =>
              this.setState(prevState => ({
                isActiveMenu: !prevState.isActiveMenu,
              }))
            }
            className={classNames("button navbar-burger custom-burger", {
              "is-active": isActiveMenu,
              "hide-burger": forUSA,
            })}>
            <span />
            <span />
            <span />
          </button>
        </nav>
        <BurgerSubMenu isActiveMenu={isActiveMenu} />
      </div>
    );
  }
}

Header.propTypes = propTypes;

export default Header;
