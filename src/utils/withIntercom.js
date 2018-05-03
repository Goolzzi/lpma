import React from "react";
import noop from "lodash/noop";
import {getComponentDisplayName} from "../utils";

// constants
const LEAD_TYPE = "lead";

function withIntercom(WrappedComponent) {
  class WithIntercom extends React.Component {
    constructor(props) {
      super(props);
    }

    getVisitorId = () => Intercom("getVisitorId"); // eslint-disable-line

    convertVisitorToLead = () => {};

    render() {
      if (typeof Intercom === "undefined") {
        console.log("INTERCOM IS NOT DEFINED");
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
