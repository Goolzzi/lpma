/* eslint-disable no-console */
const fs = require("fs-extra");

console.log("\x1b[40m\x1b[36m", "creating build config...", "\x1b[0m");
console.log("\x1b[40m\x1b[36m", `env var is:  ${process.argv[2]}`, "\x1b[0m");
console.log("\x1b[40m\x1b[36m", `env auth is:  ${process.argv[3]}`, "\x1b[0m");

fs
  .writeJson("./build.config.json", {
    env: process.argv[2],
    auth: process.argv[3],
  })
  .then(() => {
    console.log(
      "\x1b[40m\x1b[32m",
      "build.config.json has been created succsessfuly\n",
      "\x1b[0m",
    );
  })
  .catch(err => {
    console.error("\x1b[40m\x1b[31m", err, "\x1b[0m");
  });
