import {AUTH_CONFIG} from "./auth0-variables";
import {navigateTo} from "gatsby-link";
import store from "store";
import CryptoJS from "crypto-js";

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

  setUserProfile = profile => {
    this.userProfile = profile;
    const ciphertext = CryptoJS.AES.encrypt(
      JSON.stringify(this.userProfile),
      this.getAccessToken(),
    );
    store.set(this.getKey(), ciphertext.toString());
  };

  getKey = () => {
    const accessToken = this.getAccessToken();
    const spv = accessToken[5];
    return accessToken.split(spv)[1];
  };

  setStoredUserData = () => {
    const ciphertextString = store.get(this.getKey());
    const bytes = CryptoJS.AES.decrypt(ciphertextString, this.getAccessToken());
    var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

    this.userProfile = decryptedData;
  };

  getUserProfile = () => {
    if (this.userProfile) {
      return this.userProfile;
    } else if (store.get(this.getKey())) {
      const ciphertextString = store.get(this.getKey());
      const bytes = CryptoJS.AES.decrypt(
        ciphertextString,
        this.getAccessToken(),
      );
      var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
      this.userProfile = decryptedData;
      return this.userProfile;
    }

    return null;
  };

  handleAuthentication = () => {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
        if (authResult.idTokenPayload) {
          this.setUserProfile(authResult.idTokenPayload);
          navigateTo("/foundry");
        } else {
          this.getProfile()
            .then(profile => {
              this.setUserProfile(profile);
              navigateTo("/foundry");
            })
            .catch(err => console.log("user profile error", err)); //eslint-disable-line
        }
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
      let accessToken = this.getAccessToken();
      this.auth0.client.userInfo(accessToken, (err, profile) => {
        if (profile) {
          resolve(profile);
        }
        reject(err);
      });
    });
  };

  dispose = () => {
    store.remove(this.getKey());
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
      const isExpired = new Date().getTime() >= expiresAt;
      if (isExpired) {
        this.dispose();
        return false;
      }
      if (this.getUserProfile() !== null) {
        return true;
      }
      return false;
    }
  };
}

const auth = new Auth();
export default auth;
