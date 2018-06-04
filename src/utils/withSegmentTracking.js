import React from "react";
import Auth from "../Auth";
import noop from "lodash/noop";
import JWTDecode from "jwt-decode";
import {getComponentDisplayName} from "../utils";

const USER_ID_PREFIX = "user:";

function withSegmentTracking(WrappedComponent) {
  class WithSegment extends React.Component {
    trackForm = (formDomId, eventName) => {
      analytics.trackForm(document.getElementById(formDomId), eventName); //eslint-disable-line
    };

    trackGroup = (form, groupId, formData) => {
      analytics.group(groupId, {
        form,
        ...formData,
      });
    };

    getUserId = () => {
      const auth = this.auth;
      let userId;
      if (typeof auth !== "undefined") {
        const token = JWTDecode(auth.getAccessToken());
        const scope = token.scope;
        const userIdIndex = scope.indexOf(USER_ID_PREFIX) + 5;
        userId = scope.substring(userIdIndex);
      }
      return userId;
    };

    trackIdentify = (form, formData, anonymousId) => {
      if (this.auth.isAuthenticated()) {
        const userId = this.getUserId();
        analytics.identify(userId);
      } else {
        analytics.identify(anonymousId);
      }
    };

    track = (event, properties) => {
      analytics.track(event, properties);
    };

    trackOn = callback => {
      analytics.on("track", callback);
    };

    render() {
      if (typeof analytics === "undefined") {
        return (
          <WrappedComponent
            {...this.props}
            trackForm={noop}
            trackIdentify={noop}
            trackGroup={noop}
            trackOn={noop}
            track={noop}
          />
        );
      }

      return (
        <Auth
          render={auth => {
            this.auth = auth;
            return (
              <WrappedComponent
                {...this.props}
                trackForm={this.trackForm}
                trackIdentify={this.trackIdentify}
                trackGroup={this.trackGroup}
                trackOn={this.trackOn}
                track={this.track}
              />
            );
          }}
        />
      );
    }
  }
  WithSegment.displayName = `WithSegmentTracking(${getComponentDisplayName(
    WrappedComponent,
  )})`;

  return WithSegment;
}

export default withSegmentTracking;
