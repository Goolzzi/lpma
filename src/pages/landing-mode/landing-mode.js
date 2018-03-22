import React from "react";
import PropTypes from "prop-types";
import imgPlaceholder from '../../assets/images/NewDesign/bk-placeholder.svg';

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
        layer5: '',
        chapterTitle: ''
      },
      {
        rightSpinner: ''
      },
      '',
      ''
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
    if (!this.scrolling && this.state.animationIndex < this.animationClasses.length) {
      this.scrolling = true;
      this.scrollDirection = true;
      this.setState({animationIndex: this.state.animationIndex + 1});
      setTimeout(() => {
        this.scrolling = false;
      }, 1000);
    }
  }

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
      this.animationClasses[3].chapterTitle = '';
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
      this.animationClasses[3].chapterTitle = direction ? '' : 'cFadeOutUp'
      this.animationClasses[4].rightSpinner = '';
      this.animationClasses[5] = '';
    }
    if (index === 4) {
      this.animationClasses[3].layer1 = 'rotateTo180';
      this.animationClasses[3].layer2 = 'show';
      this.animationClasses[3].layer3 = 'spinOuterIn';
      this.animationClasses[3].layer3Inner = 'spinInnerIn';
      this.animationClasses[3].layer4 = 'spinOuterIn show';
      this.animationClasses[3].layer4Inner = 'spinInnerIn';
      this.animationClasses[3].layer5 = 'show';
      this.animationClasses[3].chapterTitle = 'cFadeInUp animation-delay-2';
      this.animationClasses[4].rightSpinner = direction ? '' : 'spinRightOut';
      this.animationClasses[5] = direction ? '' : 'cFadeOutDown';
      this.animationClasses[6] = '';
      
    }
    if (index === 5) {
      this.animationClasses[4].rightSpinner = 'spinRightIn animation-delay-1';
      this.animationClasses[3].chapterTitle = 'cFadeOutDown';
      this.animationClasses[5] = 'cFadeInUp animation-delay-2';
      this.animationClasses[6] = direction ? '' : 'cFadeOutDown';
    }
    if (index === 6) {
      this.animationClasses[5] = 'cFadeOutUp';
      this.animationClasses[6] = 'cFadeIn';
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
        <div className="full-right">
          <div className={`chapter-text-view ${this.animationClasses[3].chapterTitle}`}>
            <h3>Chapter one:</h3>
            <h1>Facts not<br/>myths</h1>
          </div>
          <div className={`overlay-spinner ${this.animationClasses[4].rightSpinner}`} />
          <div className={`tutor-wrapper topic-1 ${this.animationClasses[5]}`}>
            <div className={`wrapper `}>
              <h5>01 / facts not myths</h5>
              <h1>over half of all property management businesses <span>stop growing</span> after five years.</h1>
              <p>What works in one phase of your business won’t get you to the next phase. Don’t limit your growth by failing to grow your potential.</p>
            </div>
          </div>
          <div className={`tutor-wrapper topic-2 ${this.animationClasses[6]}`}>
            <div className={`wrapper `}>
              <h5>01 / facts not myths</h5>
              <h1><span>78%</span> of investors would swap property managers today if they were confident your company had a better offer.</h1>
              <p>It's not just about how hard you work, it's about how unique your offer is.  Our studies show that Investors are looking for differentiation and are more likely to take their business elsewhere. The landscape is more competitive than ever and now is your chance to better understand the truth about what your clients want.</p>
              <p>Learn how to develop a growth plan that counts, learn how to grow and defend your business.</p>
              <img src={imgPlaceholder}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default LandingPage;