import React, {Component} from "react";
import styled, {css} from "styled-components";
import {rgba, clearFix} from "polished";
import {find} from "lodash";
import {navigateTo} from "gatsby-link";
import {CSSTransition} from "react-transition-group";
import { VelocityComponent } from 'velocity-react';
import VisibilitySensor from 'react-visibility-sensor'

import playIcon from "../../assets/images/home/play-icon.svg";

import {capeCod, mantis, green, darkGrey} from "../../styles/colors";
import {media, width} from "../../styles/utils";

import {bgIcon, bgImage, button, hoverState} from "../../styles/global";
import {data} from "../../data/front";

import { section } from '../../pages/index'

class HomeTestimonials extends Component {
    
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
}

// Testimonials

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
            margin-bottom: 38px;

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
    background-image: url(${props => props.image});
    ${bgImage};
    box-sizing: border-box;
    flex: 1;
    position: relative;
    ${hoverState};
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


export default HomeTestimonials;