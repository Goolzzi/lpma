import React from "react";
import {CSSTransition} from "react-transition-group";
import PropTypes from "prop-types";

class LandingSection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      animationIndex: -1,
      direction: 1,
      slide1: "fade-in-down delay-1",
      slide2: "",
    };
  }
  componentDidMount() {
    this.setState({animationIndex: this.props.animationIndex});
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.animationIndex !== nextProps.animationIndex) {
      this.setState(
        {
          animationIndex: nextProps.animationIndex,
          direction: nextProps.direction,
        },
        () =>
          this.getClassName(this.state.animationIndex, this.state.direction),
      );
    }
  }
  getClassName = (index, direction) => {
    switch (index) {
      case 0:
        this.setState({
          slide1: "fade-in-down delay-1",
          slide2: direction ? "" : "fade-out-down",
        });
        break;
      case 1:
        this.setState({
          slide1: direction ? "fade-out-up" : "",
          slide2: "fade-in-up delay-1",
        });
        break;
    }
  };
  render() {
    const {onChooseChapter} = this.props;
    const {animationIndex, slide1, slide2} = this.state;
    return (
      <CSSTransition
        in={animationIndex == 0 || animationIndex == 1}
        timeout={1000}
        classNames="full-page"
        unmountOnExit>
        <div id="landing-section">
          <div className="overlay-image" />
          <div className={`slide-1 ${slide1}`}>
            <h1 className="banner-title">
              A MEMBERSHIP FOR THE <span>EVOLUTION</span> OF THE PROPERTY
              MANAGEMENT INDUSTRY
            </h1>
            <h4 className="scroll-instruction">
              Let’s evolve the industry together. <br />Scroll to find out how.
            </h4>
          </div>
          <div className={`slide-2 ${slide2}`}>
            <h1 className="banner-title">
              FOUR STEPS<br />TO LPMA EVOLUTION
            </h1>
            <div className="step-bar">
              <div
                className="step-item item-1"
                onClick={() => onChooseChapter(1)}>
                <div className="hint">
                  <h5>01.</h5>
                  <p>FACTS NOT MYTHS</p>
                </div>
              </div>
              <div
                className="step-item item-2"
                onClick={() => onChooseChapter(2)}>
                <div className="hint">
                  <h5>02.</h5>
                  <p>BUILD A GROWTH PLAN</p>
                </div>
              </div>
              <div
                className="step-item item-3"
                onClick={() => onChooseChapter(3)}>
                <div className="hint">
                  <h5>03.</h5>
                  <p>GROW MORE THAN YOUR DOORS</p>
                </div>
              </div>
              <div
                className="step-item item-4"
                onClick={() => onChooseChapter(4)}>
                <div className="hint">
                  <h5>04.</h5>
                  <p>FIND STRENGTH IN OUR COMMUNITY</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CSSTransition>
    );
  }
}

LandingSection.propTypes = {
  animationIndex: PropTypes.number.isRequired,
  direction: PropTypes.bool.isRequired,
};
export default LandingSection;
