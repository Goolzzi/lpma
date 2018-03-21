import React from "react";
import PropTypes from "prop-types";
import ScrollAnimation from 'react-animate-on-scroll';
import Waypoint from 'react-waypoint';

import "animate.css/animate.min.css";

class LandingPage extends React.PureComponent{
  constructor(props) {
    super(props);

    this.state =  {
      animationIndex: 0,
      lastScrollPosition: 0,
    }
    this.scrolling = false;
    this.animationClasses = [
      'fadeInDown animated',
      '',
      {
        page: '',
        title: ''
      },
      {
        layer1: '',
        layer2: '',
        layer3: '',
        layer3Inner: '',
        layer4: '',
        layer4Inner: '',
        layer5: ''
      }
    ];
    this.scrollDirection = true;
  }

  componentDidMount() {
    this.wrapper.addEventListener("wheel", this.wheelScroll);
  }

  componentWillUnmount() {
      this.wrapper.removeEventListener("wheel", this.wheelScroll);
  }
  wheelScroll = (event) => {
    if (event.deltaY < 0) {
        this.scrollWindowUp();
    } else {
        this.scrollWindowDown();
    }

  };
  scrollWindowUp = () => {
    if (!this.scrolling && this.state.animationIndex > 0) {
      this.scrolling = true;
      this.scrollDirection = false;
      this.setState({animationIndex: this.state.animationIndex - 1});
      setTimeout(() => {
        this.scrolling = false;
      }, 1000);
    }
  }
  scrollWindowDown = () => {
    if (!this.scrolling && this.state.animationIndex < 10) {
      this.scrolling = true;
      this.scrollDirection = true;
      this.setState({animationIndex: this.state.animationIndex + 1});
      setTimeout(() => {
        this.scrolling = false;
      }, 1000);
    }
  }
  // handleScroll = (event) => {
      
  //     const scrollTop = window.scrollY;
  //     if (this.state.lastScrollPosition > scrollTop) {
  //       this.setState({  direction: false})
  //     } else {
  //       this.setState({ direction: true })
  //     }
  //     this.setState({lastScrollPosition: scrollTop});
      
  //     const animationIndex = this.getAnimationIndex(scrollTop);
  //     console.log(scrollTop, window.innerHeight);
  //     if(scrollTop > wayPoints[4]) {
  //       console.log('%%%%%%')
  //       this.setState({ animation5: 'enter'})
  //     } else if(scrollTop > wayPoints[3]) {
  //       this.setState({
  //         animation4: 'enter'
  //       })
  //     } else if(scrollTop > wayPoints[2]) {
  //       this.setState({
  //         animation1: 'leave', 
  //         animation2: 'leave',
  //         animation3: 'leave',
  //       })
  //     } else if (scrollTop > wayPoints[1]) {
  //       this.setState({
  //         animation1: 'leave',
  //         animation2: 'leave',
  //         animation3: 'enter',
  //         animation4: this.state.direction ? '' : 'hidden'
  //       });
  //     } else if (scrollTop > wayPoints[0]){
  //       this.setState({
  //         animation1: 'leave',
  //         animation2: 'enter',
  //         animation3: '',
  //       })
  //     } else if (scrollTop < wayPoints[0]) {
  //       this.setState({
  //         animation1: 'enter',
  //         animation2: this.state.direction? '' : 'leave'
  //       })
  //     }
      
  // }

