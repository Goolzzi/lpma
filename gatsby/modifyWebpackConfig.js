const path = require("path");

module.exports = function({config}) {
  config.preLoader(`sass`, {
    test: /styles.scss|main.scss$/,
    exclude: /node_modules/,
    loader: path.resolve("gatsby/inject-scss-webpack-loader"),
  });

  //todo improve scss|sass-url-resolver
  config.loader(`file-loader`, {
    test: /\.(ico|eot|otf|webp|pdf|ttf|woff(2)?)(\?.*)?$/,
    loader: `file`,
    query: {
      name: `static/[name].[ext]?[hash:8]`,
    },
  });

  return config;
};
