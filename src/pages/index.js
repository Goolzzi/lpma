import React from "react";
import PropTypes from "prop-types";

import MemberBenefits from "../components/MemberBenefits";
import Testimonials from "../components/Testimonials";
import Audience from "../components/Audience";
import Top from "../components/Top";
import TopColumns from "../components/TopColumns";
import Bottom from "../components/Bottom";

const propTypes = {
  data: PropTypes.object.isRequired,
};

const IndexPage = ({
  data: {contentfulMemberBenefits, contentfulTestimonials},
}) => (
  <div>
    <Top />
    <TopColumns />
    <MemberBenefits {...contentfulMemberBenefits} />
    <Audience />
    <Testimonials {...contentfulTestimonials} />
    <Bottom />
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
  }
`;
