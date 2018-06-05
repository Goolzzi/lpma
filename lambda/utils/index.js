// Sending callback response
const send200 = callback => () => callback(null, {statusCode: 200});
const send400 = callback => () => callback(null, {statusCode: 400});

const logInvoked = name => console.log(`Invoked --- ${name}`);

module.exports = {
  send200,
  send400,
  logInvoked,
};
