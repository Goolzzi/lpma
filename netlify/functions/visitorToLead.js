// const Intercom = require("./node_modules/intercom-client");
const fs = require("fs");

exports.handler = function(event, context, callback) {
  const accessToken = process.env.INTERCOM_ACCESS_TOKEN;
  // console.log("INTERCOM", Intercom);
  console.log("FILES", fs.readdirSync("."));
  callback(null, {
    statusCode: 300,
    context: JSON.stringify(context),
    at: accessToken,
  });
};
