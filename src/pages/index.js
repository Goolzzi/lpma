import React from "react";
import PropTypes from "prop-types";
import {parseHash} from "../utils";
import Modal from "react-modal";
import MemberBenefits from "../components/MemberBenefits";
import Audience from "../components/Audience";
import TopJumbotron from "../components/TopJumbotron";
import TopInfoColumns from "../components/TopInfoColumns";
import BottomJumbotron from "../components/BottomJumbotron";
import TestimonialsOne from "../components/TestimonialsOne";
import TestimonialsTwo from "../components/TestimonilasTwo";

const propTypes = {
  data: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
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
          isOpen={this.state.showModal}
          className="custom-modal"
          overlayClassName="custom-modal-wrapper"
          ariaHideApp={false}
          contentLabel="Modal">
          <div className="custom-modal-top has-text-centered">
            <h2 className="title is-4">Warning!</h2>
          </div>
          <div className="custom-modal-content">
            We&apos;ve detected a problem with your account. It might be that
            you aren&apos; t a current LPMA member, or it may be an error on our
            end. If you need some help resolving this get in touch with us using
            the speech bubble at the bottom right of the page.
          </div>
          <div className="custom-modal-bottom has-text-centered">
            <button
              className="btn primary smaller onequarterwidth"
              onClick={() => {
                window.location.hash = "";
                this.setState({showModal: false});
              }}>
              OK
            </button>
          </div>
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
  fragment JumbotronItem on ContentfulJumbotron {
    joinLink {
      name
      to
    }
    background {
      id
      sizes(quality: 100, maxWidth: 1280, toFormat: JPG) {
        ...GatsbyContentfulSizes
      }
    }
    title {
      title
    }
  }

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
          sizes(quality: 100, maxWidth: 800, toFormat: JPG) {
            ...GatsbyContentfulSizes
          }
        }
      }
      testimonial2 {
        id
        image {
          sizes(quality: 100, maxWidth: 800, toFormat: JPG) {
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
  }
`;
