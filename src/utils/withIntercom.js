import React from "react";
import noop from "lodash/noop";
import {visitorToLead} from "../netlifyFunctions";
import {getComponentDisplayName} from "../utils";
import fetchUtils from "../utils/fetchUtils";

// constants
const METHOD_POST = "POST";
const METHOD_GET = "GET";

function withIntercom(WrappedComponent) {
  class WithIntercom extends React.Component {
    constructor(props) {
      super(props);
      this.ACCESS_TOKEN = process.env.INTERCOM_ACCESS_TOKEN;
      this.API_BASE_URI = "https://api.intercom.io";
    }

    updateLead = lead => {
      const url = `${this.API_BASE_URI}/contacts`;
      const Authorization = this.getAuthorizationHeader();
      const params = {
        method: METHOD_POST,
        bodyObject: lead,
        headers: {
          Authorization,
        },
      };
      return fetchUtils.request(url, params);
    };

    getVisitorId = () => Intercom("getVisitorId"); // eslint-disable-line

    getAuthorizationHeader = () => `Bearer ${this.ACCESS_TOKEN}`;

    convertVisitorToLead = () => {
      const visitorId = this.getVisitorId();
      return visitorToLead(visitorId);
    };

    render() {
      if (typeof Intercom === "undefined") {
        return (
          <WrappedComponent
            {...this.props}
            getVisitorId={noop}
            convertVisitorToLead={noop}
            updateLead={noop}
          />
        );
      }

      return (
        <WrappedComponent
          {...this.props}
          getVisitorId={this.getVisitorId}
          convertVisitorToLead={this.convertVisitorToLead}
          updateLead={this.updateLead}
        />
      );
    }
  }
  WithIntercom.displayName = `WithIntercom(${getComponentDisplayName(
    WrappedComponent,
  )})`;

  return WithIntercom;
}

export default withIntercom;
