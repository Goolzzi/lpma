import buildConfig from "../../build.config.json";
import ailoAuth0 from "./ailo_auth";
import irisAuth from "./iris_auth";

export default (process.env.NODE_ENV === "development"
  ? ailoAuth0
  : buildConfig.auth === "iris" ? irisAuth : ailoAuth0);
