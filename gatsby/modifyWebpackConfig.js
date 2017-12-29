const path = require("path");

module.exports = function({config}) {
  config.preLoader(`sass`, {
    test: /styles.scss$/,
    exclude: /node_modules/,
    loader: path.resolve("gatsby/inject-scss-webpack-loader"),
  });
  return config;
};
