import React from "react";
import Link from "gatsby-link";
import "./styles.scss";

function createMarkup() {
  return {
    __html: `
    <form name="contact" netlify>
  <p>
    <label>Your Name: <input type="text" name="name"></label>   
  </p>
  <p>
    <label>Your Email: <input type="email" name="email"></label>
  </p>
  <p>
    <label>Message: <textarea name="message"></textarea></label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
</form>
    `,
  };
}

const Join = () => (
  <section className="section join">
    <div className="columns is-gapless">
      <div className="column is-8 join-wrapper">
        <div className="join-cont">
          <h2>Join</h2>

          <div dangerouslySetInnerHTML={createMarkup()} />

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
                <button type="submit" className="btn primary halfwidth">
                  Submit
                </button>
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
