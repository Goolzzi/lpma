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
              <form name="contact" netlify>
                <input type="text" className="inp" placeholder="First Name" />
                <input type="text" className="inp" placeholder="Last Name" />
                <input type="text" className="inp" placeholder="Agency Name" />
                <input type="text" className="inp" placeholder="Email" />
                <input
                  type="text"
                  className="inp"
                  placeholder="Contact number"
                />
                <button className="btn primary halfwidth">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="column is-4">
        <div className="any-questions">
          <h3>Any Questions?</h3>
          <p>
            Shoot us an email at
            <Link to="mailto:support@lpma.com"> support@lpma.com </Link>
          </p>
          <p>
            View our Membership
            <Link to="http://www.lpma.com/membership-terms-and-conditions/">
              {" "}
              Terms and Conditions{" "}
            </Link>
            or
            <Link to="https://www.lpma.com/privacy-policy">
              {" "}
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Join;
