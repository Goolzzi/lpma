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

const LayoutTemplate = props => {
  const {children, data: {contentfulHeader, contentfulFooter}} = props;
  const forUSA = !!~props.location.pathname.indexOf("us");
  return (
    <div>
      <Helmet
        title="lpma"
        meta={[
          {name: "description", content: "lpma"},
          {name: "keywords", content: "lpma, lpma2018"},
        ]}
      />
      <Header {...contentfulHeader} forUSA={forUSA} />
      <div className="page-container">{children()}</div>
      <Footer {...contentfulFooter} forUSA={forUSA} />
    </div>
  );
};

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
        country
        force
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
