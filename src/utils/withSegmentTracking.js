import React from "react";
import Auth from "../Auth";
import noop from "lodash/noop";
import {getComponentDisplayName} from "../utils";

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

    trackIdentify = (form, formData, anonymousId) => {
      if (this.auth.isAuthenticated()) {
        const user = this.auth.getUserData();
        analytics.identify(user.username, {
          form,
          formData,
          isAuthenticated: true,
          ...user,
        });
      } else {
        analytics.identify(anonymousId, {
          form,
          formData,
          isAuthenticated: false,
        });
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
