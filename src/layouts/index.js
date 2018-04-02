import React from "react";
import PropTypes from "prop-types";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MetaHead from "./MetaHead";
import locationToTitleMap from "./locationTitlesMap";
import "bulma";
import "../styles/global.scss";
import "../styles/fonts";

const propTypes = {
  children: PropTypes.func,
  location: PropTypes.object,
  data: PropTypes.object.isRequired,
};

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

  if (pathname.split("/")[1] === "callback") {
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
        foundryLinks={allContentfulFoundrySection}
      />
      <div className="page-container">{children()}</div>
      <Footer {...contentfulFooter} forUSA={forUSA} />
    </div>
  );
};

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

LayoutTemplate.propTypes = propTypes;

export default LayoutTemplate;
