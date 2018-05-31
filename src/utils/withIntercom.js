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
      this.API_BASE_URI = "https://api.intercom.io";
    }

    updateLead = leadInfo => {
      const url = `${this.API_BASE_URI}/contacts`;
      const visitorId = this.getVisitorId();
      const lead = {...leadInfo, user_id: visitorId};
      const params = {
        method: METHOD_POST,
        bodyObject: lead,
      };
      return fetchUtils.request(url, params);
    };

    getVisitorId = () => Intercom("getVisitorId"); // eslint-disable-line

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
