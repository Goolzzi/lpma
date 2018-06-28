import React, {Fragment} from "react";
import {
  CSSTransition,
  TransitionGroup,
  Transition,
} from "react-transition-group";
import PropTypes from "prop-types";
import CircleAnimator from "../CircleAnimator";
import Breakpoint from "../../utils/Breakpoint";

const FullPageSlide = ({
  children,
  animationIndex,
  minIndex,
  maxIndex,
  onReady,
  onExited,
}) => (
  <CSSTransition
    in={animationIndex >= minIndex && animationIndex <= maxIndex}
    classNames="chapter"
    timeout={1000}
    onEntered={() => onReady("entered")}
    onExited={() => onExited()}
    unmountOnExit>
    {children}
  </CSSTransition>
);
class FullPageCircle extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      startRight: false,
    };
  }
  render() {
    const {animationIndex, minIndex, maxIndex, bgColor} = this.props;
    return (
      <Transition
        in={animationIndex >= minIndex && animationIndex <= maxIndex}
        timeout={1000}
        onExited={this.props.onExited}
        unmountOnExit>
        {state => (
          <Fragment>
            <div className="full-left">
              <CSSTransition
                in={state == "entered"}
                classNames="clockwise-right"
                timeout={500}
                onEntered={() => this.setState({startRight: true})}
                onExited={() => this.setState({startRight: false})}
                unmountOnExit>
                <div className="spinner" style={{background: bgColor}} />
              </CSSTransition>
            </div>
            <div className="full-right page-transform">
              <CSSTransition
                in={this.state.startRight}
                classNames="clockwise-right"
                timeout={500}
                onEntered={() => this.props.onReady(state)}
                unmountOnExit>
                <div className="spinner" style={{background: bgColor}} />
              </CSSTransition>
            </div>
            {this.props.children}
          </Fragment>
        )}
      </Transition>
    );
  }
}
class ChapterSection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      animationIndex: this.props.animationIndex,
      direction: true,
      ready: false,
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
  onReady = state => {
    this.setState({ready: state == "entered"});
  };
  onExited = () => {
    this.setState({ready: false});
  };

  render() {
    const {
      minIndex,
      maxIndex,
      children,
      initial,
      chapter: {
        node: {order, bgColor, brColor, topic, circleImage, mobileCircleImage},
      },
      hiphop,
    } = this.props;
    const {animationIndex, ready} = this.state;
    const Container = initial ? FullPageSlide : FullPageCircle;
    return (
      <Container
        animationIndex={animationIndex}
        minIndex={minIndex}
        maxIndex={maxIndex}
        onExited={this.onExited}
        bgColor={bgColor}
        onReady={this.onReady}>
        {initial ? (
          <div style={{background: bgColor}} className="chapter-wrapper">
            <Transition in={ready} timeout={0} unmountOnExit>
              {state => (
                <Fragment>
                  <CircleAnimator
                    show={state == "entered"}
                    desktopUrl={this.props.desktopUrl}
                    showTitle={animationIndex == minIndex}
                    order={order}
                    topic={topic}
                    desktopImg={circleImage}
                    mobileImage={mobileCircleImage}
                    bgColor={bgColor}
                    brColor={brColor}
                  />
                  <div className="full-right">
                    <Breakpoint name="desktop">
                      <CSSTransition
                        in={
                          animationIndex > minIndex &&
                          animationIndex <= maxIndex
                        }
                        classNames={{
                          enter: "clockwise-right-enter",
                          enterActive: hiphop
                            ? "clockwise-right-enter-active transition-delay-2"
                            : "clockwise-right-enter-active",
                          enterDone: "clockwise-right-enter-done",
                          exit: "clockwise-right-exit",
                          exitActive: "clockwise-right-exit-active",
                          exitDone: "clockwise-right-exit-done",
                        }}
                        timeout={2000}
                        unmountOnExit>
                        {state => (
                          <TransitionGroup className="full-right-spin">
                            {React.Children.map(children, child => {
                              return React.cloneElement(child, {
                                state: state,
                                tintColor: brColor,
                              });
                            })}
                          </TransitionGroup>
                        )}
                      </CSSTransition>
                    </Breakpoint>
                    <Breakpoint name="phone">
                      <CSSTransition
                        in={
                          animationIndex > minIndex && animationIndex < maxIndex
                        }
                        classNames="fade-up"
                        timeout={2000}
                        unmountOnExit>
                        {state => (
                          <TransitionGroup className="full-right-spin">
                            {React.Children.map(children, child => {
                              return React.cloneElement(child, {
                                state: state,
                                tintColor: brColor,
                              });
                            })}
                          </TransitionGroup>
                        )}
                      </CSSTransition>
                    </Breakpoint>
                  </div>
                </Fragment>
              )}
            </Transition>
          </div>
        ) : (
          <Transition in={ready} timeout={0} unmountOnExit>
            {state => (
              <div style={{background: bgColor}} className="chapter-wrapper">
                <CircleAnimator
                  show={state == "entered" && ready}
                  order={order}
                  topic={topic}
                  desktopImg={circleImage}
                  mobileImage={mobileCircleImage}
                  bgColor={bgColor}
                  brColor={brColor}
                />
                <div className="full-right">
                  <Breakpoint name="desktop">
                    <CSSTransition
                      in={
                        animationIndex > minIndex && animationIndex <= maxIndex
                      }
                      classNames={{
                        enter: "clockwise-right-enter",
                        enterActive: hiphop
                          ? "clockwise-right-enter-active transition-delay-2"
                          : "clockwise-right-enter-active",
                        enterDone: "clockwise-right-enter-done",
                        exit: "clockwise-right-exit",
                        exitActive: "clockwise-right-exit-active",
                        exitDone: "clockwise-right-exit-done",
                      }}
                      timeout={2000}
                      unmountOnExit>
                      {state => (
                        <TransitionGroup className="full-right-spin">
                          {React.Children.map(children, child => {
                            return React.cloneElement(child, {
                              state: state,
                              tintColor: brColor,
                            });
                          })}
                        </TransitionGroup>
                      )}
                    </CSSTransition>
                  </Breakpoint>
                  <Breakpoint name="phone">
                    <CSSTransition
                      in={
                        animationIndex > minIndex && animationIndex < maxIndex
                      }
                      classNames="fade-up"
                      timeout={2000}
                      unmountOnExit>
                      {state => (
                        <TransitionGroup className="full-right-spin">
                          {React.Children.map(children, child => {
                            return React.cloneElement(child, {
                              state: state,
                              tintColor: brColor,
                            });
                          })}
                        </TransitionGroup>
                      )}
                    </CSSTransition>
                  </Breakpoint>
                </div>
              </div>
            )}
          </Transition>
        )}
      </Container>
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
