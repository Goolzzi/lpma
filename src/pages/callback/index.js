import React, {Component} from "react";
import loading from "./loading.svg";
import auth from "../../Auth";

const handleAuthentication = ({location, history}) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication(history);
  }
};

class Callback extends Component {
  render() {
    const style = {
      position: "absolute",
      display: "flex",
      justifyContent: "center",
      height: "100vh",
      width: "100vw",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
    };

    return (
      <div style={style}>
        <img src={loading} alt="loading" />
      </div>
    );
  }
}

const CallbackWithAuthChecks = props => {
  handleAuthentication(props);
  return <Callback {...props} />;
};

export default CallbackWithAuthChecks;
