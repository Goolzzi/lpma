import React, {Component} from "react";
import { connect } from "react-redux";
import styled, {css} from "styled-components";
import {rgba, clearFix, padding} from "polished";
import {find} from "lodash";
import {navigateTo} from "gatsby-link";
import {CSSTransition} from "react-transition-group";
import { VelocityComponent } from 'velocity-react';
import VisibilitySensor from 'react-visibility-sensor'
import moment from 'moment'
import Localised from '../utils/localised';

import arrowDown from "../assets/images/icon-down-arrow.svg";
import playIcon from "../assets/images/home/play-icon.svg";
import background from "../assets/images/home/background.jpg";

import Testimonials from "../templates/homeSections/homeTestimonials"
import Clients from "../templates/homeSections/homeClients"
import Events from "../templates/homeSections/homeEvents"
import Resources from "../templates/homeSections/homeResources"

import { fetchSettings, getSettings, updateSettings } from '../store/settings';

import {capeCod, mantis, green, darkGrey, mako} from "../styles/colors";
import {media, width} from "../styles/utils";

import {bgIcon, bgImage, button, hoverState} from "../styles/global";
import {data} from "../data/front";

import Slider from "../components/Slider";
import Switch from "../components/Switch";
import Submit from "../components/Submit";

class Home extends Component {

    state = {
        featuresSeen: false,
    };

    componentWillMount = () => {
        const { fetchSettings, updateSettings, pathContext } = this.props;
        
        fetchSettings();
        this.updateLocale(pathContext.locale);
    }

    updateLocale = (locale) => {
        const { updateSettings } = this.props; 

        updateSettings({
            locale: locale
        }); 
    }
    
    toggleFeaturesSeen = (visible) => {
        if (visible) {
            this.setState({
                featuresSeen: true
            })
        }
    }

    navigateToSignup = () => {
        navigateTo('join');
    }
    
    renderHero = () => {

        const heroText = new Localised({
            title: {
                au: 'Take the next step.',
                us: 'Text for US people',
                nz: 'Text for NZ people',
            }
        })

        console.log('heroText', heroText.title);

        return (
            <Hero
                image={background}
            >
                <Container>
                    <Title>{heroText.title}</Title>
                    <Description>The community of business leaders supporting each other to take the next step.</Description>
                    <SignupButton
                        onClick={() => this.navigateToSignup()}
                    >
                        Sign Up
                    </SignupButton>
                </Container>
            </Hero>
        )
    }

    renderFeatureIndicators = () => {
        const { featuresSeen } = this.state;

        const features = [
            {
                title: 'Starting up',
                subtitle: 'Bootstrapping',
            },
            {
                title: 'Getting going',
                subtitle: 'Building a team',
            },
            {
                title: 'Growing up',
                subtitle: 'Systems & scale',
            },
            {
                title: 'Breaking out',
                subtitle: `New markets,\n new models`,
            }
        ]

        return features.map((feature, i) => {
            return (
                <VelocityComponent
                    key={i}
                    animation={{ 
                        opacity: featuresSeen ? 1 : 0,
                    }} 
                    delay={i > 0 ? (750 * i) : 0}
                    duration={1000}
                    easing={[0.20, 0.1, 0.25, 1]}
                    display={'flex'}
                >
                    
                    <Feature>
                        <FeatureInfo>
                            <Title>{feature.title}</Title>
                            <Subtitle>{feature.subtitle}</Subtitle>    
                        </FeatureInfo>
                        <FeatureIndicator/>
                    </Feature>

                </VelocityComponent>
            )
        })
    }

    renderFeatures = () => {
        const { settings } = this.props;
         
        return (
            <Features>
                <Container>

                    <SectionHeader>
                        <Title>Learn, share, connect.</Title>
                        <Description>No matter where you are on the journey,  LPMA membership helps you take your next step</Description>
                    </SectionHeader>

                    <VisibilitySensor
                        visible={width.phone() ? true : false}
                        onChange={(visible) => this.toggleFeaturesSeen(visible)}
                    >	
                        <FeatureWrapper>
                            {this.renderFeatureIndicators()}
                            <Line/>
                        </FeatureWrapper>
                    </VisibilitySensor>

                </Container>
            
            </Features>
        )
    }

    renderFooter = () => {
        return (
            <Footer>
                <CTA>
                    <Container>
                        <Title>Take your next step today</Title>   
                        <Signup
                            onClick={() => this.navigateToSignup()}
                        >
                            Sign up
                        </Signup> 
                    </Container>
                </CTA>
                <Copyright>
                    <Container>{moment().format('YYYY')} © LPMA</Container>
                </Copyright>
            </Footer>
        )
    }
    
    render() {
        const {featuresVisible, sliderValue} = this.state;
        console.log(this)

        return (
            <Wrapper>
                {this.renderHero()}
                {this.renderFeatures()}

                <Events/>
                <Resources/>
                <Testimonials/>
                <Clients/>

                {this.renderFooter()}
            </Wrapper>
        )
    }

}

const Wrapper = styled.div`
    font-family: 'Montserrat';
    color: ${darkGrey};
    background: white;
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    max-width: 1225px;
    width: 100%;
    padding: 0 40px;

    ${media.phone`
        padding: 0 20px;
    `}
`

export const Content = styled.div``
export const Title = styled.div``
export const Subtitle = styled.div``
export const Description = styled.div``
export const SectionHeader = styled.div``

