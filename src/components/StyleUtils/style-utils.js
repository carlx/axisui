import { css } from 'styled-components';
import { SIDEBAR_WIDTH } from './constants';

export const media = {
  mobile: (...args) => css`
    @media (max-width: 767px) {
      ${css(...args)}
    }
  `,
  desktop: (...args) => css`
    @media (max-width: 991px) {
      ${css(...args)}
    }
  `,
  aboveTablet: (...args) => css`
    @media (min-width: 768px) {
      ${css(...args)}
    }
  `,
};

export const MOBILE = {
  name: 'mobile',
  maxWidth: 767,
};

export const DESKTOP = {
  name: 'desktop',
  minWidth: 767,
};

export const collapsed = (isOpen) => (isOpen)
  ? 'margin-left: 0px !important;'
  : `margin-left: -${SIDEBAR_WIDTH} !important;`;

export const mainContent = (isOpen) => (isOpen)
  ? `margin-left: ${SIDEBAR_WIDTH} !important;`
  : 'margin-left: 0px !important;';

export const fadeAnimation = (fade) => (fade)
  ? 'animation-name: fadeInLeft;'
  : 'animation-name: fadeOutLeft;';

export const fadeAnimationMainContent = (fade) => (fade)
  ? 'animation-name: fadeInLeftMainContent;'
  : 'animation-name: fadeOutLeftMainContent;';

export const logoOrder = (mediaType) => (mediaType === MOBILE.name)
  ? 'order: 1 !important;'
  : 'order: 0 !important;';

export const logoWidth = (mediaType) => (mediaType === MOBILE.name)
  ? `flex: 1 1 ${SIDEBAR_WIDTH} !important;`
  : `flex: 0 1 ${SIDEBAR_WIDTH} !important;`;

export const navWidth = (mediaType) => (mediaType === MOBILE.name)
  ? 'flex: 0 0 auto; !important;'
  : 'flex: 1 0 auto; !important;';

export const togglerOrder = (mediaType) => (mediaType === MOBILE.name)
  ? 'order: 0 !important;'
  : 'order: 1 !important;';
