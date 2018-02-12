import React from "react";
import Link from "gatsby-link";
import "./styles.scss";

function getFormMarkup() {
  return {
    __html: ` <form id = "join-form"  onsubmit="onsubmit" netlify name="joinForm">
  <input
   required
    type="text"
    class="inp"
    name="FirstName"
    placeholder="FirstName"
  />
  <input
    type="text"
    class="inp"
    name="LastName"
    placeholder="LastName"
  />
  <input
    type="text"
    class="inp"
    name="AgencyName"
    placeholder="AgencyName"
  />
  <input
    required
    type="email"
    class="inp"
    name="Email"
    placeholder="Email"
  />
  <input
    type="text"
    class="inp"
    name="ContactNumber"
    placeholder="ContactNumber"
  />
  <button type="submit" class="btn primary halfwidth">
    Submit
  </button>
</form>`,
  };
}

class Join extends React.PureComponent {
  constructor(props) {
    super(props);
    this.formRef = null;
  }

  componentDidMount() {
    // analytics init snippet injected via Netlify Snippet Injection
    // eslint-disable-next-line no-undef
    analytics &&
      // eslint-disable-next-line no-undef
      analytics.trackForm(document.getElementById("join-form"), "Join");
  }

  render() {
    return (
      <section className="section join">
        <div className="columns is-gapless">
          <div className="column is-8 join-wrapper">
            <div className="join-cont">
              <h2>Join</h2>
              <p>
                You&apos;re taking your first step towards growing your network.
              </p>
              <div className="columns">
                <div
                  className="column is-7"
                  dangerouslySetInnerHTML={getFormMarkup()}
                />
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
  }
}

export default Join;
