import React from "react";
import PropTypes from "prop-types";
import auth from "./auth";

class IRISAuth extends React.Component {
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

export default IRISAuth;
