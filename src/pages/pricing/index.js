import React, {Component} from "react";
import styled, {css} from "styled-components";
import {rgba} from "polished";
import {find} from "lodash";
import {navigateTo} from "gatsby-link";
import {CSSTransition} from "react-transition-group";

import arrowDown from "../../assets/images/icon-down-arrow.svg";

import {capeCod, mantis, green} from "../../styles/colors";
import {media} from "../../styles/utils";
import {bgIcon} from "../../styles/global";
import {data} from "../../data/data";

import Slider from "../../components/Slider";
import Switch from "../../components/Switch";
import Submit from "../../components/Submit";

class Pricing extends Component {
  state = {
    duration: "annual",
    sliderValue: 1,
    activePlans: [true, false, false],
    featuresVisible: false,
    totalPrice: 0,
    selectOption: "",
    selectError: false,
    activeFeatures: [],
  };

  renderDurationSwitcher = () => {
    return (
      <Switch
        labelLeft="Monthly"
        labelRight="Annual"
        value={this.state.duration}
        onSwitchChange={this.onSwitchChange}
      />
    );
  };

  onSwitchChange = value => {
    this.setState({
      duration: value,
    });
  };

  renderSlider = () => {
    const {sliderValue} = this.state;

    return (
      <SliderWrapper>
        <Heading>{data.sliderHeading}</Heading>
        <Slider
          min={data.sliderRange[0]}
          max={data.sliderRange[1]}
          defaultValue={sliderValue}
          onSliderChange={this.onScaleSliderChange}
        />
      </SliderWrapper>
    );
  };

  onScaleSliderChange = value => {
    this.setState({
      sliderValue: value,
    });
  };

  renderAnnualFeatures = plan => {
    const {sliderValue, duration} = this.state;

    if (plan && plan.annualFeatures && duration == "annual") {
      return (
        <Features annual={true}>
          <FeatureTitle>Yearly pricing membership perks</FeatureTitle>

          {plan.annualFeatures.map((item, i) => {
            const variant = find(item.variants, function(o) {
              return o.range[0] <= sliderValue && o.range[1] >= sliderValue;
            });

            if (variant) {
              return (
                <Feature key={i}>
                  <Dot />
                  {variant.text}
                </Feature>
              );
            }
          })}
        </Features>
      );
    }
  };

  renderFeatures = plan => {
    const {sliderValue} = this.state;

    return (
      <Features>
        {plan &&
          plan.features.map((item, i) => {
            const variant = find(item.variants, function(o) {
              return o.range[0] <= sliderValue && o.range[1] >= sliderValue;
            });

            if (variant) {
              return (
                <Feature key={i}>
                  <Dot />
                  {variant.text}
                </Feature>
              );
            }
          })}
      </Features>
    );
  };

  renderPlan = (plan, i) => {
    const {activePlans, featuresVisible, activeFeatures} = this.state;

    return (
      <Plan
        key={i}
        active={activePlans[i] ? true : false}
        onClick={() => this.togglePlan(i)}>
        <ClickWrapper>
          <Heading>{plan.heading}</Heading>

          <PricingWrapper>
            <Price>${this.calculatePricing(plan)}</Price>
            / month
          </PricingWrapper>

          <Subheading>{plan.subheading}</Subheading>
          <Description>{plan.description}</Description>

          <FeatureWrapper
            active={(activeFeatures[i] ? true : false) || featuresVisible}>
            {this.renderFeatures(plan)}
            {this.renderAnnualFeatures(plan)}
          </FeatureWrapper>
        </ClickWrapper>

        <ShowFeatures onClick={() => this.toggleFeatures(i)}>
          <Label>
            {activeFeatures[i] ? "Collapse Features" : "Show Features"}
          </Label>
          <Expander>{activeFeatures[i] ? "–" : "+"}</Expander>
        </ShowFeatures>
      </Plan>
    );
  };

  calculatePricing = plan => {
    const {sliderValue} = this.state;

    const price = find(plan.pricing, function(o) {
      return o.range[0] <= sliderValue && o.range[1] >= sliderValue;
    });

    return price ? price.monthly : 0;
  };

  calculateTotalPrice = () => {
    const {activePlans} = this.state;

    let price = 0;

    activePlans.forEach((elm, index) => {
      if (elm) {
        const plan = data.plans[index];
        price = price + this.calculatePricing(plan);
      }
    });

    // return price
    return `$${price}`;
  };

