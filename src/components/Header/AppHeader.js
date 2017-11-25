import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import AppLogo from './AppLogo';
import Nav from './Nav';
import NavItem from './NavItem';
import DropdownImageTriggerExample from './DropdownImageTriggerExample';
import TogglerButton from './TogglerButton';
import { DESKTOP, MOBILE } from '../StyleUtils/style-utils';

const AppHeader = (props) => (
  <Header>
    <AppLogo media={props.media} />
    <TogglerButton media={props.media} toggle={props.toggle}>
    </TogglerButton>
    <Nav media={props.media}>
      <NavItem>
        <DropdownImageTriggerExample media={props.media}></DropdownImageTriggerExample>
      </NavItem>
    </Nav>
  </Header>
);

AppHeader.PropTypes = {
  toggle: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  media: PropTypes.oneOf([MOBILE.name, DESKTOP.name]).isRequired,
};

export default AppHeader;
