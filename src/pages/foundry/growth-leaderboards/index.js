import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import moment from "moment";
import BreadCrumb from "../../../components/BreadCrumb";
import Ranking from "../../../components/specific/foundry/Ranking";
import {foundryCrumb, leaderboardsCrumb} from "../../../../gatsby/constants";
import "./styles.scss";

const crumbs = [foundryCrumb, leaderboardsCrumb];

const LeaderBoard = ({
  data: {
    contentfulLeaderboardPageContent: {title, currentDate, nextDate, rankings},
  },
}) => (
  <section className="section level-cards liderboard">
    <BreadCrumb parentPath="/foundry" crumbs={crumbs} />
    <div className="container">
      <div className="columns titles-wrapper">
        <div className="column">
          <h2 className="title is-4">{title}</h2>
        </div>
        <div className="column">
          <Link to="/contact" className="is-size-5">
            Feedback
          </Link>
        </div>
      </div>

      <p>
        For the month of {moment(currentDate).format("MMMM YYYY")} |{" "}
        {moment(nextDate).fromNow("D")} until the next round
      </p>

      <hr />

      {rankings.map(({id, title, description, image, items}) => (
        <Ranking
          key={id}
          title={title}
          description={description}
          image={image}
          items={items}
        />
      ))}
    </div>
  </section>
);

const propTypes = {
  data: PropTypes.object.isRequired,
};

LeaderBoard.propTypes = propTypes;

export default LeaderBoard;

export const pageQuery = graphql`
  query LeaderboardPageQuery {
    contentfulLeaderboardPageContent {
      title
      currentDate
      nextDate
      rankings {
        id
        title
        description
        image {
          resolutions(quality: 100) {
            src
            srcSet
          }
        }
        items {
          id
          agencyName
          location
          percentage
          properties
        }
      }
    }
  }
`;
