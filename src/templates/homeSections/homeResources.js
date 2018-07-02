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

class HomeResources extends Component {
    

    render() {
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

const Resources = styled.div``

const ResourcesContent = styled.div`
    display: flex;
    
    ${Description} {
        font-family: Montserrat;
        font-size: 21px;
        max-width: 506px;
        line-height: 31px;

        ${media.tablet`
            max-width: 648px;
        `}

        ${media.phone`
            line-height: 26px;
            font-size: 18px;
        `}
    }
`

const ResourcesListing = styled.div`
    
`

export default HomeResources;