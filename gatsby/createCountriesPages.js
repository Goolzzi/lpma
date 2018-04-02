const path = require("path");

module.exports = function(data, createPage) {
  const countryTemplate = path.resolve("src/templates/country/index.js");
  data.allContentfulDocumentsCountry.edges.forEach(({node}) => {
    createPage({
      path: `/foundry/documents/${node.slug}`,
      component: countryTemplate,
      context: {
        slug: node.slug,
      },
    });
  });
};