  togglePlan = i => {
    const plans = this.state.activePlans;
    plans[i] = !plans[i];
    // if (plans[i] && i !== 0) {
    //   plans[i] = !plans[i];
    // } else {
    //   plans[i] = true;
    // }

    this.setState({
      activePlans: plans,
    });
  };

  toggleFeatures = i => {
    // Toggle specific plan feature if index supplied (otherwise toggle all)
    //eslint-disable-next-line
    console.log("toggleFeatures", i);

    if (typeof i == "number") {
      const activeFeatures = this.state.activeFeatures;

      if (activeFeatures[i]) {
        activeFeatures[i] = !activeFeatures[i];
      } else {
        activeFeatures[i] = true;
      }
      //eslint-disable-next-line
      console.log(activeFeatures);

      this.setState({
        activeFeatures: activeFeatures,
      });
    } else {
      this.setState({
        featuresVisible: !this.state.featuresVisible,
      });
    }
  };

  onSelectChange = value => {
    const {selectError} = this.state;

    this.setState({
      selectOption: value.label,
      selectError: selectError ? false : selectError,
    });
  };

  handleSubmit = () => {
    navigateTo("/contact");
  };

  toggleIntercom = () => {
    if (typeof Intercom !== undefined) {
      //eslint-disable-next-line
      Intercom("showNewMessage");
    }
  };

  handleSpeakOption = option => {
    if (option.link) {
      window.open(option.link, "_newtab");
    } else if (option.callback) {
      option.callback();
    }
  };

  renderSpeakWithUs = () => {
    const options = [
      {value: "phone", label: "+61 29 146 0050", link: "tel:+61291460050"},
      {
        value: "intercom",
        label: "Speak with us now",
        callback: this.toggleIntercom,
      },
      {value: "email", label: "Email Us", link: "mailto:hello@lpma.com"},
    ];

    return (
      <SpeakWithUsWrapper>
        <SpeakSelect>
          <SpeakDefault>
            Speak With Us
            <Arrow />
          </SpeakDefault>
          <SpeakDropdown>
            {options.map((option, i) => {
              return (
                <SpeakOption
                  key={i}
                  onClick={() => this.handleSpeakOption(option)}>
                  {option.label}
                </SpeakOption>
              );
            })}
          </SpeakDropdown>
        </SpeakSelect>
      </SpeakWithUsWrapper>
    );
  };

  render() {
    const {featuresVisible, sliderValue} = this.state;
    const {startAni} = this.props;

    return (
      <CSSTransition
        in={startAni}
        timeout={1000}
        classNames="pricing"
        unmountOnExit>
        <Wrapper>
          <Container>
            <Top>
              <Heading>Pricing</Heading>
              {this.renderDurationSwitcher()}
              {this.renderSlider()}
            </Top>

            {/* Plans */}

            <PlanWrapper>
              <Plans>
                {data.plans.map((item, i) => {
                  return this.renderPlan(item, i);
                })}
              </Plans>

              <CompareFeatures onClick={() => this.toggleFeatures()}>
                <Label>
                  {featuresVisible ? "Compare Features" : "Collapse Features"}
                </Label>
                <Expander>{featuresVisible ? "–" : "+"}</Expander>
              </CompareFeatures>

              <Total>
                {sliderValue >= 1200 ? (
                  <Price>Contact Us</Price>
                ) : (
                  <React.Fragment>
                    <LabelLeft>Total</LabelLeft>
                    <Price>{this.calculateTotalPrice()}</Price>
                    <LabelRight>AUD/month</LabelRight>
                  </React.Fragment>
                )}
              </Total>
            </PlanWrapper>

            {/* Join */}

            <Join>
              <JoinButton
                label={"Join Now"}
                handleSubmit={this.handleSubmit}
                theme={"mantis"}
              />

              {this.renderSpeakWithUs()}
            </Join>
          </Container>
        </Wrapper>
      </CSSTransition>
    );
  }
}

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: ${capeCod};
  padding-bottom: 177px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  max-width: 1400px;
  padding: 0 40px;

  ${media.phone`
        padding: 0 20px;
    `};
`;

const Heading = styled.div`
  font-family: "DomaineSansMedium";
  text-transform: uppercase;
`;

const Subheading = styled.div`
  font-family: "DomaineSansMedium";
`;

const Description = styled.div`
  font-family: "DomaineSansLight";
