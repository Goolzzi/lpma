import React, {Component} from "react";
import PropTypes from "prop-types";
import moment from "moment";
import "./styles.scss";

const propTypes = {
  events: PropTypes.array.isRequired,
  dateFilter: PropTypes.string,
  typeFilter: PropTypes.object,
};

class AgendaEventsList extends Component {
  formatEventDate = date => moment(date).format("HH:mm");

  filterDates = events => {
    const {dateFilter} = this.props;
    if (!dateFilter) {
      return events;
    }
    return events.filter(({startDate}) => startDate === dateFilter);
  };

  filterTypes = events => {
    const {typeFilter} = this.props;
    if (!typeFilter) {
      return events;
    }
    return events.filter(({type}) => type.name === typeFilter.name);
  };

  renderEvents = events =>
    events.map(({id, startDate, endDate, title, type, speaker}) => (
      <div key={id} className="columns event-item">
        <div className="column is-3">
          <p className="event-time has-text-centered-mobile">
            {this.formatEventDate(startDate)} - {this.formatEventDate(endDate)}
          </p>
        </div>
        <div className="column is-9">
          <p className="event-desc has-text-centered-mobile">
            <span className="green">{type.name}</span>
            &nbsp;–&nbsp;
            <span className="bold">{title}</span>
            &nbsp; {speaker.name}
          </p>
        </div>
      </div>
    ));

  render() {
    const {events} = this.props;
    const filterTypes = this.filterTypes;
    const filterDates = this.filterDates;
    const filteredEvents = filterTypes(filterDates(events));
    return (
      <div className="container events-list">
        {this.renderEvents(filteredEvents)}
      </div>
    );
  }
}

AgendaEventsList.propTypes = propTypes;

export default AgendaEventsList;
