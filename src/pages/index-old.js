import React from "react";
import PropTypes from "prop-types";
// import {navigateTo} from "gatsby-link";
import LandingSection from "../NewComponent/LandingSection";
import ChapterSection from "../NewComponent/ChapterSection";
import ArticleContent from "../NewComponent/ArticleConent";
import PricingDetail from "./pricing";
// import Footer from "../NewComponent/Footer";
import DotNavigator from "../NewComponent/DotNavigator";

import CHAPTER_DESKTOP_IMG1 from "../assets/images/NewDesign/bk-intro-2.png";

const scrollCTRIndex = [3, 4, 5, 7, 8, 9, 11, 12, 13, 15, 16, 17];

/*eslint-env browser*/

class LandingPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      animationIndex: 0,
      scrollDirection: true,
      contactForm: false,
      showPage: props.showPage,
      scrollHandleClass: "scrollCTROut",
      footerIn: false,
      pricingVisible: false,
      hiphop: false,
      pricingFlag: false,
    };
    this.scrolling = false;
    this.startY = 0;
    this.moveY = 0;
  }

  componentDidMount() {
    this.wrapper.addEventListener("wheel", this.wheelScroll);
    this.wrapper.addEventListener("touchstart", this.touchStart);
    this.wrapper.addEventListener("touchmove", this.touchMove);
    this.pricingWrapper.addEventListener("wheel", this.pricingWheel);
    this.pricingWrapper.addEventListener("touchstart", this.pricingTouchStart);
    this.pricingWrapper.addEventListener("touchmove", this.pricingTouchMove);
  }

  componentWillUnmount() {
    this.wrapper.removeEventListener("wheel", this.wheelScroll);
    this.wrapper.removeEventListener("touchstart", this.touchStart);
    this.wrapper.removeEventListener("touchmove", this.touchMove);
    this.pricingWrapper.removeEventListener("wheel", this.pricingWheel);
    this.pricingWrapper.addEventListener("touchstart", this.pricingTouchStart);
    this.pricingWrapper.addEventListener("touchmove", this.pricingTouchMove);
  }
  pricingWheel = event => {
    if(event.deltaY < 0 && this.pricingWrapper.scrollTop === 0) {
      if(this.state.pricingFlag === true) {
        this.scrollWindowUp();
      }
      setTimeout(() => {
        this.setState({pricingFlag: true})
      }, 1000)

    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.showPage === "Home") {
      this.setState(
        {
          animationIndex: 0,
          contactForm: false,
          showPage: "",
          footerIn: false,
          pricingVisible: false,
          scrollHandleClass: "scrollCTROut",
        },
        () => {
          this.props.updateState({showPage: ""});
          this.props.onPageChange(this.state.animationIndex);
        },
      );
    } else if (nextProps.showPage === "Pricing") {
      this.setState(
        {
          animationIndex: 18,
          showPage: "",
          footerIn: true,
          scrollHandleClass: "hide",
        },
        () => {
          this.props.updateState({showPage: ""});
          this.props.onPageChange(this.state.animationIndex);
        },
      );
    } else if (nextProps.showPage === "Join") {
      this.joinUs();
    }
  }
  pricingTouchStart = event => {
    this.startY = event.changedTouches[0].clientY;
  };
  pricingTouchMove = event => {
    this.moveY = event.changedTouches[0].clientY;
    if (this.moveY > this.startY && this.pricingWrapper.scrollTop === 0) {
      if(this.state.pricingFlag === true) {
        this.scrollWindowUp();
      }
      setTimeout(() => {
        this.setState({pricingFlag: true})
      }, 1000)

    }
  };
  touchStart = event => {
    if(this.state.animationIndex !== 18) {
      this.startY = event.changedTouches[0].clientY;
    }
  };
  touchMove = event => {
    if(this.state.animationIndex !== 18) {
      this.setState({pricingFlag: false})
      this.moveY = event.changedTouches[0].clientY;
      if (this.moveY > this.startY) {
        this.scrollWindowUp();
      } else {
        this.scrollWindowDown();
      }
    }
  };
  wheelScroll = event => {
    if(this.state.animationIndex !== 18) {
      this.setState({pricingFlag: false})
      if (event.deltaY < 0) {
        this.scrollWindowUp();
      } else {
        this.scrollWindowDown();
      }
    }
  };
  scrollWindowUp = () => {
    if (
      !this.scrolling &&
      this.state.animationIndex > 0
    ) {
      this.scrolling = true;
      this.setState(
        {
          animationIndex: this.state.animationIndex - 1,
          scrollDirection: false,
          hiphop: false,
        },
        () => {
          this.setState({
            scrollHandleClass:
              scrollCTRIndex.indexOf(this.state.animationIndex) != -1
                ? "scrollCTRIn"
                : "scrollCTROut",
          });
          this.props.onPageChange(this.state.animationIndex);
        },
      );
      setTimeout(() => {
        this.scrolling = false;
      }, 2000);
    }
  };
  scrollWindowDown = () => {
    if (!this.scrolling && this.state.animationIndex < 18) {
      this.scrolling = true;
      this.setState(
        {
          animationIndex: this.state.animationIndex + 1,
          scrollDirection: true,
          hiphop: false,
        },
        () => {
          this.setState({
            scrollHandleClass:
              scrollCTRIndex.indexOf(this.state.animationIndex) != -1
                ? "scrollCTRIn"
                : "scrollCTROut",
          });
          this.props.onPageChange(this.state.animationIndex);
        },
      );
      setTimeout(() => {
        this.scrolling = false;
      }, 2000);
    }
  };
  joinUs = () => {
    this.setState({
      contactForm: true,
      scrollHandleClass: "hide",
      footerIn: true,
    });
  };
  onChooseChapter = index => {
    switch (index) {
      case 0:
        this.setState({animationIndex: 0, hiphop: true, pricingVisible: false});
        break;
      case 1:
        this.setState({animationIndex: 2, hiphop: true, pricingVisible: false});
        break;
      case 2:
        this.setState({animationIndex: 6, hiphop: true, pricingVisible: false});
        break;
      case 3:
        this.setState({
          animationIndex: 10,
          hiphop: true,
          pricingVisible: false,
        });
        break;
      case 4:
        this.setState({
          animationIndex: 14,
          hiphop: true,
          pricingVisible: false,
        });
        break;
      case 5:
        this.setState(
          {
            animationIndex: 18,
            hiphop: true,
            pricingVisible: false,
          },
          () => {
            this.props.onPageChange(this.state.animationIndex);
          },
        );

        break;
    }
  };
  render() {
    const {
      animationIndex,
      scrollDirection,
      hiphop,
      pricingVisible,
    } = this.state;
    const {
      allContentfulChapters: {edges: chapters},
      allContentfulLandingIntro: {edges: landingIntro},
    } = this.props.data;
    // if (animationIndex == 18) {
    //   navigateTo("/pricing");
    // }
    return (
      <div ref={c => (this.wrapper = c)} className="landing-page">
        <LandingSection
          animationIndex={animationIndex}
          direction={scrollDirection}
          onChooseChapter={this.onChooseChapter}
          content={landingIntro}
          chapters={chapters}
        />
        {chapters.map((chapter, i) => (
          <ChapterSection
            animationIndex={animationIndex}
            desktopUrl={CHAPTER_DESKTOP_IMG1}
            minIndex={2 + i * 4}
            maxIndex={6 + i * 4}
            key={i}
            initial={i == 0}
            hiphop={hiphop}
            chapter={chapter}>
            {chapter.node.articles.map((article, index) => (
              <ArticleContent
                start={animationIndex == 3 + i * 4 + index}
                direction={scrollDirection}
                key={index}
                initial={index == 0}
                content={article}
                order={chapter.node.order}
                topic={chapter.node.topic}
              />
            ))}
          </ChapterSection>
        ))}
        
        {/* <Footer footerIn={this.state.footerIn} /> */}
        <div className="pricing-section" ref={c=> this.pricingWrapper = c}>
          <PricingDetail
            startAni={this.state.animationIndex === 18 || pricingVisible}
          />
        </div>
        <DotNavigator
          onChooseChapter={this.onChooseChapter}
          animationIndex={animationIndex}
          chapters={chapters}
        />
        <div className="scroll-bar">
          <div
            className={`scroll-control ${this.state.scrollHandleClass}`}
            onClick={this.scrollWindowDown}>
            <i className="fa fa-angle-down" />
          </div>
        </div>
      </div>
    );
  }
}
LandingPage.propTypes = {
  onPageChange: PropTypes.func,
};
LandingPage.defaultProps = {
  onPageChange: pageNumber => {
    //eslint-disable-next-line
    console.log(pageNumber);
  },
};
export default LandingPage;

export const LandingQuery = graphql`
  query LandingPageQuery {
    allContentfulChapters(sort: {fields: [order], order: ASC}) {
      edges {
        node {
          order
          topic
          circleImage {
            sizes(quality: 100, maxWidth: 900) {
              ...GatsbyContentfulSizes
            }
          }
          mobileCircleImage {
            sizes(quality: 100, maxWidth: 900) {
              ...GatsbyContentfulSizes
            }
          }
          bgColor
          brColor
          articles {
            title {
              childMarkdownRemark {
                html
              }
            }
            description {
              childMarkdownRemark {
                html
              }
            }
          }
        }
      }
    }
    allContentfulLandingIntro {
      edges {
        node {
          title1 {
            childMarkdownRemark {
              html
            }
          }
          title2 {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`;
