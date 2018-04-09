import React, {Component} from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./styles.scss";

const propTypes = {
  events: PropTypes.array.isRequired,
  currentFilter: PropTypes.string,
  setTypeFilter: PropTypes.func.isRequired,
};

class AgendaTypesFilter extends Component {
  renderTypes = () => {
    const {events, currentFilter} = this.props;
    const eventNodes = events.map(({id, type}) => (
      <span
        key={id}
        onClick={() => this.props.setTypeFilter(type)}
        className={classNames({
          "event-type": true,
          "event-type-selected":
            currentFilter && currentFilter.name === type.name,
        })}>
        {type.filterAppearance}
      </span>
    ));
    // all events filter
    eventNodes.unshift(
      <span
        key={0}
        onClick={() => this.props.setTypeFilter(null)}
        className={classNames({
          "event-type": true,
          "event-type-selected": !currentFilter,
        })}>
        All events
      </span>,
    );
    return eventNodes;
  };

  render() {
    return <div className="event-types">{this.renderTypes()}</div>;
  }
}

AgendaTypesFilter.propTypes = propTypes;

export default AgendaTypesFilter;
