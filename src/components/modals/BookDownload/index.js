import React, {Component} from "react";
import PropTypes from "prop-types";
import Modal from "react-modal";
import classNames from "classnames";
import download from "downloadjs";
import withSegmentTracking from "../../../utils/withSegmentTracking";
import withFormValidations from "../../../utils/withFormValidations";
import "./styles.scss";

// setting root app element for react-modal accessibility
const ROOT_EL_ID = "#___gatsby";
typeof document !== "undefined" && Modal.setAppElement(ROOT_EL_ID);

const propTypes = {
  book: PropTypes.object,
  isOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  track: PropTypes.func.isRequired,
  trackIdentify: PropTypes.func.isRequired,
  resourcesZip: PropTypes.object.isRequired,
  closeModal: PropTypes.func.isRequired,
  isEmailValid: PropTypes.func.isRequired,
};

class BookDownload extends Component {
  constructor(props) {
    super(props);
    this.state = {email: "", errorMessage: ""};
    this.trackingEventName = "Get book series.";
    this.modalStyles = {
      content: {
        top: "50%",
        left: "50%",
        width: "927px",
        height: "409px",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        borderRadius: "5px",
        transform: "translate(-50%, -50%)",
      },
    };
  }

  emailInputChangedHandler = ({target: {value: email}}) =>
    this.setState({email});

  submitSuccessHandler = () => {
    const {track, trackIdentify, closeModal, resourcesZip} = this.props;
    const {email} = this.state;
    const bookLink = `https:${resourcesZip.file.url}`;
    this.setState({errorMessage: ""});
    trackIdentify("Get Book Series Form.", email, email);
    track(this.trackingEventName, {email});
    download(bookLink);
    closeModal();
  };

  submitFailHandler = () => {
    this.setState({errorMessage: "Please provide a valid email address."});
  };

  submitButtonClickedHandler = () => {
    const {isEmailValid} = this.props;
    const {email} = this.state;
    isEmailValid(email)
      .then(this.submitSuccessHandler)
      .catch(this.submitFailHandler);
  };

  render() {
    const {isOpen, onRequestClose, closeModal} = this.props;
    const {email, errorMessage} = this.state;
    return (
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        contentLabel=""
        style={this.modalStyles}>
        <div className="book-modal has-text-centered">
          <div className="cross" onClick={closeModal}>
            +
          </div>
          <h3 className="title">
            Enter your email address below to download the LPMA tools:
          </h3>
          <input
            className={classNames({
              warning: errorMessage.length !== 0,
            })}
            name="email-input"
            value={email}
            onChange={this.emailInputChangedHandler}
            placeholder="Email address"
          />
          <div className="download" onClick={this.submitButtonClickedHandler}>
            Get books
          </div>
        </div>
      </Modal>
    );
  }
}

BookDownload.propTypes = propTypes;

export default withFormValidations(withSegmentTracking(BookDownload));
