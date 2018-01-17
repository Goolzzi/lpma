import React from "react";
import PropTypes from "prop-types";

import MemberBenefits from "../components/MemberBenefits";
import Testimonials from "../components/Testimonials";
import Audience from "../components/Audience";
import TopJumbotron from "../components/TopJumbotron";
import TopInfoColumns from "../components/TopInfoColumns";
import BottomJumbotron from "../components/BottomJumbotron";

const propTypes = {
  data: PropTypes.object.isRequired,
};

const IndexPage = ({
  data: {
    contentfulMemberBenefits,
    contentfulTestimonials,
    allContentfulAcquisitionJumbotron: {edges},
    contentfulAcquisitionTopInfoRemark,
    allContentfulAcquisitionAudience,
  },
}) => (
  <div>
    <TopJumbotron {...edges[0].node} />
    <TopInfoColumns {...contentfulAcquisitionTopInfoRemark} />
    <MemberBenefits {...contentfulMemberBenefits} />
    <Audience {...allContentfulAcquisitionAudience} />
    <Testimonials {...contentfulTestimonials} />
    <BottomJumbotron {...edges[1].node} />
  </div>
);

IndexPage.propTypes = propTypes;

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageQuery {
    contentfulMemberBenefits {
      title
      memberBenefitItems {
        id
        title
        body {
          body
        }
        checkBoxIcon {
          file {
            url
            fileName
          }
        }
      }
    }
    contentfulTestimonials {
      title
      testimonial1 {
        id
        authorName
        body {
          childMarkdownRemark {
            html
          }
        }
        authorPhoto {
          responsiveResolution {
            src
            srcSet
          }
        }
      }
      testimonial2 {
        id
        image {
          responsiveResolution {
            src
            srcSet
          }
        }
        body {
          childMarkdownRemark {
            html
          }
        }
      }
    }
    allContentfulAcquisitionJumbotron(
      sort: {fields: [pageLocation], order: DESC}
    ) {
      edges {
        node {
          pageLocation
          jumbotron {
            joinLink {
              name
              to
            }
            background {
              id
              resolutions {
                src
                srcSet
              }
            }
            title {
              title
            }
            titleVisible
          }
        }
      }
    }
    contentfulAcquisitionTopInfoRemark {
      info {
        id
        childContentfulColumnTextRemarkContentTextNode {
          childMarkdownRemark {
            html
          }
        }
      }
    }
    allContentfulAcquisitionAudience {
      edges {
        node {
          id
          image {
            resolutions {
              src
              srcSet
            }
          }
        }
      }
    }
  }
`;
