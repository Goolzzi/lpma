import React from "react";
import PropTypes from "prop-types";
import imgPlaceholder from '../assets/images/NewDesign/bk-placeholder.svg';
import imgThumb from '../assets/images/NewDesign/img-thumb.svg';

import bkIntro2 from '../assets/images/NewDesign/bk-intro-2.png';
import bkIntro3 from '../assets/images/NewDesign/bk-intro-3.png';
import bkIntro4 from '../assets/images/NewDesign/bk-intro-4.png';
import bkIntro5 from '../assets/images/NewDesign/bk-intro-5.png';

import bkIntro2Mobile from '../assets/images/NewDesign/bk-intro-2-mobile.jpeg';
import bkIntro3Mobile from '../assets/images/NewDesign/bk-intro-3-mobile.jpeg';
import bkIntro4Mobile from '../assets/images/NewDesign/bk-intro-4-mobile.jpeg';
import bkIntro5Mobile from '../assets/images/NewDesign/bk-intro-5-mobile.jpeg';

import imgIntro2_1 from '../assets/images/NewDesign/img-intro-1_1.svg';
import imgIntro2_2 from '../assets/images/NewDesign/img-intro-1_2.svg';
import imgIntro2_3 from '../assets/images/NewDesign/img-intro-1_3.png';
import imgIntro2_4 from '../assets/images/NewDesign/img-intro-1_4.png';

import imgIntro3_1 from '../assets/images/NewDesign/img-intro-3_1.svg';
import imgIntro3_2 from '../assets/images/NewDesign/img-intro-3_2.svg';
import imgIntro3_3 from '../assets/images/NewDesign/img-intro-3_3.png';
import imgIntro3_4 from '../assets/images/NewDesign/img-intro-3_4.png';

import imgIntro4_1 from '../assets/images/NewDesign/img-intro-4_1.svg';
import imgIntro4_2 from '../assets/images/NewDesign/img-intro-4_2.svg';
import imgIntro4_3 from '../assets/images/NewDesign/img-intro-4_3.svg';
import imgIntro4_4 from '../assets/images/NewDesign/img-intro-4_4.svg';



import icTick from '../assets/images/NewDesign/ic-tick.png';
import icArrowDown from '../assets/images/NewDesign/ic-arrow-down.svg';
import "animate.css/animate.min.css";

const initalAnimationClasses = [
  'fadeInDown',
  { title: '', bar: '' },
  { page: '' },
  { background: '', rightSpinner: '', leftInnerSpinner: 'hide', leftSpinner: '', chapterTitle: '', fullLeftSpinner: '', mobileLeftSpinner: '', mobileRightSpinner: '' },
  { rightSpinner: '' },
  '',
  '',
  '',
  '',
  /**
   * Page 3 className starting Index 9
   */
  { left: '', right: ''},
  { background: '', rightSpinner: '', leftInnerSpinner: 'hide', leftSpinner: '', chapterTitle: '', fullLeftSpinner: '', mobileLeftSpinner: '', mobileRightSpinner: '' },
  { rightSpinner: '' },
  '',
  '',
  '',
  '',
  /**
   * Page 4 className starting Index 16
   */
  { left: '', right: ''},
  { background: '', rightSpinner: '', leftInnerSpinner: 'hide', leftSpinner: '', chapterTitle: '', fullLeftSpinner: '', mobileLeftSpinner: '', mobileRightSpinner: '' },
  { rightSpinner: '' },
  '',
  '',
  '',
  '',
  /**
   * Page 5 className starting with Index 23
   */
  { left: '', right: '' },
  { background: '', rightSpinner: '', leftInnerSpinner: 'hide', leftSpinner: '', chapterTitle: '', fullLeftSpinner: '', mobileLeftSpinner: '', mobileRightSpinner: '' },
  { rightSpinner: '' },
  '',
  '',
  '',
  '',
  /**
   *  last pricing form
   */
  { page: '' },
  { form: ''}
];

class LandingPage extends React.PureComponent{
  constructor(props) {
    super(props);

    this.state =  {
      animationIndex: 0,
      lastScrollPosition: 0,
      contactForm: false,
      showPage: props.showPage
    }
    this.scrolling = false;
    this.innerScrolling = false;
    this.animationClasses = JSON.parse(JSON.stringify(initalAnimationClasses));
    this.startY = 0;
    this.moveY = 0;
    this.scrollDirection = true;
  }