  getAnimationClassName(index, direction) {
    if (index === 0) {
      this.animationClasses[0] = 'fadeInDown animated';
      this.animationClasses[1] = direction ? '' : 'fadeOutDown animated';
      this.animationClasses[2].page = '';
      this.animationClasses[2].title = ''; 
    }
    if (index === 1) {
      this.animationClasses[0] = direction ? 'fadeOutUp animated' : '';
      this.animationClasses[1] = 'fadeInUp animated';
      this.animationClasses[2].page = direction ? '' : 'fullPageFadeOutDown';
      this.animationClasses[2].title = direction ? '' : 'cFadeOut'; 
    }
    if (index === 2) {
      this.animationClasses[1] = direction ? 'fadeOut animated' : '';
      this.animationClasses[2].page = 'fullPageFadeInUp';
      this.animationClasses[2].title = 'cFadeIn';
      this.animationClasses[3].layer1 = '';
      this.animationClasses[3].layer2 = '';
      this.animationClasses[3].layer3 = '';
      this.animationClasses[3].layer3Inner = '';
      this.animationClasses[3].layer4 = 'hide';
      this.animationClasses[3].layer4Inner = '';
    }
    if (index === 3) {
      this.animationClasses[2].title = 'cFadeOut';
      this.animationClasses[3].layer1 = direction ? '' : 'rotateTo0';
      this.animationClasses[3].layer2 = direction ? '' : 'hide';
      this.animationClasses[3].layer3 = direction ? '' : 'spinOuterOut';
      this.animationClasses[3].layer3Inner = direction? '' : 'spinInnerOut';
      this.animationClasses[3].layer4 = direction? 'hide' : 'spinOuterOut';
      this.animationClasses[3].layer4Inner = direction? '' : 'spinInnerOut';
      this.animationClasses[3].layer5 = direction? '' : 'hide';
    }
    if (index === 4) {
      this.animationClasses[3].layer1 = 'rotateTo180';
      this.animationClasses[3].layer2 = 'show';
      this.animationClasses[3].layer3 = 'spinOuterIn';
      this.animationClasses[3].layer3Inner = 'spinInnerIn';
      this.animationClasses[3].layer4 = 'spinOuterIn show';
      this.animationClasses[3].layer4Inner = 'spinInnerIn';
      this.animationClasses[3].layer5 = 'show';
    }
    if (index === 5) {
      
    }
    // console.log(animationState)
    // if (animationState === 'enter') {
    //   return classNames[0];
    // } else if (animationState === 'hidden') {
    //   return classNames[1];
    // } else if (animationState === 'leave') {
    //   return classNames[2];
    // }
    // return classNames[3];
  }

  render () {
    this.getAnimationClassName(this.state.animationIndex, this.scrollDirection)
    return (
      <div ref={c => this.wrapper = c}>
        <div id="page_1">
          <div className="overlay-image" />
          <h1 className={`animating-title intro-title ${this.animationClasses[0]}`}>
            A MEMBERSHIP FOR THE <span>EVOLUTION</span> OF THE PROPERTY MANAGEMENT INDUSTRY
          </h1>
          <div>
            <h1 className={`animating-title intro-title-2 ${this.animationClasses[1]}`}>
              FOUR REASONS<br />TO BE AN LPMA MEMBER
            </h1>
            <div className={`reason-bar ${this.animationClasses[1]}`}>
              <div className="bar item-1"></div>
              <div className="bar item-2"></div>
              <div className="bar item-3"></div>
              <div className="bar item-4"></div>
            </div>
            <h4 className={`animating-title bottom-instruction ${this.animationClasses[0]}`}>
              Let’s evolve the industry together. <br />Scroll to find out how.
            </h4>
          </div>
          
        </div>
        <div id="page_2" className={`${this.animationClasses[2].page}`} />

        <h1 className={`animating-title section2-title ${this.animationClasses[2].title}`}>
          80% OF <br /> BUSINESS OWNERS
        </h1>
        <h5 className={`animating-title section2-text ${this.animationClasses[2].title}`}>BELEIVE THAT WORKING HARDER IS THE ONLY WAY TO GROW THEIR BUSINESS</h5>


        
        <div className={`section3-background ${this.animationClasses[3].layer5}`} />
        <div className="full-left">
          <div className={`overlay-spinner ${this.animationClasses[3].layer4}`}/>
        </div>
        <div className="section3-wrapper">
          <div className="right">
            <div className={`overlay-1 ${this.animationClasses[3].layer1}`} />
          </div>
          {/* <div className={`overlay-2 ${this.animationClasses[3].layer2}`}>
          </div> */}
          <div className="left">
            <div className={`overlay-4 ${this.animationClasses[3].layer4}`} />
            <div className={`overlay-3 ${this.animationClasses[3].layer3}`}>
              <div className={`inner  ${this.animationClasses[3].layer3Inner}`} />
            </div>
          </div>
        </div>
        <div cla></div>
      </div>
    );
  }
}
export default LandingPage;