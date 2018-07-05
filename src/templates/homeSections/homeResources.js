import React, {Component} from "react";
import styled, {css} from "styled-components";
import {rgba, clearFix} from "polished";
import {find} from "lodash";
import {navigateTo} from "gatsby-link";
import {CSSTransition} from "react-transition-group";
import { VelocityComponent } from 'velocity-react';
import VisibilitySensor from 'react-visibility-sensor'

import playIcon from "../../assets/images/home/play-icon.svg";
import resourcesImage from "../../assets/images/home/resources-screens-x2.png";
import resourcesImageTablet from "../../assets/images/home/resources-screens-tablet.png";

import {capeCod, mantis, green, darkGrey} from "../../styles/colors";
import {media, width} from "../../styles/utils";

import {bgIcon, bgImage, button, hoverState, padding} from "../../styles/global";
import {data} from "../../data/front";

import { section } from '../../pages/index'

class HomeResources extends Component {
    

    render() {
        return (
            <Resources
                image={resourcesImage}
            >

                <ResourcesContent>

                    <Title>Resources to plan the next step</Title>

                    <ResourcesImageTablet
                        image={resourcesImageTablet}         
                    />

                    <Description>LPMA offers members a comprehensive suite of business planning frameworks and practical resources to help you take control and drive change in your business.</Description>
                    
                </ResourcesContent>

            </Resources>
        )
    }
}



export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;

    ${media.phone`
        padding: 0 20px;
        max-width: 100%;
    `}
`

export const Title = styled.div``
export const Description = styled.div``

const Resources = styled.div`
    background: white;
    display: flex;
    margin-bottom: 112px;

    background-color: #F7F7F7;
    background-image: url(${props => props.image});
    ${bgImage}
    height: 642px;

    ${media.tablet`
        background-image: none;
        margin-bottom: 105px;
        height: auto;
    `}
    ${media.phone`
        margin-bottom: 39px;
    `}
`

const ResourcesImageTablet = styled.div`
    display:none;
    background-image: url(${props => props.image});
    ${bgImage}
    height: 337px;
    width: 100%;
    ${media.tablet`
        display:block;
    `}
    ${media.phone`
        height: 192px;
    `}
`

const ResourcesContent = styled.div`

    display: flex;   
    padding-left: 50%;
    flex-direction: column;

    ${media.tablet`
        padding: 0;
        width: 100%;
    `}

    ${Title} {
        font-family: Montserrat;
        font-size: 32px;
        font-weight: bold;
        max-width: 550px;
        margin-top: 200px;
        
        ${media.tablet`
            font-size: 24px;
            text-align: center;
            max-width: 100%;
            margin-top: 41px;
            margin-bottom: 29px;
        `}
        ${media.phone`
            margin-top: 52px;
            margin-bottom: 19px;
            font-size: 21px;
            padding: 0 40px;
        `}
    }

    ${Description} {
        font-family: Montserrat;
        font-size: 21px;
        line-height: 31px;
        max-width: 550px;
        margin-top: 34px;

        ${media.tablet`
            margin-top: 24px;
            margin-bottom: 24px;
            margin-left: 0;
            max-width: 100%;
            text-align: center;
            padding: 0 60px;
        `}
        ${media.phone`
            margin-top: 40px;
            margin-bottom: 49px;
            font-size: 18px;
            text-align: left;
            padding: 0 15px;
        `}
    }
    
        
`

export default HomeResources;