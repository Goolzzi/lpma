import React, {Fragment} from "react";
import {CSSTransition} from "react-transition-group";
import PropTypes from "prop-types";

class LandingSection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      animationIndex: -1,
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
        });
      } else {
        this.setState({
          animationIndex: nextProps.animationIndex,
        });
      }
    }
  }
  render() {
    const {animationIndex} = this.state;
    return (
      <CSSTransition
        in={animationIndex == 0 || animationIndex == 1}
        timeout={1000}
        classNames="full-page"
        unmountOnExit>
        {state => (
          <div id="landing-section">
            <div className="overlay-image" />
            <Fragment>
              <CSSTransition
                in={state === "entered" && animationIndex == 0}
                classNames="fade-up"
                timeout={2000}
                unmountOnExit>
                <div className="slide-1">
                  <h1 className="banner-title">
                    A MEMBERSHIP FOR THE <span>EVOLUTION</span> OF THE PROPERTY
                    MANAGEMENT INDUSTRY
                  </h1>
                  <h4 className="scroll-instruction">
                    Let’s evolve the industry together. <br />Scroll to find out
                    how.
                  </h4>
                </div>
              </CSSTransition>
              <CSSTransition
                in={state == "entered" && animationIndex == 1}
                timeout={2000}
                classNames="fade-up"
                unmountOnExit>
                <div className="slide-2">
                  <h1 className="banner-title">
                    FOUR STEPS<br />TO LPMA EVOLUTION
                  </h1>
                  <div className="reason-bar">
                    <div className="bar item-1" />
                    <div className="bar item-2" />
                    <div className="bar item-3" />
                    <div className="bar item-4" />
                  </div>
                </div>
              </CSSTransition>
            </Fragment>
          </div>
        )}
      </CSSTransition>
    );
  }
}

LandingSection.propTypes = {
  animationIndex: PropTypes.number.isRequired,
};
export default LandingSection;
