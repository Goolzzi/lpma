/* eslint-disable */
import React from "react";
import auth from "../../Auth";

const LoginLogout = ({cssClass}) => {
  if (auth.isAuthenticated()) {
    return (
      <a className={cssClass} onClick={auth.logout}>
        Logout
      </a>
    );
  }
  return (
    <a className={cssClass} onClick={auth.login}>
      Login
    </a>
  );
};

export default LoginLogout;
