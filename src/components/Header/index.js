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
      isActiveMenu: false,
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive,
      isActiveMenu: !prevState.isActiveMenu,
    }));
  };

  render() {
    const {topmenu, logo: {file}, forUSA} = this.props;
    const {isActive, isActiveMenu} = this.state;
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
          <button
            onClick={() =>
              this.setState(prevState => ({isActiveMenu: !prevState.isActiveMenu}))
            }
            className={classNames("button navbar-burger custom-burger", {
              "is-active": isActiveMenu,
            })}>
            <span />
            <span />
            <span />
          </button>
        </nav>
        <div
          className={classNames("desctop-menu", {
            "active": isActiveMenu,
          })}
        >
          <div className="columns">
            <div className="column is-9 desctop-menu-left">
              <div className="columns is-multiline">
                <div className="column is-4 desctop-menu-item">
                  <a href="#" className="title-link">About</a>
                  <a href="#">Blog</a>
                  <a href="#">Team</a>
                  <a href="#">Members</a>
                  <a href="#">Contact</a>
                </div>
                <div className="column is-4 desctop-menu-item">
                  <a href="#" className="title-link">Membership</a>
                  <a href="#">Something</a>
                  <a href="#">Something</a>
                  <a href="#">Something</a>
                  <a href="#">Something</a>
                </div>
                <div className="column is-4 desctop-menu-item">
                  <a href="#" className="title-link">Resources</a>
                  <a href="#">Something</a>
                  <a href="#">Something</a>
                  <a href="#">Something</a>
                  <a href="#">Something</a>
                </div>
                <div className="column is-4 desctop-menu-item">
                  <a href="#" className="title-link">Events</a>
                  <a href="#">Something</a>
                  <a href="#">Something</a>
                  <a href="#">Something</a>
                  <a href="#">Something</a>
                </div>
                <div className="column is-4 desctop-menu-item">
                  <a href="#" className="title-link">Foundry</a>
                  <a href="#">Something</a>
                  <a href="#">Something</a>
                  <a href="#">Something</a>
                  <a href="#">Something</a>
                </div>
                <div className="column is-4 desctop-menu-item">
                  <a href="#" className="title-link">Something</a>
                  <a href="#">Something</a>
                  <a href="#">Something</a>
                  <a href="#">Something</a>
                  <a href="#">Something</a>
                </div>
              </div>
            </div>
            <div className="column is-3 desctop-menu-right">
              <h3>Become a Member</h3>
              <p>
                Build your career with the knowledge, tools and people you need to support you.
              </p>
              <button className="btn primary threequarterwidth">Join Today</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Header.propTypes = propTypes;

export default Header;
