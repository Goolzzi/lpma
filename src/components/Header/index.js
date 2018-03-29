/* eslint jsx-a11y/anchor-is-valid : 0 */
import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import LoginLogout from "../LoginLogout";
import withAuth from "../../Auth/withAuth";
import classNames from "classnames";
import "./styles.scss";

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

  renderLoginLogout = () => {
    const {login, logout, isAuthenticated} = this.props.auth;
    return this.props.forUSA !== true ? (
      <LoginLogout
        isAuthenticated={isAuthenticated()}
        login={login}
        logout={logout}
        cssClass={"navbar-item"}
      />
    ) : null;
  };

  render() {
    const {auth, topmenu, logo: {file}, foundryLinks, forUSA} = this.props;
    const {isActive, isActiveMenu, isFoundryOpen} = this.state;
    const isAuthenticated = auth.isAuthenticated();
    //TODO: imprve contry based component building
    const menuItems = forUSA
      ? topmenu.filter(({country}) => country === "us")
      : topmenu;
    return (
      <div className="navbar-wrapper">
        <nav className="navbar">
          <div className="navbar-brand">
            <Link className="navbar-item" to={"/"}>
              <img src={file.url} alt={file.fileName} />
            </Link>
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
              {menuItems
                .filter(({name}) => name !== "Resources" || isAuthenticated)
                .map(({id, to, name, slug}) => {
                  if (slug === "foundry" && auth.isAuthenticated()) {
                    return (
                      <button
                        key={slug}
                        onClick={() =>
                          this.setState(prevState => ({
                            isFoundryOpen: !prevState.isFoundryOpen,
                          }))
                        }
                        className={classNames("navbar-item has-dropdown", {
                          "is-active": isFoundryOpen,
                        })}>
                        <a href={"javascript:;"} className="navbar-link">
                          {name}
                        </a>
                        <div className="navbar-dropdown">
                          <Link
                            key={slug}
                            to={`/foundry/`}
                            className={"navbar-item"}>
                            {"My Fondry"}
                          </Link>
                          {foundryLinks.edges.map(({node: {title, slug}}) => (
                            <Link
                              key={slug}
                              to={`/foundry/${slug}`}
                              className={"navbar-item"}>
                              {title}
                            </Link>
                          ))}
                        </div>
                      </button>
                    );
                  }
                  return (
                    <Link
                      className={"navbar-item"}
                      onClick={this.handleClick}
                      key={id}
                      to={to}>
                      {name}
                    </Link>
                  );
                })}
              {this.renderLoginLogout()}
            </div>
          </div>
          <button
            style={{display: "none"}}
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
        {/* <BurgerSubMenu isActiveMenu={isActiveMenu} /> */}
      </div>
    );
  }
}

Header.propTypes = {
  topmenu: PropTypes.array.isRequired,
  logo: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  foundryLinks: PropTypes.object.isRequired,
  forUSA: PropTypes.bool.isRequired,
};

export default withAuth(Header);
