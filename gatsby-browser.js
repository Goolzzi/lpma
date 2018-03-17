import createHistory from "history/createBrowserHistory";
import auth from "./src/Auth";

//force full page refreshes for Netlify redirects
const pathsToforceRefresh = [
  "/us",
  "/join/",
  "/join-us",
  "/events",
  "/events-us",
];

const history = createHistory();

const handleForceRefresh = (action, pathname) => {
  //todo implement
};

const handleRedirects = (location, action) => {
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

  //handleForceRefresh(action, pathname);
};

module.exports.onClientEntry = () => {
  handleRedirects(history.location, history.action);
};

history.listen((location, action) => {
  handleRedirects(location, action);
});

module.exports.replaceHistory = () => history;
module.exports.onInitialClientRender = () => {};
