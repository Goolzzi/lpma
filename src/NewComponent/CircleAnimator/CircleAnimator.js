import React, {Fragment} from "react";
import {CSSTransition, Transition} from "react-transition-group";
import PropTypes from "prop-types";
import ChapterTitle from "../ChapterTitle";

const transitionStyles = {
  entering: {opacity: 0},
  entered: {opacity: 1},
};
const backgroundStyle = url => ({
  backgroundImage: `url(${url})`,
});
class CircleAnimator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startLeft: false,
    };
  }
  render() {
    const {show, desktopUrl, showTitle} = this.props;
    const {startLeft} = this.state;
    return (
      <Fragment>
        <Transition in={show} timeout={500}>
          {state => (
            <div
              className="img-bk"
              style={{
                ...transitionStyles[state],
                ...backgroundStyle(desktopUrl),
              }}
            />
          )}
        </Transition>
        <div className="circle-full-left">
          <CSSTransition
            in={startLeft}
            classNames="clockwise-left"
            timeout={500}
            unmountOnExit>
            <div className="full-left-spin" />
          </CSSTransition>
        </div>
        <div className="circle-animator">
          <div className="right-overlay">
            <CSSTransition
              in={show}
              classNames="clockwise-right"
              timeout={500}
              onEntered={() => this.setState({startLeft: true})}
              unmountOnExit>
              <div className="right-spin" />
            </CSSTransition>
          </div>
          <div className="left-overlay">
            <CSSTransition
              in={startLeft}
              classNames="clockwise-left"
              timeout={500}
              unmountOnExit>
              <div className="left-spin">
                <div className={`inner ${startLeft ? "spinInnerIn" : ""}`} />
              </div>
            </CSSTransition>
          </div>
        </div>
        <div className="full-right">
          <CSSTransition
            classNames="fade-up"
            in={startLeft && showTitle}
            timeout={2000}
            unmountOnExit>
            <ChapterTitle order="one" title="Facts not myths" />
          </CSSTransition>
        </div>
      </Fragment>
    );
  }
}
CircleAnimator.propTypes = {
  show: PropTypes.bool.isRequired,
  desktopUrl: PropTypes.string.isRequired,
  showTitle: PropTypes.bool.isRequired,
};

export default CircleAnimator;
