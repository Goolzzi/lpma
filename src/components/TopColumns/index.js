import React from "react";
import Link from "gatsby-link";
import "./styles.scss";

const TopColumns = () => (
  <section className="section top-columns">
    <div className="columns is-multiline">
      <div className="column is-6 is-12-mobile top-column">
        <p>
          Leading Property Managers Association is a community of real estate
          professionals who seek to be extraordinary.
        </p>
      </div>
      <div className="column is-6 is-12-mobile top-column">
        <p>
          LPMA membership connects you to a network of real estate professionals
          and influential thought leaders and access to industry leading events,
          resources and people.
        </p>
      </div>
    </div>
  </section>
);

export default TopColumns;
