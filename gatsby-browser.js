import createHistory from "history/createBrowserHistory";
import auth from "./src/Auth/auth";

//force full page refreshes for Netlify redirects
const pathsToforceRefresh = ["us", "join", "ctd-tools", "bb-tools", "ng-tools"];

const getRegExpForPaths = path =>
  new RegExp(
    `/${path}(/)?$|/
  ${path}(/)index.html(/)?$`,
    "i",
  );

const history = createHistory();

const handleForceRefresh = (action, pathname) => {
  if (action === "POP") {
    return;
  }
  if (
    pathname === "/" ||
    pathsToforceRefresh.indexOf(pathname.split("/")[1]) !== -1
  ) {
    // Reload the current page, without using the cache
    window.location.reload(true);
  }
};

const handleRedirects = (location, action) => {
  const {pathname} = location;
  const isAuthenticated = auth.isAuthenticated();

  //redirect authenticated users form home to foundy page //todo improve with regexp
  if (isAuthenticated && (pathname === "/" || pathname === "/index.html")) {
    history.replace("/foundry");
  }
  //redirect users form `join` to `contact` //todo improve with regexp
  if (
    isAuthenticated &&
    (pathname === "/join" ||
      pathname === "/join/" ||
      pathname === "/join/index.html")
  ) {
    history.replace("/contact");
  }

  const isAuthCheckRequiered =
    pathname.indexOf("/foundry") !== -1 ||
    pathname.indexOf("/resources") !== -1;

  if (isAuthCheckRequiered && !isAuthenticated) {
    history.replace("/login-foundry");
  }
  if (pathname.indexOf("/login-foundry") !== -1 && isAuthenticated) {
    history.replace("/foundry");
  }

  handleForceRefresh(action, pathname);
};

module.exports.onClientEntry = () => {
  handleRedirects(history.location, history.action);
};

history.listen((location, action) => {
  handleRedirects(location, action);
});

module.exports.replaceHistory = () => history;
module.exports.onInitialClientRender = () => {};
