import buildConfig from "../../build.config.json";
import ailoAuth0 from "./ailoAuth";
import irisAuth from "./irisAuth";

export default (process.env.NODE_ENV === "development"
  ? ailoAuth0
  : buildConfig.auth === "iris" ? irisAuth : ailoAuth0);
