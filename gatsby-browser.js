/**
 * Gatsby's Browser APIs in this file.
 * */

import createHistory from "history/createBrowserHistory";
let history = createHistory();

module.exports.onClientEntry = () => {
  //enter initilal route!
  (() => {
    //debugger // eslint-disable-line
    const {action, location} = history;
  })();
};

history.listen((location, action) => {
  console.log(
    `The current URL is ${location.pathname}${location.search}${location.hash}`,
  );
  console.log(`The last navigation action was ${action}`);
});

module.exports.replaceHistory = () => history;
module.exports.onInitialClientRender = () => {};
