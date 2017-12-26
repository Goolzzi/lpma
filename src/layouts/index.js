import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import "bulma";
import "./index.scss";

const Header = () => (
  <div
    style={{
      marginBottom: "1.45rem"
    }}
  >
    <div
      style={{
        margin: "0 auto",
        maxWidth: 960,
        padding: "1.45rem 1.0875rem"
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: "white",
            textDecoration: "none"
          }}
        >
          Gatsby
        </Link>
      </h1>
    </div>

    <nav className="breadcrumb" aria-label="breadcrumbs">
      <ul>
        <li>
          <a href="#">Bulma</a>
        </li>
        <li>
          <a href="#">Documentation</a>
        </li>
        <li>
          <a href="#">Components</a>
        </li>
        <li className="is-active">
          <a href="#" aria-current="page">
            Breadcrumb
          </a>
        </li>
      </ul>
    </nav>
  </div>
);

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="lpma"
      meta={[
        { name: "description", content: "lpma" },
        { name: "keywords", content: "lpma, lpma2018" }
      ]}
    />
    <Header />
    <div
      style={{
        margin: "0 auto",
        maxWidth: 960,
        padding: "0px 1.0875rem 1.45rem",
        paddingTop: 0
      }}
    >
      {children()}
    </div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
