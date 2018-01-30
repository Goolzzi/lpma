import React from "react";
import "./styles.scss";

const LPMATeam = () => (
  <section className="section our-team">
    <h3>our team</h3>
    <div className="columns is-multiline out-team-item">
      <div className="column img-col is-3">
        <img src={require("../../assets/images/profile-pic.jpg")} />
      </div>
      <div className="column is-9">
        <p>
          Bill Bill Bill Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Nam non lacus tempus, porttitor sem quis, vulputate augue. In ut
          malesuada metus, in lacinia purus.
        </p>
        <p>
          Proin aliquam est non nibh ultricies, id pretium ligula ullamcorper.
          Sed nec iaculis tellus, in molestie justo. Sed nec tortor tortor.
          Suspendisse eros dui, accumsan id condimentum vel, condimentum id
          justo. Praesent a justo non velit sodales maximus nec nec nisl. Aenean
          fringilla ex sed sem aliquet efficitur.
        </p>
        <span className="member-name">- Bill Lopez, SVP Operations</span>
      </div>
    </div>
  </section>
);

export default LPMATeam;
