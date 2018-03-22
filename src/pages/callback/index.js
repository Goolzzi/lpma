import React, {Component} from "react";
import auth from "../../Auth";
import Loader from "../../components/Loader";

const handleAuthentication = ({location}) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
};

class Callback extends Component {
  render() {
    return (
      <div className="loader-wrapper">
        <Loader />
      </div>
    );
  }
}

const CallbackWithAuthChecks = props => {
  handleAuthentication(props);
  return <Callback {...props} />;
};

export default CallbackWithAuthChecks;
