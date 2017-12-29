module.exports = function(source) {
  this.cacheable();
  return `@import './src/styles/app';
    ${source}`;
};
