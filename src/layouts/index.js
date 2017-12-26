import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import "../styles/app.scss";
import Header from "../components/Header/index";

const TemplateWrapper = ({children}) => (
  <div>
    <Helmet
      title="lpma"
      meta={[
        {name: "description", content: "lpma"},
        {name: "keywords", content: "lpma, lpma2018"},
      ]}
    />
    <Header />
    <div
      style={{
        margin: "0 auto",
        maxWidth: 960,
        padding: "0px 1.0875rem 1.45rem",
        paddingTop: 0,
      }}>
      {children()}
    </div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
