import React, {Component} from "react";
import authIRIS from "../../IrisAuth";
import Loader from "../../components/Loader";

const handleAuthentication = ({location}) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    authIRIS.handleAuthentication();
  }
};

class IrisCallback extends Component {
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
  return <IrisCallback {...props} />;
};

export default CallbackWithAuthChecks;
