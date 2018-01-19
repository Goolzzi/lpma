import React from "react";
import Link from "gatsby-link";
import "./styles.scss";

const Join = () => (
  <section className="section join">
    <div className="columns is-gapless">
      <div className="column is-8 join-wrapper">
        <div className="join-cont">
          <h2>Join</h2>
          <p>
            You&apos;re taking your first step towards growing your network.
          </p>
          <div className="columns">
            <div className="column is-7">
              <input type="text" className="inp" placeholder="Firstname" />
              <input type="text" className="inp" placeholder="Lastname" />
              <input type="text" className="inp" placeholder="Agency Name" />
              <input type="text" className="inp" placeholder="Email" />
              <input type="text" className="inp" placeholder="Contact number" />

              <button className="btn primary halfwidth">Next</button>
            </div>
            <div className="column is-4 is-offset-1">
              <ol>
                <li className="selected">Contact Details</li>
                <li>Choose a Plan</li>
                <li>Payment</li>
                <li>Agency Details</li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      <div className="column is-4">
        <div className="any-questions">
          <h3>Any Questions?</h3>
          <p>
            Shoot us an email at
            <Link to="mailto:support@lpma.com.au"> support@lpma.com.au </Link>
          </p>
          <p>
            View our Membership
            <Link to="#"> Terms and Conditions </Link>
            or
            <Link to="#"> Privacy Policy</Link>
            .
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Join;
