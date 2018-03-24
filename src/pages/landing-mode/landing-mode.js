import React from "react";
import PropTypes from "prop-types";
import imgPlaceholder from '../../assets/images/NewDesign/bk-placeholder.svg';
import imgThumb from '../../assets/images/NewDesign/img-thumb.svg';
import "animate.css/animate.min.css";

class LandingPage extends React.PureComponent{
  constructor(props) {
    super(props);

    this.state =  {
      animationIndex: 0,
      lastScrollPosition: 0,
    }
    this.scrolling = false;
    this.innerScrolling = false;
    this.animationClasses = [
      'cFadeInDown',
      {
        title: '',
        bar: ''
      },
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
        chapterTitle: ''
      },
      {
        rightSpinner: ''
      },
      '',
      '',
      '',
      '',
      {
        left: '',
        right: '',
        pageTitle: ''
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
    const {top, left, right, bottom, height} = this.tutorWrapper.getBoundingClientRect();
    if (event.pageX > left && event.pageX < right && event.pageY > top && event.pageY < bottom && this.state.animationIndex == 8) {
      if(!this.innerScrolling) {
        if (event.deltaY < 0) {
          if(this.tutorWrapper.scrollTop === 0) {
            this.scrollWindowUp();
          };
          this.innerScrolling = true;
          this.tutorWrapper.scrollTo(0, 0);
          setTimeout(() => {
            this.innerScrolling = false;
          }, 300);
          return false;
        } else {
          if(this.tutorWrapper.scrollTop === this.tutorWrapper.scrollHeight - height) {
            this.scrollWindowDown();
          };
          console.log(this.innerScrolling);
          this.innerScrolling = true;
          this.tutorWrapper.scrollTo(0, this.tutorWrapper.scrollHeight - height);
          setTimeout(() => {
            this.innerScrolling= false;
          }, 300);
          return false;
        }      
      }
    } else {
      if (event.deltaY < 0) {
        this.scrollWindowUp();
      } else {
        this.scrollWindowDown();
      }
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
      this.props.onPageChange(this.state.animationIndex);
    }
  }
  scrollWindowDown = () => {
    if (!this.scrolling && this.state.animationIndex < this.animationClasses.length-1) {
      this.scrolling = true;
      this.scrollDirection = true;
      this.setState({animationIndex: this.state.animationIndex + 1});
      setTimeout(() => {
        this.scrolling = false;
      }, 1000);
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
        this.animationClasses[2].title = ''; 
        break;
      case 1:
        this.animationClasses[0] = direction ? 'cFadeOutUp animated' : '';
        this.animationClasses[1].title = direction ? 'cFadeInUp animation-delay-1_1' : 'cFadeIn';
        this.animationClasses[1].bar = direction ? 'cFadeIn animation-delay-1_1' : 'cFadeIn';
        this.animationClasses[2].page = direction ? '' : 'fullPageFadeOutDown';
        this.animationClasses[2].title = direction ? '' : 'cFadeOut'; 
        break;
      case 2:
        this.animationClasses[1].title = 'cFadeOut';
        this.animationClasses[1].info = 'cFadeOut';
        this.animationClasses[2].page = 'fullPageFadeInUp';
        this.animationClasses[2].title = 'cFadeIn animation-delay-2';
        this.animationClasses[3].layer1 =  direction ? '' : 'rotateTo0 show';
        this.animationClasses[3].layer3 = '';
        this.animationClasses[3].layer3Inner = '';
        this.animationClasses[3].layer4 = 'hide';
        this.animationClasses[3].chapterTitle = direction ? '' : 'cFadeOutDown';
        this.animationClasses[3].layer2 = direction? '' : 'hide';
        break;
      case 3:
        this.animationClasses[2].title = 'cFadeOut';
        this.animationClasses[3].layer1 = 'rotateTo180 show animation-delay-1';
        this.animationClasses[3].layer3 = 'spinOuterIn animation-delay-2';
        this.animationClasses[3].layer3Inner = 'spinInnerIn animation-delay-2';
        this.animationClasses[3].layer4 = 'spinOuterIn show animation-delay-2';
        this.animationClasses[3].layer4Inner = 'spinInnerIn';
        this.animationClasses[3].layer2 = 'cFadeIn animation-delay-2';
        this.animationClasses[3].chapterTitle = 'cFadeInUp animation-delay-2';
        this.animationClasses[4].rightSpinner = direction ? '' : 'spinRightOut';
        this.animationClasses[5] = direction ? '' : 'cFadeOutDown';
        this.animationClasses[6] = '';
        break;
      case 4:
        this.animationClasses[4].rightSpinner = 'spinRightIn animation-delay-1';
        this.animationClasses[3].chapterTitle = 'cFadeOutDown';
        this.animationClasses[5] = 'cFadeInUp animation-delay-2';
        this.animationClasses[6] = direction ? '' : 'cFadeOutDown';
        this.animationClasses[7] = '';
        break;
      case 5:
        this.animationClasses[5] = 'cFadeOutUp';
        this.animationClasses[6] = 'cFadeIn';
        this.animationClasses[7] = direction ? '' : 'cFadeOutDown';
        this.animationClasses[8] = '';
        break;
      case 6:
        this.animationClasses[6] = 'cFadeOutUp';
        this.animationClasses[7] = 'cFadeIn';
        this.animationClasses[8] = direction ? '' : 'cFadeOutDown';
        this.animationClasses[9].left = '';
        this.animationClasses[9].right = '';
        this.animationClasses[9].pageTitle = '';
        break;
      case 7:
        this.animationClasses[7] = 'cFadeOutUp';
        this.animationClasses[8] = direction ? 'cFadeIn' : 'cFadeIn animation-delay-3';
        this.animationClasses[9].left = direction ? '' : 'rotateTo0 animated animation-delay-3';
        this.animationClasses[9].right = direction ? '' : 'rotateTo0 animated animation-delay-1';
        this.animationClasses[9].pageTitle = direction ? '' : 'cFadeOutDown';
        break;
      case 8:
        this.animationClasses[8] = 'cFadeOutUp';
        this.animationClasses[9].left = 'rotateTo180 animation-delay-1';
        this.animationClasses[9].right = 'rotateTo180 animation-delay-2';
        this.animationClasses[9].pageTitle = 'cFadeInUp animation-delay-3';
        break;
    }
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
            <h1 className={`animating-title intro-title-2 ${this.animationClasses[1].title}`}>
              FOUR REASONS<br />TO BE AN LPMA MEMBER
            </h1>
            <div className={`reason-bar ${this.animationClasses[1].bar}`}>
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


        
        <div className={`section3-background ${this.animationClasses[3].layer2}`} />
        <div className="full-left">
          <div className={`overlay-spinner ${this.animationClasses[3].layer4}`}/>
        </div>
        <div className="section3-wrapper">
          <div className="right">
            <div className={`overlay-1 ${this.animationClasses[3].layer1}`} />
          </div>
          <div className="left">
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
          <div className={`tutor-wrapper topic-2 ${this.animationClasses[7]}`}>
            <div className={`wrapper `}>
              <h5>01 / facts not myths</h5>
              <h1><span>25%</span> of industry managed investors don’t think WE DO WHAT WE SAY WE ARE GOING TO DO.</h1>
              <p>To grow you need to break this perception and regain our clients’ trust. The best businesses need to come together to find a new path forward.</p>
              <img src={imgPlaceholder}/>
            </div>
          </div>
          <div ref={c => this.tutor = c} className={`tutor-wrapper topic-3 ${this.animationClasses[8]}`}>
            <div ref={c => this.tutorWrapper = c} className={`wrapper`}>
              <h5>01 / facts not myths</h5>
              <h1>join the <span>largest network</span> of property management thinkers, leaders and practitioners TO BETTER UNDERSTAND THE FACTS.</h1>
              <div className="blog-card">
                <img src={imgThumb} />
                <div className="blog-card-content">
                  <h6 className="headline-text">Headline lorem ipsum</h6>
                  <h6 className="desc-text">A focus on data and insights to help drive change in a business.</h6>
                </div>
              </div>
              <div className="blog-card">
                <img src={imgThumb} />
                <div className="blog-card-content">
                  <h6 className="headline-text">Headline lorem ipsum</h6>
                  <h6 className="desc-text">Integrated growth and business planning tools to help you succeed.</h6>
                </div>
              </div>
              <div className="blog-card">
                <img src={imgThumb} />
                <div className="blog-card-content">
                  <h6 className="headline-text">Headline lorem ipsum</h6>
                  <h6 className="desc-text">The largest team of property management consultants ready to help.</h6>
                </div>
              </div>
              <div className="blog-card">
                <img src={imgThumb} />
                <div className="blog-card-content">
                  <h6 className="headline-text">Headline lorem ipsum</h6>
                  <h6 className="desc-text">Large and small format conferences to challenge and support you.</h6>
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
          <div className="page3-wrapper">
            <div className={`hide ${this.animationClasses[9].pageTitle}`}>
              <h1>more than 75%</h1>
              <p>of all property management businesses do not have a growth plan</p>
            </div>
          </div>
        </div>
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