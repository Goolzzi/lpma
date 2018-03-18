"use strict";

const contentfulQuery = require("./contentfulQuery");
const createFoundryPages = require("./createFoundryPages");
const creteBlogPages = require("./createBlogPages");

module.exports = ({graphql, boundActionCreators}) => {
  const {createPage} = boundActionCreators;

  return new Promise((resolve, reject) => {
    resolve(
      graphql(contentfulQuery).then(result => {
        if (result.errors) {
          reject(result.errors);
        }
        createFoundryPages(result.data, createPage);
        creteBlogPages(result.data, createPage);
      }),
    );
  });
};
