import React from "react";
import PropTypes from "prop-types";
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
    contentfulTestimonials,
    allContentfulAcquisitionJumbotron: {edges},
    contentfulAcquisitionTopInfoRemark,
    contentfulAcquisitionLpmaTeam,
  },
}) => (
  <div className="index-page-us">
    <TopJumbotron {...edges[0].node} />
    <TopInfoColumns {...contentfulAcquisitionTopInfoRemark} />
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
    contentfulTestimonials {
      title
      testimonial1 {
        id
        authorName
        childContentfulTestimonial1ContentTextNode {
          childMarkdownRemark {
            html
          }
        }
        authorPhoto {
          sizes(quality: 100, maxWidth: 600, toFormat: JPG) {
            ...GatsbyContentfulSizes
          }
        }
      }
      testimonial2 {
        id
        image {
          sizes(quality: 100, maxWidth: 600, toFormat: JPG) {
            ...GatsbyContentfulSizes
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
            ...JumbotronItem
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
            sizes(quality: 100, maxWidth: 1280, toFormat: JPG) {
              ...GatsbyContentfulSizes
            }
          }
        }
      }
    }
    contentfulAcquisitionLpmaTeam {
      title
      author
      image {
        sizes(quality: 100, maxWidth: 800) {
          ...GatsbyContentfulSizes
        }
      }
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
