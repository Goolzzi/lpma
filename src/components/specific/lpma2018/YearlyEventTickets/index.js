import React, {Component} from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import TicketsSection from "../TicketsSection";
import "./styles.scss";

const propTypes = {
  node: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.object.isRequired,
    tickets: PropTypes.array.isRequired,
  }),
};

class YearlyEventTickets extends Component {
  state = {lpmaMember: true};

  setLpmaMember = lpmaMember => this.setState({lpmaMember});

  render() {
    const {node: {title, description, tickets}} = this.props;
    const {lpmaMember} = this.state;
    return (
      <section className="section lpma2018-purchase">
        <div className="container">
          <div className="columns">
            <div className="column is-12">
              <div className="has-text-centered">
                <h2>{title}</h2>
                <div
                  dangerouslySetInnerHTML={{
                    __html: description.childMarkdownRemark.html,
                  }}
                />
                <br />
                <br />
                <button
                  onClick={() => this.setLpmaMember(true)}
                  className={classNames({
                    btn: true,
                    secondary: lpmaMember,
                    outlined: !lpmaMember,
                    "smallert-text": true,
                    onequarterwidth: true,
                    centered: true,
                  })}>
                  LPMA Member
                </button>
                <button
                  onClick={() => this.setLpmaMember(false)}
                  className={classNames({
                    btn: true,
                    secondary: !lpmaMember,
                    outlined: lpmaMember,
                    "smallert-text": true,
                    onequarterwidth: true,
                    centered: true,
                  })}>
                  Non-LPMA Member
                </button>
              </div>
            </div>
          </div>
          <TicketsSection tickets={tickets} lpmaMember={lpmaMember} />
        </div>
      </section>
    );
  }
}

YearlyEventTickets.propTypes = propTypes;

export default YearlyEventTickets;
