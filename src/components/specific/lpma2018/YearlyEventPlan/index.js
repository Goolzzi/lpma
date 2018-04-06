import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import "./styles.scss";

const propTypes = {
  node: PropTypes.shape({
    days: PropTypes.array,
  }),
};

const YearlyEventPlan = ({node: {days}}) => (
  <section className="section lpma2018-columns">
    <div className="container">
      <div className="columns is-multiline">
        {days
          .sort((a, b) => {
            const firstDate = new Date(a.date);
            const secondDate = new Date(b.date);
            return firstDate - secondDate;
          })
          .map(({id, title, date, description}) => (
            <div key={id} className="column is-4">
              <h3>{title}</h3>
              <p className="meta">{moment(date).format("MMMM D, YYYY")}</p>
              <div
                dangerouslySetInnerHTML={{
                  __html: description.childMarkdownRemark.html,
                }}
              />
            </div>
          ))}
      </div>
    </div>
  </section>
);

YearlyEventPlan.propTypes = propTypes;

export default YearlyEventPlan;
