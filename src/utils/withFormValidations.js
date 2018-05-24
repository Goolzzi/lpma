import React, {Component} from "react";

function withFormValidations(WrappedComponent) {
  class WithValidations extends Component {
    ERROR_MESSAGE = "Validation failed";
    // eslint-disable-next-line
    emailRegexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    isEmailValid = email => {
      return new Promise((resolve, reject) => {
        const lowerCaseEmail = String(email).toLocaleLowerCase();
        const isValid = this.emailRegexp.test(lowerCaseEmail);
        if (isValid) {
          resolve(isValid);
        } else {
          reject(this.ERROR_MESSAGE);
        }
      });
    };

    render() {
      return (
        <WrappedComponent {...this.props} isEmailValid={this.isEmailValid} />
      );
    }
  }

  return WithValidations;
}

export default withFormValidations;
