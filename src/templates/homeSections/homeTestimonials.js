import React, {Component} from "react";
import styled, {css} from "styled-components";
import {rgba, clearFix} from "polished";
import {find} from "lodash";
import {navigateTo} from "gatsby-link";
import {CSSTransition} from "react-transition-group";
import { VelocityComponent } from 'velocity-react';
import VisibilitySensor from 'react-visibility-sensor'
import Modal from 'react-modal';

import playIcon from "../../assets/images/home/play-icon.svg";

import {capeCod, mantis, green, darkGrey} from "../../styles/colors";
import {media, width} from "../../styles/utils";

import {bgIcon, bgImage, button, hoverState} from "../../styles/global";
import {data} from "../../data/front";

import { section } from '../../pages/index'

class HomeTestimonials extends Component {

    state = {
        modalVisible: false,
        videoUrl: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4' 
    }
    
    renderTestimonial = (testimonial) => {
        return (
            <Testimonial
                onClick={() => this.toggleVideoModel(testimonial.video)}
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

    handleCloseModal = () => {
        this.setState({
            modalVisible: false
        })
    }

    toggleVideoModel = (video) => {
        this.setState({
            modalVisible: true,
            videoUrl: video
        })
    }

    render() {
        const { videoUrl } = this.state;

        const customStyles = {
            content: {
                top: '50%',
                left: '50%',
                right: 'auto',
                bottom: 'auto',
                marginRight: '-50%',
                transform: 'translate(-50%, -50%)',
                padding: 20,
                border: 0,
                backgroundColor: 'transparent',
                transition: 'opacity 0.5s ease'
            },
            overlay: {
                backgroundColor: `${rgba('black', 0.2)}`,
                zIndex: 10,
                transition: 'opacity 0.5s ease'
            }
        };

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

                    <MobileTestimonials>
                        {this.renderTestimonial(data.testimonals[0])}
                        {this.renderTestimonial(data.testimonals[1])}
                        {this.renderTestimonial(data.testimonals[2])}
                    </MobileTestimonials>

                </Container>

                {/* Video Modal */}

                <Modal
                    isOpen={this.state.modalVisible}
                    style={customStyles}
                    onRequestClose={this.handleCloseModal}
                >
                    <VideoPlayer controls>
                        <source 
                            src={videoUrl} 
                            type="video/mp4"
                        />
                    </VideoPlayer>
                </Modal>
            
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
    margin-bottom: 100px;

    ${media.phone`
        margin-bottom: 93px;
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

    ${media.tablet`
        height: 275px;
    `}

    >:nth-child(1),
    >:nth-child(3) {
        flex: 0 1 25%;
    }

    >:nth-child(2) {
        flex: 0 1 50%;
        flex-direction: column;
        flex: 1;
        margin: 0 20px;

        ${media.tablet`
            margin: 0 12px;
        `}

        ${TestimonalGroup} {
            flex: 1;
            margin-bottom: 20px;

            ${media.tablet`
                margin-bottom: 12px;
            `}

            ${Testimonial} {
                flex: 1;

                &:nth-child(1) {
                    margin-right: 10px;

                    ${media.tablet`
                        margin-right: 6px;
                    `}
                }

                &:nth-child(2) {
                    margin-left: 10px;

                    ${media.tablet`
                        margin-left: 6px;
                    `}
                }
            }
        }

        > ${Testimonial} {
            flex: 1;
        }
    }

    ${media.phone`
        display: none;
    `}
`

const MobileTestimonials = styled.div`
    display: none;
    width: 100%;

    ${media.phone`
        display: flex;
        flex-direction: column;

        ${Testimonial} {
            height: 212px;

            &:not(:last-child) {
                margin-bottom: 16px;
            }
        }
    `}
`;

const Info = styled.div`
    display: flex;
    align-items: center;
    padding: 20px;

    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;

    ${media.tablet`
        padding: 12px;
    `}
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

    ${media.tablet`
        width: 20px;
        height: 20px;
        flex: 0 1 30px;
    `}
`

const Fade = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 72px;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 100%);
`;

// Video modal

const VideoPlayer = styled.video`
    max-width: 714px;
    max-height: 427px;
    width: 100%;
    height: 100%;
    margin-bottom: -10px;
    border-radius: 5px;
`;

export default HomeTestimonials;