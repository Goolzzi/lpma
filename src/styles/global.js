import { css, injectGlobal } from 'styled-components';
import { mako } from './colors';
import { media } from './utils';

const maxWidth = 1680;

injectGlobal`
    html,
    body {
        margin: 0;
        padding: 0;
        height: 100%;
        width: 100%;
        background: white;
        color: black;
        overflow-x: hidden;
    }
    
    a {
        text-decoration: none;
    }

    a, p, div {
        color: ${mako};
    }

    * {
        -webkit-overflow-scrolling: touch;
    }
`;

export const container = css`
    display: flex;
	height: 100%;
	width: 100%;
    max-width: ${maxWidth}px;
`

export const hoverState = css`
    transition: 0.15s opacity ease;

    &:hover {
        opacity: 0.7;
    }
`

export const padding = css`
    padding-left: 30px; 
    padding-right: 30px;
    box-sizing: border-box;

    /* ${media.tablet`
        padding-left: 32px; 
        padding-right: 32px;
    `} */
`

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