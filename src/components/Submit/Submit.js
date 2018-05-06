import React, {Component} from 'react'
import styled, { css } from 'styled-components'
import { media } from '../../styles/utils'

import { mantis } from '../../styles/colors'

class Submit extends Component {
    
    render() {
        const { theme } = this.props;

        return (
            <Button 
                className={this.props.className}
                onClick={this.props.handleSubmit}
                theme={theme}
            >
                {this.props.label}
            </Button>
        )
    }
}


export const Button = styled.div`
    appearance: none;
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    height: 40px;
    width: 100%;
    border-radius: 4px;
    cursor: pointer;
    transition: opacity 0.20s ease;

    

    ${media.tablet`
        height: 48px;
    `}

    &, &::placeholder {
        font-size: 17px;
        font-family: 'Maax Bold';
        line-height: 1.24;
        color: white;
        user-select: none;
    }

    &:hover {
        opacity: 0.7;
    }

    &:active {
        opacity: 0.5;
    }

    box-sizing: border-box;

    ${props => {
        if (props.theme == 'mantis') {
            return css`
                background: ${mantis};

                &, &::placeholder {
                    color: white;
                }
            `
        }

        if (props.theme == 'white') {
            return css`
                background: white;

                &, &::placeholder {
                    color: ${ribbon};
                }
            `
        }
    }}

`

export default Submit;