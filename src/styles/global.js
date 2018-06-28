import { css, injectGlobal } from 'styled-components';
import { mako } from './colors';
import { media } from './utils';

export const bgImage = css`
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
`

export const bgIcon = css`
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;
`

export const hoverState = css`
    transition: 0.15s opacity ease;

    &:hover {
        opacity: 0.7;
    }
`

export const button = css`
    width: 128px;
    height: 52px;

    background: linear-gradient(180deg, #70BF54 0%, #569A3E 100%);
    box-sizing: border-box;
    border-radius: 50px;

    font-family: Montserrat;
    font-weight: 600;
    font-size: 16px;

    color: white;
    text-shadow: 0px 0px 1px #3B6F28;

    display: flex;
    justify-content: center;
    align-items: center; 

    ${hoverState}

    &:hover {
        color: white;
    }
`