const localDevCallback = "http://localhost:8000/callback";
const stagingCallback = "https://dev-lpma.netlify.com/callback";
const liveCallBack = "https://lpma.netlify.com/callback";

const authConfig_dev = {
  clientId: "f6e0e5236bca6e168f9f325a86310b60cf56588e37b05f7134f297c2f8e3248a",
  iris: "https://lpma-identity-dev.trunkplatform.com.au",
  getRedirectURI: () =>
    process.env.NODE_ENV === "development" ? localDevCallback : stagingCallback,
  getIrisNavUrl: function() {
    return `${this.iris}/oauth/authorize?response_type=token&client_id=${
      this.clientId
    }&redirect_uri=${this.getRedirectURI()}`;
  },
};

const authConfig_prod = {
  clientId: "38b44d670f8b0344568227702f59d20c7e88609c9f7f9cdffda6ac5324d1ce35",
  iris: "https://halo-identity.lpma.com.au",
  getRedirectURI: () => liveCallBack,
  getIrisNavUrl: function() {
    return `${this.iris}/oauth/authorize?response_type=token&client_id=${
      this.clientId
    }&redirect_uri=${this.getRedirectURI()}`;
  },
};

export const authConfig =
  process.env.NODE_ENV === "development"
    ? authConfig_dev
    : process.argv[3] === "live" ? authConfig_prod : authConfig_dev;
