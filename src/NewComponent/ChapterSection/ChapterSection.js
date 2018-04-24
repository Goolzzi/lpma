import React from "react";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import PropTypes from "prop-types";
import CircleAnimator from "../CircleAnimator";

class ChapterSection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      animationIndex: this.props.animationIndex,
      direction: true,
    };
  }
  componentDidMount() {
    this.setState({animationIndex: this.props.animationIndex});
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.animationIndex !== nextProps.animationIndex) {
      if (this.props.animationIndex - nextProps.animationIndex > 0) {
        this.setState({
          animationIndex: nextProps.animationIndex,
          direction: false,
        });
      } else {
        this.setState({
          animationIndex: nextProps.animationIndex,
          direction: true,
        });
      }
    }
  }
  render() {
    const {minIndex, maxIndex, children} = this.props;
    const {animationIndex} = this.state;

    return (
      <CSSTransition
        in={animationIndex >= minIndex && animationIndex <= maxIndex}
        classNames="chapter"
        timeout={1000}
        unmountOnExit>
        {state => (
          <div className="chapter-wrapper">
            <CircleAnimator
              show={state == "entered"}
              desktopUrl={this.props.desktopUrl}
              showTitle={animationIndex == minIndex}
            />
            <div className="full-right">
              <CSSTransition
                in={animationIndex > minIndex && animationIndex <= maxIndex}
                classNames="clockwise-right"
                timeout={2000}
                unmountOnExit>
                {state => (
                  <TransitionGroup className="full-right-spin">
                    {React.Children.map(children, child => {
                      return React.cloneElement(child, {state: state});
                    })}
                  </TransitionGroup>
                )}
              </CSSTransition>
            </div>
          </div>
        )}
      </CSSTransition>
    );
  }
}

ChapterSection.propTypes = {
  animationIndex: PropTypes.number.isRequired,
  minIndex: PropTypes.number.isRequired,
  maxIndex: PropTypes.number.isRequired,
  desktopUrl: PropTypes.string.isRequired,
  children: PropTypes.node,
};
export default ChapterSection;
