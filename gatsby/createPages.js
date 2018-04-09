"use strict";

const contentfulQuery = require("./contentfulQuery");
const createFoundryPages = require("./createFoundryPages");
const createBlogPages = require("./createBlogPages");
const createJoinPages = require("./createJoinPages");
const createConditionsPages = require("./createConditionsPages");
const createCountriesPages = require("./createCountriesPages");
const createRegionsPages = require("./createRegionsPages");
const createDocumentListPages = require("./createDocumentListPages");
const createBusinessCapabilityPages = require("./createBusinessCapabilityPages");

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
        createConditionsPages(result.data, createPage);
        createCountriesPages(result.data, createPage);
        createRegionsPages(result.data, createPage);
        createDocumentListPages(result.data, createPage);
        createBusinessCapabilityPages(result.data, createPage);
        createJoinPages(null, createPage);
      }),
    );
  });
};
