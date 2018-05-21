import React from "react";
import PropTypes from "prop-types";
import auth from "./authInstance";

class Auth extends React.Component {
  static propTypes = {
    render: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return this.props.render(auth);
  }
}

export default Auth;
