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
            <div className="reason-bar">
              <div className="bar item-1" />
              <div className="bar item-2" />
              <div className="bar item-3" />
              <div className="bar item-4" />
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
