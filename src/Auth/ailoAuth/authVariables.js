import buildConfig from "../../../build.config.json";

function getDevRedirectUrl() {
  return process.env.NODE_ENV === "development"
    ? "http://localhost:8000/callback"
    : "https://qa.lpma.com/callback";
}

const authConfig_dev = {
  domain: "ailo-qa.au.auth0.com",
  clientID: "akjf26i6coI0UMyH5NgJRsXC0U6W1rsW",
  redirectUri: getDevRedirectUrl(),
  audience: "https://qa.ailo.io/",
  responseType: "token id_token",
  scope: "openid email profile",
};

const authConfig_prod = {
  domain: "login.ailo.io",
  clientID: "ulcwqnerf7Zgpjn4HoJ0UiqeKDDXRi4b",
  redirectUri: "https://lpma.com/callback",
  audience: "https://app.ailo.io/",
  responseType: "token id_token",
  scope: "openid email profile",
};

export const authConfig =
  process.env.NODE_ENV === "development"
    ? authConfig_dev
    : buildConfig.env === "live" ? authConfig_prod : authConfig_dev;
