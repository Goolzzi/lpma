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
  console.log("data", data);
  client.visitors.convert(conversion, response => {
    console.log("response", response.body);
    const {errors} = response;
    if (errors && errors.length !== 0) {
      return callback(null, {
        statusCode: 400,
      });
    }
    callback(null, {
      statusCode: 200,
    });
  });
  // callback(null, {
  //   statusCode: 400,
  // });
};
