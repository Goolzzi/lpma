import React, {Component} from "react";
import PropTypes from "prop-types";
import Ticket from "../Ticket";
import "./styles.scss";

const propTypes = {
  tickets: PropTypes.array.isRequired,
  lpmaMember: PropTypes.bool.isRequired,
};

class TicketsSection extends Component {
  renderTickets = () =>
    this.props.tickets.map(ticket => (
      <Ticket
        key={ticket.id}
        ticket={ticket}
        lpmaMember={this.props.lpmaMember}
      />
    ));

  render() {
    return <div className="columns tickets">{this.renderTickets()}</div>;
  }
}

TicketsSection.propTypes = propTypes;

export default TicketsSection;
