const path = require("path");
const constants = require("./constants");
const {DOCUMENTS_PATH, foundryCrumb, documentSuiteCrumb} = constants;

module.exports = function(data, createPage) {
  const regionTemplate = path.resolve("src/templates/region/index.js");
  data.allContentfulDocumentsCountry.edges.forEach(({node: country}) => {
    if (country.regions) {
      country.regions.forEach(region => {
        createPage({
          path: `/foundry/documents/${region.slug}`,
          component: regionTemplate,
          context: {
            slug: region.slug,
            parentPath: "/foundry",
            breadCrumbs: [
              foundryCrumb,
              documentSuiteCrumb,
              {
                title: country.name,
                path: `${DOCUMENTS_PATH}/${country.slug}`,
              },
              {
                title: region.name,
                path: `${DOCUMENTS_PATH}/${region.slug}`,
              },
            ],
          },
        });
      });
    }
  });
};
