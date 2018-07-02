import React, {Component} from "react";
import styled, {css} from "styled-components";
import {rgba, clearFix} from "polished";
import {find} from "lodash";
import {navigateTo} from "gatsby-link";
import {CSSTransition} from "react-transition-group";
import { VelocityComponent } from 'velocity-react';
import VisibilitySensor from 'react-visibility-sensor'

import playIcon from "../../assets/images/home/play-icon.svg";
import resourcesImage from "../../assets/images/home/resources-book.jpg";

import {capeCod, mantis, green, darkGrey} from "../../styles/colors";
import {media, width} from "../../styles/utils";

import {bgIcon, bgImage, button, hoverState} from "../../styles/global";
import {data} from "../../data/front";

import { section } from '../../pages/index'

class HomeResources extends Component {
    

    render() {
        return (
            <Resources>
                <Container>

                    <SectionHeader>
                        <Title>Resources to plan the next step</Title>
                    </SectionHeader>

                    <ResourcesContent>

                        <ResourcesImage
                            image={resourcesImage}
                        />
                        <Description>LPMA offers members a comprehensive suite of business planning frameworks and practical resources to help you take control and drive change in your business.</Description>
                     

                    </ResourcesContent>

                </Container>
            </Resources>
        )
    }
}

// Resources

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




// Resources

const Resources = styled.div`
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

const ResourcesContent = styled.div`

    display: flex;
        
    ${Description} {
        font-family: Montserrat;
        font-size: 21px;
        max-width: 604px;
        line-height: 31px;
        margin-top: 90px;
        margin-left: 75px;

        ${media.tablet`
            max-width: 648px;
        `}

        ${media.phone`
            line-height: 26px;
            font-size: 18px;
        `}
    }

`

const ResourcesImage = styled.div`
    background-image: url(${props => props.image});
    ${bgImage}
    width: 465px;
    height: 303px;
`


export default HomeResources;