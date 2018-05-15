import createHistory from "history/createBrowserHistory";
import auth from "./src/Auth/authInstance";

//force full page refreshes for Netlify redirects
const pathsToforceRefresh = [
  "us",
  "join",
  "ctd-tools",
  "bb-tools",
  "ng-tools",
  "lpma2019",
];

//eslint-disable-next-line
const getRegExpForPaths = path =>
  new RegExp(
    `/${path}(/)?$|/
  ${path}(/)index.html(/)?$`,
    "i",
  );

const history = createHistory();

const handleRedirect = (pathname, reload = false) => {
  history.push(pathname);
  if (reload) {
    window.location.reload(false);
  }
};

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

  if (pathname.indexOf("login-auth0-ailo") !== -1) {
    if (!isAuthenticated) {
      auth.login();
    } else {
      handleRedirect("/foundry", true);
    }
  }

  //redirect authenticated users form home to foundy page //todo improve with regexp
  if (isAuthenticated && (pathname === "/" || pathname === "/index.html")) {
    handleRedirect("/foundry", true);
  }
  //redirect users form `join` to `contact` //todo improve with regexp
  if (
    isAuthenticated &&
    (pathname === "/join" ||
      pathname === "/join/" ||
      pathname === "/join/index.html")
  ) {
    handleRedirect("/contact");
  }

  const isAuthCheckRequiered =
    pathname.indexOf("/foundry") !== -1 ||
    pathname.indexOf("/resources") !== -1;

  if (isAuthCheckRequiered && !isAuthenticated) {
    handleRedirect("/login-foundry");
  }
  if (pathname.indexOf("/login-foundry") !== -1 && isAuthenticated) {
    handleRedirect("/foundry");
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
