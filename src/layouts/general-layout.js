import React from "react";
import PropTypes from "prop-types";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MetaHead from "./MetaHead";
import Auth from "../Auth/auth";
import locationToTitleMap from "./locationTitlesMap";
import config from "../../build.config.json";
import LoginLogout from "../components/LoginLogout";
import "bulma";
import "../styles/fonts";
import "../styles/global.scss";
import "../styles/main.scss";

function renderLoginLogout() {
  const {auth: authVar, env} = config;
  const {login, logout, isAuthenticated} = Auth;

  if (authVar === "iris") {
    const href =
      env === "stage"
        ? "https://dev-new-lpma.netlify.com/login-auth0-ailo"
        : "https://new.lpma.com/login-auth0-ailo";

    if (!isAuthenticated()) {
      return (
        <button
          className="navbar-item nav-btn"
          onClick={() => {
            window.location.replace(href);
          }}>
          Login
        </button>
      );
    }
  }

  return (
    <LoginLogout
      isAuthenticated={isAuthenticated()}
      login={login}
      logout={logout}
      cssClass={"navbar-item nav-btn"}
    />
  );
}

class LayoutTemplate extends React.Component {
  constructor(props) {
    const {state: historyState} = props.location;
    const redirected =
      historyState && historyState.redirect === true ? true : false;
    super(props);
    this.state = {
      redirected,
    };
  }

  render() {
    const {
      children,
      location: {pathname},
      data: {
        allContentfulAsset: {edges: metaImges},
        contentfulHeader,
        contentfulFooter,
        allContentfulFoundrySection,
      },
    } = this.props;

    const pageName = pathname.split("/")[1];

    if (pageName === "callback" || pageName === "login-auth0-ailo") {
      return <div className="page-container">{children()}</div>;
    }

    const protocol = "https:";
    const forUSA = !!~pathname.indexOf("/us") || !!~pathname.indexOf("-us");

    const title = locationToTitleMap[pathname]
      ? locationToTitleMap[pathname]
      : locationToTitleMap["/"];

    return (
      <div>
        <MetaHead
          title={title}
          metaImage1200x630={`${protocol}${metaImges[1].node.file.url}`}
          metaImage1024x512={`${protocol}${metaImges[0].node.file.url}`}
        />
        <Header
          {...contentfulHeader}
          forUSA={forUSA}
          redirected={this.state.redirected}
          foundryLinks={allContentfulFoundrySection}
          renderLoginLogout={renderLoginLogout}
        />
        <div className="page-container">{children()}</div>
        <Footer
          {...contentfulFooter}
          forUSA={forUSA}
          renderLoginLogout={renderLoginLogout}
        />
      </div>
    );
  }
}

LayoutTemplate.propTypes = {
  children: PropTypes.func,
  location: PropTypes.object,
  data: PropTypes.object.isRequired,
};

export default LayoutTemplate;
