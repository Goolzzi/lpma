import React from "react";
import PropTypes from "prop-types";
import {parseHash} from "../utils";
import MemberBenefits from "../components/MemberBenefits";
import Audience from "../components/Audience";
import TopJumbotron from "../components/TopJumbotron";
import TopInfoColumns from "../components/TopInfoColumns";
import BottomJumbotron from "../components/BottomJumbotron";
import TestimonialsOne from "../components/TestimonialsOne";
import TestimonialsTwo from "../components/TestimonilasTwo";
import Modal from "react-modal";

const propTypes = {
  data: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    const params = parseHash(this.props.location.hash.substring(1));
    this.state = {
      showModal: params && params.isNotMember == "1" ? true : false,
    };
  }

  render() {
    const {
      data: {
        contentfulMemberBenefits,
        contentfulTestimonials,
        allContentfulAcquisitionJumbotron: {edges},
        contentfulAcquisitionTopInfoRemark,
        allContentfulAcquisitionAudience,
      },
    } = this.props;
    return (
      <React.Fragment>
        <Modal
          style={customStyles}
          isOpen={this.state.showModal}
          ariaHideApp={false}
          contentLabel="Modal">
          <div>
            We've detected a problem with your account. It might be that you
            aren't a current LPMA member, or it may be an error on our end. If
            you need some help resolving this get in touch with us using the
            speech bubble at the bottom right of the page.
          </div>
          <button
            className="button is-success"
            onClick={() => {
              window.location.hash = "";
              this.setState({showModal: false});
            }}>
            OK
          </button>
        </Modal>
        <div>
          <TopJumbotron {...edges[0].node} />
          <TopInfoColumns {...contentfulAcquisitionTopInfoRemark} />
          <MemberBenefits {...contentfulMemberBenefits} />
          <Audience {...allContentfulAcquisitionAudience} />
          <h3 className="test-header">{contentfulTestimonials.title}</h3>
          <TestimonialsOne testimonial={contentfulTestimonials.testimonial1} />
          <TestimonialsTwo testimonial={contentfulTestimonials.testimonial2} />
          <BottomJumbotron {...edges[1].node} />
        </div>
      </React.Fragment>
    );
  }
}

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
        childContentfulTestimonial1ContentTextNode {
          childMarkdownRemark {
            html
          }
        }
        authorPhoto {
          responsiveResolution(quality: 100) {
            src
            srcSet
          }
        }
      }
      testimonial2 {
        id
        image {
          responsiveResolution(quality: 100) {
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
              resolutions(quality: 100) {
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
    allContentfulAcquisitionAudience {
      edges {
        node {
          id
          image {
            resolutions(quality: 100) {
              src
              srcSet
            }
          }
        }
      }
    }
  }
`;
