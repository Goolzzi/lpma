import React from "react";
import PropTypes from "prop-types";

const NavigationItem = ({title, active, onClick}) => (
  <h4 className={`navigation-item ${active ? "active" : ""}`} onClick={onClick}>
    {title}
  </h4>
);
NavigationItem.propTypes = {
  title: PropTypes.string.isRequired,
  active: PropTypes.bool,
  onClick: PropTypes.func,
};
NavigationItem.defaultProps = {
  active: false,
};

export default class DotNavigator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      topicIndex: 0,
    };
  }
  chooseChapter = index => {
    this.setState({topicIndex: index});
    this.props.onChooseChapter(index);
  };
  componentWillReceiveProps(nextProps) {
    if (nextProps.animationIndex < 2) {
      this.setState({topicIndex: 0});
    } else if (nextProps.animationIndex < 6) {
      this.setState({topicIndex: 1});
    } else if (nextProps.animationIndex < 10) {
      this.setState({topicIndex: 2});
    } else if (nextProps.animationIndex < 14) {
      this.setState({topicIndex: 3});
    } else if (nextProps.animationIndex < 18) {
      this.setState({topicIndex: 4});
    } else if (nextProps.animationIndex == 18) {
      this.setState({topicIndex: 5});
    }
    this.forceUpdate();
  }
  render() {
    const {topicIndex} = this.state;
    return (
      <div className="dot-navigator">
        <NavigationItem
          title="introduction"
          onClick={() => this.chooseChapter(0)}
          active={topicIndex === 0}
        />
        {this.props.chapters.map((chapter, i) => (
          <NavigationItem
            key={i}
            title={chapter.node.topic}
            onClick={() => this.chooseChapter(i + 1)}
            active={topicIndex === i + 1}
          />
        ))}
        <NavigationItem
          title="Pricing"
          onClick={() => this.chooseChapter(5)}
          active={topicIndex === 5}
        />
      </div>
    );
  }
}
