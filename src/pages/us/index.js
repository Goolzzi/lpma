import React from "react";
import PropTypes from "prop-types";

import MemberBenefits from "../../components/MemberBenefits";
import TopJumbotron from "../../components/TopJumbotron";
import TopInfoColumns from "../../components/TopInfoColumns";
import BottomJumbotron from "../../components/BottomJumbotron";
import LPMATeam from "../../components/LPMATeam";
import TestimonialsTwo from "../../components/TestimonilasTwo";

const propTypes = {
  data: PropTypes.object.isRequired,
};

//FIXME:
const IndexUSPage = ({
  data: {
    contentfulMemberBenefits,
    contentfulTestimonials,
    allContentfulAcquisitionJumbotron: {edges},
    contentfulAcquisitionTopInfoRemark,
    contentfulAcquisitionLpmaTeam,
  },
}) => (
  <div className="index-page-us">
    <TopJumbotron {...edges[0].node} />
    <TopInfoColumns {...contentfulAcquisitionTopInfoRemark} />
    <MemberBenefits {...contentfulMemberBenefits} />
    {/* <h3 className="test-header">{contentfulTestimonials.title}</h3> */}
    <TestimonialsTwo
      testimonial={contentfulTestimonials.testimonial2}
      forUS={true}
    />
    <LPMATeam {...contentfulAcquisitionLpmaTeam} />
    <BottomJumbotron {...edges[1].node} />
  </div>
);

IndexUSPage.propTypes = propTypes;

export default IndexUSPage;

export const pageQuery = graphql`
  query IndexUSPageQuery {
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
    contentfulAcquisitionLpmaTeam {
      title
      author
      content {
        childMarkdownRemark {
          html
        }
      }
      image {
        resolutions {
          src
          srcSet
        }
      }
    }
    contentfulTestimonials {
      title
      testimonial2 {
        id
        image {
          responsiveResolution {
            src
            srcSet
          }
        }
        childContentfulTestimonial2ContentTextNode {
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
  }
`;
