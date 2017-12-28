import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import "../styles/app.scss";
import Header from "../components/Header/index";

const propTypes = {
  children: PropTypes.func,
};

const LayoutTemplate = ({children, data: {allContentfulMenuItem}}) => (
  <div>
    <Helmet
      title="lpma"
      meta={[
        {name: "description", content: "lpma"},
        {name: "keywords", content: "lpma, lpma2018"},
      ]}
    />
    <Header navItems={allContentfulMenuItem.edges} />
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

export const pageQuery = graphql`
  query LayoutQuery {
    allContentfulMenuItem {
      edges {
        node {
          id
          to
          name
          authRequired
        }
      }
    }
  }
`;

LayoutTemplate.propTypes = propTypes;

export default LayoutTemplate;
