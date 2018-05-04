// const Intercom = require("./node_modules/intercom-client");
const fs = require("fs");

exports.handler = function(event, context, callback) {
  const accessToken = process.env.INTERCOM_ACCESS_TOKEN;
  // console.log("INTERCOM", Intercom);
  try {
    console.log("FILES", fs.readdirSync("./node_modules"));
  } catch (e) {
    console.log("error!!!!", e);
  }
  callback(null, {
    statusCode: 200,
    context: JSON.stringify(context),
    at: accessToken,
  });
};
