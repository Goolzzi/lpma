const path = require("path");
const constants = require("./constants");
const {DOCUMENTS_PATH, foundryCrumb, documentSuiteCrumb} = constants;

module.exports = function(data, createPage) {
  const countryTemplate = path.resolve("src/templates/country/index.js");
  data.allContentfulDocumentsCountry.edges.forEach(({node}) => {
    createPage({
      path: `/foundry/documents/${node.slug}`,
      component: countryTemplate,
      context: {
        slug: node.slug,
        parentPath: "/foundry",
        breadCrumbs: [
          foundryCrumb,
          documentSuiteCrumb,
          {
            title: node.name,
            path: `${DOCUMENTS_PATH}/${node.slug}`,
          },
        ],
      },
    });
  });
};
