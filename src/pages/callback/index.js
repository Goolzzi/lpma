import React, {Component} from "react";
import PropTypes from "prop-types";
import Auth from "../../Auth";
import Loader from "../../components/Loader";

class Callback extends Component {
  handleAuthentication = auth => {
    if (/access_token|id_token|error/.test(this.props.location.hash)) {
      auth.handleAuthentication();
    } else {
      console.log("handleAuthentication error"); //eslint-disable-line
    }
  };

  render() {
    return (
      <Auth
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
