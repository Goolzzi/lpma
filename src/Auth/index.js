import {AUTH_CONFIG} from "./auth0-variables";
import {navigateTo} from "gatsby-link";

class Auth {
  constructor() {
    this.auth0 = null;
    if (typeof auth0 !== "undefined") {
      this.auth0 = new auth0.WebAuth({
        domain: AUTH_CONFIG.domain,
        clientID: AUTH_CONFIG.clientId,
        redirectUri: AUTH_CONFIG.callbackUrl,
        responseType: "token id_token",
        scope: "openid profile",
      });
    }
    this.userProfile = null;
  }

  login = () => {
    this.auth0.authorize();
  };

  handleAuthentication = () => {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
      } else if (err) {
        alert(`Error: ${err.error}`); //eslint-disable-line
      }
    });
  };

  setSession = authResult => {
    let expiresAt = JSON.stringify(
      authResult.expiresIn * 1000 + new Date().getTime(),
    );
    localStorage.setItem("access_token", authResult.accessToken);
    localStorage.setItem("id_token", authResult.idToken);
    localStorage.setItem("expires_at", expiresAt);
    navigateTo("/foundry");
  };

  getAccessToken = () => {
    const accessToken = localStorage.getItem("access_token");
    if (!accessToken) {
      throw new Error("No access token found");
    }
    return accessToken;
  };

  getProfile = () => {
    return new Promise((resolve, reject) => {
      if (this.userProfile) {
        resolve(this.userProfile);
      } else {
        let accessToken = this.getAccessToken();
        this.auth0.client.userInfo(accessToken, (err, profile) => {
          if (profile) {
            this.userProfile = profile;
            resolve(profile);
          }
          reject(err);
        });
      }
    });
  };

  dispose = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");
    this.userProfile = null;
  };

  logout = () => {
    this.dispose();
    navigateTo("/");
  };

  isAuthenticated = () => {
    if (typeof localStorage !== "undefined") {
      let expiresAt = JSON.parse(localStorage.getItem("expires_at"));
      if (!expiresAt) {
        return false;
      }
      return new Date().getTime() < expiresAt;
    }
  };
}

const auth = new Auth();
export default auth;
