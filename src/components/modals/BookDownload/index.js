import React, {Component} from "react";
import PropTypes from "prop-types";
import Modal from "react-modal";
import classNames from "classnames";
import withSegmentTracking from "../../../utils/withSegmentTracking";
import "./styles.scss";

// setting root app element for react-modal accessibility
const ROOT_EL_ID = "#___gatsby";
Modal.setAppElement(ROOT_EL_ID);

const propTypes = {
  book: PropTypes.object,
  isOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  track: PropTypes.func.isRequired,
  trackIdentify: PropTypes.func.isRequired,
  resourcesZip: PropTypes.object.isRequired,
};

class BookDownload extends Component {
  constructor(props) {
    super(props);
    this.state = {email: "", errorMessage: ""};
    this.trackingEventName = "Get book series.";
    this.emailRegexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
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

  submitButtonClickedHandler = event => {
    const {email} = this.state;
    const isValid = this.emailRegexp.test(String(email).toLowerCase());
    if (!isValid) {
      event.preventDefault();
      this.setState({errorMessage: "Please provide a valid email address."});
      return;
    }
    this.setState({errorMessage: ""});
    this.props.trackIdentify("Get Book Series Form.", email, email);
    this.props.track(this.trackingEventName, {email});
  };

  render() {
    const {isOpen, onRequestClose, book, resourcesZip} = this.props;
    const {email, errorMessage} = this.state;
    const bookLink = book ? `https:${resourcesZip.file.url}` : "";
    return (
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        contentLabel=""
        style={this.modalStyles}>
        <div className="book-modal has-text-centered">
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
          <a download href={bookLink} onClick={this.submitButtonClickedHandler}>
            Get books
          </a>
        </div>
      </Modal>
    );
  }
}

BookDownload.propTypes = propTypes;

export default withSegmentTracking(BookDownload);
