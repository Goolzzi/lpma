import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import "bulma";
import "../styles/fonts";
import Header from "../components/Header";
import Footer from "../components/Footer";

const propTypes = {
  children: PropTypes.func,
  data: PropTypes.object.isRequired,
};

const LayoutTemplate = ({
  children,
  data: {
    allContentfulMenuItem,
    contentfulSimpleTextBodyTextNode: {childMarkdownRemark},
  },
}) => (
  <div>
    <Helmet
      title="lpma"
      meta={[
        {name: "description", content: "lpma"},
        {name: "keywords", content: "lpma, lpma2018"},
      ]}
    />
    <Header navItems={allContentfulMenuItem.edges} />
    <div className="container is-fluid">
      {children()}
      <Footer copyrightHTML={childMarkdownRemark.html} />
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
        }
      }
    }
    contentfulSimpleTextBodyTextNode {
      childMarkdownRemark {
        html
      }
    }
  }
`;

LayoutTemplate.propTypes = propTypes;

export default LayoutTemplate;
