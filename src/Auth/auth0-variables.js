const localDevCallback = "http://localhost:8000/callback";
const stagingCallback = "https://dev-lpma.netlify.com/callback";
const liveCallBack = "https://lpma.netlify.com/callback";

const callbackUrl =
  process.env.NODE_ENV === "development"
    ? localDevCallback
    : process.argv[3] === "live" ? liveCallBack : stagingCallback;

export const AUTH_CONFIG = {
  domain: "ailo-dev.au.auth0.com",
  clientId: "fSFMLtPrgj41huObssvuyRiYMmTkbXr2",
  callbackUrl,
};
