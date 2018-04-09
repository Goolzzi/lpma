import React, {Component} from "react";
import PropTypes from "prop-types";
import IRISAuth from "../../Auth/IRISAuth";
import Loader from "../../components/Loader";

class Callback extends Component {
  handleAuthentication = auth => {
    if (/access_token|id_token|error/.test(this.props.location.hash)) {
      auth.handleAuthentication();
    }
  };

  render() {
    return (
      <IRISAuth
        render={auth => {
          this.handleAuthentication(auth);
          return (
            <div className="loader-wrapper">
              <Loader />
            </div>
          );
        }}
      />
    );
  }
}

Callback.propTypes = {
  location: PropTypes.object.isRequired,
};

export default Callback;
