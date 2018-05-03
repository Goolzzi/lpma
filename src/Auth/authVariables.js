import buildConfig from "../../build.config.json";

const localDevCallback = "http://localhost:8000/callback";
const stagingCallback = "https://dev-lpma.netlify.com/callback";
const liveCallBack = "https://lpma.com/callback";

const iris_authConfig_prod = {
  clientId: "38b44d670f8b0344568227702f59d20c7e88609c9f7f9cdffda6ac5324d1ce35",
  iris: "https://halo-identity.lpma.com.au",
  lpmaGroupID: "108",
  getRedirectURI: () => liveCallBack,
  getIrisNavUrl: function() {
    return `${this.iris}/oauth/authorize?response_type=token&client_id=${
      this.clientId
    }&redirect_uri=${this.getRedirectURI()}`;
  },
};

const iris_authConfig_dev = {
  clientId: "f6e0e5236bca6e168f9f325a86310b60cf56588e37b05f7134f297c2f8e3248a",
  iris: "https://lpma-identity-dev.trunkplatform.com.au",
  lpmaGroupID: "267",
  getRedirectURI: () =>
    process.env.NODE_ENV === "development" ? localDevCallback : stagingCallback,
  getIrisNavUrl: function() {
    return `${this.iris}/oauth/authorize?response_type=token&client_id=${
      this.clientId
    }&redirect_uri=${this.getRedirectURI()}`;
  },
};

const authConfig_dev = {
  domain: "ailo-dev.au.auth0.com",
  clientID: "fSFMLtPrgj41huObssvuyRiYMmTkbXr2",
  redirectUri: "http://localhost:8000/callback",
  audience: "https://dev.ailo.io/",
  responseType: "token id_token",
  scope: "openid email profile",
};

const authConfig_prod = {
  domain: "login.ailo.io",
  clientID: "ulcwqnerf7Zgpjn4HoJ0UiqeKDDXRi4b",
  redirectUri: "https://new.lpma.com/callback",
  audience: "https://app.ailo.io/",
  responseType: "token id_token",
  scope: "openid email profile",
};

export const authConfig =
  process.env.NODE_ENV === "development"
    ? authConfig_dev
    : buildConfig.env === "live" ? authConfig_prod : authConfig_dev;
