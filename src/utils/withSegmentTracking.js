import React from "react";
import IRISAuth from "../Auth/IRISAuth";

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || "Component";
}

function withSegmentTracking(WrappedComponent) {
  class WithSegment extends React.Component {
    trackForm = (formDomId, eventName) => {
      // analytics init snippet injected via Netlify Snippet Injection
      typeof analytics !== "undefined" &&
        analytics.trackForm(
          document.getElementById(formDomId),//eslint-disable-line
          eventName,
        );
    };

    trackGroup = (form, groupId, formData) => {
      analytics.group(groupId, {
        form,
        ...formData,
      });
    };

    trackIdentify = (form, formData, ananimuysId) => {
      if (typeof analytics !== "undefined") {
        if (this.auth.isAuthenticated()) {
          const user = this.auth.getUserData();
          analytics.identify(user.username, {
            form,
            formData,
            isAuthenticated: true,
            ...user,
          });
        } else {
          analytics.identify(ananimuysId, {
            form,
            formData,
            isAuthenticated: false,
          });
        }
      }
    };

    render() {
      return (
        <IRISAuth
          render={auth => {
            this.auth = auth;
            return (
              <WrappedComponent
                {...this.props}
                trackForm={this.trackForm}
                trackIdentify={this.trackIdentify}
                trackGroup={this.trackGroup}
              />
            );
          }}
        />
      );
    }
  }
  WithSegment.displayName = `WithSegmentTracking(${getDisplayName(
    WrappedComponent,
  )})`;

  return WithSegment;
}

export default withSegmentTracking;
