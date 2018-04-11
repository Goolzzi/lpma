import React, {Component} from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./styles.scss";

const propTypes = {
  currentFilter: PropTypes.object,
  setTypeFilter: PropTypes.func.isRequired,
  types: PropTypes.array.isRequired,
};

class AgendaTypesFilter extends Component {
  renderTypes = () => {
    const {currentFilter, types} = this.props;
    const eventNodes = types.map(({node: type}) => (
      <span
        key={type.id}
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
        key={types.length}
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
