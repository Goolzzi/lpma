import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import "bulma";
import "../styles/global.scss";
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
    contentfulHeader,
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
    <Header {...contentfulHeader} />
    <div className="page-container">{children()}</div>
    <Footer copyrightHTML={childMarkdownRemark.html} />
  </div>
);

export const pageQuery = graphql`
  query LayoutQuery {
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
        to
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
