import React from "react";
import {CSSTransition} from "react-transition-group";
import PropTypes from "prop-types";
import styled from "styled-components";

const BannerTitle = styled.div`
  &&& {
    p {
      margin: 0 auto;
      max-width: 60vw;
      color: #fff;
      font-family: "DomaineSansMedium";
      font-size: 4.5em;
      text-align: center;
      letter-spacing: -0.03em;
      line-height: 1em;
      span {
        color: #6ebf56;
      }
      @media screen and (max-width: $xl-width) {
        font-size: 3em;
      }
    }
  }
`;
const BannerTitle1 = BannerTitle.extend`
  p {
    width: 100%;
  }
`;
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
    const {onChooseChapter, content, chapters} = this.props;
    const {title1, title2} = content[0].node;
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
            <BannerTitle
              dangerouslySetInnerHTML={{
                __html: title1.childMarkdownRemark.html,
              }}
            />
            <h4 className="scroll-instruction">
              Let’s evolve the industry together. <br />Scroll to find out how.
            </h4>
          </div>
          <div className={`slide-2 ${slide2}`}>
            <BannerTitle1
              dangerouslySetInnerHTML={{
                __html: title2.childMarkdownRemark.html,
              }}
            />
            <div className="step-bar">
              {chapters.map((chapter, i) => (
                <div
                  key={i}
                  className="step-item"
                  style={{borderColor: chapter.node.bgColor}}
                  onClick={() => onChooseChapter(i + 1)}>
                  <div className="hint">
                    <h5>{chapter.node.order}.</h5>
                    <p>{chapter.node.topic}</p>
                  </div>
                </div>
              ))}
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
