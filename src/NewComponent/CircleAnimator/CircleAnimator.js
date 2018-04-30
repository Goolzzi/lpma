import React, {Fragment} from "react";
import {CSSTransition, Transition} from "react-transition-group";
import Img from "gatsby-image";
import PropTypes from "prop-types";
import ChapterTitle from "../ChapterTitle";
import Breakpoint from "../../utils/Breakpoint";
const orderName = ["one", "two", "three", "four"];
const imgStyle = order => {
  let width = 40;
  switch (order) {
    case "02":
      width = 43;
      break;
    case "03":
      width = 45;
      break;
    default:
      width = 40;
  }
  return {
    left: `calc(50vw - ${width}vh)`,
    width: `${width}vh`,
  };
};

const transitionStyles = {
  entering: {opacity: 0},
  entered: {opacity: 1},
};
class CircleAnimator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startLeft: false,
    };
  }
  render() {
    const {
      show,
      bgColor,
      brColor,
      order,
      topic,
      desktopImg,
      mobileImage,
    } = this.props;
    const {startLeft} = this.state;
    return (
      <Fragment>
        <Transition in={show} timeout={500}>
          {state => (
            <Fragment>
              <Img
                position="absolute"
                className="img-bg"
                sizes={desktopImg.sizes}
                style={{
                  ...transitionStyles[state],
                  ...imgStyle(order),
                }}
              />
              <Img
                className="mobile-img-bg"
                sizes={mobileImage.sizes}
                style={{
                  ...transitionStyles[state],
                }}
              />
            </Fragment>
          )}
        </Transition>
        <Breakpoint name="desktop">
          <Fragment>
            <div className="circle-full-left">
              <CSSTransition
                in={startLeft}
                classNames="clockwise-left"
                timeout={500}
                unmountOnExit>
                <div className="full-left-spin" style={{background: bgColor}} />
              </CSSTransition>
            </div>
            <div className="circle-animator">
              <div className="right-overlay">
                <CSSTransition
                  in={show}
                  classNames="clockwise-right"
                  timeout={500}
                  onEntered={() => this.setState({startLeft: true})}
                  onExited={() => this.setState({startLeft: false})}
                  unmountOnExit>
                  <div className="right-spin" style={{background: brColor}} />
                </CSSTransition>
              </div>
              <div className="left-overlay">
                <CSSTransition
                  in={startLeft}
                  classNames="clockwise-left"
                  timeout={500}
                  unmountOnExit>
                  <div className="left-spin">
                    <div
                      style={{background: brColor}}
                      className={`inner ${startLeft ? "spinInnerIn" : ""}`}
                    />
                  </div>
                </CSSTransition>
              </div>
            </div>
          </Fragment>
        </Breakpoint>
        <Breakpoint name="phone">
          <Fragment>
            <div className="mobile-left">
              <div
                className={`overlay-spinner ${
                  show ? "rotateTo360 delay-1" : ""
                }`}
                style={{background: brColor}}
              />
            </div>
            <div className="mobile-right">
              <div
                className={`overlay-spinner ${show ? "rotateTo360" : ""}`}
                style={{background: brColor}}
              />
            </div>
          </Fragment>
        </Breakpoint>
        <div className="full-right">
          <CSSTransition
            classNames="fade-up"
            in={show}
            timeout={1500}
            unmountOnExit>
            <ChapterTitle
              order={orderName[parseInt(order) - 1]}
              title={topic}
            />
          </CSSTransition>
        </div>
      </Fragment>
    );
  }
}
CircleAnimator.propTypes = {
  show: PropTypes.bool.isRequired,
};

export default CircleAnimator;
