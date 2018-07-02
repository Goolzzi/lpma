import React, {Component} from "react";
import styled, {css} from "styled-components";
import {rgba} from "polished";
import {find} from "lodash";
import {navigateTo} from "gatsby-link";
import {CSSTransition} from "react-transition-group";
import { VelocityComponent } from 'velocity-react';
import VisibilitySensor from 'react-visibility-sensor'

import arrowDown from "../assets/images/icon-down-arrow.svg";
import playIcon from "../assets/images/home/play-icon.svg";
import background from "../assets/images/home/background.jpg";

import {capeCod, mantis, green, darkGrey} from "../styles/colors";
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

    toggleFeaturesSeen = (visible) => {
        if (visible) {
            this.setState({
                featuresSeen: true
            })
        }
    }
    
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

    renderEvents = () => {
        return (
            <Events>
                <Container>

                    <SectionHeader>
                        <Title>An event for every step of the journey</Title>
                    </SectionHeader>

                    <EventsContent>
                        <Content>
                            <Description>The LPMA conference series has the largest and most comprehensive small and large format conference calendar in the world. Our conference series reflects all that we believe in property management.</Description>
                            <ViewMore>View More</ViewMore>    
                        </Content>

                        <EventsListing> 
                        </EventsListing>
                    </EventsContent>

                </Container>
            
            </Events>
        )
    }
    
    renderResources = () => {
        return (
            <Resources>
                <Container>

                    <SectionHeader>
                        <Title>Resources to plan the next step</Title>
                    </SectionHeader>

                    <ResourcesContent>
                        <Content>
                            <Description>LPMA offers members a comprehensive suite of business planning frameworks and practical resources to help you take control and drive change in your business.</Description>
                        </Content>

                        <EventsListing>

                        </EventsListing>
                    </ResourcesContent>

                </Container>
            
            </Resources>
        )
    }

    renderTestimonials = () => {
        
        return (
            <Testimonials>
                <Container>

                    <SectionHeader>
                        <Title>Share your Journey</Title>
                    </SectionHeader>

                    <TestimonialsContent>

                            <TestimonalGroup>
                                {this.renderTestimonial(data.testimonals[0])}
                            </TestimonalGroup>

                            <TestimonalGroup>
                                <TestimonalGroup>
                                    {this.renderTestimonial(data.testimonals[1])}
                                    {this.renderTestimonial(data.testimonals[2])}    
                                </TestimonalGroup>
                                {this.renderTestimonial(data.testimonals[3])}
                            </TestimonalGroup>

                            <TestimonalGroup>
                                {this.renderTestimonial(data.testimonals[4])}
                            </TestimonalGroup>

                    </TestimonialsContent>

                </Container>
            
            </Testimonials>
        )
    }
    
    renderTestimonial = (testimonial) => {
        return (
            <Testimonial
                // onClick={}
                image={testimonial.image}
            >
                <Fade/>

                <Info>
                    <PlayIcon/>
                    <Caption>{testimonial.text}</Caption>
                </Info>
            </Testimonial>
        )
    }
    
    render() {
        const {featuresVisible, sliderValue} = this.state;

        return (
            <Wrapper>
                {this.renderHero()}
                {this.renderFeatures()}
                {this.renderEvents()}
                {this.renderResources()} 
                {this.renderTestimonials()}
            </Wrapper>
        )
    }

}

const Wrapper = styled.div`
    font-family: 'Montserrat';
    color: ${darkGrey};
    background: white;
`

const Container = styled.div`
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

const Content = styled.div``
const Title = styled.div``
const Subtitle = styled.div``
const Description = styled.div``
const SectionHeader = styled.div``

const ViewMore = styled.div`
    font-family: Montserrat;
    font-size: 14px;
    font-weight: 600;
    text-align: center;
    color: #424b4f;
    width: 126px;
    height: 42px;
    border-radius: 40px;
    border: solid 1px #cad7dc;
    padding-top: 10px;


	align-self: center;

	${hoverState}
    cursor: pointer;

`

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


// Events

const Events = styled.div`
    background: white;
    display: flex;
    justify-content: center;
    margin-bottom: 220px;

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

        ${SectionHeader} {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            margin-bottom: 48px;

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
                `}

                ${media.phone`
                    font-size: 21px;
                `}
            }
        }
    }
`;

const EventsContent = styled.div`
    display: flex;
    
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
`;

const EventsListing = styled.div`
    
`;

// Testimonials

const Testimonials = styled.div`
    background: white;
    display: flex;
    justify-content: center;
    margin-bottom: 220px;

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

        ${SectionHeader} {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            margin-bottom: 48px;

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
                `}

                ${media.phone`
                    font-size: 21px;
                `}
            }
        }
    }
`

const TestimonalGroup = styled.div`
    display: flex;
    box-sizing: border-box;
`

const Testimonial = styled.div`
    display: flex;
    background-image: url(${props => props.image});
    ${bgImage}
    box-sizing: border-box;
    flex: 1;
    position: relative;
    ${hoverState}
    cursor: pointer;
`

const TestimonialsContent = styled.div`
    display: flex;
    height: 450px;
    width: 100%;

    >:nth-child(1),
    >:nth-child(3) {
        flex: 0 1 25%;
    }

    >:nth-child(2) {
        flex: 0 1 50%;
        flex-direction: column;
        flex: 1;
        margin: 0 20px;

        ${TestimonalGroup} {
            flex: 1;
            margin-bottom: 20px;

            ${Testimonial} {
                flex: 1;

                &:nth-child(1) {
                    margin-right: 10px;
                }

                &:nth-child(2) {
                    margin-left: 10px;
                }
            }
        }

        > ${Testimonial} {
            flex: 1;
        }
    }
`

const Info = styled.div`
    display: flex;
    align-items: center;
    padding: 20px;

    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
`

const Caption = styled.div`
    font-family: Montserrat;
    font-weight: 500;
    line-height: 20px;
    font-size: 15px;
    letter-spacing: -0.055px;
    color: white;
    margin-left: 8px;
`

const PlayIcon = styled.div`
    background-image: url(${playIcon});
    width: 30px;
    height: 30px;
    ${bgIcon}
`

const Fade = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 72px;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 100%);
`;

// Resources

const Resources = styled.div``

const ResourcesContent = styled.div`
    display: flex;
    
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
`;

const ResourcesListing = styled.div`
    
`;

export default Home;
