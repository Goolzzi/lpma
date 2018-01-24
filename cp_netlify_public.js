/* eslint-disable */
const fs = require("fs-extra");

console.log('\x1b[40m\x1b[36m', "gatsby build completed!", '\x1b[0m');
console.log('\x1b[40m\x1b[36m', "Copying netlify content...", '\x1b[0m');
fs
  .copy("./netlify", "./public")
  .then(() => {
    console.log('\x1b[40m\x1b[32m', "The process finished successfully!", '\x1b[0m');
  })
  .catch(err => {
    console.error('\x1b[40m\x1b[31m', err, '\x1b[0m');
  });