`;

const Label = styled.div``;

const Price = styled.div``;

const Top = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 140px;

  > ${Heading} {
    font-size: 40px;
    font-weight: 500;
    line-height: 56px;
    letter-spacing: -2.5px;
    color: white;
    padding-bottom: 80px;

    ${media.tablet`
            padding-bottom: 75px;
        `} ${media.phone`
            font-size: 32px;
            line-height: 36px;
            letter-spacing: -1px;
            padding-bottom: 40px;
        `};
  }

  ${media.tablet`
        width: 100%;
    `} ${media.phone`
        padding-top: 110px;
    `};
`;

const SliderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 64px;
  max-width: 779px;
  width: 100%;

  > ${Heading} {
    font-size: 18px;
    font-weight: 500;
    line-height: 34px;
    letter-spacing: -0.3px;
    color: white;

    ${media.tablet`
            text-align: center;
            max-width: 508px;
        `} ${media.phone`
            font-size: 18px;
            font-weight: 500;
            line-height: 28px;
            letter-spacing: -0.6px;
        `};
  }

  /* Slider */

  > :last-child {
    width: 100%;
    margin-top: 31px;
  }

  ${media.tablet`
        max-width: 100%;
        padding-top: 73px;
    `};
`;

const PlanWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 64px;

  ${media.tablet`
        margin-top: 55px; 
    `};
`;

const Plans = styled.div`
  display: flex;

  ${media.tablet`
        flex-direction: column;
    `};
`;
const ClickWrapper = styled.div``;
const PricingWrapper = styled.div``;

const Plan = styled.div`
    padding: 67px 60px 84px;
    background: #f2f2f2;
    border-top: 8px solid transparent;
    transition: all 0.15s ease;
    box-sizing: border-box;
    cursor: pointer;

    &:not(:last-child) {
        margin-right: 2px;
    }

    ${Heading} {
        font-size: 32px;
        line-height: 36px;
        letter-spacing: -1px;
        word-spacing: 1000px;        
    }

    ${Subheading} {
        margin-top: 64px;
        font-size: 18px;
    }

    ${PricingWrapper} {
        display: flex;
        align-items: flex-end;
        margin-top: 32px;
        
        font-family: 'DomaineSansLight';
        font-size: 24px;
        font-weight: 300;
        line-height: 34px;
        user-select: none;
    }

    ${Price} {
        font-family: 'DomaineSansMedium';
        color: ${mantis};
        font-size: 56px;
        line-height: 56px;
    }

    ${Description} {
        margin-top: 22px;
        font-size: 18px;
        line-height: 28px;
        letter-spacing: -0.3px;
    }

    ${props => {
      if (props.active)
        return css`
          background: white;
          border-top: 8px solid #70bf54;
        `;
    }}

    ${media.tablet`
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        position: relative;
        padding-bottom: calc(64px + 80px); 

        ${ClickWrapper} {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
        }

        ${Heading} {
            word-spacing: normal;
        }

        &:not(:last-child) {
            margin-bottom: 2px;
        }
    `}

    ${media.phone`
        padding: 60px 28px 48px;
        padding-bottom: calc(48px + 64px); 

        ${Heading} {
            font-size: 24px;
            line-height: 28px;
        }

        ${PricingWrapper} {
            font-size: 18px;
            line-height: 28px;
        }

        ${Price} {
            font-size: 32px;
            line-height: 36px;
            margin-right: 5px;
        }

        ${Subheading},
        ${Description} {
            font-size: 14px;
            line-height: 22px;
            letter-spacing: -0.3px;
        }
    `}  
`;

const FeatureWrapper = styled.div`
  display: ${props => (props.active ? "flex" : "none")};
  flex-direction: column;
`;

const Features = styled.div`
  margin-top: ${props => (props.annual ? "48px" : "56px")};
`;

const Feature = styled.div`
  display: flex;
  font-family: "DomaineSansLight";
  font-size: 14px;
  font-weight: 300;
  line-height: 22px;
  letter-spacing: -0.3px;

  &:not(:last-child) {
    margin-bottom: 16px;
  }

  ${media.tablet`
        text-align: center;
    `} ${media.phone`
        text-align: left;
    `};
`;

const FeatureTitle = styled.div`
  font-family: "DomaineSansMedium";
  font-size: 14px;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: -0.3px;
  margin-bottom: 24px;
  text-transform: uppercase;
`;

