import React, {Component} from "react";
import PropTypes from "prop-types";
import YearlyEventSpeaker from "../YearlyEventSpeaker";
import "./styles.scss";

const renderSpeakers = (speakers, sliceIndex) =>
  speakers
    .slice(0, sliceIndex)
    .map(speaker => <YearlyEventSpeaker key={speaker.id} speaker={speaker} />);

const propTypes = {
  node: PropTypes.shape({
    title: PropTypes.string.isRequired,
    speakers: PropTypes.array.isRequired,
    seeMoreButton: PropTypes.object.isRequired,
    heading: PropTypes.object.isRequired,
  }),
};

class YearlyEventSpeakers extends Component {
  state = {
    isCollapsed: true,
  };

  toggleCollapse = () => {
    this.setState(state => ({
      isCollapsed: !state.isCollapsed,
    }));
  };

  render() {
    const {node: {title, speakers, heading}} = this.props;
    const {isCollapsed} = this.state;
    const sliceIndex = isCollapsed ? 9 : speakers.length;
    const buttonText = isCollapsed ? "See More Speakers" : "Collapse";
    return (
      <section className="section lpma2018-our-speakers">
        <div className="container is-fluid">
          <div className="columns">
            <div className="column is-12">
              <div className="has-text-centered">
                <h2>{title}</h2>
                <div
                  dangerouslySetInnerHTML={{
                    __html: heading.childMarkdownRemark.html,
                  }}
                />
              </div>
            </div>
          </div>
          <div className="columns is-multiline">
            {renderSpeakers(speakers, sliceIndex)}
          </div>
          <div className="columns">
            <div className="column is-12">
              <div className="has-text-centered">
                <button
                  onClick={this.toggleCollapse}
                  className="btn secondary with-radius-5 smaller-text">
                  {buttonText}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

YearlyEventSpeakers.propTypes = propTypes;

export default YearlyEventSpeakers;
