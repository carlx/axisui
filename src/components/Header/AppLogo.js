import React from 'react';
import PropTypes from 'prop-types';
import { Image, Item } from 'semantic-ui-react';
import Logo from './Logo';
import { MOBILE, DESKTOP } from '../StyleUtils/style-utils';

const AppLogo = (props) => (
  <Logo media={props.media}>
    <Item>
      <Image
        avatar verticalAlign="middle" spaced="right" height="25" width="25" size="mini"
        src="https://cdn.worldvectorlogo.com/logos/react.svg"
      />
      <strong>AXIS UI</strong>
    </Item>
  </Logo>
);

AppLogo.PropTypes = {
  media: PropTypes.oneOf([MOBILE.name, DESKTOP.name]).isRequired,
};

export default AppLogo;
