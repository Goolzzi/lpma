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

const INTERCOM_BOOT_SNIPPET = `
var APP_ID = "zp294ek4";
Intercom('boot', {
  app_id: APP_ID,
  email: 'example@example.com',
  user_id: 'abc123',
  created_at: 1234567890,
});`;

const INTERCOM_SNIPPET = `
var APP_ID = "zp294ek4";
(function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',intercomSettings);}else{var d=document;var i=function(){i.c(arguments)};i.q=[];i.c=function(args){i.q.push(args)};w.Intercom=i;function l(){var s=d.createElement('script');s.type='text/javascript';s.async=true;
s.src='https://widget.intercom.io/widget/' + APP_ID;
var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);}if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})()`;

const SEGMENT_SNIPPET = `
!function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on"];analytics.factory=function(t){return function(){var e=Array.prototype.slice.call(arguments);e.unshift(t);analytics.push(e);return analytics}};for(var t=0;t<analytics.methods.length;t++){var e=analytics.methods[t];analytics[e]=analytics.factory(e)}analytics.load=function(t){var e=document.createElement("script");e.type="text/javascript";e.async=!0;e.src=("https:"===document.location.protocol?"https://":"http://")+"cdn.segment.com/analytics.js/v1/"+t+"/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(e,n)};analytics.SNIPPET_VERSION="4.0.0";
analytics.load("jAGwvGCuWvhrNol6V0lvwpGSK1PFSpIH");
analytics.page();
}}();`;

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
          {/* <script dangerouslySetInnerHTML={{__html: SEGMENT_SNIPPET}} />
          <script dangerouslySetInnerHTML={{__html: INTERCOM_SNIPPET}} />
          <script dangerouslySetInnerHTML={{__html: INTERCOM_BOOT_SNIPPET}} /> */}
        </body>
      </html>
    );
  }
};
