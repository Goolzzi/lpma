import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import withSegmentTracking from "../../utils/withSegmentTracking";
import withIntercom from "../../utils/withIntercom";
import TopJumbotron from "../../components/TopJumbotron";
import "./styles.scss";

class JoinForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      FirstName: "",
      LastName: "",
      AgencyName: "",
      Email: "",
      ContactNumber: "",
    };
  }

  componentDidMount() {
    this.props.trackForm("joinLPMAForm", "Join");
  }

  handleSubmit = () => {
    console.log("SUBMIT CALLED");
    const {trackGroup, convertVisitorToLead, updateLead} = this.props;
    const lead = this.getLead();
    trackGroup("Join", this.state.Company, this.state);
    convertVisitorToLead();
    updateLead(lead);
  };

  handleChange = ({target: {name, value}}) => {
    this.setState({[name]: value});
  };

  getLead = () => {
    const {
      FirstName,
      LastName,
      ContactNumber: phone,
      Email: email,
    } = this.state;
    const user_id = process.env.INTERCOM_ACCESS_TOKEN;
    return {
      user_id,
      phone,
      email,
      name: `${FirstName} ${LastName}`,
      custom_attributes: {
        "Primary Product": "LPMA",
      },
    };
  };

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        name="joinForm"
        id="joinLPMAForm"
        data-netlify="true"
        method="post"
        data-netlify-honeypot="bot-field">
        <input type="hidden" name="form-name" value="joinForm" />
        <input
          required
          type="text"
          className="inp"
          name="FirstName"
          placeholder="First Name"
          onChange={this.handleChange}
          value={this.state.FirstName}
        />
        <input
          type="text"
          className="inp"
          name="LastName"
          onChange={this.handleChange}
          placeholder="Last Name"
          value={this.state.LastName}
        />
        <input
          type="text"
          className="inp"
          name="AgencyName"
          placeholder="Agency Name"
          value={this.state.AgencyName}
          onChange={this.handleChange}
        />
        <input
          required
          type="email"
          className="inp"
          name="Email"
          placeholder="Email"
          onChange={this.handleChange}
          value={this.state.Email}
        />
        <input
          type="text"
          className="inp"
          name="ContactNumber"
          placeholder="Contact Number"
          onChange={this.handleChange}
          value={this.state.ContactNumber}
        />
        <button type="submit" className="btn primary halfwidth">
          Submit
        </button>
      </form>
    );
  }
}

JoinForm.propTypes = {
  convertVisitorToLead: PropTypes.func.isRequired,
  updateLead: PropTypes.func.isRequired,
  trackIdentify: PropTypes.func.isRequired,
  trackForm: PropTypes.func.isRequired,
  trackGroup: PropTypes.func.isRequired,
};

const JoinFormWithSegmentTracking = withSegmentTracking(withIntercom(JoinForm));

class JoinPage extends React.PureComponent {
  render() {
    const {data: {allContentfulJoinJumotron: {edges}}} = this.props;
    return (
      <div className="join-page">
        <TopJumbotron {...edges[0].node} />
        <section className="section join">
          <div className="columns is-gapless">
            <div className="column is-8 join-wrapper">
              <div className="join-cont">
                <h2>Join</h2>
                <p>
                  You&apos;re taking your first step towards growing your
                  network.
                </p>
                <div className="columns">
                  <div className="column is-7">
                    <JoinFormWithSegmentTracking />
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
                  View our Membership&nbsp;
                  <Link to="/membership-terms-and-conditions/">
                    Terms and Conditions
                  </Link>
                  &nbsp;or&nbsp;
                  <Link to="/privacy-policy">Privacy Policy</Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

JoinPage.propTypes = {
  data: PropTypes.object,
};

export default JoinPage;

export const pageQuery = graphql`
  query JoinPageQuery {
    allContentfulJoinJumotron(sort: {fields: [pageLocation], order: DESC}) {
      edges {
        node {
          jumbotron {
            ...JumbotronItem
          }
        }
      }
    }
  }
`;
