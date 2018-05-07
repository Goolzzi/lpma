import buildConfig from "../../../build.config.json";

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
