/**
 * Gatsby's Browser APIs in this file.
 * */

import createHistory from "history/createBrowserHistory";
import auth from "./src/Auth";

let history = createHistory();

const handleRedirects = location => {
  const {pathname} = location;
  const isAuthCheckRequiered =
    pathname.indexOf("/foundry") !== -1 ||
    pathname.indexOf("/resources") !== -1;

  if (isAuthCheckRequiered && !auth.isAuthenticated()) {
    history.replace("/login-foundry");
  }
  if (pathname.indexOf("/login-foundry") !== -1 && auth.isAuthenticated()) {
    history.replace("/foundry");
  }
};

module.exports.onClientEntry = () => {
  handleRedirects(history.location);
};

history.listen(location => {
  handleRedirects(location);
});

module.exports.replaceHistory = () => history;
module.exports.onInitialClientRender = () => {};
