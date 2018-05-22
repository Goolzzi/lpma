import React from "react";
import noop from "lodash/noop";
import {visitorToLead} from "../netlifyFunctions";
import {getComponentDisplayName} from "../utils";
import fetchUtils from "../utils/fetchUtils";

// constants
const LEAD_TYPE = "lead";
const METHOD_POST = "POST";
const METHOD_GET = "GET";

function withIntercom(WrappedComponent) {
  class WithIntercom extends React.Component {
    constructor(props) {
      super(props);
      this.API_BASE_URI = "https://api.intercom.io";
    }

    updateLead = leadInfo => {
      const url = `${this.API_BASE_URI}/contacts`;
      const params = {
        method: METHOD_POST,
        bodyObject: leadInfo,
      };
      fetchUtils.request(url, params);
    };

    getVisitorId = () => Intercom("getVisitorId"); // eslint-disable-line

    convertVisitorToLead = () => {
      const visitorId = this.getVisitorId();
      return visitorToLead(visitorId);
    };

    render() {
      if (typeof Intercom === "undefined") {
        console.log("INTERCOM IS NOT DEFINED");
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
