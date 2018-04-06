import React, {Component} from "react";
import PropTypes from "prop-types";
import AgendaDatesFilter from "../AgendaDatesFilter";
import AgendaTypesFilter from "../AgendaTypesFilter";
import AgendaEventsList from "../AgendaEventsList";
import "./styles.scss";

const propTypes = {
  node: PropTypes.shape({
    title: PropTypes.string.isRequired,
    heading: PropTypes.object.isRequired,
    events: PropTypes.array.isRequired,
  }),
};

class YearlyEventAgenda extends Component {
  state = {
    dateFilter: null,
    typeFilter: null,
  };

  setTypeFilter = typeFilter => this.setState({typeFilter});

  setDateFilter = newDate =>
    this.setState(({dateFilter}) => ({
      dateFilter: dateFilter === newDate ? null : newDate,
    }));

  render() {
    const {node: {title, heading, events}} = this.props;
    const {dateFilter, typeFilter} = this.state;
    return (
      <section className="section lpma2018-agenda">
        <div className="container">
          <div className="columns">
            <div className="column is-12">
              <div className="has-text-centered">
                <h2>{title}</h2>
                <div
                  dangerouslySetInnerHTML={{
                    __html: heading.childMarkdownRemark.html,
                  }}
                />
                <AgendaTypesFilter
                  events={events}
                  currentFilter={typeFilter}
                  setTypeFilter={this.setTypeFilter}
                />
                <AgendaDatesFilter
                  events={events}
                  currentFilter={dateFilter}
                  setDateFilter={this.setDateFilter}
                />
              </div>
            </div>
          </div>
        </div>
        <AgendaEventsList
          events={events}
          dateFilter={dateFilter}
          typeFilter={typeFilter}
        />
      </section>
    );
  }
}

YearlyEventAgenda.propTypes = propTypes;

export default YearlyEventAgenda;
