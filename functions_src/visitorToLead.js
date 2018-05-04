const Intercom = require("intercom-client");

exports.handler = function(event, context, callback) {
  const accessToken = process.env.INTERCOM_ACCESS_TOKEN;
  const client = new Intercom.Client({token: accessToken});
  const data = JSON.parse(event.body);
  const {visitorId} = data;
  const conversion = {
    visitor: {user_id: visitorId},
    type: "lead",
  };
  client.visitors.convert(conversion, (response) => {
    console.log("RESPONSE", response);
  });
  callback(null, {
    statusCode: 200,
    context: JSON.stringify(context),
    at: accessToken,
  });
};
