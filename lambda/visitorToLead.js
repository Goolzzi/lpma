const Intercom = require("intercom-client");

const send200 = callback => () => callback(null, {statusCode: 200});
const send400 = callback => () => callback(null, {statusCode: 400});

exports.handler = function(event, context, callback) {
  const accessToken = process.env.INTERCOM_ACCESS_TOKEN;
  const client = new Intercom.Client({token: accessToken});
  const data = JSON.parse(event.body);
  const {lead} = data;
  const conversion = {
    visitor: {user_id: lead.user_id},
    type: "lead",
  };
  console.log("data", data);
  client.visitors.convert(conversion, response => {
    console.log("response", response.body);
    const {errors} = response;
    if (errors && errors.length !== 0) {
      return send400(callback)();
    }
    console.log("STATUS 200");
    client.update(lead, send200(callback));
  });
  // callback(null, {
  //   statusCode: 400,
  // });
};
