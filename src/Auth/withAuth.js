import React from "react";
import auth from "./auth";

function withAuth(WrappedComponent) {
  class WithAuth extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
      return <WrappedComponent auth={auth} {...this.props} />;
    }
  }
  WithAuth.displayName = `WithAuth(${getDisplayName(WrappedComponent)})`;
  return WithAuth;
}

export default withAuth;

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || "Component";
}
