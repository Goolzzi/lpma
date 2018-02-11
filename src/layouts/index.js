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
  location: PropTypes.func,
  data: PropTypes.object.isRequired,
};

const LayoutTemplate = props => {
  const {
    children,
    location: {pathname},
    data: {contentfulHeader, contentfulFooter, allContentfulFoundrySection},
  } = props;
  const forUSA = !!~pathname.indexOf("/us") || !!~pathname.indexOf("-us");
  return (
    <div>
      <Helmet title="Leading Property Managers Association" />
      <Header
        {...contentfulHeader}
        forUSA={forUSA}
        foundryLinks={allContentfulFoundrySection}
      />
      <div className="page-container">{children()}</div>
      <Footer {...contentfulFooter} forUSA={forUSA} />
    </div>
  );
};

export const pageQuery = graphql`
  query LayoutQuery {
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
        country
        force
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
      mainLinks {
        id
        name
        to
        country
        force
        slug
      }
      secondaryLinks {
        id
        name
        to
      }
      privacy {
        childMarkdownRemark {
          html
        }
      }
      joinLink {
        name
        to
        force
        slug
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

LayoutTemplate.propTypes = propTypes;

export default LayoutTemplate;