const Hero = styled.div`
    display: flex;
    justify-content: center;
    height: 684px;
    width: 100%;
    background: black;
    background-image: url(${props => props.image});
    ${bgImage}

    ${Container} {
        justify-content: center;
        align-items: flex-start;

        ${Title} {
            font-size: 42px;
            color: #FFFFFF;
            font-weight: bold;
            text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            margin-bottom: 8px; 

            ${media.phone`
                font-size: 27px;
            `}
        }

        ${Description} {
            font-size: 24px;
            color: #FFFFFF;
            text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            max-width: 431px;
            line-height: normal;
            margin-bottom: 32px;
        }
    }

    ${media.tablet`
        height: 606px;
        
        ${Container} {
            align-items: center;
            text-align: center;
        }
    `}

    ${media.phone`
        height: 452px;
    `}
`

const SignupButton = styled.a`
    ${button}
`;

// Features

const Features = styled.div`
    background: white;
    display: flex;
    justify-content: center;

    ${media.tablet`
        margin-bottom: 105px;
    `}

    ${media.phone`
        margin-bottom: 80px;
    `}

    ${Container} {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-top: 104px;

        ${media.tablet`
            margin-top: 85px;
        `}

        ${media.phone`
            margin-top: 50px;
        `}

        ${SectionHeader} {
            display: flex;
            flex-direction: column;
            justify-content: center;
            text-align: center;
            margin-bottom: 240px;

            ${media.tablet`
                margin-bottom: 24px;
            `}

            ${media.phone`
                margin-bottom: 40px;
            `}

            ${Title} {
                font-size: 32px;
                font-weight: bold;

                ${media.tablet`
                    font-family: Montserrat;
                    font-weight: bold;
                    font-size: 24px;
                    margin-bottom: 12px;
                `}

                ${media.phone`
                    font-size: 21px;
                `}
            }

            ${Description} {
                font-family: Montserrat;
                font-size: 21px;
                max-width: 506px;
                line-height: normal;

                ${media.tablet`
                    max-width: 648px;
                `}

                ${media.phone`
                    line-height: 26px;
                    font-size: 18px;
                `}
            }
        }
    }
`;

const FeatureWrapper = styled.div`
    display: flex;
    width: 100%;

    ${media.tablet`
        height: 581px;
        position: relative;
        flex-direction: column;
        padding-top: 26px;
        max-width: 420px;
    `}

    ${media.phone`
        padding-top: 0;
        height: 491px;
        padding-left: 45px;
    `}
`;

const Line = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    width: 100vw;
    height: 1px;
    background: #CAD7DC;
    z-index: 1;

    ${media.tablet`
        left: 50%;
        right: auto;
        top: 0;
        bottom: 0;
        transform: translateX(-50%);
        width: 1px;
        height: 100%;
    `}  

    ${media.phone`
        left: 64px;
    `}
`

// Feature Dots

const FeatureInfo = styled.div`        
    margin-bottom: 48px;
    text-align: center;

    ${Title} {
        font-size: 21px;
        font-weight: 600;
    }  

    ${Subtitle} {
        font-size: 21px;
        white-space: pre-line;

        ${media.phone`
            font-size: 18px;
        `}
    }
`;

const Feature = styled.div`
    display: flex;
    opacity: 0;
    flex-direction: column;
    justify-content: center;
    align-items: center;    
    position: relative;
    flex: 1;
    z-index: 2;
    transform: translateY(-147px);

    &:nth-child(2) {
        flex: 0 1 200px;

        ${media.tablet`
            flex: 1;
            margin-top: 30px;
        `}
    }

    &:nth-child(3) {
        flex: 1 1 30%;

        ${media.tablet`
            margin-top: 60px;
            flex: 1 1 20%;
        `}
    }

    &:nth-child(4) {
        transform: translateY(-162px);

        ${media.tablet`
            transform: none;
        `}
    }

    ${media.tablet`
        justify-content: flex-start;
        transform: none;
        flex: 1;
        position: relative;

        ${FeatureInfo} {
            position: absolute;
            left: 0;
            text-align: left;
            transform: translateY(-12px);
        }

        &:nth-child(2n) {
            ${FeatureInfo} {
                left: auto;
                right: 0;
                text-align: right;
            }
        }
    `}

    ${media.phone`
        flex: 1 !important;
        margin-top: 0 !important;
        justify-content: center;
        align-items: flex-start;

        ${FeatureInfo} {
            left: 64px !important;
            right: auto !important;
            text-align: left !important;
            transform: translateY(6px);
        }
    `}
`;

const FeatureIndicator = styled.div`
    width: 40px;
    height: 40px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.25);
    background-color: #ffffff;
    border: solid 1px #cad7dc;
    border-radius: 50%;
`;

// Footer

const Footer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const CTA = styled.div`
    height: 417px;
    background: ${mako};

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 20px;

    ${Title} {
        font-family: Montserrat;
        font-weight: 600;
        font-size: 32px;
        color: white;
        margin-bottom: 8px;

        ${media.tablet`
            font-size: 18px;
            margin-bottom: 12px;
        `}
    }

    ${media.tablet`
        height: 257px;
    `}
`;

const Signup = styled.div`
    ${button}
    cursor: pointer;
`;

const Copyright = styled.div`
    background: ${capeCod};

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    height: 72px;

    font-family: Montserrat;
    font-weight: 600;
    font-size: 16px;
    color: white;
`;

const mapDispatchToProps = dispatch => ({
    fetchSettings() {
        dispatch(fetchSettings())
    },
    updateSettings(setting) {
        dispatch(updateSettings(setting))
    },
})

const mapStateToProps = (state, props) => ({
    settings: state.settings.settings
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
