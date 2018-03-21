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
    this.animationClasses = ['fadeInDown animated', '', { page: '', title: ''}];
    this.scrollDirection = true;
  }
  getAnimationIndex(scrollTop) {
    for(let index = 0; index < wayPoints.length; index++) {
      if (scrollTop < index * window.innerHeight) {
        return index;
      }
    }
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
      console.log('%%%%%%%%%%%%%%%%%%%%', direction, this.animationClasses[2])
      this.animationClasses[2].page = direction ? '' : 'fullPageFadeOutDown';
      this.animationClasses[2].title = direction ? '' : 'cFadeOut'; 
    }
    if (index === 2) {
      this.animationClasses[1] = direction ? 'fadeOut animated' : '';
      this.animationClasses[2].page = 'fullPageFadeInUp';
      this.animationClasses[2].title = 'cFadeIn'; 
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
        {/* <div className="section3-wrapper">
          <div className={`overlay-1 ${this.getAnimationClassName(this.state.animation4, ['rotateTo180', 'rotateTo0', '', ''])}`}>
          </div>
          <div className={`overlay-2 ${this.getAnimationClassName(this.state.animation4, ['show', 'hide', '', ''])}`}>
          </div>
          <div className={`overlay-3 ${this.getAnimationClassName(this.state.animation5, ['spinOuterIn', 'spinOuterOut', '', ''])}`}>
            <div className={`inner  ${this.getAnimationClassName(this.state.animation5, ['spinInnerIn', 'spinInnerOut', '', ''])}`} />
          </div>
        </div> */}
      </div>
    );
  }
}
export default LandingPage;