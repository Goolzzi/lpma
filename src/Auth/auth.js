import {authConfig} from "./authVariables";
import {parseHash} from "../utils";
import {navigateTo} from "gatsby-link";
import store from "store";
import isEmpty from "lodash/isEmpty";
import CryptoJS from "crypto-js";

class Auth {
  constructor() {
    this.userData = null;
    this.auth0 = new auth0.WebAuth(authConfig);
  }

  handleAuthentication = history => {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
        this.fetchProfileInfo()
          .then(profile => {
            this.setUserData(profile);
            navigateTo("/foundry");
          })
          .catch(err => console.log("user profile error", err)); //eslint-disable-line
      } else if (err) {
        navigateTo.replace("/");
        console.log(err); //eslint-disable-line
      }
    });
  };

  setUserData = userData => {
    this.userData = userData;
    const ciphertext = CryptoJS.AES.encrypt(
      JSON.stringify(this.userData),
      this.getAccessToken(),
    );
    store.set(this.getKey(), ciphertext.toString());
  };

  setSession = authData => {
    let expiresAt = JSON.stringify(
      authData.expiresIn * 1000 + new Date().getTime(),
    );
    store.set("access_token", authData.accessToken);
    store.set("expires_at", expiresAt);
  };

  dispose = () => {
    store.remove(this.getKey());
    store.remove("access_token");
    store.remove("expires_at");
    this.userData = null;
  };

  login = () => {
    // if (window) {
    //   window.location.href = authConfig.getIrisNavUrl();
    // }

    this.auth0.authorize();
  };

  logout = data => {
    this.dispose();
    navigateTo({
      pathname: "/",
      hash: data,
    });
  };

  getKey = () => {
    return CryptoJS.MD5(authConfig.clientId).toString();
  };

  // fetchTokenInfo = () => {
  //   //eslint-disable-next-line
  //   return fetch(
  //     `${
  //       authConfig.iris
  //     }/oauth/token/info?access_token=${this.getAccessToken()}`,
  //   );
  // };

  fetchProfileInfo = () => {
    return new Promise((resolve, rejcet) => {
      let accessToken = this.getAccessToken();
      this.auth0.client.userInfo(accessToken, (err, profile) => {
        if (profile) {
          resolve(profile);
        }
        rejcet(err);
      });
    });
  };

  getUserData = () => {
    if (this.userData) {
      return this.userData;
    }
    if (store.get(this.getKey())) {
      const ciphertextString = store.get(this.getKey());
      const bytes = CryptoJS.AES.decrypt(
        ciphertextString,
        this.getAccessToken(),
      );
      const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
      this.userData = decryptedData;
      return this.userData;
    }
    return null;
  };

  isAuthenticated = () => {
    if (typeof localStorage !== "undefined") {
      let expiresAt = store.get("expires_at");
      if (!expiresAt) {
        return false;
      }
      const isExpired = new Date().getTime() >= expiresAt;
      if (isExpired) {
        this.dispose();
        return false;
      }
      if (this.getUserData() !== null) {
        return true;
      }
      return false;
    }
  };

  getAccessToken = () => {
    const accessToken = store.get("access_token");
    if (!accessToken) {
      throw new Error("No access token found");
    }
    return accessToken;
  };
}

const auth = new Auth();
export default auth;
