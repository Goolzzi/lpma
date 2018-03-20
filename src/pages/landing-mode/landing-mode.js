import React from "react";
import PropTypes from "prop-types";
import ScrollAnimation from 'react-animate-on-scroll';
import Waypoint from 'react-waypoint';

import "animate.css/animate.min.css";

const wayPoints = [
  220,
  1400
] 
var lastScrollPosition = 0;
class LandingPage extends React.PureComponent{
  state = {
    onLand: true,
    animation1: 'enter',
    animation2: '',
    animation3: '',
    lastScrollPosition: 0,
    direction: false
  }

  getAnimationIndex(scrollTop) {
    for(let index = 0; index < wayPoints.length; index++) {
      if (scrollTop < index * window.innerHeight) {
        return index;
      }
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    console.log(this.state.animation2)
  }

  componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = (event) => {
      
      const scrollTop = window.scrollY;
      if (this.state.lastScrollPosition > scrollTop) {
        this.setState({  direction: false})
      } else {
        this.setState({ direction: true })
      }
      this.setState({lastScrollPosition: scrollTop});
      
      const animationIndex = this.getAnimationIndex(scrollTop);
      console.log(scrollTop, window.innerHeight);
      
      if (scrollTop > wayPoints[1]) {
        this.setState({ prevScrollPosition: scrollTop, animation1: 'leave', animation2: 'leave', animation3: this.state.direction ? 'enter' : 'leave'})
      } else if (scrollTop > wayPoints[0]){
        this.setState({ prevScrollPosition: scrollTop, animation1: 'leave', animation2: 'enter', animation3: ''})
      } else if (scrollTop < wayPoints[0]) {
        this.setState({
          prevScrollPosition: scrollTop,
          animation1: 'enter',
          animation2: this.state.direction? '' : 'leave'
        })
      }
      
  }

  getAnimatinoClassName(animationState, classNames) {
    console.log(animationState)
    if (animationState === 'enter') {
      return classNames[0];
    } else if (animationState === 'hidden') {
      return classNames[1];
    } else if (animationState === 'leave') {
      return classNames[2];
    }
    return classNames[3];
  }

  render () {
    const { scrollTop } = this.state;
    return (
      <div>
        <div id="page_1">
          <div className="overlay-image" />
          <h1 className={`animating-title intro-title ${this.getAnimatinoClassName(this.state.animation1, ['fadeInDown animated','', 'fadeOutUp animated', ''])}`}>
            A MEMBERSHIP FOR THE <span>EVOLUTION</span> OF THE PROPERTY MANAGEMENT INDUSTRY
          </h1>
          <div>
            <h1 className={`animating-title intro-title-2 ${this.getAnimatinoClassName(this.state.animation2, ['fadeInUp animated', 'fadeOutUp animated', 'fadeOutDown animated', ''])}`}>
              FOUR REASONS<br />TO BE AN LPMA MEMBER
            </h1>
            <div className={`reason-bar ${this.getAnimatinoClassName(this.state.animation2, ['fadeInUp animated', 'fadeOutUp animated', 'fadeOutDown animated', ''])}`}>
              <div className="bar item-1"></div>
              <div className="bar item-2"></div>
              <div className="bar item-3"></div>
              <div className="bar item-4"></div>
            </div>
            <h4 className={`animating-title bottom-instruction  ${this.getAnimatinoClassName(this.state.animation1, ['fadeInDown animated','', 'fadeOutUp animated', ''])}`}>
              Let’s evolve the industry together. <br />Scroll to find out how.
            </h4>
          </div>
          
        </div>
        <div id="page_2">
          
        </div>
        <h1 className={`animating-title section2-title ${this.getAnimatinoClassName(this.state.animation3, ['cFadeIn','', 'cFadeOut', ''])}`}>
          80% OF <br /> BUSINESS OWNERS
        </h1>
        <h5 className={`animating-title section2-text ${this.getAnimatinoClassName(this.state.animation3, ['cFadeIn','', 'cFadeOut', ''])}`}>BELEIVE THAT WORKING HARDER IS THE ONLY WAY TO GROW THEIR BUSINESS</h5>
      </div>
    );
  }
}
export default LandingPage;