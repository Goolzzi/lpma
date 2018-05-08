import buildConfig from "../../build.config.json";
import ailoAuth0 from "./ailo_Auth";
import irisAuth from "./iris_Auth";

export default (process.env.NODE_ENV === "development"
  ? ailoAuth0
  : buildConfig.auth === "iris" ? irisAuth : ailoAuth0);
