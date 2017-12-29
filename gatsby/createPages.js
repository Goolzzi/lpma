const path = require("path");

module.exports = ({graphql, boundActionCreators}) => {
  const {createPage} = boundActionCreators;
  return new Promise((resolve, reject) => {
    const bookTemplate = path.resolve(`src/templates/book.js`);
    resolve(
      graphql(`
        {
          allContentfulBook(limit: 100) {
            edges {
              node {
                id
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          reject(result.errors);
        }
        result.data.allContentfulBook.edges.forEach(edge => {
          createPage({
            path: edge.node.id,
            component: bookTemplate,
            context: {
              id: edge.node.id,
            },
          });
        });
        return;
      }),
    );
  });
};
