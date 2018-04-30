import React from "react";
import noop from "lodash/noop";
import {getComponentDisplayName} from "../utils";

function withIntercom(WrappedComponent) {
  class WithIntercom extends React.Component {
    getVisitorId = () => Intercom("getVisitorId"); // eslint-disable-line

    render() {
      if (typeof Intercom === "undefined") {
        return <WrappedComponent {...this.props} getVisitorId={noop} />;
      }

      return (
        <WrappedComponent {...this.props} getVisitorId={this.getVisitorId} />
      );
    }
  }
  WithIntercom.displayName = `WithIntercom(${getComponentDisplayName(
    WrappedComponent,
  )})`;

  return WithIntercom;
}

export default withIntercom;
