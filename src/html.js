/* eslint no-console: 0 */
/* eslint no-undef: 0 */

import React from "react";
import metaAndFavicons from "./head";

let stylesStr;
if (process.env.NODE_ENV === `production`) {
  try {
    stylesStr = require("!raw-loader!../public/styles.css");
  } catch (e) {
    console.log(e);
  }
}

module.exports = class HTML extends React.Component {
  render() {
    let css;
    if (process.env.NODE_ENV === `production`) {
      css = (
        <style
          id="gatsby-inlined-css"
          dangerouslySetInnerHTML={{__html: stylesStr}}
        />
      );
    }
    return (
      <html {...this.props.htmlAttributes} lang="en">
        {/* npm auth0 has node dependency, that's why we are useing auth0 from cdn */}
        {/* <script src="https://cdn.auth0.com/js/auth0/9.3.0/auth0.min.js" /> */}
        <head>
          {this.props.headComponents}
          {metaAndFavicons}
          {css}
        </head>
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{__html: this.props.body}}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    );
  }
};
