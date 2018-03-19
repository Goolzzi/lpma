"use strict";

const contentfulQuery = require("./contentfulQuery");
const createFoundryPages = require("./createFoundryPages");
const createBlogPages = require("./createBlogPages");
const createJoinPages = require("./createJoinPages");

module.exports = ({graphql, boundActionCreators}) => {
  const {createPage} = boundActionCreators;

  return new Promise((resolve, reject) => {
    resolve(
      graphql(contentfulQuery).then(result => {
        if (result.errors) {
          reject(result.errors);
        }
        createFoundryPages(result.data, createPage);
        createBlogPages(result.data, createPage);
        createJoinPages(null, createPage);
      }),
    );
  });
};
