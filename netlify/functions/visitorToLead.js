// const Intercom = require("intercom-client");

exports.handler = function(event, context, callback) {
  const accessToken = process.env.INTERCOM_ACCESS_TOKEN;
  callback(null, {
    statusCode: 200,
    context: JSON.stringify(context),
    at: accessToken,
  });
};
