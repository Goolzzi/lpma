const localDevCallback = "http://localhost:8000/callback";
const stagingCallback = "https://dev-lpma.netlify.com/callback";
const liveCallBack = "https://lpma.netlify.com/callback";

const callbackUrl =
  process.env.NODE_ENV === "development"
    ? localDevCallback
    : process.argv[3] === "live" ? liveCallBack : stagingCallback;

export const AUTH_CONFIG = {
  domain: "lpma.au.auth0.com",
  clientId: "Ar64ayX3B-EHquC4oU80AsPe17i_EEt3",
  callbackUrl,
};
