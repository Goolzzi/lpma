import React from "react";
import Link from "gatsby-link";
import "./styles.scss";

class Join extends React.PureComponent {
  constructor(props) {
    super(props);
    this.formRef = null;
  }

  componentDidMount() {
    if (this.formRef) {
      this.formRef.setAttribute("data-netlify", "true");
    }
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
                <div className="column is-7">
                  <form
                    ref={form => {
                      this.formRef = form;
                    }}
                    name="join">
                    <input
                      type="text"
                      className="inp"
                      name="First Name"
                      placeholder="FirstName"
                    />
                    <input
                      type="text"
                      className="inp"
                      name="Last Name"
                      placeholder="LastName"
                    />
                    <input
                      type="text"
                      className="inp"
                      name="Agency Name"
                      placeholder="AgencyName"
                    />
                    <input
                      type="text"
                      className="inp"
                      name="Email"
                      placeholder="Email"
                    />
                    <input
                      type="text"
                      className="inp"
                      name="Contact number"
                      placeholder="ContactNumber"
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
  }
}

export default Join;
