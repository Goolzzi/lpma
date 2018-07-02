import React, {Component} from "react";
import styled, {css} from "styled-components";
import {rgba, clearFix} from "polished";
import {find} from "lodash";
import {navigateTo} from "gatsby-link";
import {CSSTransition} from "react-transition-group";
import { VelocityComponent } from 'velocity-react';
import VisibilitySensor from 'react-visibility-sensor'

import {capeCod, mantis, green, darkGrey} from "../../styles/colors";
import {media, width} from "../../styles/utils";

import {bgIcon, bgImage, button, hoverState} from "../../styles/global";
import { data } from "../../data/front";

class HomeClients extends Component {

    renderClients = () => {
        return data.clients.map((client, i) => {
            return (
                <Client
                    src={client.image}
                />
            )
        })
    }

    render() {
        return (
            <Clients>
                <Container>

                    <SectionHeader>
                        <Title>You’ll be in great company</Title>
                    </SectionHeader>

                    <ClientsContent>
                        {this.renderClients()}
                    </ClientsContent>

                </Container>
            </Clients>
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

const Clients = styled.div`
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
            margin-bottom: 24px;

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

const ClientsContent = styled.div`
    display: flex;
    align-items: center;
    flex-flow: row wrap;
    justify-content: center;
`

const Client = styled.img`
    max-height: 45px;
    max-width: 73px;
    width: auto;
    height: 100%;

    &:not(:last-child) {
        margin-right: 30px;
    }
`;

export default HomeClients;