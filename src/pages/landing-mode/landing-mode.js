import React from "react";
import PropTypes from "prop-types";
import ScrollAnimation from 'react-animate-on-scroll';
import Waypoint from 'react-waypoint';

import "animate.css/animate.min.css";

 
class LandingPage extends React.PureComponent{
  state = {
    onLand: true,
    animation1: true,
    animation2: false,
    animation3: false,
  }

  // componentDidMount() {
  //   window.addEventListener('scroll', this.handleScroll);
  // }

  // componentWillUnmount() {
  //     window.removeEventListener('scroll', this.handleScroll);
  // }

  // handleScroll = (event) => {
  //     let scrollTop = window.scrollY;

  //     if (scrollTop < window.innerHeight / 2) {
  //       this.setState({ animation1: true, animation2: false })
  //     } else if (scrollTop > window.innerHeight / 2)
  //     this.setState({
  //       transform: itemTranslate
  //     });
  // }

  onLeave = props => {
    this.setState({ animation1: false, animation2: true, onLand: false })
    console.log(props);
  }

  render () {
    const { scrollTop } = this.state;
    return (
      <div>
        <div id="page_1">
          <div className="overlay-image" />
          <div style={{position: 'absolute', top: '50vh'}}>
            <Waypoint
              onEnter={()=>this.setState({ animation1: true, animation2: false })}
              onLeave={this.onLeave}
            />
          </div>
          <h1 className={`intro-title ${this.state.animation1 ? 'fadeInDown animated' : 'fadeOutUp animated'}`}>A MEMBERSHIP FOR THE <span>EVOLUTION</span> OF THE PROPERTY MANAGEMENT INDUSTRY</h1>
          <div className="into-title-2">
            <h1 className={`intro-title next ${this.state.animation2 ? 'fadeInUp animated' : (!this.state.onLand ? 'fadeOutUp animated' : '')}`}>
              FOUR REASONS<br />TO BE AN LPMA MEMBER
            </h1>
            <div className={`reason-bar ${this.state.animation2 ? 'fadeInUp animated' : (!this.state.onLand ? 'fadeOutUp animated' : '')}`}>
              <div className="bar item-1"></div>
              <div className="bar item-2"></div>
              <div className="bar item-3"></div>
              <div className="bar item-4"></div>
            </div>
            <h4 className={`bottom-text  ${this.state.animation2 ? 'fadeInUp animated' : (!this.state.onLand ? 'fadeOutUp animated' : '')}`}>
              Let’s evolve the industry together. <br />Scroll to find out how.
            </h4>
          </div>
          
        </div>
        <div id="page_2">
          
        </div>
      </div>
    );
  }
}
export default LandingPage;