import React from "react";
import noop from "lodash/noop";
import IntercomClient from "intercom-client";
import {v4} from "uuid";
import {getComponentDisplayName} from "../utils";

// constants
const LEAD_TYPE = "lead";

function withIntercom(WrappedComponent) {
  class WithIntercom extends React.Component {
    constructor(props) {
      super(props);
      this.client = new IntercomClient.Client({token: v4()});
    }

    generateConversion = visitorId => ({
      visitor: {user_id: visitorId},
      type: LEAD_TYPE,
    });

    getVisitorId = () => Intercom("getVisitorId"); // eslint-disable-line

    convert = conversion =>
      this.client.visitors.convert(conversion, response =>
        console.log(response.body),
      );

    visitorToLead = () => {
      const visitorId = this.getVisitorId();
      const conversion = this.generateConversion(visitorId);
      this.convert(conversion);
    };

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
