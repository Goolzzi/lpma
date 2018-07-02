import React, {Component} from "react";
import styled, {css} from "styled-components";
import {rgba, clearFix} from "polished";
import {find} from "lodash";
import {navigateTo} from "gatsby-link";
import {CSSTransition} from "react-transition-group";
import { VelocityComponent } from 'velocity-react';
import VisibilitySensor from 'react-visibility-sensor'

import playIcon from "../../assets/images/home/play-icon.svg";

import eventLPMAAustralia from "../../assets/images/home/event-LPMA-Australia.png";
import eventLPMALeadershipSummit from "../../assets/images/home/event-LPMA-Leadership-Summit.png";
import eventLPMANZ from "../../assets/images/home/event-LPMA-NZ.png";
import eventLPMAPremium from "../../assets/images/home/event-LPMA-Premium-Connection.png";
import eventLPMARoundTable from "../../assets/images/home/event-LPMA-Round-Table.png";
import eventPMC18 from "../../assets/images/home/event-PMC-18.png";

import {capeCod, mantis, green, darkGrey} from "../../styles/colors";
import {media, width} from "../../styles/utils";

import {bgIcon, bgImage, button, hoverState} from "../../styles/global";
import {data} from "../../data/front";

import { section } from '../../pages/index'

class HomeEvents extends Component {
    
    renderEventListing = () => {

        const events = [
            {
                title: 'PMC 18',
                image: eventPMC18,
                link: 'https://pmconference.com.au'
            },
            {
                title: 'LPMA NZ 2018',
                image: eventLPMANZ,
                link: 'https://nz.lpma.com'
            },
            {
                title: 'LPMA Australia',
                image: eventLPMAAustralia,
                link: ''
            },
            {
                title: 'LPMA Premium Connection',
                image: eventLPMAPremium,
                link: ''
            },
            {
                title: 'LPMA Round Table',
                image: eventLPMARoundTable,
                link: ''
            },
            {
                title: 'LPMA Leadership Summit',
                image: eventLPMALeadershipSummit,
                link: ''
            } 
        ]

        return events.map((event, i) => {

            if(event.link){
                return (
                    <EventImageLink 
                        key={i}
                        title={event.title}
                        href={event.link}
                        target="_blank"
                    >
                        <EventImage 
                            src={event.image}
                        />
                    </EventImageLink>
                )
            } else {
                return (
                    <EventImageNoLink
                        key={i}
                    >
                        <EventImage 
                            src={event.image}
                        />
                    </EventImageNoLink>
                )
            }


            // if(event.link){
            //     return (
            //         <EventLink 
            //             key={i}
            //             title={event.title}
            //             image={event.image} 
            //             href={event.link}
            //             target="_blank"
            //         />
            //     )
            // } else {
            //     return (
            //         <EventNoLink
            //             key={i}
            //             image={event.image} 
            //         />
            //     )
            // }
        })
    }

   

    render() {
        return (
            <Events>
                <Container>

                    <SectionHeader>
                        <Title>An event for every step of the journey</Title>
                    </SectionHeader>

                    <EventsContent>
                        <Content>
                            <Description>The LPMA conference series has the largest and most comprehensive small and large format conference calendar in the world. Our conference series reflects all that we believe in property management.</Description>
                            <ViewMore
                                href="https://lpma.com/events"
                                target="_blank"
                                pos="1"
                            >
                                View More
                            </ViewMore>
                        </Content>

                        <EventsListing> 
                            {this.renderEventListing()}
                        </EventsListing>

                        <ViewMore
                            href="https://lpma.com/events"
                            target="_blank"
                            pos="2"
                        >
                            View More
                        </ViewMore>

                    </EventsContent>

                </Container>
            
            </Events>
        )
    }
}

// Events

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

const ViewMore = styled.a`
    display: block;
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

    ${props => {
        if (props.pos == 1) return css`
            ${media.tablet`
                display:none;
            `}
        `
        if (props.pos == 2) return css`
            display:none;
            ${media.tablet`
                display:block;
            `}
        `
    }}
`

// Events

const Events = styled.div`
    background: white;
    display: flex;
    justify-content: center;
    margin-bottom: 112px;

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
                margin-bottom: 18px;
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

    ${media.tablet`
        flex-direction: column;
    `}
    
    ${Description} {
        font-family: Montserrat;
        font-size: 21px;
        max-width: 464px;
        line-height: 31px;
        margin-top: 53px;
        margin-bottom: 19px;
        margin-right: 118px;

        ${media.tablet`
            max-width: 648px;
            margin-top: 0;
        `}
        ${media.phone`
            width: 100%;
            line-height: 26px;
            font-size: 18px;
        `}
    }
`

const EventsListing = styled.div`
    display: flex;
    width: 561px;
    flex-wrap: wrap;
    justify-content: space-between;
    ${media.tablet`
        width: 100%;
    `}
`;

const EventImage = styled.img`
    width: 100%;
    height: auto;
    margin-bottom: 0;
`
const EventBlockMixin = css`
    width: 48%; 
    margin-bottom: 20px;
    ${media.tablet`
        width: 48%; 
    `}
    ${media.phone`
        width: 100%; 
    `}
`
const EventImageLink = styled.a`
    ${EventBlockMixin}
    display:block;
    ${hoverState}
`
const EventImageNoLink = styled.div`
    ${EventBlockMixin}
`
/*
const EventLink = styled.a`
    display:block;
    background-image: url(${props => props.image});
    ${bgImage}
    width: 270px;
    height: 88px;
    margin-bottom: 21px;
    ${hoverState}
    cursor: pointer;
    ${media.tablet`
        width: 49%; 
        height: 110px;
    `}
    ${media.phone`
        width: 100%; 
    `}
`
const EventNoLink= styled.div`
    background-image: url(${props => props.image});
    ${bgImage}
    width: 270px;
    height: 88px;
    margin-bottom: 21px;
    ${media.tablet`
        width: 49%;
        height: 110px;
    `}
    ${media.phone`
        width: 100%;
    `}
`
*/



export default HomeEvents;