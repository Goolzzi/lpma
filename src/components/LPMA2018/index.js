import React from "react";
import YouTube from "react-youtube";
import "./styles.scss";

const opts = {
  height: "10000",
  width: "100%",
  playerVars: {
    autoplay: 1,
    controls: 0,
    disablekb: 0,
    fs: 0,
    iv_load_policy: 3,
    loop: 1,
    playlist: "pZ_tHrWzdT4",
    modestbranding: 1,
    showinfo: 0,
    enablejsapi: 1,
  },
};

const LPMA2018 = () => (
  <section className="section lpma2018-top-jumbotron">
    {/*<YouTube videoId={"pZ_tHrWzdT4"} opts={opts} className="video-frame" />*/}
  </section>
);

export default LPMA2018;
