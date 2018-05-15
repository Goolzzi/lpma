module.exports = async ({page, boundActionCreators}) => {
  const {createPage} = boundActionCreators;

  return new Promise((resolve, reject) => {

    if ((page.path === "/") || (page.path === "/pricing/")) {
      // It's assumed that `landingPage.js` exists in the `/layouts/` directory
      page.layout = "new-layout";

      // Update the page.
      createPage(page);
    }

    resolve();
  });
  
};