const Dot = styled.div`
  height: 4px;
  width: 4px;
  border-radius: 50%;
  background: ${green};
  margin-right: 10px;
  transform: translateY(10px);
  flex: 0 1 4px;
  min-width: 4px;
`;

// Compare Features

const CompareFeatures = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 80px;
  padding: 0 60px;
  background: white;

  margin-top: 2px;

  ${Label} {
    font-family: "DomaineSansMedium";
    font-size: 18px;
    line-height: 28px;
    letter-spacing: -0.3px;
    text-transform: uppercase;
  }

  user-select: none;
  cursor: pointer;

  /* Hover */

  transition: 0.15s opacity ease;

  &:hover {
    opacity: 0.8;
  }

  ${media.tablet`
        display: none;
    `};
`;

// Show Features (per plan – tablet)

const ShowFeatures = CompareFeatures.extend`
  display: none;

  ${media.tablet`
        display: flex;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        border-top: 1px solid ${capeCod};
        padding: 0 32px;
    `} ${media.phone`
        height: 64px;

        ${Label} {
            font-size: 14px;
            line-height: 22px;
            letter-spacing: -0.3px;
        }
    `};
`;

// Expander

const Expander = styled.div`
  display: flex;
  color: black;
  font-family: "DomaineSansMedium";
  font-size: 28px;

  &:not(:last-child) {
    margin-right: 12px;
  }
`;

const LabelLeft = styled.div`
  font-size: 24px;
  line-height: 1.42;
  letter-spacing: -0.6px;
  color: white;
  text-transform: uppercase;
`;

const LabelRight = styled.div`
  font-size: 24px;
  line-height: 1.42;
  letter-spacing: -0.6px;
  color: white;
`;

const Total = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 50px;

  ${LabelLeft} {
    font-family: "DomaineSansMedium";
    padding-right: 15px;
  }

  ${LabelRight} {
    font-family: "DomaineSansLight";
    padding-left: 15px;
  }

  ${Price} {
    color: ${mantis};
    font-family: "DomaineSansMedium";
    font-size: 56px;
    letter-spacing: -2.5px;
    line-height: 1;
  }

  ${media.phone`
        align-items: flex-end;

        ${LabelLeft},
        ${LabelRight} {
            font-size: 18px;
            line-height: 28px;
            letter-spacing: -0.6px;
        }

        ${LabelLeft} { 
            padding-right: 8px;
        }
        
        ${LabelRight} { 
            padding-left: 8px;
        }

        ${Price} {
            font-size: 32px;
            line-height: 36px;
            letter-spacing: -1px;
        }
    `};
`;

const Join = styled.div`
  margin-top: 85px;
  width: 560px;

  ${media.tablet`
        width: 100%;
    `} ${media.phone`
        margin-top: 50px;
    `};
`;

const JoinButton = styled(Submit)`
  height: 56px;
  margin-bottom: 24px;

  font-family: "DomaineSansMedium";
  font-size: 18px;
  line-height: 1.56;
  letter-spacing: -0.3px;
  text-transform: uppercase;

  ${media.phone`
        height: 64px;
    `};
`;

const SpeakDropdown = styled.div`
  position: absolute;
  left: 0;
  top: 54px;
  right: 0;
  border-radius: 4px;
  overflow: hidden;
  border-top-left-radius: 0;
  border-top-right-radius: 0;

  opacity: 0;
  pointer-events: none;

  transition: opacity 0.25s ease;
`;

const SpeakOption = styled.a`
  background: white;
  border-top: 1px solid ${rgba("black", 0.2)};
  cursor: pointer;
  transition: all 0.15s ease;

  &:hover {
    background: ${green};
    color: white !important;
  }
`;

const Arrow = styled.div`
  background-image: url(${arrowDown});
  ${bgIcon} height: 8px;
  width: 16px;
`;

const SpeakSelect = styled.div`
  position: relative;
  background: white;
  border-radius: 4px;
  margin-bottom: 24px;
`;

const SpeakDefault = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
`;

const SpeakWithUsWrapper = styled.div`
  width: 100%;

  ${SpeakOption}, ${SpeakDefault} {
    display: flex;
    align-items: center;
    padding: 0 24px;
    height: 56px;

    font-size: 18px;
    line-height: 28px;
    letter-spacing: -0.3px;
    font-family: "DomaineSansLight";
    color: ${capeCod};
  }

  &:hover {
    ${SpeakDropdown} {
      opacity: 1;
      pointer-events: all;
    }
  }
`;

export default Pricing;
