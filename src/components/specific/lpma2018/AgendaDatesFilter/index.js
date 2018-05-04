import React, {Component} from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import moment from "moment";
import "./styles.scss";

const propTypes = {
  events: PropTypes.array.isRequired,
  currentFilter: PropTypes.string,
  setDateFilter: PropTypes.func.isRequired,
};

class AgendaDatesFilter extends Component {
  extractDates = () => {
    const {events} = this.props;
    const dates = [];
    events
      .filter(event => !!event.startDate)
      .map(({startDate}) => startDate.substring(0, 10))
      .forEach(date => !dates.includes(date) && dates.push(date));
    const sortedDates = dates.sort();
    return sortedDates;
  };

  renderDates = () =>
    this.extractDates().map((startDate, index) => (
      <button
        key={index}
        onClick={() => this.props.setDateFilter(startDate)}
        className={classNames({
          btn: true,
          smaller: true,
          outlined: this.props.currentFilter !== startDate,
          primary: this.props.currentFilter === startDate,
        })}>
        {moment(startDate).format("MMMM D, YYYY")}
      </button>
    ));

  render() {
    return <div className="event-dates">{this.renderDates()}</div>;
  }
}

AgendaDatesFilter.propTypes = propTypes;

export default AgendaDatesFilter;
