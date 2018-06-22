const path = require("path");
const constants = require("./constants");
const {foundryCrumb, documentSuiteCrumb} = constants;

module.exports = function(data, createPage) {
  const bcTemplate = path.resolve("src/templates/businessCapability/index.js");
  data.allContentfulBusinessCapability.edges.forEach(({node: {slug, name}}) => {
    const businessCapabilityCrumb = {title: name, path: slug};
    createPage({
      path: `foundry/${slug}`,
      component: bcTemplate,
      context: {
        slug,
        parentPath: `/foundry/`,
        breadCrumbs: [
          foundryCrumb,
          documentSuiteCrumb,
          businessCapabilityCrumb,
        ],
      },
    });
  });
};
