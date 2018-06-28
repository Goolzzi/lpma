import React, {Component} from "react";
import styled, {css} from "styled-components";
import {rgba} from "polished";
import {find} from "lodash";
import {navigateTo} from "gatsby-link";
import {CSSTransition} from "react-transition-group";

import arrowDown from "../assets/images/icon-down-arrow.svg";

import background from "../assets/images/home/background.jpg";

import {capeCod, mantis, green, darkGrey} from "../styles/colors";
import {media} from "../styles/utils";
import {bgIcon, bgImage, button} from "../styles/global";
import {data} from "../data/data";

import Slider from "../components/Slider";
import Switch from "../components/Switch";
import Submit from "../components/Submit";

class Home extends Component {

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

    renderHero = () => {
        return (
            <Hero
                image={background}
            >
                <Container>
                    <Title>Take the next step.</Title>
                    <Description>The community of business leaders supporting each other to take the next step.</Description>
                    <SignupButton>Sign Up</SignupButton>
                </Container>
            </Hero>
        )
    }

    renderFeatureIndicators = () => {
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
                subtitle: 'New markets, new models',
            }
        ]

        return features.map((feature, index) => {
            return (
                <Feature>
                    <FeatureInfo>
                        <Title>{feature.title}</Title>
                        <Subtitle>{feature.subtitle}</Subtitle>    
                    </FeatureInfo>
                    <FeatureIndicator/>
                </Feature>
            )
        })
    }

    renderFeatures = () => {
        return (
            <Features>
                <Container>

                    <SectionHeader>
                        <Title>Learn, share, connect.</Title>
                        <Description>No matter where you are on the journey,  LPMA membership helps you take your next step</Description>
                    </SectionHeader>

                    <FeatureWrapper>
                        {this.renderFeatureIndicators()}
                        <Line/>
                    </FeatureWrapper>

                </Container>
            </Features>
        )
    }

    render() {
        const {featuresVisible, sliderValue} = this.state;

        return (
            <Wrapper>
                {this.renderHero()}
                {this.renderFeatures()}
            </Wrapper>
        )
    }

}

const Wrapper = styled.div`
    font-family: 'Montserrat';
    color: ${darkGrey};
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    max-width: 1126px;
    width: 100%;
    padding: 0 40px;

    ${media.phone`
        padding: 0 20px;
    `}
`

const Content = styled.div``
const Title = styled.div``
const Subtitle = styled.div``
const Description = styled.div``
const SectionHeader = styled.div``

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

    ${Container} {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-top: 104px;

        ${SectionHeader} {
            display: flex;
            flex-direction: column;
            justify-content: center;
            text-align: center;
            margin-bottom: 240px;

            ${Title} {
                font-size: 32px;
                font-weight: bold;
            }

            ${Description} {
                font-family: Montserrat;
                font-size: 21px;
                max-width: 506px;
                line-height: normal;
            }
        }
    }
`;

const Line = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    width: 100vw;
    height: 1px;
    background: #CAD7DC;
    z-index: 1;
`

const FeatureWrapper = styled.div`
    display: flex;
    width: 100%;
`;

// Feature Dots

const Feature = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;    
    position: relative;
    flex: 1;
    z-index: 2;
    transform: translateY(-145px);
`;

const FeatureInfo = styled.div`        
    margin-bottom: 48px;
    text-align: center;

    ${Title} {
        font-size: 21px;
        font-weight: 600;
    }  

    ${Subtitle} {
        font-size: 21px;
    }
`;

const FeatureIndicator = styled.div`
    width: 40px;
    height: 40px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.25);
    background-color: #ffffff;
    border: solid 1px #cad7dc;
    border-radius: 50%;
`;

export default Home;
