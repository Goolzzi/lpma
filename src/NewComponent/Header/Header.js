import React from "react";
import Link from "gatsby-link";
import PropTypes from "prop-types";
import {CSSTransition} from "react-transition-group";
import Auth from "../../Auth";

import imgLogo from "../../assets/images/NewDesign/Header/logo.svg";
import icClose from "../../assets/images/NewDesign/Header/ic-close.svg";
import icMenu from "../../assets/images/NewDesign/Header/ic-menu.svg";
import config from "../../../build.config.json";
import LoginLogout from "../../components/LoginLogout";

const menuPrimaryIndexes = [0, 1, 18];
const secondaryIndexes = [2, 6, 10, 14];
const primaryIndexes = [0, 1, 3, 4, 5, 7, 8, 9, 11, 12, 13, 15, 16, 17, 18];
var menuClass = "";
var btnClass = "";

function getLoginLogout(auth) {
  const {auth: authVar, env} = config;
  const {login, logout, isAuthenticated} = auth;

  if (authVar === "iris") {
    const href =
      env === "stage"
        ? "https://dev-lpma.netlify.com/login-auth0-ailo"
        : "https://lpma.com/login-auth0-ailo";

    if (!isAuthenticated()) {
      return (
        <button
          className="button menu-btn"
          onClick={() => {
            window.location.replace(href);
          }}>
          Sign in
        </button>
      );
    }
  }

  return (
    <LoginLogout
      isAuthenticated={isAuthenticated()}
      login={login}
      loginText={"Sign in"}
      logout={logout}
      cssClass={"button menu-btn"}
    />
  );
}
class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
    };
  }
  onPage = pageName => {
    this.setState({visible: false});
    this.props.selectPage(pageName);
  };
  render() {
    const {pageNumber} = this.props;
    let absoluteStyle = pageNumber == 18 ? {position: "absolute"} : null;
    if (secondaryIndexes.indexOf(pageNumber) !== -1) {
      btnClass = "secondary";
    } else if (primaryIndexes.indexOf(pageNumber) !== -1) {
      btnClass = "";
    }
    if (menuPrimaryIndexes.indexOf(pageNumber) !== -1) {
      menuClass = "";
    } else {
      menuClass = "secondary";
    }
    return (
      <Auth
        render={auth => (
          <nav
            className={`navbar is-transparent header-wrapper`}
            style={absoluteStyle}>
            <div className="navbar-brand">
              {
                //eslint-disable-next-line
                <a className="navbar-item" onClick={() => this.props.selectPage("Home")}>
                  <img
                    src={imgLogo}
                    alt="this is logo"
                    width="112"
                    height="28"
                  />
                </a>
              }
            </div>
            <div className={`menu ${menuClass}`}>
              <ul>
                <li>
                  {
                    //eslint-disable-next-line
                    <a onClick={() => this.props.selectPage("Home")}>Home</a>
                  }
                </li>
                <li>
                  {
                    //eslint-disable-next-line
                    <a onClick={() => this.props.selectPage("Pricing")}>Pricing</a>
                  }
                </li>
                <li>
                  <Link to="/blog">Blog</Link>
                </li>
                <li>
                  <Link to="/events">Events</Link>
                </li>
              </ul>
            </div>
            <div className={`navbar-btn-group ${btnClass}`}>
              <div className="navbar-item">
                <Link
                  to="/join"
                  className="button menu-btn"
                  // onClick={() => props.selectPage("Join")}
                >
                  JOIN LPMA
                </Link>
              </div>
              {!auth.isAuthenticated() ? (
                <div className="navbar-item">
                  {getLoginLogout(auth)
                  //eslint-disable-next-line
                    //<a className="button menu-btn" onClick={auth.login}>Sign in</a>
                  }
                </div>
              ) : (
                <div className="navbar-item" />
              )}
              <div className="navbar-item">
                <a className="button menu-btn collapse-btn" onClick={() => this.setState({visible: true})}> {/*eslint-disable-line*/}
                  <img src={icMenu} alt="menu icon" />
                </a>
              </div>
            </div>
            <CSSTransition
              in={this.state.visible}
              timeout={1000}
              classNames="mobile-nav"
              unmountOnExit>
              <div className="mobile-nav">
                <div className="mobile-wrapper">
                  <div className="navbar-brand">
                    <a className="navbar-item" onClick={() => this.onPage("Home")}> {/*eslint-disable-line*/}
                      <img
                        src={imgLogo}
                        alt="this is logo"
                        width="112"
                        height="28"
                      />
                    </a>
                  </div>
                  <div className="header-btn-group">
                    <a className="button menu-btn" onClick={() => this.onPage("Join")}> {/*eslint-disable-line*/}
                      JOIN LPMA
                    </a>
                    <a className="navbar-item close" onClick={() => this.setState({visible: false})}> {/*eslint-disable-line*/}
                      <img src={icClose} alt="close icon" />
                    </a>
                  </div>
                </div>
                <ul>
                  <li>
                    <a onClick={() => this.onPage("Home")}>Home</a> {/*eslint-disable-line*/}
                  </li>
                  <li>
                    <a onClick={() => this.onPage("Pricing")}>Pricing</a> {/*eslint-disable-line*/}
                  </li>
                  <li>
                    <Link to="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link to="/events">Events</Link>
                  </li>
                  {!auth.isAuthenticated() ? (
                    <li>
                      <a onClick={auth.login}>Sign in</a> {/*eslint-disable-line*/}
                    </li>
                  ) : null}
                </ul>
              </div>
            </CSSTransition>
          </nav>
        )}
      />
    );
  }
}
Header.propTypes = {
  selectPage: PropTypes.func,
};
Header.defaultProps = {
  //eslint-disable-next-line
  selectPage: () => console.log("on pricing"),
};
export default Header;
