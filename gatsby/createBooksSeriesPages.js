const path = require("path");

module.exports = function(data, createPage) {
  const bsTemplate = path.resolve("src/templates/booksseries/index.js");
  data.allContentfulBooksSeriesSection.edges.map(({node}) => {
    createPage({
      path: `/tools/${node.slug}`,
      component: bsTemplate,
      context: {
        slug: node.slug,
      },
    });
  });
};