  componentDidMount() {
    this.wrapper.addEventListener("wheel", this.wheelScroll);
    this.wrapper.addEventListener("touchstart", this.touchStart);
    this.wrapper.addEventListener("touchmove", this.touchMove);
  }

  componentWillUnmount() {
    this.wrapper.removeEventListener("wheel", this.wheelScroll);
    this.wrapper.removeEventListener("touchstart", this.touchStart);
    this.wrapper.removeEventListener("touchmove", this.touchMove);
  }
  componentWillReceiveProps(nextProps) {    
    if (nextProps.showPage === 'Home') {
      this.animationClasses = JSON.parse(JSON.stringify(initalAnimationClasses));
      this.setState({
        animationIndex: 0,
        contactForm: false,
        showPage: ''
      })
      this.props.updateState({showPage: ''})
    }
  }
  touchStart = ( event ) => {
    this.startY = event.changedTouches[0].clientY;
  }
  touchMove = ( event ) => {
    this.moveY = event.changedTouches[0].clientY;
    if (this.moveY > this.startY) {
      this.scrollWindowUp();
    } else {
      this.scrollWindowDown();
    }
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
      }, 2000);
      this.props.onPageChange(this.state.animationIndex);
    }
  }
  scrollWindowDown = () => {
    if (!this.scrolling && this.state.animationIndex < 23) {
      this.scrolling = true;
      this.scrollDirection = true;
      this.setState({animationIndex: this.state.animationIndex + 1});
      setTimeout(() => {
        this.scrolling = false;
      }, 2000);
      this.props.onPageChange(this.state.animationIndex);
    }
  }

  getAnimationClassName(index, direction) {
    switch (index) {
      case 0:
        this.animationClasses[0] = direction ? 'cFadeInDown': 'cFadeInDown animation-delay-1';
        this.animationClasses[1].title = direction ? '' : 'cFadeOutDown';
        this.animationClasses[1].bar = direction ? '' : 'cFadeOutDown';
        this.animationClasses[2].page = '';
        break;
      case 1:
        this.animationClasses[0] = direction ? 'cFadeOutUp animated' : '';
        this.animationClasses[1].title = direction ? 'cFadeInUp animation-delay-1_1' : 'cFadeIn';
        this.animationClasses[1].bar = direction ? 'cFadeIn animation-delay-1_1' : 'cFadeIn';
        this.animationClasses[2].page = direction ? '' : 'fullPageFadeOutDown';
        this.animationClasses[3].rightSpinner =  direction ? '' : 'rotateTo0 show';
        this.animationClasses[3].leftSpinner = '';
        this.animationClasses[3].leftInnerSpinner = '';
        this.animationClasses[3].fullLeftSpinner = 'hide';
        this.animationClasses[3].chapterTitle = direction ? '' : 'cFadeOutDown';
        this.animationClasses[3].background = direction? '' : 'hide';

        this.animationClasses[3].mobileLeftSpinner = '';
        this.animationClasses[3].mobileRightSpinner = '';
        break;
      case 2:
        this.animationClasses[1].title = 'cFadeOut';
        this.animationClasses[1].info = 'cFadeOut';
        this.animationClasses[2].page = 'fullPageFadeInUp';
        this.animationClasses[3].rightSpinner = 'rotateTo180 show animation-delay-2';
        this.animationClasses[3].leftSpinner = 'spinOuterIn animation-delay-3';
        this.animationClasses[3].leftInnerSpinner = 'spinInnerIn animation-delay-3';
        this.animationClasses[3].fullLeftSpinner = 'spinOuterIn show animation-delay-3';
        this.animationClasses[3].background = 'cFadeIn animation-delay-3';
        this.animationClasses[3].chapterTitle = 'cFadeInUp animation-delay-4';
        this.animationClasses[4].rightSpinner = direction ? '' : 'spinRightOut';
        this.animationClasses[5] = direction ? '' : 'cFadeOutDown';
        this.animationClasses[6] = '';
        this.animationClasses[3].mobileLeftSpinner = 'rotateTo360 show animation-delay-3';
        this.animationClasses[3].mobileRightSpinner = 'rotateTo360 show animation-delay-2';
        break;
      case 3:
        this.animationClasses[4].rightSpinner = 'spinRightIn animation-delay-1';
        this.animationClasses[3].chapterTitle = 'cFadeOutDown';
        this.animationClasses[5] = 'cFadeInUp animation-delay-2';
        this.animationClasses[6] = direction ? '' : 'cFadeOutDown';
        this.animationClasses[7] = '';
        break;
      case 4:
        this.animationClasses[5] = 'cFadeOutUp';
        this.animationClasses[6] = 'cFadeIn animation-delay-1_1';
        this.animationClasses[7] = direction ? '' : 'cFadeOutDown';
        this.animationClasses[9].left = '';
        this.animationClasses[9].right = '';
        break;
      case 5:
        this.animationClasses[6] = 'cFadeOutUp';
        this.animationClasses[7] = direction ? 'cFadeIn animation-delay-1_1' :  'cFadeIn animation-delay-3';
        this.animationClasses[9].left = direction ? '' : 'rotateTo0 animated animation-delay-3';
        this.animationClasses[9].right = direction ? '' : 'rotateTo0 animated animation-delay-1';

        this.animationClasses[10].rightSpinner =  direction ? '' : 'rotateTo0 show';
        this.animationClasses[10].leftSpinner = '';
        this.animationClasses[10].leftInnerSpinner = '';
        this.animationClasses[10].fullLeftSpinner = 'hide';
        this.animationClasses[10].chapterTitle = direction ? '' : 'cFadeOutDown';
        this.animationClasses[10].background = direction? '' : 'hide';

        this.animationClasses[10].mobileLeftSpinner = '';
        this.animationClasses[10].mobileRightSpinner = '';
        break;
      /**
       * Page 3
       */
      case 6:
        this.animationClasses[7] = 'cFadeOutUp';
        this.animationClasses[9].left = 'rotateTo180 animation-delay-1';
        this.animationClasses[9].right = 'rotateTo180 animation-delay-2';
        setTimeout(() => {
          this.animationClasses[10].background = 'cFadeIn animation-delay-2';
          this.animationClasses[10].fullLeftSpinner = 'spinOuterIn show animation-delay-2';
          this.animationClasses[10].rightSpinner = 'rotateTo180 show animation-delay-1';
          this.animationClasses[10].leftSpinner = 'spinOuterIn animation-delay-2';
          this.animationClasses[10].leftInnerSpinner = 'spinInnerIn animation-delay-2';
          this.animationClasses[10].chapterTitle = 'cFadeInUp animation-delay-4';
          this.animationClasses[11].rightSpinner = direction ? '' : 'spinRightOut';
          this.animationClasses[12] = direction ? '' : 'cFadeOutDown';
          this.animationClasses[13] = '';

          this.animationClasses[10].mobileLeftSpinner = 'rotateTo360 show animation-delay-3';
          this.animationClasses[10].mobileRightSpinner = 'rotateTo360 show animation-delay-2';
          this.forceUpdate();
        }, 1000);
        break;
      case 7:
        this.animationClasses[11].rightSpinner = 'spinRightIn animation-delay-1';
        this.animationClasses[10].chapterTitle = 'cFadeOutDown';
        this.animationClasses[12] = 'cFadeInUp animation-delay-2';
        this.animationClasses[13] = direction ? '' : 'cFadeOutDown';
        this.animationClasses[14] = '';
        break;
      case 8:
        this.animationClasses[12] = 'cFadeOutUp';
        this.animationClasses[13] = 'cFadeIn animation-delay-1_1';
        this.animationClasses[14] = direction ? '' : 'cFadeOutDown';
        this.animationClasses[16].left = '';
        this.animationClasses[16].right = '';
        break;
      case 9:
        this.animationClasses[13] = 'cFadeOutUp';
        this.animationClasses[14] = direction ? 'cFadeIn animation-delay-1_1' : 'cFadeIn animation-delay-3';
        this.animationClasses[16].left = direction ? '' : 'rotateTo0 animated animation-delay-3';
        this.animationClasses[16].right = direction ? '' : 'rotateTo0 animated animation-delay-1';

        this.animationClasses[17].rightSpinner =  direction ? '' : 'rotateTo0 show';
        this.animationClasses[17].leftSpinner = '';
        this.animationClasses[17].leftInnerSpinner = '';
        this.animationClasses[17].fullLeftSpinner = 'hide';
        this.animationClasses[17].chapterTitle = direction ? '' : 'cFadeOutDown';
        this.animationClasses[17].background = direction? '' : 'hide';

        this.animationClasses[17].mobileLeftSpinner = '';
        this.animationClasses[17].mobileRightSpinner = '';
        break;
      /**
       * Page 4
       */
      case 10:
        this.animationClasses[15] = 'cFadeOutUp';
        this.animationClasses[16].left = 'rotateTo180 animation-delay-1';
        this.animationClasses[16].right = 'rotateTo180 animation-delay-2';
        setTimeout(() => {
          this.animationClasses[17].background = 'cFadeIn animation-delay-2';
          this.animationClasses[17].fullLeftSpinner = 'spinOuterIn show animation-delay-2';
          this.animationClasses[17].rightSpinner = 'rotateTo180 show animation-delay-1';
          this.animationClasses[17].leftSpinner = 'spinOuterIn animation-delay-2';
          this.animationClasses[17].leftInnerSpinner = 'spinInnerIn animation-delay-2';
          this.animationClasses[17].chapterTitle = 'cFadeInUp animation-delay-4';
          this.animationClasses[18].rightSpinner = direction ? '' : 'spinRightOut';
          this.animationClasses[19] = direction ? '' : 'cFadeOutDown';
          this.animationClasses[20] = '';

          this.animationClasses[17].mobileLeftSpinner = 'rotateTo360 show animation-delay-3';
          this.animationClasses[17].mobileRightSpinner = 'rotateTo360 show animation-delay-2';

          this.forceUpdate();
        }, 1000);

        break;
      case 11:
        this.animationClasses[18].rightSpinner = 'spinRightIn animation-delay-1';
        this.animationClasses[17].chapterTitle = 'cFadeOutDown';
        this.animationClasses[19] = 'cFadeInUp animation-delay-2';
        this.animationClasses[20] = direction ? '' : 'cFadeOutDown';
        this.animationClasses[21] = '';
        break;
      case 12:
        this.animationClasses[19] = 'cFadeOutUp';
        this.animationClasses[20] = 'cFadeIn animation-delay-1_1';
        this.animationClasses[21] = direction ? '' : 'cFadeOutDown';
        this.animationClasses[23].left = '';
        this.animationClasses[23].right = '';
        break;
      case 13:
        this.animationClasses[20] = 'cFadeOutUp';
        this.animationClasses[21] = direction ? 'cFadeIn animation-delay-1_1' : 'cFadeIn animation-delay-3';
        this.animationClasses[23].left = direction ? '' : 'rotateTo0 animated animation-delay-3';
        this.animationClasses[23].right = direction ? '' : 'rotateTo0 animated animation-delay-1';

        this.animationClasses[24].rightSpinner =  direction ? '' : 'rotateTo0 show';
        this.animationClasses[24].leftSpinner = '';
        this.animationClasses[24].leftInnerSpinner = '';
        this.animationClasses[24].fullLeftSpinner = 'hide';
        this.animationClasses[24].chapterTitle = direction ? '' : 'cFadeOutDown';
        this.animationClasses[24].background = direction? '' : 'hide';

        this.animationClasses[24].mobileLeftSpinner = '';
        this.animationClasses[24].mobileRightSpinner = '';
        break;
      /**
       * Page 5
       */
      case 14:
        this.animationClasses[22] = 'cFadeOutUp';
        this.animationClasses[23].left = 'rotateTo180 animation-delay-1';
        this.animationClasses[23].right = 'rotateTo180 animation-delay-2';     
        setTimeout(() => {
          this.animationClasses[24].background = 'cFadeIn animation-delay-2';
          this.animationClasses[24].fullLeftSpinner = 'spinOuterIn show animation-delay-2';
          this.animationClasses[24].rightSpinner = 'rotateTo180 show animation-delay-1';
          this.animationClasses[24].leftSpinner = 'spinOuterIn animation-delay-2';
          this.animationClasses[24].leftInnerSpinner = 'spinInnerIn animation-delay-2';
          this.animationClasses[24].chapterTitle = 'cFadeInUp animation-delay-4';
          this.animationClasses[25].rightSpinner = direction ? '' : 'spinRightOut';
          this.animationClasses[26] = direction ? '' : 'cFadeOutDown';
          this.animationClasses[27] = '';

          this.animationClasses[24].mobileLeftSpinner = 'rotateTo360 show animation-delay-3';
          this.animationClasses[24].mobileRightSpinner = 'rotateTo360 show animation-delay-2';

          this.forceUpdate();
        }, 1000)   
        break;
      case 15:
        this.animationClasses[25].rightSpinner = 'spinRightIn animation-delay-1';
        this.animationClasses[24].chapterTitle = 'cFadeOutDown';
        this.animationClasses[26] = 'cFadeInUp animation-delay-2';
        this.animationClasses[27] = direction ? '' : 'cFadeOutDown';
        this.animationClasses[28] = '';
        break;
      case 16:
        this.animationClasses[26] = 'cFadeOutUp';
        this.animationClasses[27] = 'cFadeIn animation-delay-1_1';
        this.animationClasses[28] = direction ? '' : 'cFadeOutDown';
        this.animationClasses[29] = '';
        break;
      case 17:
        this.animationClasses[27] = 'cFadeOutUp';
        this.animationClasses[28] = 'cFadeIn animation-delay-1_1';
        this.animationClasses[30].page = direction ? '' : 'fullPageFadeOutDown';
        break;
      case 18:
        this.animationClasses[30].page = 'fullPageFadeInUp';
        break;
    }
  }
  joinUs = () => {
    this.setState({ contactForm: true});
    this.animationClasses[31].form = 'cFadeIn';
  }
  render () {
    this.getAnimationClassName(this.state.animationIndex, this.scrollDirection)
    if (this.props.showPage === 'Pricing') {
      this.animationClasses[30].page = 'fullPageFadeInUp animation-delay-2';
    } else if (this.props.showPage === 'Join'){
      this.setState({ contactForm: true })
    }
    return (
      <div ref={c => this.wrapper = c}>
        <div id="page_1">
          <div className="overlay-image" />
          <div className={`slide-1 ${this.animationClasses[0]}`}>
            <h1 className="banner-title">
              A MEMBERSHIP FOR THE <span>EVOLUTION</span> OF THE PROPERTY MANAGEMENT INDUSTRY
            </h1>
            <h4 className="scroll-instruction">
              Let’s evolve the industry together. <br />Scroll to find out how.
            </h4>
          </div>
          <div className={`slide-2 ${this.animationClasses[1].title}`}>
            <h1 className="banner-title">
              FOUR REASONS<br />TO BE AN LPMA MEMBER
            </h1>
            <div className="reason-bar">
              <div className="bar item-1"></div>
              <div className="bar item-2"></div>
              <div className="bar item-3"></div>
              <div className="bar item-4"></div>
            </div>
          </div>
          <img className="scroll-instruction-arrow" src={icArrowDown} />
        </div>
        <div id="page_2" className={`${this.animationClasses[2].page}`}>
          <div className="slide-2">
            <div className={`background-image ${this.animationClasses[3].background}`} />
            <div className="full-left">
              <div className={`overlay-spinner ${this.animationClasses[3].fullLeftSpinner}`}/>
            </div>
            <div className="mobile-left">
              <div className={`overlay-spinner ${this.animationClasses[3].mobileLeftSpinner}`}></div>
            </div>
            <div className="mobile-right">
              <div className={`overlay-spinner ${this.animationClasses[3].mobileRightSpinner}`}></div>
            </div>
            <div className="animating-layer">
              <div className="right">
                <div className={`overlay-1 ${this.animationClasses[3].rightSpinner}`} />
              </div>
              <div className="left">
                <div className={`overlay-3 ${this.animationClasses[3].leftSpinner}`}>
                  <div className={`inner  ${this.animationClasses[3].leftInnerSpinner}`} />
                </div>
              </div>
            </div>
            <div className="full-right">
              <div className={`chapter-text-view ${this.animationClasses[3].chapterTitle}`}>
                <h3>Chapter one:</h3>
                <h1>Facts not<br/>myths</h1>
              </div>
              <div className={`overlay-spinner ${this.animationClasses[4].rightSpinner}`} />
              <div className={`tutor-wrapper ${this.animationClasses[5]}`}>
                <div className="wrapper">
                  <h5>01 / facts not myths</h5>
                  <h1><span>78%</span> of investors would swap property managers today if they were confident your company had a better offer.</h1>
                  <p>It's not just about how hard you work, it's about how unique your offer is.  Our studies show that Investors are looking for differentiation and are more likely to take their business elsewhere. The landscape is more competitive than ever and now is your chance to better understand the truth about what your clients want.</p>
                  <p>Learn how to develop a growth plan that counts, learn how to grow and defend your business.</p>
                </div>
              </div>
              <div className={`tutor-wrapper ${this.animationClasses[6]}`}>
                <div className="wrapper">
                  <h5>01 / facts not myths</h5>
                  <h1><span>25%</span> of industry managed investors don’t think WE DO WHAT WE SAY WE ARE GOING TO DO.</h1>
                  <p>To grow you need to break this perception and regain our clients’ trust. The best businesses need to come together to find a new path forward.</p>
                </div>
              </div>
              <div className={`tutor-wrapper ${this.animationClasses[7]}`}>
                <div className="wrapper">
                  <h5>01 / facts not myths</h5>
                  <h1>join the <span>largest network</span> of property management thinkers, leaders and practitioners TO BETTER UNDERSTAND THE FACTS.</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="page_3">
          <div className="left">
            <div className={`spinner ${this.animationClasses[9].left}`}></div>
          </div>
          <div className="right">
            <div className={`spinner ${this.animationClasses[9].right}`}></div>
          </div>
          <div className="slide-2">
            <div className={`background-image ${this.animationClasses[10].background}`} />
            <div className="full-left">
              <div className={`overlay-spinner ${this.animationClasses[10].fullLeftSpinner}`}/>
            </div>
            <div className="mobile-left">
              <div className={`overlay-spinner ${this.animationClasses[10].mobileLeftSpinner}`}></div>
            </div>
            <div className="mobile-right">
              <div className={`overlay-spinner ${this.animationClasses[10].mobileRightSpinner}`}></div>
            </div>
            <div className="animating-layer">
              <div className="right">
                <div className={`overlay-1 ${this.animationClasses[10].rightSpinner}`} />
              </div>
              <div className="left">
                <div className={`overlay-3 ${this.animationClasses[10].leftSpinner}`}>
                  <div className={`inner  ${this.animationClasses[10].leftInnerSpinner}`} />
                </div>
              </div>
            </div>
            <div className="full-right">
              <div className={`chapter-text-view ${this.animationClasses[10].chapterTitle}`}>
                <h3>Chapter two:</h3>
                <h1>Build a<br/>growth plan</h1>
              </div>
              <div className={`overlay-spinner ${this.animationClasses[11].rightSpinner}`} />
              <div className={`tutor-wrapper ${this.animationClasses[12]}`}>
                <div className="wrapper">
                  <h5>02 / build a growth plan</h5>
                  <h1>a growth plan starts with <span>understanding</span> your market.</h1>
                  <p>Each market has its own dynamics and own potential. No two markets are alike. Data can help you understand yours.</p>
                </div>
              </div>
              <div className={`tutor-wrapper ${this.animationClasses[13]}`}>
                <div className="wrapper">
                  <h5>02 / build a growth plan</h5>
                  <h1>the lpma growth model</h1>
                  <p>The LPMA growth model identifies the opportunities in your market and helps identify areas where you can focus on for maximum growth.</p>
                  <p>Use your growth plan to direct your team and define financial strategies to make sure your growth ambitions are supported.</p>
                </div>
              </div>
              <div className={`tutor-wrapper ${this.animationClasses[14]}`}>
                <div className="wrapper">
                  <h5>02 / build a growth plan</h5>
                  <h1>any growth strategy needs a retention strategy. INCLUDING THIS IN YOUR <span>GROWTH PLAN</span> WILL GIVE YOU THE BEST OPPORTUNITY TO SUCCEED.</h1>
                  <p>Without planning, every staff turnover will cost you 40 investors.</p>
                  <p>Developing and supporting your team to both drive performance and increase staff retention is key to any growth strategy.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="page_4">
          <div className="left">
            <div className={`spinner ${this.animationClasses[16].left}`}></div>
          </div>
          <div className="right">
            <div className={`spinner ${this.animationClasses[16].right}`}></div>
          </div>
          <div className="slide-2">
            <div className={`background-image ${this.animationClasses[17].background}`} />
            <div className="full-left">
              <div className={`overlay-spinner ${this.animationClasses[17].fullLeftSpinner}`}/>
            </div>
            <div className="mobile-left">
              <div className={`overlay-spinner ${this.animationClasses[17].mobileLeftSpinner}`}></div>
            </div>
            <div className="mobile-right">
              <div className={`overlay-spinner ${this.animationClasses[17].mobileRightSpinner}`}></div>
            </div>
            <div className="animating-layer">
              <div className="right">
                <div className={`overlay-1 ${this.animationClasses[17].rightSpinner}`} />
              </div>
              <div className="left">
                <div className={`overlay-3 ${this.animationClasses[17].leftSpinner}`}>
                  <div className={`inner ${this.animationClasses[17].leftInnerSpinner}`} />
                </div>
              </div>
            </div>
            <div className="full-right">
              <div className={`chapter-text-view ${this.animationClasses[17].chapterTitle}`}>
                <h3>Chapter three:</h3>
                <h1>grow more <br/>than your<br/>doors</h1>
              </div>
              <div className={`overlay-spinner ${this.animationClasses[18].rightSpinner}`} />
              <div className={`tutor-wrapper topic-1 ${this.animationClasses[19]}`}>
                <div className="wrapper">
                  <h5>03 / grow more than your doors</h5>
                  <h1>ACCESS TO AILO INSIGHTS WILL HELP YOU <span>TRACK YOUR PERFORMANCE</span> IN REAL TIME.</h1>
                </div>
              </div>
              <div className={`tutor-wrapper topic-2 ${this.animationClasses[20]}`}>
                <div className="wrapper">
                  <h5>03 / grow more than your doors</h5>
                  <h1>SUCCESS IS NOT POSSIBLE WITHOUT THE <span>RIGHT TEAM</span></h1>
                  <p>The right team has a high-performing culture and is supported by the best resources.</p>
                  <p>LPMA membership gives you and your team the tools to track and improve your team’s performance, and support the winning culture. </p>
                </div>
              </div>
              <div className={`tutor-wrapper topic-3 ${this.animationClasses[21]}`}>
                <div className="wrapper">
                  <h5>03 / grow more than your doors</h5>
                  <h1>we’ll support YOU IN DEVELOPING KEY MULTIPLE <span>CHANNELS OF GROWTH</span></h1>
                  <p>LPMA members are supported in building a full business plan, covering growth goals, team design, culture and financial benchmarking.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="page_5">
          <div className="left">
            <div className={`spinner ${this.animationClasses[23].left}`}></div>
          </div>
          <div className="right">
            <div className={`spinner ${this.animationClasses[23].right}`}></div>
          </div>
          <div className="slide-2">
            <div className={`background-image ${this.animationClasses[24].background}`} />
            <div className="full-left">
              <div className={`overlay-spinner ${this.animationClasses[24].fullLeftSpinner}`}/>
            </div>
            <div className="mobile-left">
              <div className={`overlay-spinner ${this.animationClasses[24].mobileLeftSpinner}`}></div>
            </div>
            <div className="mobile-right">
              <div className={`overlay-spinner ${this.animationClasses[24].mobileRightSpinner}`}></div>
            </div>
            <div className="animating-layer">
              <div className="right">
                <div className={`overlay-1 ${this.animationClasses[24].rightSpinner}`} />
              </div>
              <div className="left">
                <div className={`overlay-3 ${this.animationClasses[24].leftSpinner}`}>
                  <div className={`inner  ${this.animationClasses[24].leftInnerSpinner}`} />
                </div>
              </div>
            </div>
            <div className="full-right">
              <div className={`chapter-text-view ${this.animationClasses[24].chapterTitle}`}>
                <h3>Chapter four:</h3>
                <h1>find<br />strength<br />in our<br />community</h1>
              </div>
              <div className={`overlay-spinner ${this.animationClasses[25].rightSpinner}`} />
              <div className={`tutor-wrapper ${this.animationClasses[26]}`}>
                <div className="wrapper">
                  <h5>04 / find strength in our community</h5>
                  <h1>LPMA operates the <span>largest</span> series of networking events in the industry.</h1>
                  <p>At the local level we facilitate regular industry meetups, all the way through to large industry conferences with leading speakers and networking functions. All of this is supported by a large online community of professionals all seeking to learn from and support each other. </p>
                </div>
              </div>
              <div className={`tutor-wrapper ${this.animationClasses[27]}`}>
                <div className="wrapper">
                  <h5>04 / find strength in our community</h5>
                  <h1>everyone needs a little help from time to time to drive <span>real change</span> in a business.</h1>
                  <p>LPMA works with some of the best consultants in our industry. They are fully trained on our frameworks and resources and are ready to help.</p>
                </div>
              </div>
              <div className={`tutor-wrapper ${this.animationClasses[28]}`}>
                <div className="wrapper">
                  <h5>04 / find strength in our community</h5>
                  <h1><span>recognition</span> is good NOT JUST because you deserve it — IT ALSO helps you grow your business.</h1>
                  <p>LPMA runs an industry-leading awards &amp; recognition program that recognises excellence and achievement in executing on your growth and business plans. </p>
                </div>
              </div>
            </div>
          </div>
          <div className={`slide-3 ${this.animationClasses[30].page}`}>
            <div>
              <h1>Flat Monthly Pricing</h1>
              <div className="pricing-box">
                <div className="pricing-text">
                  <div className="price"><span>$</span>249</div>
                  <div className="desc">
                    <span>AUD</span>
                    <span>Per month</span>
                  </div>
                </div>
                <p>For those who are looking for the full suite of tools to grow and evolve their business</p>
                <div className="terms-container">
                  <div className="terms-item">
                    <img src={icTick} /><p>Unlimited access to letters, checklists, forms and procedure templates</p>
                  </div>
                  <div className="terms-item">
                    <img src={icTick} /><p>Access to LPMA Foundry, our information hub comprised of resources, articles and case studies</p>
                  </div>
                  <div className="terms-item">
                    <img src={icTick} /><p>Free copies of Building Blocks, Connecting the Dots and Numbers Game </p>
                  </div>
                  <div className="terms-item">
                    <img src={icTick} /><p>Invitiation to the LPMA Group Forum</p>
                  </div>
                  <div className="terms-item">
                    <img src={icTick} /><p>Free tickets to the LPMA Premium Connection Day and LPMA Round Table</p>
                  </div>
                  <div className="terms-item">
                    <img src={icTick} /><p>A 40% discount to all LPMA Events</p>
                  </div>
                  <div className="terms-item">
                    <img src={icTick} /><p>Access to the LPMA Research Lab</p>
                  </div>
                  <div className="terms-item">
                  <img src={icTick} /><p>Access to our digital consulting tools and frameworks</p>
                  </div>
                </div>
                <div className="submit-btn" onClick={() => this.joinUs()}>JOIN LPMA</div>
              </div>
            </div>
          </div>
        </div>
        {
          this.state.contactForm && <div id="page_6">
            <div className="overlay-image" />
            <div className="join-form">
              <h1>Join the property MANAGEMENT industry evolution. <span>Join LPMA</span>.</h1>
              <div className="field">
                <div className="control">
                  <input className="input is-small" type="text" placeholder="Full name*" />
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <input className="input is-small" type="text" placeholder="Email Address*" />
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <input className="input is-small" type="text" placeholder="Your work phone*" />
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <input className="input is-small" type="text" placeholder="Your company*" />
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <div className="select is-small">
                    <select>
                      <option>Your region*</option>
                      <option>Australia</option>
                      <option>New Zealand</option>
                      <option>United States</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <a className="button">JOIN LPMA</a>
                </div>
              </div>
            </div>
          
          </div>
        }

      </div>
    );
  }
}
LandingPage.propTypes = {
  onPageChange: PropTypes.func
}
LandingPage.defaultProps = {
  onPageChange: (pageNumber) => { console.log(pageNumber) }
}
export default LandingPage;