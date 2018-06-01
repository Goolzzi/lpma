import React from "react";
import PropTypes from "prop-types";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MetaHead from "./MetaHead";
import auth from "../Auth/authInstance";
import locationToTitleMap from "./locationTitlesMap";
import config from "../../build.config.json";
import LoginLogout from "../components/LoginLogout";
import "bulma";
import "../styles/fonts";
import "../styles/global.scss";
import "../styles/main.scss";

function renderLoginLogout() {
  const {auth: authVar, env} = config;
  const {login, logout, isAuthenticated} = auth;

  if (authVar === "iris") {
    const href =
      env === "stage"
        ? "https://qa.lpma.com/login-auth0-ailo"
        : "https://lpma.com/login-auth0-ailo";

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

const LayoutTemplate = props => {
  const {
    children,
    location: {pathname},
    data: {
      allContentfulAsset: {edges: metaImges},
      contentfulHeader,
      contentfulFooter,
      allContentfulFoundrySection,
    },
  } = props;

  const pageName = pathname.split("/")[1];

  if (pageName === "callback" || pageName === "login-auth0-ailo") {
    return <div className="page-container">{children()}</div>;
  }

  const protocol = "https:";
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
        foundryLinks={allContentfulFoundrySection}
        renderLoginLogout={renderLoginLogout}
      />
      <div className="page-container">{children()}</div>
      <Footer {...contentfulFooter} renderLoginLogout={renderLoginLogout} />
    </div>
  );
};

LayoutTemplate.propTypes = {
  children: PropTypes.func,
  location: PropTypes.object,
  data: PropTypes.object.isRequired,
};

export default LayoutTemplate;

export const pageQuery = graphql`
  query LayoutQuery {
    allContentfulAsset(
      filter: {title: {regex: "/LPMA-Meta/"}}
      sort: {fields: [description], order: ASC}
    ) {
      edges {
        node {
          title
          file {
            url
          }
        }
      }
    }
    allContentfulFoundrySection(filter: {node_locale: {eq: "en-US"}}) {
      edges {
        node {
          title
          slug
        }
      }
    }
    contentfulHeader {
      logo {
        file {
          url
          fileName
        }
      }
      topmenu {
        id
        name
        authRequired
        country
        slug
        to
      }
    }
    contentfulFooter {
      title {
        childMarkdownRemark {
          html
        }
      }
      menu {
        id
        name
        to
        country
        slug
        authRequired
      }
      contactInfo {
        childMarkdownRemark {
          html
        }
      }
      privacy {
        childMarkdownRemark {
          html
        }
      }
      logo {
        file {
          url
          fileName
        }
      }
      socialLinks {
        id
        href
        icon {
          id
          file {
            url
          }
        }
      }
    }
  }
`;
