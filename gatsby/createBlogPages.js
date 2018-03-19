const path = require("path");

module.exports = function(data, createPage) {
  const blogPostTemplate = path.resolve("src/templates/blogpost/index.js");
  data.allContentfulBlogPost.edges.forEach(({node}) => {
    createPage({
      path: node.slug,
      component: blogPostTemplate,
      context: {
        slug: node.slug,
      },
    });
  });
};
