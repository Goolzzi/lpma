import React, {Component} from "react";
import PropTypes from "prop-types";
import withAuth from "../../Auth/withAuth";
import Loader from "../../components/Loader";

class Callback extends Component {
  handleAuthentication = () => {
    if (/access_token|id_token|error/.test(this.props.location.hash)) {
      this.props.auth.handleAuthentication();
    }
  };

  render() {
    this.handleAuthentication();
    return (
      <div className="loader-wrapper">
        <Loader />
      </div>
    );
  }
}

Callback.propTypes = {
  location: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

export default withAuth(Callback);
