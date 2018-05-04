import { css } from 'styled-components';

export const breakpoints = {
    desktopLarge: 1920,
    desktop: 1600,
    desktopSmall: 1440,
    tablet: 1024,
    phone: 820
}

const setMedia = size => (...args) => css`
    @media (max-width: ${size}px) {
        ${css(...args)}
    }
`;

const getMedia = (breakpoint) => () => {
    if (typeof navigator !== "undefined" && window && window.innerWidth <= breakpoints[breakpoint]) {
        return true
    }

    return false;
}

export const media = {
    desktopLarge: setMedia(breakpoints.desktopLarge),
    desktop: setMedia(breakpoints.desktop),
    desktopSmall: setMedia(breakpoints.desktopSmall),
    tabletLandscape: setMedia(breakpoints.tabletLandscape),
    tablet: setMedia(breakpoints.tablet),
    phone: setMedia(breakpoints.phone)
};

export const width = {
    desktopLarge: getMedia('desktopLarge'),
    desktop: getMedia('desktop'),
    desktopSmall: getMedia('desktopSmall'),
    tabletLandscape: getMedia('tabletLandscape'),
    tablet: getMedia('tablet'),
    phone: getMedia('phone')
}
