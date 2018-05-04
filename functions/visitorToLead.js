const Intercom = require("./node_modules/intercom-client");
const fs = require("fs");

exports.handler = function(event, context, callback) {
  const accessToken = process.env.INTERCOM_ACCESS_TOKEN;
  console.log("INTERCOM", Intercom);
  callback(null, {
    statusCode: 200,
    context: JSON.stringify(context),
    at: accessToken,
  });
};
